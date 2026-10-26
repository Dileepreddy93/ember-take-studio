# Ember Take studio

A local 3D reel studio: three.js scenes drawn by code, free local voices (Kokoro, or Chatterbox Turbo for
expressive delivery), lip sync from Kokoro's phoneme timings (Rhubarb for Chatterbox), and ffmpeg mastering. No paid services.

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

A script is a complete concept: characters, world and story. All headers are optional.

```
# title: Missed Being Asked
# handle: @embertake
# theme: night-city    (night-city, rainy-window, snow-cabin, ocean-sunset, mountain-morning, space-station, campfire-forest, sunny-meadow, winter-woods)
# set: desk            (desk, forest, meadow, snow; custom worlds are chosen in the World tab)
# time: night          (morning, golden, night)
# camera: cinematic    (cinematic, calm, dynamic)
# look: cinematic      (studio, cinematic, golden, pastel, neon, vintage, noir, documentary, dream, vhs)
# style: lowpoly       (smooth, lowpoly)
# world: view=city lights=on props=lamp,mug particles=motes
# cast: KAI = creator sit prop=phone hairStyle=shaggy top=#2b3a8c voice=am_puck
# cast: CLAUDE = mascot shape=block top=#e8743c accent=#c9572e
>> SCREEN alert: INBOX | 1 NEW MESSAGE | TO: THE ENTIRE COMPANY
KAI [surprised, point]: Wait. Who sent an email to the entire company?
CLAUDE [neutral, think, stand, pause=0.6]: You did. Four minutes ago.
```

- `# cast:` lines (1–4) replace the cast: `NAME = template` (creator, human, robot, creature, bot, mascot) then
  `key=value` look settings (any `LOOK_DEFAULTS` key in `dist/timeline.js`: colours, hairStyle, shape, prop, stance…),
  `voice=`, and unambiguous bare words (`sit`, `phone`, `hoodie`). Without `# cast:` lines, speakers are the project's
  cast (default Ren and Mica), or pass `--look=<project.ember.json>` to `npm run episode`.
- `# world:` keys are `WORLD_DEFAULTS` in `dist/timeline.js`: view (city, mountains, ocean, forest, space, none),
  surface (keyboard, table), lights, lightColor, monitor, props (lamp, mug, plant, books, clock), particles (motes,
  dust, fireflies, pollen, snow, rain, leaves), sky (three colours), glow, foliage, wind, campfire.
- Delivery tags inside the dialogue (`[sigh]`, `[laugh]`, `[chuckle]`, `[gasp]`, `[groan]`, `[sniff]`, `[whispering]`, `[sarcastic]` …, list in
  `VOICE_TAGS`) are performed by the expressive engine and stripped everywhere else with `spoken()` (captions, Kokoro, lip sync).
  Lines without their own tags get one from their feeling (`direction()` in `pipeline/voice.py`). Write natural dialogue: `...` hesitations, short replies.
- Tags, any order: one emotion, one action, optional `sit`/`stand`, optional camera, optional `pause=<0–3 s>`.
- Emotions: neutral, happy, sad, angry, surprised, worried, curious, idea.
- Actions: none, explain, wave, point, point-screen, point-other, shrug, facepalm, think, cheer, clap, thumbsup,
  crossarms, handsup, nod, headshake, lean, jump, type, press, raise, hop, enter, exit. Hands also beat on stressed words automatically.
- Cameras (default auto — leave them out unless a moment needs one): wide, two, fs, ms, single, cu, ecu, ots, screen. Add `:name` to frame someone else (`cu:mica`).
  Free 360° angle: `cam=<yaw>/<pitch>/<distance>/<lens mm>` (yaw 0 = in front of the subject, 90 = their left,
  180 = behind), optional `move=push|pull|orbit|rise|handheld|static`.
- `>> SCREEN <alert|calm|info|success> [+progress]: KICKER | Title | Subtitle` changes the monitor on
  the next line (keep the title under ~16 characters; there is no emoji font on the renderer).
