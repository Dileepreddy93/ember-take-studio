#!/usr/bin/env python3
"""Voice an Ember Take project: free local TTS + lip sync (Rhubarb).

  python pipeline/voice.py in.ember.json out.ember.json [--layout flow|keep]

Engines (project.voiceEngine):
  kokoro      fast, clean delivery; emotion steers pace.
  chatterbox  expressive: each character's Kokoro voice is cloned by Chatterbox,
              which acts each line with an emotion-driven intensity.

layout=flow  lays lines end to end with each line's `pause` and fits the duration.
layout=keep  keeps authored start times (pushes a line later only if one overruns).
Prints `PROGRESS done/total message` lines for the studio server.
"""
import argparse, base64, hashlib, io, json, os, pathlib, subprocess, sys
import numpy as np
import soundfile as sf

ROOT = pathlib.Path(__file__).resolve().parent.parent
RHUBARB = ROOT.parent / 'tools/Rhubarb-Lip-Sync-1.14.0-Linux/rhubarb'
CB_PYTHON = ROOT.parent / '.venv-cb/bin/python'
CACHE = pathlib.Path(os.environ.get('EMBER_VOICE_CACHE', ROOT / '.voice-cache'))  # the cloud engine points this at /tmp
RATE = 24000
KOKORO_SPEED = {'neutral': 1.0, 'happy': 1.04, 'sad': .9, 'angry': 1.08, 'surprised': 1.1, 'worried': 1.08, 'curious': .97, 'idea': 1.04}
# Chatterbox (exaggeration, cfg_weight): higher exaggeration is more dramatic, lower cfg gives freer pacing.
CB_STYLE = {'neutral': (.5, .5), 'happy': (.8, .35), 'sad': (.6, .45), 'angry': (.95, .3), 'surprised': (.9, .3), 'worried': (.7, .4), 'curious': (.6, .45), 'idea': (.8, .35)}
# Voice acting (project.voiceModulation scales it, 0 = off): each feeling shapes the voice, not only the pace.
# (pitch, glide, wobble, energy): semitones for the whole line; semitones added from the line's start to its end
# (surprise rises, sadness falls); a nervous tremble in semitones; loudness against a neutral line.
# Same table as browser-voice.js ACTING.
ACTING = {'neutral': (0, 0, 0, 1), 'happy': (1.5, .8, 0, 1), 'sad': (-1.6, -1.2, 0, .74), 'angry': (-.6, -.8, 0, 1),
          'surprised': (2.6, 1.6, 0, 1), 'worried': (.9, .4, .35, .86), 'curious': (1, 1.4, 0, .92), 'idea': (1.8, .9, 0, 1)}
REFERENCE_TEXT = ('Hello there. This is my natural speaking voice, calm and clear. '
                  'I can sound curious, happy or a little worried, depending on the story we tell today.')

def progress(done, total, msg):
    print(f'PROGRESS {done}/{total} {msg}', flush=True)

_pipelines = {}
def kokoro(text, voice, speed):
    from kokoro import KPipeline
    lang = voice[0]
    if lang not in _pipelines:
        _pipelines[lang] = KPipeline(lang_code=lang, repo_id='hexgrad/Kokoro-82M')
    audio, words, mouth, offset = [], [], [], 0.0
    for result in _pipelines[lang](text, voice=voice, speed=speed):
        a = result.audio.numpy() if hasattr(result.audio, 'numpy') else np.asarray(result.audio)
        for tok in result.tokens or []:
            if tok.start_ts is not None and tok.end_ts is not None and tok.text.strip(' .,!?…'):
                words.append([offset + tok.start_ts, offset + tok.end_ts, tok.text])
        mouth += phoneme_mouths(result, offset)
        audio.append(a)
        offset += len(a) / RATE
    return np.concatenate(audio).astype(np.float32), words, mouth

# Mouth shapes from Kokoro's own phoneme timings, named like Rhubarb's (A closed … H tongue, X rest): exact and
# instant, so Rhubarb is only needed for engines without timings (Chatterbox). Misaki phonemes: A=eɪ I=aɪ W=aʊ Y=ɔɪ O=oʊ.
MOUTH = {**dict.fromkeys('pbm', 'A'), **dict.fromkeys('fv', 'G'), 'l': 'H', **dict.fromkeys('uʊwOQ', 'F'),
         **dict.fromkeys('ɔɜɝɚɹrY', 'E'), **dict.fromkeys('ɑaIW', 'D'), **dict.fromkeys('ɛʌəɐæeAᵊ', 'C')}
