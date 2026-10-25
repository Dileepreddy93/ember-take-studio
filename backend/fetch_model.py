"""Downloads Kokoro-82M v1.0 for the cloud engine image: the ONNX network with phoneme durations (8-bit), its
phoneme vocabulary, and every voice the engine accepts (engine_api.VOICE_IDS). Run at image build time."""
import ast
import pathlib
import sys
import urllib.request

out = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '/opt/kokoro')
src = (pathlib.Path(__file__).parent / 'engine_api.py').read_text()
voices = ast.literal_eval(src.split('VOICE_IDS = ', 1)[1].split('\nRATE_LIMIT', 1)[0])
hf = 'https://huggingface.co'
(out / 'voices').mkdir(parents=True, exist_ok=True)
urllib.request.urlretrieve(f'{hf}/onnx-community/Kokoro-82M-v1.0-ONNX-timestamped/resolve/main/onnx/model_quantized.onnx', out / 'model_quantized.onnx')
urllib.request.urlretrieve(f'{hf}/hexgrad/Kokoro-82M/resolve/main/config.json', out / 'config.json')
for v in sorted(voices):
    urllib.request.urlretrieve(f'{hf}/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/voices/{v}.bin', out / 'voices' / f'{v}.bin')
print('model and', len(voices), 'voices ready in', out)
