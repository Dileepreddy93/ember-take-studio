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
rendering are available.

## Online version

Every push to `main` publishes the studio to GitHub Pages (`.github/workflows/pages.yml`), so anyone
can make a full reel from a link, on a computer or a phone. First-time visitors open a finished, voiced
demo reel. Nobody sees anyone else's work:

| Online | How |
|---|---|
| Voices and lip sync | The **cloud voice engine** (`backend/`, AWS Lambda) runs `pipeline/voice.py` itself: the desktop's Kokoro voices and lip sync, with live progress line by line. The studio wakes it when someone opens the Voice tab or loads a script on open. If it is off or unreachable, the same Kokoro voices are made on the visitor's device by [HeadTTS](https://github.com/met4citizen/HeadTTS) (92 MB model download the first time) |
| Character library | Imports (.glb/.vrm characters, 3D worlds, 360° backgrounds) and saved characters are checked by the same rules and kept privately in the visitor's browser |
| Export film | An MP4 made in the browser, mastered to −14 LUFS like studio renders |

The desktop engine (`npm run studio`) adds the expressive Chatterbox voices and headless studio renders.
Build the static site locally with `npm run build:pages` (output in `site/`).

**Cloud voice engine controls** (personal AWS profile only, see `backend/aws.sh`): `deploy`, `stop` (off at once, no
compute used; the site falls back to on-device voices), `start`, `status`, `budget EMAIL` (alert above $1/month) and
`destroy` (removes everything). Compute is billed for invocations, including model warm-up. The scheduled usage guard checks every 15 minutes;
it is not a hard billing cap or a guarantee of zero cost. ECR image storage is billed separately. The engine requests
a two-job reserved concurrency cap; accounts whose quota prevents reservations use their account concurrency limit instead.
The cloud image uses quantized ONNX Kokoro, so audio can differ slightly from desktop PyTorch output. The deploy user needs the inline policy in `backend/aws-deploy-policy.json` (only `ember-take-*` resources).
The site learns the engine's URL from the repository variable `EMBER_API`.

## Make a reel

1. **Script** (header button): paste or write the episode. *Copy AI writer prompt* gives Claude,
   ChatGPT or Gemini everything they need to write one in the right format.
2. **Voice tab → Generate voices & lip sync.** *Fast* (Kokoro) takes seconds a line; *Expressive*
   (Chatterbox Turbo) performs each line: it sighs, gasps, laughs and changes its delivery with the feeling, and
   its real word timings drive captions, lip sync and gestures. It takes longer (about 3–4× the film's length on a CPU).
3. **Scene tab:** adjust any line's feeling, action, camera or monitor screen. Change text or feeling,
   then generate voices again (unchanged lines are cached).
4. **Cast / Film tabs:** names, colours, voices, your @handle, captions, end card, music.
5. **Export film → Render with the studio engine.** 1080 × 1920, 30 fps, about 14 Mbps, −14 LUFS.
   Renders are kept in `renders/` and listed in the export dialog.

**Cast tab:** create up to 4 characters from 6 templates (the reference "creator" look, human, robot,
creature, desk bot, and a *mascot*: a block, round or bean creature with a painted face) and shape each one: body
proportions, hair, eyes, outfit, glasses, headwear, colours, voice, whether they start the film sitting, and
something to hold (phone, mug, book, tablet, coffee). The stage shows a turntable of the character you are editing. **Scene tab → Camera → Custom 360°**
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

**World tab:** where the story happens. *Themes* set the world, time and film look in one click (night city
desk, rainy evening, snowy cabin, ocean sunset, mountain morning, space station, forest campfire, sunny meadow,
winter woods); everything stays editable after. *Room & desk* is a desk by a tall window: choose the view (city,
mountains, ocean, forest, space or a plain wall), a keyboard or the table top to stand on, string lights and their
colour, the monitor, desk props and sky colours; time of day relights the room. *Forest*, *Meadow* and *Snowy woods*
are built from trees & plants and wind. Every set has animated effects (motes, dust, fireflies, pollen, snow, rain,
leaves) and an ambient sound bed to match (traffic, rain, waves, wind, birds, crickets, campfire). *My world* uses
your own files:

| Import | Rules |
|---|---|
| 360° background | equirectangular (2:1) `.hdr`, `.jpg` or `.png`, up to 60 MB; 4096 px+ looks best. Characters stand on its ground and are lit by it |
| 3D world | `.glb` up to 80 MB / 2M triangles; Draco, KTX2 and meshopt are fine; its animations loop on the film clock; Move/Turn/Scale place it around the cast |

Free sources: Poly Haven (CC0 HDRIs and models), Kenney and Quaternius (CC0 worlds, animated animals),
Sketchfab (check each licence). [BlenderMCP](https://github.com/ahujasid/blender-mcp) lets Claude build
characters and scenes in Blender for export as `.glb`.

**Film tab:** *Camera style* (Cinematic shot/reverse-shot coverage, Calm with fewer cuts, Dynamic with
reaction shots), *Character style* (Smooth or Low-poly), *Film look* (10 grades) and *Camera flow*
(*Cuts* or *One take*). The director frames every shot from each character's body (headroom, faces in the
vertical-video safe zone, room in front of the face), widens for gestures, avoids jump cuts, keeps the
camera on one side of the conversation, and turns characters toward each other while they talk.

**Characters you don't own:** TV and film characters (for example Doraemon or Nobita) belong to their
studios. Import or recreate them only with the rights holder's permission; for client work, design
original characters instead.

Or from the terminal, script to finished reel in one command:

```
npm run episode -- ../episodes/reply_all.script.txt            # add --engine=chatterbox for expressive voices
```

## Script format

A script is the whole concept: characters, world, look and story. Paste one into **Script**, or run it with
`npm run episode`. Every header is optional; leave one out to keep the project's current setting.

```
# title: Missed Being Asked
# handle: @yourname
# theme: night-city          (a starting point; the lines below override it)
# style: lowpoly             (smooth or lowpoly)
# look: cinematic            (film grade)
# world: view=city lights=on props=lamp,mug particles=motes,rain
# cast: KAI = creator sit prop=phone hairStyle=shaggy top=#2b3a8c voice=am_puck
# cast: CLAUDE = mascot shape=block top=#e8743c accent=#c9572e
KAI [neutral, pause=0.6]: Claude. I tried Codex.
CLAUDE [curious]: Was it good?
KAI [sad, stand]: It didn't ask me one question.
```

| Header | Values |
|---|---|
| `# theme:` | night-city, rainy-window, snow-cabin, ocean-sunset, mountain-morning, space-station, campfire-forest, sunny-meadow, winter-woods |
| `# set:` / `# time:` | desk (a room by a big window), forest, meadow, snow · morning, golden, night |
| `# world:` (room) | `view=` city, mountains, ocean, forest, space, none · `surface=` keyboard, table · `lights=on/off` · `lightColor=#hex` · `monitor=on/off` · `props=` lamp,mug,plant,books,clock · `sky=#top,#mid,#horizon` · `glow=#hex` (city window lights) |
| `# world:` (neon sign) | `neon=on` (your @handle) or `neon=Open_late` (`_` for spaces), `neonColor=#ff7a59` |
| `# world:` (any set) | `particles=` motes, dust, fireflies, pollen (inside) and snow, rain, leaves (outside the window); outdoors also `foliage=`, `wind=`, `campfire=` |
| `# cast:` | `NAME = template` (creator, human, robot, creature, bot, mascot), then `key=value` look settings: height, build, head, colours (skin, hair, eyes, top, accent, bottom, shoes, screen), hairStyle, topStyle, glasses, hat, species, shape (block, round, bean), `prop=` phone, mug, book, tablet, coffee, `voice=`; plus bare words such as `sit`, `phone`, `hoodie`. With no template, an existing character of that name keeps their look |

| Line tag | Values |
|---|---|
| Feeling | neutral, happy, sad, angry, surprised, worried, curious, idea |
| Action | none, explain, wave, point, point-screen, point-other, shrug, facepalm, think, cheer, clap, thumbsup, crossarms, handsup, nod, headshake, lean, jump, type, press, raise |
| Pose | `sit` or `stand`: the speaker sits down or stands up from this line on (a seat appears behind anyone who sits; built-in characters and imported humanoids with mapped leg bones) |
| Camera (default auto) | wide, two, single, cu, ots, screen (`cu:mica` frames Mica); `cam=yaw/pitch/dist/lens` for a 360° angle |
| Pause | `pause=0.8` seconds of silence after the line |
| Delivery (in the line) | `[sigh]`, `[laugh]`, `[chuckle]`, `[gasp]`, `[groan]`, `[sniff]`, `[clear throat]`, `[whispering]`, `[sarcastic]` where they happen: `KAI [sad]: [sigh] It didn't know me.` Performed by Expressive voices, never shown in captions. Without a pause, answers come as fast as the feeling: a surprise jumps in, sadness takes a moment, `...` hesitates |
| Monitor | `>> SCREEN alert|calm|info|success [+progress]: KICKER | Title | Subtitle` before a line |
| App screen | `>> SCREEN grid info: site.com | Select all squares with | traffic lights | [x] Light | [ ] Sky | (Verify) | !! Please try again`: kinds terminal, chat, code, inbox, browser, grid. Rows are performed while the line plays: `> text` typed, `[x]` ticked by the cursor, `(Button)` clicked, `!!` error popup, `**` success, `~` loading. Typing and clicks are heard |
| Time card | `>> CARD: 2 HOURS LATER` before a line |

**Copy AI writer prompt** (in the Script dialog) gives Claude, ChatGPT or Gemini this whole language, so
any idea comes back as a complete concept with its own characters and world.

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
| Lip sync | Kokoro's own phoneme timings; Rhubarb Lip Sync for Chatterbox voices | Apache-2.0 / MIT |
| Mix, loudness, encoding | ffmpeg | LGPL/GPL |

All of these allow commercial use, so finished reels can be sold to clients. Only use music you have
the rights to (your own, or royalty-free libraries such as the YouTube Audio Library).

## Develop

`npm test` runs the timeline, script, camera, face and audio tests. `CLAUDE.md` explains the layout
and how Claude Code can write and render episodes. Stills for quick framing checks:
`node scripts/render-chrome.mjs --project=film.ember.json --out=/tmp/stills --width=540 --stills=2,5,9`.
`--cpu` renders without the GPU. `node server.mjs` rebuilds `dist/app.bundle.js` on start
(`npm run build` does it by hand); the bundle is not committed.

Original source and scene assets: MIT, copyright 2026 Ember Take contributors.

## Reel craft controls

The Voice tab's **Voice modulation** slider (0–1.6) shapes pitch, question rises, tremble and energy from each line's feeling. Set it to 0 for the original delivery. Regenerate voices after changing it. This is deterministic audio processing over free Kokoro, not an ElevenLabs replacement; large settings can sound stylized. Browser and Python implementations remap word and mouth timing with the audio.

Scripts can carry `# modulation: 1.0`. Use `>> BEAT: 1.0` after dialogue for a silent reaction, or the existing `pause=1.0` tag. `enter`, `exit` and `hop` actions walk a character onto their mark, walk them off after speaking, or make a double hop. The first entrance reserves enough lead time to appear on screen.

App screens accept a window title followed by up to twelve rows, separated by `|`:

```text
>> SCREEN terminal info: release.log | $ npm test | PASS
>> SCREEN chat calm: Team chat | Navi: ready? | Pip: ready.
>> SCREEN code success: coffee.js | - undoEverything(); | + askFirst();
>> SCREEN inbox alert: Calendar | No meetings found. | Your manager remembers everything.
```

Choose **Screen type** in the Scene tab to edit these rows. Existing title-card scripts still work. App rows reveal progressively; a monitor without events displays a quiet editor instead of an oversized title.

Choose **A laptop · ending pullback** in World → They stand on, or `# world: surface=laptop`, for a laptop stage and a closing reveal. Leave the end-title card empty if you want the reveal fully visible. Generated music changes pace and texture for ocean, space and nature settings; your uploaded music still takes precedence.

Imported humanoids expose sitting and held props in Cast. Pose quality depends on the model's bone mapping and proportions; arbitrary non-humanoid models are not automatically retargeted.

The opening showcase contains small previews made from this studio's own renders. The original script for the new proof is `examples/the-undo-button.script.txt`. Run `../.venv/bin/python tests/voice_modulation_test.py` for Python modulation checks in addition to `npm test`.

The editor workflow is **Script → Cast → World → Voices → Export**. The sample-reel strip collapses as you start editing to give the preview more room. On desktop, the story and settings panels scroll independently; on mobile, the compact story list appears before the settings. Choosing a dialogue line opens its Scene settings.

Generated voices are tied to the script: changing dialogue, speaker, timing, emotion or modulation clears the old generated track so it cannot accidentally play or export the previous words. Visual changes preserve speech. Undo restores the earlier version, including its audio. Browser exports always use the story camera, even when opened from the Cast tab.

## Responsive workspace

The charcoal/lavender workspace keeps the story, preview, and controls together on desktop. At 800 px and below, use the bottom Preview / Story / Customize navigation; project open/download actions are in Story. The sample-film library starts collapsed on desktop. See [WORKSPACE_REVIEW.md](WORKSPACE_REVIEW.md) for architecture findings, subscription-readiness gaps, and verification evidence.
