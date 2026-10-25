"""Ember Take cloud engine on Modal: Kokoro voices + Rhubarb lip sync for the online studio.

It runs pipeline/voice.py itself, so online voices are the desktop's voices, take for take.
  modal deploy backend/modal_app.py        (from the studio folder; free Starter plan, $30/month credits)

POST /api/voice  {project, layout}  streams NDJSON: {"progress":0..1,"message":...} lines, then {"project":...}.
GET  /api/status                    wakes the engine (the studio calls it when the page opens).
Guards: allowed origins only, body and script size limits, a per-visitor rate limit, and a container cap.
"""
import json, pathlib, queue, sys, threading, time
import modal

RHUBARB = 'https://github.com/DanielSWolf/rhubarb-lip-sync/releases/download/v1.14.0/Rhubarb-Lip-Sync-1.14.0-Linux.zip'
SPACY_EN = 'https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-3.8.0/en_core_web_sm-3.8.0-py3-none-any.whl'
ORIGINS = ['https://dileepreddy93.github.io', 'http://localhost:8765', 'http://localhost:8799']
STUDIO = pathlib.Path(__file__).resolve().parent.parent


def warm_models():
    """Downloads Kokoro's weights and voices into the image, so a cold start never fetches them."""
    from kokoro import KPipeline
    for lang in 'ab':
        p = KPipeline(lang_code=lang, repo_id='hexgrad/Kokoro-82M')
        for v in {'a': ['af_heart', 'af_bella', 'af_nicole', 'af_sarah', 'af_sky', 'af_nova', 'am_michael', 'am_puck', 'am_fenrir', 'am_echo', 'am_adam'],
                  'b': ['bf_emma', 'bf_isabella', 'bm_george', 'bm_lewis']}[lang]:
            list(p('Hi.', voice=v))


image = (
    modal.Image.debian_slim(python_version='3.12')
    .apt_install('ffmpeg', 'espeak-ng', 'libsndfile1', 'unzip', 'curl')
    .pip_install('torch==2.*', index_url='https://download.pytorch.org/whl/cpu')
    .pip_install('kokoro==0.9.4', 'misaki[en]==0.9.4', 'soundfile', 'numpy', 'fastapi[standard]', SPACY_EN)
    # pipeline/voice.py looks for Rhubarb at <studio>/../tools/…, i.e. /tools when the studio is /app.
    .run_commands(f'curl -sL -o /tmp/r.zip {RHUBARB} && mkdir -p /tools && unzip -q /tmp/r.zip -d /tools && chmod +x /tools/Rhubarb-Lip-Sync-1.14.0-Linux/rhubarb && rm /tmp/r.zip')
    .run_function(warm_models)
    .add_local_file(STUDIO / 'pipeline/voice.py', '/app/pipeline/voice.py')
)
app = modal.App('ember-take-studio', image=image)


@app.cls(cpu=2.0, memory=4096, timeout=600, scaledown_window=900, max_containers=3, enable_memory_snapshot=True)
@modal.concurrent(max_inputs=4)
class Engine:
    @modal.enter(snap=True)
    def load(self):
        # Load the pipeline once per container (kept in the memory snapshot for fast cold starts).
        sys.path.insert(0, '/app/pipeline')
        import voice
        self.voice = voice
        voice.kokoro('Ready.', 'af_heart', 1.0)
        voice.kokoro('Ready.', 'bf_emma', 1.0)
        self.lock = threading.Lock()
        self.recent = {}

    @modal.asgi_app()
    def web(self):
        from fastapi import FastAPI, Request
        from fastapi.middleware.cors import CORSMiddleware
        from fastapi.responses import JSONResponse, StreamingResponse

        api = FastAPI(title='Ember Take engine', docs_url=None, redoc_url=None)
        api.add_middleware(CORSMiddleware, allow_origins=ORIGINS, allow_methods=['GET', 'POST'], allow_headers=['content-type'], max_age=86400)

        @api.get('/api/status')
        def status():
            return {'cloud': True, 'engines': {'kokoro': True, 'chatterbox': False, 'rhubarb': True, 'ffmpeg': True}}

        @api.post('/api/voice')
        async def voice(request: Request):
            body = await request.body()
            if len(body) > 2_000_000:
                return JSONResponse({'error': 'The script is too large.'}, 413)
            # Up to 12 voice jobs per visitor per 10 minutes.
            who = request.headers.get('x-forwarded-for', request.client.host if request.client else '?').split(',')[0].strip()
            now = time.time()
            with self.lock:
                hits = [t for t in self.recent.get(who, []) if now - t < 600]
                if len(hits) >= 12:
                    return JSONResponse({'error': 'Too many voice requests. Try again in a few minutes.'}, 429)
                self.recent[who] = hits + [now]
            try:
                data = json.loads(body)
                project, layout = data['project'], data.get('layout', 'flow')
                cues = project['cues']
                ids = {c['id'] for c in project['cast']}
                if not 1 <= len(cues) <= 40 or any(len(str(c['text'])) > 160 or c['speaker'] not in ids for c in cues):
                    raise ValueError('Use 1 to 40 lines of up to 160 characters, each spoken by the cast.')
                if any(not str(c.get('voice', '')).isascii() or len(str(c.get('voice', ''))) > 20 for c in project['cast']):
                    raise ValueError('Unknown voice.')
            except (ValueError, KeyError, TypeError) as e:
                return JSONResponse({'error': str(e) or 'Send a studio project.'}, 400)
            project['voiceEngine'], project['voiceData'], project['musicData'] = 'kokoro', None, None

            out = queue.Queue()
            def report(done, total, msg):
                out.put({'progress': round(done / max(1, total) * .97, 3), 'message': msg[:200]})
            def run():
                try:
                    out.put({'project': self.voice.voice_project(project, 'keep' if layout == 'keep' else 'flow', report=report)})
                except self.voice.VoiceError as e:
                    out.put({'error': str(e)})
                except Exception as e:  # noqa: BLE001 - reported to the studio as a voice failure
                    out.put({'error': f'Voice engine error: {e}'})
            threading.Thread(target=run, daemon=True).start()

            def stream():
                yield json.dumps({'progress': 0, 'message': 'Cloud voice engine started'}) + '\n'
                while True:
                    item = out.get()
                    yield json.dumps(item) + '\n'
                    if 'project' in item or 'error' in item:
                        return
            return StreamingResponse(stream(), media_type='application/x-ndjson')

        return api
