# Ember Take Studio

Write, voice, direct and render 3D animated vertical reels on your own computer. Every frame is drawn
by code (three.js), voices and lip sync are generated locally, and the audio is mastered for social
platforms. No accounts, credits, watermarks or paid services.

## Start the studio

```
cd ~/forgestudio/studio
npm run studio            # then open http://localhost:8765
```

Keep the terminal open while you work. The header shows **Studio engine ready** when voices and
rendering are available. Without the engine (opening `dist/index.html` directly), editing, preview
and browser export still work, but voices and studio renders do not.

## Make a reel

1. **Script** (header button): paste or write the episode. *Copy AI writer prompt* gives Claude,
   ChatGPT or Gemini everything they need to write one in the right format.
2. **Voice tab → Generate voices & lip sync.** *Fast* (Kokoro) takes seconds a line; *Expressive*
   (Chatterbox) acts out each line's feeling and takes longer.
3. **Scene tab:** adjust any line's feeling, action, camera or monitor screen. Change text or feeling,
   then generate voices again (unchanged lines are cached).
4. **Cast / Film tabs:** names, colours, voices, your @handle, captions, end card, music.
5. **Export film → Render with the studio engine.** 1080 × 1920, 30 fps, about 14 Mbps, −14 LUFS.
   Renders are kept in `renders/` and listed in the export dialog.

**Cast tab:** create up to 4 characters from 5 templates (the reference "creator" look, human, robot,
creature, desk bot) and shape each one: body proportions, hair, eyes, outfit, glasses, headwear, colours and
voice. The stage shows a turntable of the character you are editing. **Scene tab → Camera → Custom 360°**
gives each line a free angle: drag the dial around the character, then set height, distance, lens and move.

**Character library (Cast tab):** *Save to library* keeps any built-in character for future episodes.
*Import 3D character* adds your own rigged model; it is checked on upload and the report explains anything
missing. Imported characters use the same gestures, look-at, emotions and camera as built-in ones.

| Import rule | Requirement |
|---|---|
| Format | `.glb` (glTF 2.0 binary) or `.vrm`, up to 40 MB |
| Weight | under 300k triangles (≤120k renders fastest) |
| Skeleton | humanoid: hips, spine, neck, head, both upper/lower arms and hands (legs recommended). Mixamo, VRoid/VRM, Rigify, Character Creator and 3ds Max names are recognised |
| Lip sync | mouth shapes: Oculus visemes (`viseme_aa`…), ARKit (`jawOpen`…), VRoid (`Fcl_MTH_A`…), VRM expressions, or a jaw bone |
| Blink / feelings | `eyeBlink*`, `Fcl_EYE_Close` or VRM `blink`; happy/angry/sad/surprised shapes when present |
| Not supported | Draco or Basis/KTX2 compression (re-export without it); finger curls on imported hands |

Free sources: VRoid Studio (export `.vrm`), Mixamo (rig and download, convert FBX → GLB in Blender), Blender's
glTF exporter. Only import characters you have the rights to use commercially.

**Film tab:** *Character style* (Smooth premium shading or faceted Low-poly), *Film look* (10 grades: studio,
cinematic teal & orange, golden hour, pastel, neon, vintage, noir, documentary, dreamy, retro VHS) and
*Camera flow* (*Cuts*, or *One take*: the camera glides from shot to shot with no cuts).

Or from the terminal, script to finished reel in one command:

```
npm run episode -- ../episodes/reply_all.script.txt            # add --engine=chatterbox for expressive voices
```

## Script format

```
# title: Reply All
# handle: @yourname
>> SCREEN alert: INBOX | 1 NEW MESSAGE | TO: THE ENTIRE COMPANY
REN [surprised, point]: Wait. Who sent an email to the entire company?
MICA [neutral, think, pause=0.6]: You did. Four minutes ago.
```

| Tag | Values |
|---|---|
| Feeling | neutral, happy, sad, angry, surprised, worried, curious, idea |
| Action | none, explain, wave, point, point-screen, point-other, shrug, facepalm, think, cheer, clap, thumbsup, crossarms, handsup, nod, headshake, lean, jump, type, press, raise |
| Camera (default auto) | wide, two, single, cu, ots, screen (`cu:mica` frames Mica); `cam=yaw/pitch/dist/lens` for a 360° angle |
| Pause | `pause=0.8` seconds of silence after the line |
| Monitor | `>> SCREEN alert|calm|info|success [+progress]: KICKER | Title | Subtitle` before a line |

The automatic camera opens wide, cuts to the speaker, alternates over-the-shoulder and singles,
punches into close-ups on angry and surprised lines, inserts the monitor when it changes, and holds a
two-shot on long silences.

## What runs where

| Part | Tool | Licence |
|---|---|---|
| 3D, characters, camera, captions | three.js in headless Chrome (GPU), MSAA + ambient occlusion | MIT |
| Imported characters | glTF/VRM via three.js GLTFLoader (+ meshopt) | MIT |
| Fast voices | Kokoro-82M | Apache-2.0 |
| Expressive voices | Chatterbox (clones each character's Kokoro voice) | MIT |
| Lip sync | Rhubarb Lip Sync | MIT |
| Mix, loudness, encoding | ffmpeg | LGPL/GPL |

All of these allow commercial use, so finished reels can be sold to clients. Only use music you have
the rights to (your own, or royalty-free libraries such as the YouTube Audio Library).

## Develop

`npm test` runs the timeline, script, camera, face and audio tests. `CLAUDE.md` explains the layout
and how Claude Code can write and render episodes. Stills for quick framing checks:
`node scripts/render-chrome.mjs --project=film.ember.json --out=/tmp/stills --width=540 --stills=2,5,9`.
`--cpu` renders without the GPU.

Original source and scene assets: MIT, copyright 2026 Ember Take contributors.
