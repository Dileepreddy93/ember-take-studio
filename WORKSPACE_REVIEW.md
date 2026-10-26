# Workspace Studio review — 26 October 2026

## Result and design direction

Implemented a charcoal and lavender editor theme with a prominent preview, quieter supporting surfaces, readable dialogue cards, consistent form controls, and clear primary actions. The reference direction comes from [Dribbble video editor dashboards](https://dribbble.com/search/video-editor-dashboard), [Frame.io](https://frame.io/), and its [workspace organization](https://help.frame.io/en/articles/9101001-workspace-overview). These informed the layout and hierarchy; the implementation uses the studio's own design and assets.

Desktop retains story, preview, and creative controls together with independent panel scrolling. Phones and smaller tablets have dedicated Preview, Story, and Customize views plus persistent Export access. The preview gets the available viewport height; users no longer scroll through a long editor to reach their film. File open/download actions remain available in Story. Existing projects and local storage remain compatible.

Other improvements:

- Sample films start collapsed, with a compact inspiration library on desktop.
- Larger mobile form text avoids automatic input zoom in mobile Safari; controls and navigation have larger touch areas.
- Theme presets use bordered cards; primary actions, selected dialogue, and selected tabs share the accent color.
- Timeline dialogue segments are keyboard-accessible buttons that select their corresponding scene.
- Settings tabs use a single keyboard tab stop, arrow navigation, and labeled tab panels.
- Added a skip link and selected-state semantics; global playback/frame shortcuts respect buttons and the camera dial.
- Fixed a race where finishing audio preparation after pausing could restart playback.

## Architecture findings and fixes

The separation between project validation, rendering, audio, import validation, and browser/server libraries is useful. Preserved that structure. Added `workspace-ui.js` for responsive navigation and `server-guards.js` for testable HTTP input rules, keeping presentation concerns out of project state.

Fixed local engine issues:

| Finding | Implementation |
|---|---|
| Voice and render endpoints accepted raw projects | Apply the shared project validator before queueing; reject empty stories and invalid inputs with HTTP 400 |
| Malformed JSON returned a generic server error | Return HTTP 400; oversized JSON bodies return 413 |
| An unlimited number of CPU jobs could queue | Allow at most four running/queued jobs; return 429 when full |
| Completed job metadata accumulated indefinitely | Prune completed/failed records older than one hour when admitting new work |
| Missing subprocess executable could emit an unhandled error | Reject the job promise on process spawn errors |
| Video seeking accepted invalid/out-of-bounds ranges | Validate ranges, support suffix ranges, clamp end offsets, return 416 for unsatisfiable requests |
| Local API lacked origin/host checks | Require a loopback Host and reject foreign Origin/cross-site requests; retain localhost-only binding |
| File stream errors could escape handling | Destroy the response on stream failure |

The job retention change covers memory metadata only. Render files, voice caches, and job directories still need an explicit disk retention policy for long-running installations.

## Subscription readiness

**This remains a local/browser creative tool, not a complete subscription SaaS.** Visual polish is implemented; it does not establish willingness to pay or production readiness.

Before paid multi-user hosting:

1. Add identity, workspace membership, and authorization on every project, asset, and job. The local engine must remain local; its shared filesystem is not tenant isolation.
2. Add billing checkout, verified webhooks, subscription entitlements, and enforced usage quotas on the server. UI restrictions alone cannot protect paid features.
3. Store projects and asset metadata in a database with tenant scoping; use private object storage and signed URLs for large media. Browser storage currently provides no cross-device sync and can be cleared by the browser.
4. Use a durable job queue and worker pool with cancellation, retries, timeouts, concurrency limits, and job ownership. The local in-memory queue loses state on restart.
5. Authenticate the cloud voice API, enforce distributed rate limits and usage metering. Its current per-process/IP limit and CORS configuration do not provide subscription authorization or a hard spend cap.
6. Add operational monitoring, disk/object retention, backup and restore procedures, and browser/device performance budgets. Real-device testing is still needed for Safari, Android, touch gestures, memory pressure, and device export limits.

The main app module still combines many editing workflows. A future refactor should extract project history/persistence and voice/export controllers behind explicit state interfaces; avoid a framework rewrite solely for visual changes.

## Verification

Story tested: open Studio → select dialogue → edit/apply → reload and recover saved changes → switch creative panels → open Script/Export.

- `npm test`: all six test files passed, including new range, project-validation, and local-origin regression tests.
- `npm run build:pages`: passed; includes the new workspace stylesheet in the static output.
- Live HTTP checks passed: invalid voice project 400, malformed render JSON 400, foreign origin 403, invalid range 416, suffix range 206, stylesheet 200.
- Automated Chrome regression passed at 1440×1000, 1024×768, 820×1180, 768×1024, 390×844, 360×740, and 320×640: no horizontal overflow and no JavaScript page errors. Editing, reload persistence, tab navigation, and dialogs passed. Screenshots are in `artifacts/workspace-review/`; runner: `node scripts/check-workspace.mjs` (requires Chrome and the test server on port 8877, or `STUDIO_TEST_URL`).
- Browser checks cover desktop/tablet/mobile layouts, dialogue editing, persistence, settings tabs, keyboard tab navigation, and opening dialogs. New voice synthesis and full MP4 encoding are outside this UI regression run.

Files were changed and the static output rebuilt locally. No production deployment or subscription infrastructure was created.
