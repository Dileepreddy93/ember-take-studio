# Studio craft improvements — 25 October 2026

Resumed the interrupted work on `studio-craft`. Production remains on `main`; neither GitHub Pages nor AWS was updated by this change.

## Completed

- Clearer human faces: shorter front hair locks leave eyebrows visible, smaller non-emissive eye highlights, and a camera-side fill follows the active subject. Eye colours remain customizable.
- Mascot framing now allows for body width, feet and hand clearance. Close and over-shoulder mascot shots use a wider composition; softer fill avoids washing out the body colour.
- Script-driven terminal, chat, code-diff and inbox screens, with progressive row reveal. The Scene tab edits screen type and rows. Old title cards keep working; an unused monitor shows a quiet editor.
- Faster reaction editing, silent-pause reaction shots, `>> BEAT: seconds`, and an expanded writer prompt for hook → escalation → silence → callback.
- Voice modulation in both Python and browser synthesis: emotion-dependent pitch, contour, question rises, tremble and energy. Word and mouth timings follow the resampled audio. The slider and `# modulation:` header support 0–1.6; changing it requires regenerating voices.
- Deterministic enter/exit movement and a double hop. The first entrance gets enough lead time. Imported humanoid legs also walk; mapped rigs can sit and hold the built-in props.
- Tighter two-shots, a selectable laptop stage with closing pullback, and different generated-score pacing/textures for ocean, space and nature scenes.
- Three small showcase previews with sound and posters, built from our own renders. Static builds copy the assets; the desktop server serves them too. Playing a preview pauses the other previews and editor playback.
- Fixed a short-script bug: generated films now respect the editor's five-second minimum in both voice implementations.

## Evidence

- 46 JavaScript tests across four test files passed, including nine import tests using local model fixtures. Three Python modulation tests passed.
- UI bundle, static build and Git whitespace checks passed.
- Updated Python pipeline passed the existing ONNX container smoke test with a read-only filesystem: US/UK voices, an invented word, audio, timings, visemes, streaming, CORS and validation.
- Desktop/mobile Chrome workflow passed with zero page errors: import script with modulation 1.3, generate two real voices through the local API, edit terminal → chat, save rows, play the film, and fetch all three showcase videos.
- Original proof: `renders/the-undo-button-film/film.mp4`, H.264/AAC, 540×960, 30 fps, 24 seconds. Measured −14.0 LUFS integrated loudness and −1.5 dBFS true peak.
- Proof camera plan: 13 shots, average 1.85 seconds, including a silent reaction.
- Editable voiced project: `renders/the-undo-button/project.ember.json`. Source: `examples/the-undo-button.script.txt`.
- Rendered stills: `renders/the-undo-button-proof/`. Baseline-project comparison stills: `renders/craft-comparison/`.

## Practical limits

Voice modulation is lightweight signal processing over free TTS; it does not reproduce a professionally acted voice model. High settings can sound stylized. Imported sitting and prop orientation depend on humanoid bone mapping and proportions. The laptop closing reveal is tied to that stage choice; an end-title card can cover the reveal, so leave the card empty when showcasing it.

The proof is a local 540p render; export still supports the existing higher resolutions. No ElevenLabs integration was added. The live AWS engine needs the updated Python pipeline when this branch is eventually released; this work has not changed it.

Local preview for this session: http://localhost:8802
