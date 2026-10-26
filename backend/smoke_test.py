"""Run inside the engine image: python smoke_test.py. Exercises real ONNX synthesis and HTTP validation."""
import base64
import io
import json
import sys
import soundfile as sf
from fastapi.testclient import TestClient
import engine_api

client = TestClient(engine_api.app)
assert client.get('/api/status').json()['cloud']
assert client.get('/api/status?warm_up=1').json()['ready']
assert 'torch' not in sys.modules
project = {'cast': [{'id': 'a', 'voice': 'af_heart'}, {'id': 'b', 'voice': 'bf_emma'}],
           'cues': [{'id': 1, 'start': 0, 'end': 2, 'speaker': 'a', 'text': 'Hello Zyxbaq, ready?', 'emotion': 'happy'},
                    {'id': 2, 'start': 2, 'end': 4, 'speaker': 'b', 'text': 'Yes! Let us make a film.', 'emotion': 'curious'}],
           'duration': 12, 'intro': False}
response = client.post('/api/voice', json={'project': project, 'layout': 'flow'}, headers={'Origin': engine_api.ORIGINS[0]})
assert response.status_code == 200
assert response.headers['access-control-allow-origin'] == engine_api.ORIGINS[0]
items = [json.loads(line) for line in response.text.splitlines()]
assert not any('error' in item for item in items), items
voiced = items[-1]['project']
audio, rate = sf.read(io.BytesIO(base64.b64decode(voiced['voiceData'].split(',', 1)[1])))
assert rate == 24000 and len(audio) > rate and abs(audio).max() > .05
for cue in voiced['cues']:
    assert cue['words'] and cue['visemes']
    assert all(0 <= start <= end for start, end, *_ in cue['words'])
project['cast'][0]['voice'] = 'invalid'
assert client.post('/api/voice', json={'project': project}).status_code == 400
assert client.post('/api/voice', content='invalid JSON').status_code == 400
print('PASS: ONNX warm-up, US/UK voices, unknown word, WAV audio, word timings, visemes, streaming, CORS, validation; no PyTorch')
