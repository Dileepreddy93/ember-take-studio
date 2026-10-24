#!/usr/bin/env python3
"""Voice an Ember Take project: free local TTS (Kokoro) + lip sync (Rhubarb).

Reads a project JSON, synthesises every dialogue line, aligns mouth shapes,
retimes the cues to the real audio and writes a project you can open in the
studio (voice embedded, per-line visemes and word timings).

  python pipeline/voice.py in.ember.json out.ember.json [--layout keep|flow]

layout=keep  keeps each authored start time (pushes a line later only if the
             previous one overruns) - use for films with fixed choreography.
layout=flow  lays lines end to end with each line's `pause` (default 0.45 s)
             and sets the film duration to fit - use for new scripts.
"""
import argparse, base64, hashlib, io, json, pathlib, subprocess, sys
import numpy as np
import soundfile as sf

ROOT = pathlib.Path(__file__).resolve().parent.parent
RHUBARB = ROOT.parent / 'tools/Rhubarb-Lip-Sync-1.14.0-Linux/rhubarb'
CACHE = ROOT / '.voice-cache'
RATE = 24000

# Voice per character. Kokoro voice ids: af_heart, af_bella, am_michael, am_puck, bm_george, ...
CAST = {
    'Ren': {'voice': 'am_michael', 'speed': 1.0},
    'Mica': {'voice': 'af_heart', 'speed': 1.06},
}
# Kokoro has no emotion control; pace is the lever we have.
EMOTION_SPEED = {'worried': 1.08, 'curious': 0.97, 'idea': 1.04, 'happy': 1.02}

_pipeline = None
def tts(text, voice, speed):
    global _pipeline
    if _pipeline is None:
        from kokoro import KPipeline
        _pipeline = KPipeline(lang_code='a', repo_id='hexgrad/Kokoro-82M')
    audio, words, offset = [], [], 0.0
    for result in _pipeline(text, voice=voice, speed=speed):
        a = result.audio.numpy() if hasattr(result.audio, 'numpy') else np.asarray(result.audio)
        for tok in result.tokens or []:
            if tok.start_ts is not None and tok.end_ts is not None and tok.text.strip(' .,!?…'):
                words.append([round(offset + tok.start_ts, 3), round(offset + tok.end_ts, 3), tok.text])
        audio.append(a)
        offset += len(a) / RATE
    return np.concatenate(audio).astype(np.float32), words

def visemes(wav_path, text):
    dialog = wav_path.with_suffix('.txt')
    dialog.write_text(text)
    out = subprocess.run([str(RHUBARB), '-f', 'json', '-d', str(dialog), '--quiet', str(wav_path)],
                         capture_output=True, text=True, check=True).stdout
    return [[round(c['start'], 3), c['value']] for c in json.loads(out)['mouthCues']]

def voice_line(cue):
    cast = CAST[cue['speaker']]
    speed = round(cast['speed'] * EMOTION_SPEED.get(cue['emotion'], 1.0), 3)
    key = hashlib.sha256(json.dumps([cue['text'], cast['voice'], speed]).encode()).hexdigest()[:16]
    wav_path, meta_path = CACHE / f'{key}.wav', CACHE / f'{key}.json'
    if not meta_path.exists():
        audio, words = tts(cue['text'], cast['voice'], speed)
        sf.write(wav_path, audio, RATE, subtype='PCM_16')
        meta_path.write_text(json.dumps({'words': words, 'visemes': visemes(wav_path, cue['text'])}))
        print(f"  voiced  {cue['speaker']}: {cue['text']}")
    else:
        print(f"  cached  {cue['speaker']}: {cue['text']}")
    audio, _ = sf.read(wav_path, dtype='float32')
    return audio, json.loads(meta_path.read_text())

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src'); ap.add_argument('dst')
    ap.add_argument('--layout', choices=['keep', 'flow'], default='keep')
    ap.add_argument('--lead', type=float, default=0.8, help='silence before the first line (flow)')
    ap.add_argument('--tail', type=float, default=1.5, help='silence after the last line (flow)')
    args = ap.parse_args()
    CACHE.mkdir(exist_ok=True)
    project = json.loads(pathlib.Path(args.src).read_text())
    cues = sorted(project['cues'], key=lambda c: c['start'])
    takes = [voice_line(c) for c in cues]

    cursor = args.lead if args.layout == 'flow' else 0.0
    for cue, (audio, meta) in zip(cues, takes):
        length = len(audio) / RATE
        start = cursor if args.layout == 'flow' else max(cue['start'], cursor)
        cue['start'], cue['end'] = round(start, 3), round(start + length + 0.12, 3)
        cue['visemes'], cue['words'] = meta['visemes'], meta['words']
        cursor = cue['end'] + (cue.get('pause', 0.45) if args.layout == 'flow' else 0.3)
    end = cues[-1]['end']
    if args.layout == 'flow':
        project['duration'] = min(60, int(np.ceil(end + args.tail)))
    elif end > project['duration']:
        sys.exit(f'Voiced lines run to {end:.1f}s, past the {project["duration"]}s film. Shorten text or use --layout flow.')

    track = np.zeros(int(project['duration'] * RATE), np.float32)
    for cue, (audio, _) in zip(cues, takes):
        i = int(cue['start'] * RATE)
        track[i:i + len(audio)] += audio[:len(track) - i]
    buf = io.BytesIO()
    sf.write(buf, track, RATE, format='WAV', subtype='PCM_16')
    project['voiceData'] = 'data:audio/wav;base64,' + base64.b64encode(buf.getvalue()).decode()
    project['cues'] = cues
    pathlib.Path(args.dst).write_text(json.dumps(project, indent=1))
    sf.write(pathlib.Path(args.dst).with_suffix('.voice.wav'), track, RATE, subtype='PCM_16')
    print(f'Wrote {args.dst}: {len(cues)} lines, {project["duration"]}s')

if __name__ == '__main__':
    main()