REST = set(' .,!?…;:—-"\'()')
def phoneme_mouths(result, offset):
    """[start, end, shape] per phoneme. pred_dur counts 1/40 s per phoneme after BOS (Kokoro's own timestamp rule)."""
    if getattr(result, 'pred_dur', None) is None or not result.phonemes:
        return []
    d, ph = result.pred_dur.tolist(), result.phonemes
    t, out = offset + 2 * max(0, d[0] - 3) / 80, []
    for i, (p, n) in enumerate(zip(ph, d[1:])):
        dur = n / 40
        if p in 'ˈˌ':  # stress marks come before their vowel: take the next sound's shape
            nxt = next((c for c in ph[i + 1:] if c not in 'ˈˌː'), ' ')
            shape = 'X' if nxt in REST else MOUTH.get(nxt, 'B')
        elif p == 'ː':  # length mark: the sound before it continues
            shape = out[-1][2] if out else 'B'
        elif p == ' ':  # word gap: speech flows on, unless it is a real pause
            shape = 'X' if dur > .2 or not out else out[-1][2]
        else:
            shape = 'X' if p in REST else MOUTH.get(p, 'B')
        out.append([t, t + dur, shape])
        t += dur
    return out

def acting(emotion, text, strength):
    """The line's pitch contour (semitones over u = 0…1 of the take and t seconds) and its energy."""
    pitch, glide, wobble, energy = ACTING.get(emotion, ACTING['neutral'])
    end = text.rstrip(' "\'')
    lift = 1.4 if end.endswith('?') else 0  # questions rise on the last words
    bang = .5 if end.endswith('!') else 0
    s = strength
    def contour(u, t):
        rise = np.clip((u - .7) / .3, 0, 1)
        return s * (pitch + bang + glide * (u - .5) + lift * rise * rise * (3 - 2 * rise) + wobble * np.sin(2 * np.pi * 5.5 * t))
    return contour, 1 + (energy - 1) * s

def varispeed(audio, contour):
    """Resample by a time-varying ratio 2^(semitones/12): pitch follows the contour (tempo too, which the caller's
    synthesis speed compensates). Returns the audio and a function mapping input seconds to output seconds."""
    n = len(audio)
    if n < 2:
        return audio.copy(), lambda sec: sec
    tau = np.arange(n) / RATE
    r = 2 ** (contour(tau / max(tau[-1], 1e-6), tau) / 12)
    out_pos = np.concatenate([[0], np.cumsum(1 / r[:-1])])  # where each input sample lands in the output
    src = np.interp(np.arange(int(out_pos[-1])), out_pos, np.arange(n))
    i = np.floor(src).astype(int)
    f = src - i
    x = lambda k: audio[np.clip(i + k, 0, n - 1)]
    a, b, c, d = x(-1), x(0), x(1), x(2)  # Catmull-Rom: smooth, no zipper noise
    y = b + .5 * f * (c - a + f * (2 * a - 5 * b + 4 * c - d + f * (3 * (b - c) + d - a)))
    return y.astype(np.float32), lambda sec: float(np.interp(sec * RATE, np.arange(n), out_pos)) / RATE

def act(text, voice, speed, emotion, strength):
    """Kokoro take with voice acting: synthesised slower or faster by the contour's mean ratio, then varispeed,
    so the line keeps the tempo `speed` sets while its pitch moves. Word and mouth times move with the audio."""
    contour, energy = acting(emotion, text, strength)
    if not strength:
        return (*kokoro(text, voice, speed), energy)
    grid = np.linspace(0, 1, 64)
    mean = float(np.mean(2 ** (contour(grid, grid * 0) / 12)))
    audio, words, mouth = kokoro(text, voice, speed / mean)
    audio, at = varispeed(audio, contour)
    move = lambda spans: [[at(s), at(e), w] for s, e, w in spans]
    return audio, move(words), move(mouth), energy

def mouth_cues(spans, length):
    """Viseme cues [[time, shape]] from phoneme spans: merged runs, rest only for real pauses."""
    cues = [[0.0, 'X']] if not spans or spans[0][0] > .03 else []
    for s, e, m in spans:
        if m == 'X' and e - s < .05:
            continue
        if not cues or cues[-1][1] != m:
            cues.append([round(min(length, max(0, s)), 3), m])
    end = round(min(length, max((e for _, e, _ in spans), default=0)), 3)
    if cues[-1][1] != 'X':
        cues.append([end, 'X'])
    # Drop flickers under 35 ms (lip closures stay: they read as consonants), then re-merge equal neighbours.
    keep = [c for i, c in enumerate(cues) if i in (0, len(cues) - 1) or c[1] == 'A' or cues[i + 1][0] - c[0] >= .035]
    return [c for i, c in enumerate(keep) if i == 0 or c[1] != keep[i - 1][1]]

