"""Kokoro without PyTorch, for the cloud engine.

The same text-to-phoneme step (misaki G2P with the espeak fallback), voice-style choice and word-timestamp rule as
the `kokoro` library the desktop runs, with the network executed by ONNX Runtime
(onnx-community/Kokoro-82M-v1.0-ONNX-timestamped, 8-bit). PyTorch is about a gigabyte that Lambda would have to
fetch on every cold start; this needs a 90 MB model and starts in seconds.

`synth(text, voice, speed)` returns (audio, words, mouth) exactly like pipeline/voice.py's `kokoro()`, which the
engine replaces with it, so takes are trimmed, laid out and lip-synced by the same pipeline code.
"""
import json
import os
import sys

import numpy as np
import onnxruntime as ort

MODEL_DIR = os.environ.get('KOKORO_ONNX_DIR', '/opt/kokoro')
STYLE_DIM = 256
_session, _vocab, _g2p, _voices = None, None, {}, {}


def _model():
    global _session, _vocab
    if _session is None:
        opts = ort.SessionOptions()
        opts.intra_op_num_threads = max(1, len(os.sched_getaffinity(0)))
        opts.graph_optimization_level = ort.GraphOptimizationLevel.ORT_ENABLE_ALL
        _session = ort.InferenceSession(os.path.join(MODEL_DIR, 'model_quantized.onnx'), opts, providers=['CPUExecutionProvider'])
        with open(os.path.join(MODEL_DIR, 'config.json')) as f:
            _vocab = json.load(f)['vocab']
    return _session


def _phonemizer(lang):
    # Load spaCy/G2P inside the warm-up request, keeping Lambda HTTP startup under its init deadline.
    from misaki import en, espeak
    # As KPipeline: American ('a') or British ('b') G2P, espeak for words outside the lexicon.
    if lang not in _g2p:
        try:
            fallback = espeak.EspeakFallback(british=lang == 'b')
        except Exception:  # noqa: BLE001 - without espeak, unknown words are skipped (as KPipeline does)
            fallback = None
        _g2p[lang] = en.G2P(trf=False, british=lang == 'b', fallback=fallback, unk='')
    return _g2p[lang]


def _voice(name):
    if name not in _voices:
        _voices[name] = np.fromfile(os.path.join(MODEL_DIR, 'voices', f'{name}.bin'), dtype=np.float32).reshape(-1, 1, STYLE_DIM)
    return _voices[name]


def _timestamps(tokens, dur):
    """KPipeline.join_timestamps: word start/end from per-phoneme durations (half-frames, 80 per second)."""
    if not tokens or len(dur) < 3:
        return
    left = right = 2 * max(0, dur[0] - 3)
    i = 1
    for t in tokens:
        if i >= len(dur) - 1:
            break
        if not t.phonemes:
            if t.whitespace:
                i += 1
                left = right + dur[i]
                right = left + dur[i]
                i += 1
            continue
        j = i + len(t.phonemes)
        if j >= len(dur):
            break
        t.start_ts = left / 80
        token_dur = sum(dur[i:j])
        space_dur = dur[j] if t.whitespace else 0
        left = right + 2 * token_dur + space_dur
        t.end_ts = left / 80
        right = left + space_dur
        i = j + (1 if t.whitespace else 0)


class _Result:
    """The two fields pipeline/voice.py's phoneme_mouths() reads from a Kokoro result."""
    def __init__(self, phonemes, pred_dur):
        self.phonemes, self.pred_dur = phonemes, pred_dur


def synth(text, voice, speed):
    session = _model()
    _, tokens = _phonemizer(voice[0])(text)
    for t in tokens:
        t.phonemes = t.phonemes or ''
    phonemes = ''.join(t.phonemes + (' ' if t.whitespace else '') for t in tokens).strip()[:510]
    ids = [0] + [_vocab[p] for p in phonemes if p in _vocab] + [0]
    style = _voice(voice)[max(0, len(phonemes) - 1)]  # KPipeline: pack[len(ps)-1]
    audio, dur = session.run(['waveform', 'durations'], {
        'input_ids': np.array([ids], dtype=np.int64), 'style': style.astype(np.float32), 'speed': np.array([speed], dtype=np.float32)})
    audio, dur = audio[0].astype(np.float32), np.rint(dur[0]).astype(int)
    _timestamps(tokens, dur.tolist())
    words = [[t.start_ts, t.end_ts, t.text] for t in tokens
             if t.start_ts is not None and t.end_ts is not None and t.text.strip(' .,!?…')]
    voice_py = sys.modules.get('voice')
    mouth = voice_py.phoneme_mouths(_Result(phonemes, dur), 0.0) if voice_py else []
    return audio, words, mouth
