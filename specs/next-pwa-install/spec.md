# Specification: Installable brandbook (Android and iOS)

Status: Implemented on `feat/pwa-install-brand`, not merged

## Objective

A visitor on a phone can install `brand.naindev.com` from the browser and open it like an app: its own icon and
name on the home screen and a window with no browser bar. Android Chrome and iOS Safari are the targets.

The shared contract and the verified browser criteria live in the portfolio spec
(`Nain9Dev/nain9dev.github.io`, `specs/next-pwa-install/spec.md`). This file only records what is specific to
this repository. The repository has no `docs/` requirements file, so the ids below are local to this spec.

## Names (approved by the owner on 2026-11-13)

- `short_name`: `NainBrand` (label under the icon, within 12 characters).
- `name`: `NainDev Brandbook`.

## Functional requirements (EARS)

- **INS-001**: The site shall publish `manifest.webmanifest` at its root, and `index.html` shall link it with
  `<link rel="manifest" href="manifest.webmanifest">` (relative paths, like every other asset of the page).
- **INS-002**: The manifest shall declare `id`, `start_url` and `scope` as `./`, `display` as `standalone`,
  `lang` as `es`, `dir` as `ltr`, `name` and `short_name` as above, the page meta description verbatim as
  `description`, and `theme_color` and `background_color` as `#edf1f6` (the `--paper` colour the body paints
  first). It shall not declare `prefer_related_applications`.
- **INS-003**: The manifest shall declare three PNG icons in `icons/` that exist at the declared size: 192 px
  and 512 px with purpose `any`, and 512 px with purpose `maskable` (opaque, mark inside the centred circle of
  radius 40% of the width). `icons/apple-touch-icon.png` shall be a 180 px PNG.
- **INS-004**: `index.html` shall carry `apple-touch-icon`, `theme-color` (`#edf1f6`), `mobile-web-app-capable`
  and `apple-mobile-web-app-capable` set to `yes`, `apple-mobile-web-app-title` equal to `short_name`, and
  `apple-mobile-web-app-status-bar-style` set to `default` (light page).
- **INS-005**: The site shall not register a service worker.
- **INS-006**: `node --test` shall fail if INS-001 to INS-005 regress.

## Edge cases and error handling

- The deploy workflow uploads the repository root (`path: "."`), so the manifest and `icons/` are published
  as files with no copy list to change. The site has no Content-Security-Policy and no SPA fallback.
- Offline: no service worker, so an installed window without network shows the browser's own offline screen.
- The install icons are the NainDev tile (`#002B66`, green strokes), the same as the other sites of the family.

## Out of scope

A service worker, offline page, cache or install button (owner decision of 2026-11-13); screenshots for the
richer Android dialog; a store package.

## Acceptance criteria

- `node --test` passes with `tests/pwa-install.test.mjs`.
- Chrome reports no installability error for the repository root served as published.
- After the deploy, the live manifest answers 200, and the owner installs the site on Android and on an
  iPhone: the icon shows the mark uncropped, the label reads `NainBrand`, the window has no browser bar.

## Session state

- Last updated: 2026-11-14
- Done: T01 to T03.
- Verified: `node --test` passes; `Page.getInstallabilityErrors` is empty on the root.
- Next: T04 after the merge (live manifest, install on both phones).
- Blocked: nothing. T04 needs the owner's phones.
