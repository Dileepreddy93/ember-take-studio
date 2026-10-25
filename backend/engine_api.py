"""Ember Take cloud voice engine: an HTTP API over pipeline/voice.py (Kokoro voices, lip sync from Kokoro's timings).

POST /api/voice  {project, layout}  streams NDJSON: {"progress":0..1,"message":...} lines, then {"project":...}
                                    (or {"error":...}). Online voices are the desktop's voices, take for take.
GET  /api/status                    cheap; the studio calls it when someone heads for voices, so the engine is warm.
Guards: allowed origins (CORS), body and script size limits, voice-name check, and a per-visitor rate limit.
Runs on AWS Lambda behind the Lambda Web Adapter (see backend/Dockerfile and backend/aws.sh).
"""
import json, os, queue, sys, threading, time

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'pipeline'))
import voice  # noqa: E402  (pipeline/voice.py)
import kokoro_onnx
voice.kokoro = kokoro_onnx.synth

ORIGINS = os.environ.get('EMBER_ORIGINS', 'https://dileepreddy93.github.io,http://localhost:8765,http://localhost:8799').split(',')
VOICE_IDS = {'af_heart', 'af_bella', 'af_nicole', 'af_sarah', 'af_sky', 'af_nova', 'af_river', 'af_jessica', 'af_aoede', 'af_kore', 'af_alloy',
             'am_michael', 'am_puck', 'am_fenrir', 'am_echo', 'am_eric', 'am_liam', 'am_onyx', 'am_adam', 'am_santa',
             'bf_emma', 'bf_isabella', 'bf_alice', 'bf_lily', 'bm_george', 'bm_fable', 'bm_lewis', 'bm_daniel'}
RATE_LIMIT, RATE_WINDOW = 12, 600  # voice jobs per visitor per 10 minutes

# Kokoro loads on the first request, not at import: Lambda allows 10 s to start the app, and it freezes the container
# between requests, so the load must run inside a request. The studio's wake-up call (/api/status?warm=1, sent in
# the background when someone opens the Voice tab) stays open until the model is ready; voice jobs wait for it too.
ready, warming = threading.Event(), threading.Lock()
warm_error = None
def _warm():
    global warm_error
    try:
        voice.kokoro('Ready.', 'af_heart', 1.0)
        voice.kokoro('Ready.', 'bf_emma', 1.0)
        warm_error = None
        ready.set()
    except Exception as exc:
        warm_error = str(exc)
    finally:
        warming.release()
def warm(wait):
    if not ready.is_set() and warming.acquire(blocking=False):
        threading.Thread(target=_warm, daemon=True).start()
    deadline = time.monotonic() + wait
    while not ready.is_set() and time.monotonic() < deadline:
        if warm_error is not None and not warming.locked():
            return False
        ready.wait(min(.1, max(0, deadline - time.monotonic())))
    return ready.is_set()

app = FastAPI(title='Ember Take voice engine', docs_url=None, redoc_url=None, openapi_url=None)
app.add_middleware(CORSMiddleware, allow_origins=ORIGINS, allow_methods=['GET', 'POST'], allow_headers=['content-type'], max_age=86400)
recent, lock = {}, threading.Lock()


@app.get('/api/status')
def status(warm_up: int = 0):
    return {'cloud': True, 'ready': warm(90) if warm_up else ready.is_set(), 'engines': {'kokoro': True, 'chatterbox': False}}


@app.post('/api/voice')
async def voice_job(request: Request):
    body = await request.body()
    if len(body) > 2_000_000:
        return JSONResponse({'error': 'The script is too large.'}, 413)
    who = (request.headers.get('x-forwarded-for') or (request.client.host if request.client else '?')).split(',')[0].strip()
    now = time.time()
    with lock:
        hits = [t for t in recent.get(who, []) if now - t < RATE_WINDOW]
        if len(hits) >= RATE_LIMIT:
            return JSONResponse({'error': 'Too many voice requests. Try again in a few minutes.'}, 429)
        recent[who] = hits + [now]
    try:
        data = json.loads(body)
        project, layout = data['project'], 'keep' if data.get('layout') == 'keep' else 'flow'
        cues, cast = project['cues'], project['cast']
        ids = {c['id'] for c in cast}
        if not 1 <= len(cues) <= 40 or any(len(str(c['text'])) > 160 or c['speaker'] not in ids for c in cues):
            raise ValueError('Use 1 to 40 lines of up to 160 characters, each spoken by the cast.')
        if any(c.get('voice') not in VOICE_IDS for c in cast):
            raise ValueError('Unknown voice.')
    except (ValueError, KeyError, TypeError) as e:
        return JSONResponse({'error': str(e) or 'Send a studio project.'}, 400)
    project.update(voiceEngine='kokoro', voiceData=None, musicData=None)

    out = queue.Queue()
    def report(done, total, msg):
        out.put({'progress': round(done / max(1, total) * .97, 3), 'message': str(msg)[:200]})
    def run():
        try:
            if not warm(150):
                raise voice.VoiceError("Voice model could not start. Please try again.")
            out.put({'project': voice.voice_project(project, layout, report=report)})
        except voice.VoiceError as e:
            out.put({'error': str(e)})
        except Exception as e:  # noqa: BLE001 - shown to the user as a voice failure
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
