"""Chatterbox batch worker (runs inside .venv-cb). Usage: cb_tts.py jobs.json"""
import json, sys
import torch, torchaudio
from chatterbox.tts import ChatterboxTTS

jobs = json.load(open(sys.argv[1]))
torch.set_num_threads(max(1, torch.get_num_threads()))
print('PROGRESS 0/{} loading expressive voice model'.format(jobs[0]['total']), flush=True)
model = ChatterboxTTS.from_pretrained(device='cpu')
for n, job in enumerate(jobs):
    torch.manual_seed(1234 + n)
    wav = model.generate(job['text'], audio_prompt_path=job['ref'], exaggeration=job['exaggeration'], cfg_weight=job['cfg'])
    torchaudio.save(job['out'], wav, model.sr)
    print('PROGRESS {}/{} acted {}'.format(job['index'] + 1, job['total'], job['label']), flush=True)
