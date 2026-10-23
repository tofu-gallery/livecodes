# LiveCodes on Tofu

This branch (`tofu`) is Tofu's adapted copy of [LiveCodes](https://github.com/live-codes/livecodes) for the Tofu app gallery. The mirror branch `develop` is upstream's default branch and stays untouched; every change Tofu needs is a commit on `tofu`, and the tag `pin/2026-10-23` marks the adapted commit the gallery copies.

## What the app is

LiveCodes is a code playground that runs entirely in the browser: write HTML, CSS and JavaScript (or TypeScript, React, Vue, Svelte, Python, Go, Rust, SQL: more than 90 languages and frameworks in all) in a Monaco editor and see the result next to it, with a console, compiled output, tests, starter templates, and projects saved in the visitor's own browser. There is no server and no account: code runs in a sandboxed frame, and each language's compiler is fetched from a public CDN the first time it is used.

## How Tofu runs it

| | |
|---|---|
| Framework preset | `static` (a finished site; Tofu builds nothing) |
| Root folder | `site` |
| Install command | none |
| Build command | none |
| Output directory | `site` itself (served as is: `index.html`, `app.html`, `livecodes/`, `sdk/`) |
| Environment variables | none |
| Database | none: projects, settings and snippets live in the visitor's browser (IndexedDB and localStorage) |

Why a committed site: LiveCodes builds with its own esbuild scripts (`scripts/build.js`, run by `npm run build:app`), not as a plain Vite app, so Tofu's static lane cannot build it. The finished site is built here and committed to `site/`, with a copy of the licence in `site/LICENSE`.

