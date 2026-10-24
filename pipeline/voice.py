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
CACHE = ROOT / '.voice-cache'
RATE = 24000
KOKORO_SPEED = {'neutral': 1.0, 'happy': 1.04, 'sad': .9, 'angry': 1.08, 'surprised': 1.1, 'worried': 1.08, 'curious': .97, 'idea': 1.04}
# Chatterbox (exaggeration, cfg_weight): higher exaggeration is more dramatic, lower cfg gives freer pacing.
CB_STYLE = {'neutral': (.5, .5), 'happy': (.8, .35), 'sad': (.6, .45), 'angry': (.95, .3), 'surprised': (.9, .3), 'worried': (.7, .4), 'curious': (.6, .45), 'idea': (.8, .35)}
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
    audio, words, offset = [], [], 0.0
    for result in _pipelines[lang](text, voice=voice, speed=speed):
        a = result.audio.numpy() if hasattr(result.audio, 'numpy') else np.asarray(result.audio)
        for tok in result.tokens or []:
            if tok.start_ts is not None and tok.end_ts is not None and tok.text.strip(' .,!?…'):
                words.append([offset + tok.start_ts, offset + tok.end_ts, tok.text])
        audio.append(a)
        offset += len(a) / RATE
    return np.concatenate(audio).astype(np.float32), words

def trim(audio, words, pad=0.06):
    """Cut leading/trailing silence so lines butt up naturally; shift word times to match."""
    level = np.abs(audio)
    loud = np.where(level > max(1e-4, level.max() * 0.02))[0]
    if not len(loud):
        return audio, words
    a, b = max(0, loud[0] - int(pad * RATE)), min(len(audio), loud[-1] + int(pad * RATE))
    shift = a / RATE
    return audio[a:b], [[max(0, s - shift), max(0, e - shift), w] for s, e, w in words]

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
        audio, _ = kokoro(REFERENCE_TEXT, voice, 1.0)
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

def finish_take(key, raw_path, text, words):
    audio, sr = sf.read(raw_path, dtype='float32')
    if audio.ndim > 1:
        audio = audio.mean(axis=1)
    if sr != RATE:
        idx = np.arange(0, len(audio), sr / RATE)
        audio = np.interp(idx, np.arange(len(audio)), audio).astype(np.float32)
    if words is None:
        audio, _ = trim(audio, [])
        words = estimate_words(audio, text)
    else:
        audio, words = trim(audio, words)
    peak = np.abs(audio).max()
    if peak > 0:
        audio = audio * (0.89 / peak)
    wav_path = CACHE / f'{key}.wav'
    sf.write(wav_path, audio, RATE, subtype='PCM_16')
    meta = {'words': [[round(s, 3), round(e, 3), w] for s, e, w in words], 'visemes': visemes(wav_path, text)}
    (CACHE / f'{key}.json').write_text(json.dumps(meta))

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src'); ap.add_argument('dst')
    ap.add_argument('--layout', choices=['keep', 'flow'], default='flow')
    ap.add_argument('--lead', type=float, default=None, help='silence before the first line (flow); default fits the intro card')
    ap.add_argument('--tail', type=float, default=1.6, help='silence after the last line (flow)')
    args = ap.parse_args()
    CACHE.mkdir(exist_ok=True)
    project = json.loads(pathlib.Path(args.src).read_text())
    engine = project.get('voiceEngine', 'kokoro')
    # Each cast member carries its own voice; older projects kept a Ren/Mica map.
    voices = {c['id']: c['voice'] for c in project.get('cast', [])} or project.get('voices') or {'Ren': 'am_michael', 'Mica': 'af_heart'}
    cues = sorted(project['cues'], key=lambda c: c['start'])
    total = len(cues)

    keys, cb_jobs = [], []
    for i, cue in enumerate(cues):
        voice, emotion = voices[cue['speaker']], cue.get('emotion', 'neutral')
        style = KOKORO_SPEED.get(emotion, 1.0) if engine == 'kokoro' else CB_STYLE.get(emotion, (.5, .5))
        key = hashlib.sha256(json.dumps([engine, cue['text'], voice, style, 2]).encode()).hexdigest()[:16]
        keys.append(key)
        if (CACHE / f'{key}.json').exists():
            progress(i + 1, total, f"cached {cue['speaker']}: {cue['text']}")
            continue
        if engine == 'kokoro':
            audio, words = kokoro(cue['text'], voice, style)
            raw = CACHE / f'{key}.raw.wav'
            sf.write(raw, audio, RATE, subtype='PCM_16')
            finish_take(key, raw, cue['text'], words)
            progress(i + 1, total, f"voiced {cue['speaker']}: {cue['text']}")
        else:
            progress(i, total, f"preparing {cue['speaker']} voice")
            cb_jobs.append({'key': key, 'text': cue['text'], 'ref': str(reference_clip(voice)), 'exaggeration': style[0],
                            'cfg': style[1], 'out': str(CACHE / f'{key}.raw.wav'), 'label': f"{cue['speaker']}: {cue['text']}", 'index': i, 'total': total})
    chatterbox_batch(cb_jobs)
    for job in cb_jobs:
        finish_take(job['key'], pathlib.Path(job['out']), job['text'], None)
    if cb_jobs:
        progress(total, total, 'lip sync aligned')

    lead = args.lead if args.lead is not None else (1.4 if project.get('intro', True) else 0.4)
    cursor = lead if args.layout == 'flow' else 0.0
    takes = []
    for cue, key in zip(cues, keys):
        audio, _ = sf.read(CACHE / f'{key}.wav', dtype='float32')
        meta = json.loads((CACHE / f'{key}.json').read_text())
        takes.append(audio)
        length = len(audio) / RATE
        start = cursor if args.layout == 'flow' else max(cue['start'], cursor)
        cue['start'], cue['end'] = round(start, 3), round(start + length + 0.1, 3)
        cue['visemes'], cue['words'] = meta['visemes'], meta['words']
        cursor = cue['end'] + (cue.get('pause', 0.45) if args.layout == 'flow' else 0.3)
    end = cues[-1]['end']
    if args.layout == 'flow':
        project['duration'] = int(np.ceil(end + args.tail + (1.1 if project.get('endTitle') else 0)))
        if project['duration'] > 90:
            sys.exit(f'The voiced film runs {project["duration"]}s; the limit is 90s. Shorten the script.')
    elif end > project['duration']:
        sys.exit(f'Voiced lines run to {end:.1f}s, past the {project["duration"]}s film. Shorten text or use --layout flow.')

    track = np.zeros(int(project['duration'] * RATE), np.float32)
    for cue, audio in zip(cues, takes):
        i = int(cue['start'] * RATE)
        track[i:i + len(audio)] += audio[:len(track) - i]
    buf = io.BytesIO()
    sf.write(buf, track, RATE, format='WAV', subtype='PCM_16')
    project['voiceData'] = 'data:audio/wav;base64,' + base64.b64encode(buf.getvalue()).decode()
    project['cues'] = cues
    pathlib.Path(args.dst).write_text(json.dumps(project))
    print(f'DONE {len(cues)} lines, {project["duration"]}s', flush=True)

if __name__ == '__main__':
    main()
