# Ember Take studio

A local 3D reel studio: three.js scenes drawn by code, free local voices (Kokoro, or Chatterbox for
expressive delivery), Rhubarb lip sync, and ffmpeg mastering. No paid services.

## Writing and rendering an episode

When asked for an episode about a topic:

1. Write `../episodes/<slug>.script.txt` in the screenplay format below. Aim for 8–14 lines, about
   100 spoken words: hook in line one, escalation, one silent beat (`pause=0.8`+), callback punchline.
2. Run `npm run episode -- ../episodes/<slug>.script.txt` (add `--engine=chatterbox` for expressive
   voices when `.venv-cb` exists, `--width=720` for a faster proof).
3. The finished reel is `renders/<slug>/film.mp4`; `renders/<slug>/project.ember.json` opens in the studio UI.

To check framing before a full render, render stills:
`node scripts/render-chrome.mjs --project=<voiced.json> --out=<dir> --width=540 --stills=2,5.5,9`

## Screenplay format

```
# title: Reply All
# handle: @embertake
>> SCREEN alert: INBOX | 1 NEW MESSAGE | TO: THE ENTIRE COMPANY
REN [surprised, point]: Wait. Who sent an email to the entire company?
MICA [neutral, think, pause=0.6]: You did. Four minutes ago.
```

- Speakers: `REN`, `MICA` (or the custom names set in the project's `names`).
- Tags, any order: one emotion, one action, optional camera, optional `pause=<0–3 s>`.
- Emotions: neutral, happy, sad, angry, surprised, worried, curious, idea.
- Actions: none, wave, point, shrug, facepalm, think, cheer, nod, headshake, lean, jump, type, press, raise.
- Cameras (default auto): wide, two, ren, mica, ren-cu, mica-cu, ren-ots, mica-ots, screen.
- `>> SCREEN <alert|calm|info|success> [+progress]: KICKER | Title | Subtitle` changes the monitor on
  the next line (keep the title under ~16 characters; there is no emoji font on the renderer).

## Layout

- `dist/timeline.js` — project format, validation, script parser, shot planner, faces/actions/visemes. Pure; tested.
- `scene.js` — three.js set, characters, drawn mouth and LED face, camera, post (DOF, bloom, grade), captions.
- `audio.js` — generated score, sound effects, voice ducking.
- `pipeline/voice.py` — Kokoro/Chatterbox voices, silence trim, word timings, Rhubarb visemes (cached in `.voice-cache`).
- `scripts/render-chrome.mjs` — headless Chrome WebGL frames → ffmpeg, two-pass −14 LUFS.
- `server.mjs` — studio UI at http://localhost:8765 plus `/api/voice` and `/api/render` jobs.
- `npm test` must pass after changes; `node server.mjs` rebuilds the UI bundle on start.
