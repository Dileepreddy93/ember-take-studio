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

- Speakers: the names in the project's cast (up to 4; default Ren and Mica). Add characters in the studio's
  Cast tab, or pass `--look=<project.ember.json>` to `npm run episode` to use that project's cast.
- Tags, any order: one emotion, one action, optional camera, optional `pause=<0–3 s>`.
- Emotions: neutral, happy, sad, angry, surprised, worried, curious, idea.
- Actions: none, explain, wave, point, point-screen, point-other, shrug, facepalm, think, cheer, clap, thumbsup,
  crossarms, handsup, nod, headshake, lean, jump, type, press, raise. Hands also beat on stressed words automatically.
- Cameras (default auto): wide, two, single, cu, ots, screen. Add `:name` to frame someone else (`cu:mica`).
  Free 360° angle: `cam=<yaw>/<pitch>/<distance>/<lens mm>` (yaw 0 = in front of the subject, 90 = their left,
  180 = behind), optional `move=push|pull|orbit|rise|handheld|static`.
- `>> SCREEN <alert|calm|info|success> [+progress]: KICKER | Title | Subtitle` changes the monitor on
  the next line (keep the title under ~16 characters; there is no emoji font on the renderer).

## Layout

- `dist/timeline.js` — project format, validation, script parser, shot planner, faces/actions/visemes. Pure; tested.
- `characters.js` — procedural characters (human, robot, creature, desk bot) in smooth or low-poly style on one rig, two-bone IK, gestures, face drawing.
- `character-import.js` — pure GLB/VRM reader, humanoid bone mapping, face-shape detection and import rules (used by the server and tests).
- `imported.js` — imported characters: scaling/facing, world-space IK on their bones, morph-target lip sync and emotions.
- `library/` — the character library (imported models + saved presets), managed through `/api/library` in `server.mjs`.
- `scene.js` — three.js set, cast layout, 360° camera presets and custom angles, post (DOF, bloom, grade), captions.
- `audio.js` — generated score, sound effects, voice ducking.
- `pipeline/voice.py` — Kokoro/Chatterbox voices, silence trim, word timings, Rhubarb visemes (cached in `.voice-cache`).
- `scripts/render-chrome.mjs` — headless Chrome WebGL frames → ffmpeg, two-pass −14 LUFS.
- `server.mjs` — studio UI at http://localhost:8765 plus `/api/voice` and `/api/render` jobs.
- Tests in `tests/import.test.mjs` use models in `../test-assets/` when present (three.js examples: Xbot, RobotExpressive, facecap) and skip otherwise.
- `npm test` must pass after changes; `node server.mjs` rebuilds the UI bundle on start.