def trim(audio, words, pad=0.06, mouth=()):
    """Cut leading/trailing silence so lines butt up naturally; shift word and mouth times to match."""
    level = np.abs(audio)
    loud = np.where(level > max(1e-4, level.max() * 0.02))[0]
    if not len(loud):
        return audio, words, list(mouth)
    a, b = max(0, loud[0] - int(pad * RATE)), min(len(audio), loud[-1] + int(pad * RATE))
    shift = a / RATE
    move = lambda spans: [[max(0, s - shift), max(0, e - shift), w] for s, e, w in spans]
    return audio[a:b], move(words), move(mouth)

def estimate_words(audio, text):
    """Word timings for engines without timestamps: spread the speech span by syllable weight."""
    level = np.abs(audio)
    loud = np.where(level > level.max() * 0.03)[0]
    start, end = (loud[0] / RATE, loud[-1] / RATE) if len(loud) else (0, len(audio) / RATE)
    tokens = text.split()
    weights = np.array([max(1, sum(ch in 'aeiouy' for ch in t.lower())) + .5 for t in tokens])
    edges = start + np.concatenate([[0], np.cumsum(weights)]) / weights.sum() * (end - start)
    return [[float(edges[i]), float(edges[i + 1]), t] for i, t in enumerate(tokens)]

def visemes(wav_path, text):
    dialog = wav_path.with_suffix('.txt')
    dialog.write_text(text)
    out = subprocess.run([str(RHUBARB), '-f', 'json', '-d', str(dialog), '--quiet', str(wav_path)],
                         capture_output=True, text=True, check=True).stdout
    return [[round(c['start'], 3), c['value']] for c in json.loads(out)['mouthCues']]

def reference_clip(voice):
    path = CACHE / f'ref_{voice}.wav'
    if not path.exists():
        audio, _, _ = kokoro(REFERENCE_TEXT, voice, 1.0)
        sf.write(path, audio, RATE, subtype='PCM_16')
    return path

def chatterbox_batch(jobs):
    """Run Chatterbox once for all uncached lines (model load is the slow part)."""
    if not jobs:
        return
    if not CB_PYTHON.exists():
        sys.exit('Chatterbox is not installed. Use the Kokoro engine, or install it with: python3 -m venv .venv-cb && .venv-cb/bin/pip install chatterbox-tts')
    spec = CACHE / 'cb_jobs.json'
    spec.write_text(json.dumps(jobs))
    # Plain HTTPS downloads: the Xet transfer backend can stall on slow connections.
    proc = subprocess.Popen([str(CB_PYTHON), '-I', str(ROOT / 'pipeline/cb_tts.py'), str(spec)], stdout=subprocess.PIPE, text=True, env={**os.environ, 'HF_HUB_DISABLE_XET': '1'})
    for line in proc.stdout:
        print(line.rstrip(), flush=True)
    if proc.wait() != 0:
        sys.exit('Chatterbox failed. See the log above.')

def finish_take(key, raw_path, text, words, mouth=None, energy=1.0):
    audio, sr = sf.read(raw_path, dtype='float32')
    if audio.ndim > 1:
        audio = audio.mean(axis=1)
    if sr != RATE:
        idx = np.arange(0, len(audio), sr / RATE)
        audio = np.interp(idx, np.arange(len(audio)), audio).astype(np.float32)
    if words is None:
        audio, _, _ = trim(audio, [])
        words = estimate_words(audio, text)
    else:
        audio, words, mouth = trim(audio, words, mouth=mouth or ())
    peak = np.abs(audio).max()
    if peak > 0:
        audio = audio * (0.89 * energy / peak)
    wav_path = CACHE / f'{key}.wav'
    sf.write(wav_path, audio, RATE, subtype='PCM_16')
    cues = mouth_cues(mouth, len(audio) / RATE) if mouth else visemes(wav_path, text)
    meta = {'words': [[round(s, 3), round(e, 3), w] for s, e, w in words], 'visemes': cues}
    (CACHE / f'{key}.json').write_text(json.dumps(meta))

class VoiceError(Exception):
    """A problem with the script the user can fix (too long, overrunning lines)."""

