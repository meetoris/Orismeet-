# Oris Meet — Brand Asset Manifest

Everything below is currently **Cal.com artwork** and needs replacing with Oris Meet assets.
This is the exact list, with dimensions and the code that references each file.

There are two ways to brand the logo — pick one:

- **Fastest (zero code):** drop your files into `apps/web/public/` using the **same filenames** listed below. Everything wires automatically; no code change.
- **Cleanest (renamed files):** give the files Oris-Meet names and I'll update the
  `LOGO` / `LOGO_DARK` / `LOGO_ICON` constants in `packages/lib/constants.ts` to match. (Tell me and I'll do it once the files exist — repointing before the files land would 404 the logo.)

> Alternatively, the logo can be set at runtime without any file change: an org admin can
> upload a logo in **Settings → Organization → Appearance** (served via `/api/logo`, which
> falls back to the static files below when no upload exists).

---

## 1. Logos — `apps/web/public/`
Referenced by `packages/lib/constants.ts` and served through `apps/web/app/api/logo/route.ts`.

| Current file | Const | Used for | Spec |
|---|---|---|---|
| `calcom-logo-white-word.svg` | `LOGO` | Full wordmark, light-on-dark (nav, emails) | SVG, ~max height 32px render |
| `cal-logo-word-black.svg` | `LOGO_DARK` | Full wordmark, dark-on-light | SVG |
| `cal-com-icon-white.svg` | `LOGO_ICON` | Square icon mark | SVG, square |
| `cal-logo-word-dark.svg`, `calcom-white.svg`, `cal-com-icon.svg` | — | Misc variants used around the app | SVG |

## 2. Favicons & app icons — `apps/web/public/`
Served via `/api/logo` fallbacks (`FAVICON_16`, `FAVICON_32`, `APPLE_TOUCH_ICON`, `MSTILE_ICON`,
`ANDROID_CHROME_ICON_192/256`) and referenced in `app/layout.tsx` + `pages/_document.tsx` + `site.webmanifest`.

| Current file | Spec |
|---|---|
| `favicon.ico` (also `apps/web/app/favicon.ico`) | 16/32/48 multi-res .ico |
| `favicon-16x16.png` | 16×16 PNG |
| `favicon-32x32.png` | 32×32 PNG |
| `apple-touch-icon.png` | 180×180 PNG |
| `android-chrome-192x192.png` | 192×192 PNG |
| `android-chrome-256x256.png` | 256×256 PNG |
| `android-chrome-384x384.png`, `android-chrome-512x512.png` | 384 / 512 PNG |
| `mstile-150x150.png` (+ 144/310 variants) | Windows tiles (tile color already set to `#111827`) |
| `safari-pinned-tab.svg` | Monochrome SVG mask icon |

## 3. Social / OG image — `apps/web/public/`  ⚠️ MISSING

| File | Const | Spec |
|---|---|---|
| `og-image.png` | `SEO_IMG_DEFAULT` in `constants.ts` | **1200×630 PNG**, Oris Meet branded |

> Note: most pages generate an OG image dynamically via `/api/social/og/image`. `og-image.png`
> is the static fallback for shares that hit it directly — currently 404s, so please add it.

## 4. Optional / lower-priority — `apps/web/public/`

| Current file(s) | Used for |
|---|---|
| `continue-with-calcom-*.svg` (8 variants) | SSO "Continue with…" buttons (only if you offer Oris Meet as an SSO provider) |
| `mock-event-type-list.svg`, `mock-event-type-list-dark.svg` | Marketing mockup on the signup page right panel |
| `product-cards/*.svg` | ProductHunt/G2/Google award badges — **only render when `IS_CALCOM` is true, so never shown on orismeet.com**; safe to ignore/remove |

---

## Provide the files and I'll finish the wiring
Drop the assets in `apps/web/public/` (same names = done automatically). If you use new
filenames for the three logos, send me the names and I'll update `LOGO` / `LOGO_DARK` /
`LOGO_ICON` in `packages/lib/constants.ts` and verify the build.
