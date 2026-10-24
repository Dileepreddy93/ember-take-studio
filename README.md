# Ember Take

An original, local-first 3D film studio. The sample is **The Last Connection**, a 30-second captioned conversation between Ren and Mica with an original mathematical score and sound effects. No generative AI, paid API, stock assets or model downloads are used by the application.

## Run the bundled studio

For an immediate offline launch, extract `Ember_Take_Offline.zip` and open `OPEN_STUDIO.html` in a desktop browser. Everything needed for editing is embedded. If your browser restricts file-based video encoding, use the included frame-package converter or the localhost launcher below.

For a localhost launch, install Python 3 if needed, then run `python3 start-studio.py` (Windows: double-click `start-windows.bat`). This opens http://localhost:8765. Keep the terminal open. Internet is not needed after obtaining the files and installing Python/a compatible browser. Use a current desktop Chrome or Edge for MP4 export. HTTPS or localhost is required by WebCodecs; arbitrary HTTP hosts are not sufficient.

## Direct a film

Select a dialogue card, edit its text/timing/speaker/expression/camera, and click Apply scene changes. Cast controls edit colors, glasses, warmth, captions and duration. Drag the playhead to scrub. Orbit scene lets you inspect actual geometry; Fit camera restores the story camera. Save project downloads portable JSON; Open imports it. Undo/redo retains the last 30 edits. The scene contains one original set, two characters, four camera presets and four expression modes.

Sound imports one continuous voice track at film time zero, up to 10 MB. Adjust dialogue timings to match it. The default film has no spoken human dialogue; captions carry the conversation. Character sounds are deliberately synthetic. This release does not provide text-to-speech or phoneme alignment.

When WebCodecs is unavailable, export creates a ZIP of native-resolution JPEG frames, stereo WAV, the project and an included Python converter. Install free FFmpeg and run `python3 convert_video.py` after extracting it. This route also works on ordinary HTTP preview hosts.

Export renders every frame at the selected native resolution (540, 720 or 1080 pixels wide), at 30 fps. Audio and video are encoded locally, then muxed into an MP4. Depending on browser support, the selected codecs are AVC or VP9 and AAC or Opus. On devices without WebGL, the same geometry and animation use a software rasterizer with per-pixel depth, perspective-correct textures and a depth-focus treatment. This path has simpler illumination than the accelerated renderer and may play slowly; offline export preserves every requested frame. Export progress and cancellation are available. Memory depends on scene and encoded output size; duration is limited to 60 seconds.

The sample's environmental story (offline screen, render progress, button and end card) is authored for its 30-second arc. Editing dialogue does not automatically invent new sets, plots or environment choreography.

## Develop

Node 22+ is recommended. `npm ci`, `npm run build`, `npm test`. `npm run package:offline` rebuilds the portable studio and source ZIP.

For a checkpointed command-line render, install free FFmpeg, then run `npm run render -- --out=./renders/sample`. It creates 900 native Full HD frames and `film.mp4` for the default film. For your own saved project, add `--project=./My_Film.ember.json`. Embedded imported audio is supported; `--voice=./recording.wav` overrides it. `--width=540` or `--width=720` makes a smaller render. Repeating the same command resumes completed frames; source, project and font changes require a fresh output folder. The renderer needs installed desktop fonts; on Linux it uses free DejaVu substitutes when Arial/Georgia are absent.

- `scene.js`: original procedural geometry, rig, animation, camera and screen.
- `software-renderer.js`: CPU triangle rasterizer and depth treatment.
- `dist/timeline.js`: portable scene document, validation and absolute-time evaluation.
- `app.js`: editing, local storage, audio import and export UI.
- `audio.js`: original deterministic synthesized score and WAV helper.
- `exporter.js`: fixed-frame WebCodecs rendering and MP4 muxing.

The application contains no external font, asset or service calls. Automatic local saving is subject to browser storage limits; Save project keeps larger voice-containing projects portable. Local project files contain imported voice audio, so share them deliberately.

## Licensing and scope

Original source and scene assets: MIT, copyright 2026 Ember Take contributors. Three.js, mp4-muxer, fflate, @napi-rs/canvas and esbuild: MIT. Notices are included in THIRD_PARTY_NOTICES.txt. No vendor's paid engine, character meshes, prompts or branding are included.

This is an independently built studio, not a recovered copy of either researched vendor's software. Quality equivalence is not a certified measurement.