def voice_project(project, layout='flow', lead=None, tail=1.6, report=progress):
    """Voices a project dict and returns it with voiceData, word timings and visemes (used by the CLI and the cloud engine)."""
    CACHE.mkdir(exist_ok=True)
    engine = project.get('voiceEngine', 'kokoro')
    # Each cast member carries its own voice; older projects kept a Ren/Mica map.
    voices = {c['id']: c['voice'] for c in project.get('cast', [])} or project.get('voices') or {'Ren': 'am_michael', 'Mica': 'af_heart'}
    cues = sorted(project['cues'], key=lambda c: c['start'])
    total = len(cues)
    strength = min(1.6, max(0.0, float(project.get('voiceModulation', 1))))

    keys, cb_jobs = [], []
    for i, cue in enumerate(cues):
        voice, emotion = voices[cue['speaker']], cue.get('emotion', 'neutral')
        style = KOKORO_SPEED.get(emotion, 1.0) if engine == 'kokoro' else CB_STYLE.get(emotion, (.5, .5))
        # Chatterbox acts the line itself, so it only takes the feeling's loudness.
        acted = [emotion, round(strength, 2)] if strength else []
        key = hashlib.sha256(json.dumps([engine, cue['text'], voice, style, 3 if engine == 'kokoro' else 2, *acted]).encode()).hexdigest()[:16]
        keys.append(key)
        if (CACHE / f'{key}.json').exists():
            report(i + 1, total, f"cached {cue['speaker']}: {cue['text']}")
            continue
        if engine == 'kokoro':
            audio, words, mouth, energy = act(cue['text'], voice, style, emotion, strength)
            raw = CACHE / f'{key}.raw.wav'
            sf.write(raw, audio, RATE, subtype='PCM_16')
            finish_take(key, raw, cue['text'], words, mouth, energy)
            report(i + 1, total, f"voiced {cue['speaker']}: {cue['text']}")
        else:
            report(i, total, f"preparing {cue['speaker']} voice")
            cb_jobs.append({'key': key, 'text': cue['text'], 'ref': str(reference_clip(voice)), 'exaggeration': style[0],
                            'cfg': style[1], 'out': str(CACHE / f'{key}.raw.wav'), 'label': f"{cue['speaker']}: {cue['text']}", 'index': i, 'total': total,
                            'energy': acting(emotion, cue['text'], strength)[1]})
    chatterbox_batch(cb_jobs)
    for job in cb_jobs:
        finish_take(job['key'], pathlib.Path(job['out']), job['text'], None, energy=job['energy'])
    if cb_jobs:
        report(total, total, 'lip sync aligned')

    lead = lead if lead is not None else (1.4 if project.get('intro', True) else 0.4)
    if cues[0].get('action') == 'enter':
        lead = max(lead, 1.6)
    cursor = lead if layout == 'flow' else 0.0
    takes = []
    for cue, key in zip(cues, keys):
        audio, _ = sf.read(CACHE / f'{key}.wav', dtype='float32')
        meta = json.loads((CACHE / f'{key}.json').read_text())
        takes.append(audio)
        length = len(audio) / RATE
        start = cursor if layout == 'flow' else max(cue['start'], cursor)
        cue['start'], cue['end'] = round(start, 3), round(start + length + 0.1, 3)
        cue['visemes'], cue['words'] = meta['visemes'], meta['words']
        cursor = cue['end'] + (cue.get('pause', 0.45) if layout == 'flow' else 0.3)
    end = cues[-1]['end']
    if layout == 'flow':
        project['duration'] = max(5, int(np.ceil(end + tail + (1.1 if project.get('endTitle') else 0))))
        if project['duration'] > 90:
            raise VoiceError(f'The voiced film runs {project["duration"]}s; the limit is 90s. Shorten the script.')
    elif end > project['duration']:
        raise VoiceError(f'Voiced lines run to {end:.1f}s, past the {project["duration"]}s film. Shorten text or use --layout flow.')

    track = np.zeros(int(project['duration'] * RATE), np.float32)
    for cue, audio in zip(cues, takes):
        i = int(cue['start'] * RATE)
        track[i:i + len(audio)] += audio[:len(track) - i]
    buf = io.BytesIO()
    sf.write(buf, track, RATE, format='WAV', subtype='PCM_16')
    project['voiceData'] = 'data:audio/wav;base64,' + base64.b64encode(buf.getvalue()).decode()
    project['cues'] = cues
    return project

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src'); ap.add_argument('dst')
    ap.add_argument('--layout', choices=['keep', 'flow'], default='flow')
    ap.add_argument('--lead', type=float, default=None, help='silence before the first line (flow); default fits the intro card')
    ap.add_argument('--tail', type=float, default=1.6, help='silence after the last line (flow)')
    args = ap.parse_args()
    try:
        project = voice_project(json.loads(pathlib.Path(args.src).read_text()), args.layout, args.lead, args.tail)
    except VoiceError as e:
        sys.exit(str(e))
    pathlib.Path(args.dst).write_text(json.dumps(project))
    print(f'DONE {len(project["cues"])} lines, {project["duration"]}s', flush=True)


if __name__ == '__main__':
    main()
