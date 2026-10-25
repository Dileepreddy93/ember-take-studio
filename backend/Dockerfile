# Ember Take cloud voice engine for AWS Lambda (x86_64). Build from the studio folder:
#   docker build -f backend/Dockerfile -t ember-take-voice .
# Kokoro runs on ONNX Runtime (backend/kokoro_onnx.py), not PyTorch, so the image is small and a cold Lambda
# container starts in seconds. The model, every studio voice and spaCy are baked in; lip sync comes from Kokoro's
# own phoneme timings, so no Rhubarb, ffmpeg or system packages are needed.
FROM python:3.12-slim-bookworm
# Runs the HTTP app inside Lambda and streams responses (progress lines) to the Function URL.
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.1 /lambda-adapter /opt/extensions/lambda-adapter
COPY backend/requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt && rm /tmp/requirements.txt
COPY backend/engine_api.py backend/fetch_model.py /app/backend/
RUN python /app/backend/fetch_model.py /opt/kokoro
COPY pipeline/voice.py /app/pipeline/voice.py
COPY backend/kokoro_onnx.py /app/backend/kokoro_onnx.py
# Check the whole chain once at build time: G2P, the espeak fallback (a made-up word), model and timings.
RUN cd /app/backend && KOKORO_ONNX_DIR=/opt/kokoro python -c "import sys; sys.path[:0] = ['/app/pipeline', '/app/backend']; import voice, kokoro_onnx; \
a, w, m = kokoro_onnx.synth('Hello Zyxbaq, ready?', 'af_heart', 1.0); assert len(a) > 12000 and w and m; print('engine ok:', round(len(a) / 24000, 2), 's,', [x[2] for x in w])"
# Lambda's filesystem is read-only except /tmp.
ENV EMBER_VOICE_CACHE=/tmp/voice-cache HOME=/tmp PORT=8080 KOKORO_ONNX_DIR=/opt/kokoro \
    AWS_LWA_INVOKE_MODE=response_stream AWS_LWA_READINESS_CHECK_PATH=/api/status
WORKDIR /app/backend
CMD ["python", "-m", "uvicorn", "engine_api:app", "--host", "0.0.0.0", "--port", "8080"]