To rebuild `site/` (Node.js 22 or newer, npm and git): `bash tofu/build.sh`. The script applies `tofu/livecodes-tofu.patch` to upstream's sources for the length of the build only and puts them back afterwards, so no upstream file is edited on this branch. It then runs the same install as upstream's Dockerfile (`npm ci --ignore-scripts`, then `npx patch-package`), builds with `DOCS_BASE_URL=null npm run build:app` (help links point at upstream's online docs, https://livecodes.io/docs/, because this copy does not build the docs site), copies `build/` to `site/`, copies `LICENSE` into it and removes the Firebase chunk (see below). `site/` does not follow upstream by itself: after the daily sync brings new upstream commits, run the script again and pin a new tag. If upstream changes the lines the patch touches, `git apply --check` stops the script, and the patch needs refreshing.

## What we changed and why

Every change is an added file: `TOFU.md`, `tofu/build.sh`, `tofu/livecodes-tofu.patch` and `site/`. Upstream files on this branch are exactly upstream's, so merging upstream into `tofu` cannot conflict. The patch, applied only while building, changes this in the app:

1. **GitHub login is off.** Upstream signs people in to GitHub through upstream's own Firebase project, which only accepts upstream's own addresses, so on a copy it could only fail. `core.ts` now always creates the no-login stub that upstream already uses for embeds. The built chunk that holds upstream's Firebase project settings (`livecodes/firebase.*.js`) is only loaded by that login, so `tofu/build.sh` leaves it out of `site/`.
2. **Features that need that login, or upstream's own servers, are gone from the menus, the command menu (Ctrl+K) and `?screen=` links:** Login and Log out; Deploy (to GitHub Pages); Sync to a GitHub repository, with its Auto sync switch; Export to GitHub Gist; the GitHub Pages tab of Add Asset (the Data URL tab stays); and Broadcast with its status button, which sends code to upstream's server `vps.livecodes.io`.
3. **The Sponsor links are gone** from the Welcome screen, the About screen and the command menu (they pointed at upstream's sponsor page).
4. **The web app manifest's icons** point at the copy's own `livecodes/assets/images/` files instead of livecodes.io.

Analytics and tracking: none found. The source and the built site were searched for gtag, Google Tag Manager, Google Analytics, Plausible, Umami, PostHog, Mixpanel, Hotjar, Microsoft Clarity, Cloudflare Insights, `sendBeacon` and "telemetry"; nothing matched (the one hit, `analyticsTags: ['jsdelivr']`, is a field of jsDelivr's package-search request). Upstream's AI code assistant (Codeium / Windsurf) is already switched off in upstream's code; nothing to remove. No advertising.

What keeps working: the editor and every language, running code, the console, compiled view and tests, templates and snippets, saving and opening projects in the browser, backup and restore, import (files, ZIPs, URLs, public GitHub and GitLab files and folders, gists, JS Bin, CodePen, the TypeScript and Vue playgrounds), export (JSON, ZIP, HTML, Edit in CodePen, Edit in JSFiddle), share links, embed code, assets as data URLs, themes and the 18 interface languages.

What this copy loses compared with livecodes.io: GitHub login and everything built on it (deploy to GitHub Pages, sync, gists, asset upload to GitHub, private-repository import and the higher GitHub rate limit), Broadcast, and the Sponsor link. Importing from public GitHub still works without login, within GitHub's limit for anonymous requests.

## Public services and CDNs it calls

No key of Tofu's and no account. All of these are public; each is called only when the feature that needs it is used, except the first group.

- **Running code (always):** `livecodes-sandbox.pages.dev`, upstream's public static sandbox (`/v9/` and `/v9/compiler`), where results and compilers run in a separate origin so a project cannot reach the app's storage. On localhost and 127.0.0.1 upstream's code uses `http://127.0.0.1:8085` instead (`src/livecodes/html/sandbox`).
- **Editor, fonts and libraries at start:** `cdn.jsdelivr.net` (default CDN), `cdnjs.cloudflare.com` (polyfill), `fonts.googleapis.com` and `fonts.gstatic.com`.
- **Language compilers and npm packages, on first use:** `cdn.jsdelivr.net` and its mirrors `fastly.jsdelivr.net`, `gcore.jsdelivr.net`, `testingcf.jsdelivr.net`, `jsdelivr.b-cdn.net`; `esm.sh` (default for `import` of npm packages); `unpkg.com`, `npmcdn.com`, `cdn.skypack.dev`, `jspm.dev`, `esm.run`, `deno.bundlejs.com`, `edge.bundlejs.com`, `esbuild.vercel.app`, `bundle.run`, `cdn.statically.io`, `raw.githack.com`, `gist.githack.com`, `gl.githack.com`, `bb.githack.com` (modules imported from GitHub, GitLab, Bitbucket or gists); `cdn.rescript-lang.org` (ReScript), `cdn.opalrb.com` (Ruby via Opal), `ahmedwael216.gitlab.io` (Fanak), `fonts.cdnfonts.com` (fonts offered in settings).
- **Package search and information:** `ofcncog2cu-dsn.algolia.net` with jsDelivr's public search-only key that is part of upstream's code (the same one jsDelivr's own site uses), and `data.jsdelivr.com`.
- **Import:** `api.github.com`, `raw.githubusercontent.com`, `gist.github.com`, `gitlab.com`, `jsbin.com`; when a site does not allow cross-origin reads, the public proxy `api.allorigins.win`.
- **Export:** `codepen.io` and `jsfiddle.net` (Edit in CodePen / JSFiddle open those sites with the code).
- **Short share links (optional):** `dpaste.com`. The default share link carries the code compressed inside the URL and calls nothing.
- **Links only (not called):** upstream's docs, blog and social pages on livecodes.io and X, the permanent-version link `https://v49.livecodes.io/` on the About and Share screens, and the share-to-social links.

Upstream's own APIs `api.livecodes.io` and `api2.livecodes.io` are only used when the app runs on upstream's addresses, or on localhost and 127.0.0.1 (which upstream's code treats as its own); on a Tofu address the copy uses `api.allorigins.win` and `dpaste.com` instead.

## Upstream

- Repository: https://github.com/live-codes/livecodes (this fork: https://github.com/tofu-gallery/livecodes)
- Branch: `develop`
- Commit: `50c3286078c17d326f752a40438e81c65c2fc8c7` (2026-10-22, "Merge pull request #1077 from live-codes/scala"); app version 49, SDK 0.14.1. The About screen's "Git commit" reads `50c3286`, the upstream commit `site/` was built from.

## Licence and caveats

- MIT, copyright (c) 2021-2026 Hatem Hosny. `LICENSE` is unchanged; `site/LICENSE` and `site/sdk/LICENSE` are copies of it.
- Third-party code bundled into the site (for example luna-console, i18next, split.js, CodeJar, Prism, Yjs, lz-string and js-base64) is listed with its licences in upstream's `vendor-licenses.md`, kept unchanged. The Monaco editor itself loads from jsDelivr. Language compilers and runtimes are not stored in this repository; they load from the CDNs above under their own licences.
- The name LiveCodes, its logo and favicon are upstream's and are kept as they are.
- Fonts: DM Sans, JetBrains Mono and Inter load from jsDelivr (`@fontsource`, SIL Open Font License); Material Icons load from Google Fonts (Apache-2.0).
- `site/` includes upstream's built SDK (`site/sdk/`, with upstream's agent skill notes from `.agents/skills`); the running app does not load it.

## Verification

Done on 2026-10-23 with Node.js v22.22.3 and npm 10.9.8 (upstream's `.nvmrc` says 24.4.1; `package.json` asks for Node 22 or newer). Nothing was deployed.

- Install: `npm ci --ignore-scripts --no-audit --no-fund` added 1678 packages, exit 0; `npx patch-package` applied upstream's patches for codejar and git-semver-tags.
- Build: `bash tofu/build.sh` printed `built to: build/livecodes/` and `site/ rebuilt from build/ (421 files)`; `site/` is 9.2 MB. After the script, `git status` showed no upstream file changed.
- Import filter: `site/` has no folder or file the importer drops; a copy made with `rsync -a --exclude node_modules --exclude dist --exclude build --exclude target --exclude .cache site/ <scratch>/livecodes-imported/` still had all 421 files.
- Serve: `python3 -I -m http.server 8471 --bind 127.0.0.1 --directory <scratch>/livecodes-imported` answered 200 for `/` and `/app.html`. On 127.0.0.1 the app runs code in `http://127.0.0.1:8085`, so upstream's sandbox folder was served there too (`python3 -I -m http.server 8085 --bind 127.0.0.1 --directory src/livecodes/html/sandbox`): 200 for `/v9/` and `/v9/compiler.html`. Upstream's public sandbox that a Tofu address uses answered 200 for `https://livecodes-sandbox.pages.dev/v9/` (380 bytes) and `/v9/compiler` (682 bytes), the same sizes as the local files.
- Browser (Aside, own tab, 127.0.0.1 only): the playground loaded with the Monaco editor; the Welcome screen shows Blog, X and GitHub and no Sponsor tile. Typed `<h1 id="out">Waiting</h1>` into HTML and a script setting it to `"Ran: " + [2, 3, 7].reduce((a, b) => a * b, 1)` plus `console.log("tofu-check", 6 * 7)` into JS, clicked Run: the result showed "Ran: 42" and the console "tofu-check 42". The JavaScript Starter template ran ("Hello, JavaScript!"); saved as "Tofu save check", it was listed under Open, Saved Projects.
- Removed features: Login, Log out, Deploy, Broadcast and its status button, Sync and Export to GitHub Gist are not in the page; the command menu lists 36 actions and none of those, Sponsor, Login or Logout; the About screen has no sponsor link; `?screen=deploy`, `?screen=broadcast`, `?screen=sync` and `?screen=login` open nothing.
- Console and network: no console errors or warnings in the host page or the app frame (hook installed before load, read from the page's main world); no request with an HTTP 4xx or 5xx in the browser's resource timing; outside hosts used at start and on Run were `cdn.jsdelivr.net`, `cdnjs.cloudflare.com`, `fonts.googleapis.com` and `fonts.gstatic.com`.
- Import check, after pushing `tofu`: `python3 -I /private/tmp/shelf-check/simulate_import.py --one tofu-gallery/livecodes tofu site yes` reported `root=site kept=421 dropped=0`, with nothing dropped by the import. Its 12 "missing in the pin" lines are upstream's own references and change nothing for the app: the oEmbed link in `index.html` and `404.html` (upstream answers it with a Cloudflare function; only oEmbed readers use it), `404.html`'s link to `/`, and SVG names inside the diagrams starter template, which the template's own code draws when it runs.
- Size: the `tofu` branch archive at commit `b872002` (`https://codeload.github.com/tofu-gallery/livecodes/legacy.zip/refs/heads/tofu`) was 42,483,170 bytes compressed, with 2,388 files and 69.9 MB unpacked, inside the importer's 50 MB, 20,000-file and 250 MB limits. Most of it is upstream's `docs/` folder (44.6 MB of screenshots and videos), which the app does not use; it is kept because the archive fits. The pinned commit only adds these lines.
- Not checked here: a deployment on Tofu, languages other than HTML and JavaScript, short share links, imports through the CORS proxy, and running code through upstream's public sandbox from a real address.