- `writerPrompt()` in `dist/timeline.js` is the full language as a prompt for any chat AI (the studio's *Copy AI writer prompt*).

## Layout

- `dist/timeline.js` — project format, validation, script parser, shot planner, faces/actions/visemes. Pure; tested.
- `characters.js` — procedural characters (human, robot, creature, desk bot, mascot) in smooth or low-poly style on one rig, two-bone IK, gestures, sitting, held props, face drawing.
- `character-import.js` — pure GLB/VRM reader, humanoid bone mapping, face-shape detection and import rules (used by the server and tests).
- `imported.js` — imported characters: scaling/facing, world-space IK on their bones, morph-target lip sync and emotions.
- `library/` — the character library (imported models + saved presets), managed through `/api/library` in `server.mjs`.
- `worlds.js` — the desk room's surroundings (`deskAtmosphere`: window view, sky, string lights, particles), nature worlds (forest/meadow/snow) and custom worlds (360° background, imported .glb scene).
- `scene.js` — three.js set, cast layout, 360° camera presets and custom angles, post (DOF, bloom, grade), captions.
- `audio.js` — generated score, sound effects, ambient bed per world, voice ducking.
- `pipeline/voice.py` — Kokoro/Chatterbox voices, silence trim, word timings, visemes from Kokoro's phoneme durations (Rhubarb only for Chatterbox), cached in `.voice-cache`; `voice_project()` is also the cloud engine's core.
- `backend/` — cloud voice engine for the online studio: `engine_api.py` (FastAPI over `voice_project`, streamed progress), `Dockerfile` (AWS Lambda image), `guard.py` (cost guard), `aws.sh` (deploy/stop/start/status/usage/destroy, personal profile only).
- `scripts/render-chrome.mjs` — headless Chrome WebGL frames → ffmpeg, two-pass −14 LUFS.
- `server.mjs` — studio UI at http://localhost:8765 plus `/api/voice` and `/api/render` jobs.
- `scripts/build-pages.mjs` — static build in `site/` (sets `window.EMBER_STATIC`); `.github/workflows/pages.yml` tests and deploys it to GitHub Pages on every push to `main`. With no server the browser is the engine:
  `browser-voice.js` (Kokoro via vendored HeadTTS, same layout as `pipeline/voice.py`), `local-library.js` (IndexedDB, same requests as `/api/library`), `master()` in `audio.js` (−14 LUFS for browser exports).
- Tests in `tests/import.test.mjs` use models in `../test-assets/` when present (three.js examples: Xbot, RobotExpressive, facecap) and skip otherwise.
- `npm test` must pass after changes; `node server.mjs` rebuilds the UI bundle on start.

## Craft additions

- `# modulation: 0…1.6` persists voice acting strength. Match `ACTING` in `voice-modulation.js` and `pipeline/voice.py`; remap word and mouth timings whenever audio is resampled.
- `>> SCREEN terminal|chat|code|inbox|browser|grid tone: window title | row | row` (up to 12 rows) authors app screens that are *performed*
  while the line plays (`screen-apps.js`): `> text` typed, `[x] item` ticked by a cursor (`[ ] item` left), `(Button)` clicked, `!! text`
  error popup, `** text` success overlay, `~ text` spinner. `screenPlan()` times the rows inside the screen's span and also drives the key
  and click sounds in `audio.js`. All apps draw inside the centred column `COL`: the portrait screen shot only sees the middle of the
  monitor. Performed screens hold the camera (`PERFORMED_ROW` in `planShots`). Preserve old title-card documents.
- `>> CARD: 2 HOURS LATER` before a line shows a full-screen time card in a `CARD_TIME` (1.8 s) gap before it (both voice layouts).
- `# world: neon=Text neonColor=#hex` hangs a flickering neon sign above the cast (`neon=on` shows the @handle; `_` for spaces).
- `>> BEAT: 1.0` sets the previous line's silent pause. `presenceAt()` evaluates enter/exit from absolute time; repeated and backward seeking must remain deterministic.
- `surface=laptop` adds a laptop stage and closing camera pullback. Showcase assets live in `showcase/` and are copied by the static build.
- Test Python modulation with `../.venv/bin/python tests/voice_modulation_test.py` and direction with `tests/voice_direction_test.py`.

## Acting

- Expressive voices: `pipeline/cb_tts.py` runs Chatterbox Turbo (MIT, CPU about 3–4× real time; `EMBER_CB_MODEL=classic` for the old model)
  cloning each Kokoro voice from a lively reference read (`REFERENCE_TEXT`, cached as `ref2_<voice>.wav`), and faster-whisper (`base.en`)
  for real word timings, aligned back to the script's words by `align_words()`.
- Words carry measured stress as a 4th value (`emphasis()`), which drives `beatAt()` (hand/head beats, brow flashes).
- An unauthored pause (the 0.45 default) becomes a natural answer time by the next line's feeling: `turn_gap()` in Python and `turnGap()` in
  `dist/timeline.js` must stay identical.
- Faces: `faceAt()` adds listener reactions (`REACTIONS`), `blinkAt()` blinks irregularly and at thought boundaries, `glanceAt()` looks away
  while thinking and back to finish. All are pure functions of time (deterministic for seeking).
- Benchmarks (local, not in git): `../episodes/benchmark_*.script.txt` reproduce the user's reference reels kept in `..`; render them and compare
  frames and per-line audio against those videos before claiming a quality improvement. `examples/prove-youre-human.script.txt` shows
  performed screens, a time card and a neon sign.
