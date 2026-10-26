"""Chatterbox batch worker (runs inside .venv-cb). Usage: cb_tts.py jobs.json

Turbo (default) acts each line from its delivery tags ([sigh], [fear], [happy] ...) in the character's cloned voice;
the classic model (EMBER_CB_MODEL=classic) uses exaggeration/cfg instead. When faster-whisper is installed, each
take's real word timings are written next to it (<out>.words.json) for captions, emphasis and gesture beats."""
import json, os, sys
import torch, torchaudio

jobs = json.load(open(sys.argv[1]))
torch.set_num_threads(max(1, torch.get_num_threads()))
turbo = os.environ.get('EMBER_CB_MODEL', 'turbo') != 'classic'
print('PROGRESS 0/{} loading expressive voice model'.format(jobs[0]['total']), flush=True)
if turbo:
    from chatterbox.tts_turbo import ChatterboxTurboTTS
    model = ChatterboxTurboTTS.from_pretrained(device='cpu')
else:
    from chatterbox.tts import ChatterboxTTS
    model = ChatterboxTTS.from_pretrained(device='cpu')
try:
    from faster_whisper import WhisperModel
    listener = WhisperModel('base.en', device='cpu', compute_type='int8')
except Exception as e:  # timings fall back to an estimate in voice.py
    print(f'word timings estimated (faster-whisper unavailable: {e})', flush=True)
    listener = None

def words_of(wav, sr, text):
    """Recognised words with times, at 16 kHz as Whisper expects. The script's words replace the recognised ones
    in voice.py, so only the timing has to be right."""
    audio = torchaudio.functional.resample(wav, sr, 16000)[0].numpy().astype('float32')
    segs, _ = listener.transcribe(audio, word_timestamps=True, beam_size=5, initial_prompt=text, condition_on_previous_text=False)
    return [[round(w.start, 3), round(w.end, 3), w.word.strip()] for s in segs for w in (s.words or [])]

last_ref = None
for n, job in enumerate(jobs):
    torch.manual_seed(1234 + n)
    if turbo:
        if job['ref'] != last_ref:
            model.prepare_conditionals(job['ref'])
            last_ref = job['ref']
        wav = model.generate(job['direction'])
    else:
        wav = model.generate(job['text'], audio_prompt_path=job['ref'], exaggeration=job['exaggeration'], cfg_weight=job['cfg'])
    torchaudio.save(job['out'], wav, model.sr)
    if listener:
        with open(job['out'] + '.words.json', 'w') as f:
            json.dump(words_of(wav, model.sr, job['text']), f)
    print('PROGRESS {}/{} acted {}'.format(job['index'] + 1, job['total'], job['label']), flush=True)
