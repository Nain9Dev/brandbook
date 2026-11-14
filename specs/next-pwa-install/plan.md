# Implementation plan: Installable brandbook

Status: Draft

## Modules

- **Manifest**: `manifest.webmanifest` at the repository root, published as is by the Pages workflow
  (`upload-pages-artifact` with `path: "."`). Covers INS-001, INS-002.
- **Icons**: `icons/icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, rendered
  from the NainDev mark (`public/assets/images/favicon-optimized.svg` of the portfolio repository). Covers
  INS-003.
- **Head tags**: the `<head>` of `index.html`, the only document. Covers INS-001, INS-004.
- **Guard**: `tests/pwa-install.test.mjs`, next to `tests/seo.test.mjs`. Covers INS-001 to INS-006.

## Data model changes

None.

## Key decisions

- **Decision**: relative paths (`./`, `icons/...`) in the manifest and the head.
  - **Rationale**: the page is one document that already links its assets relatively.
- **Decision**: colours `#edf1f6`, the `--paper` background, with status bar style `default`.
  - **Rationale**: the page is light; the splash screen should match what the page paints first.
- **Decision**: no service worker. Owner decision of 2026-11-13; adding one needs its own ADR.

## Icons command

The tile blends into the background and the mark ends at 36% of the width from the centre:

```
node make-install-icons.mjs --source <portfolio>/public/assets/images/favicon-optimized.svg \
  --out icons --bg "#002B66" --maskable-scale 0.846 --apple-scale 1
```

## Test strategy

- `node:test` contract test on the manifest, the PNG headers (size read from IHDR, no dependency) and the
  head tags of `index.html`.
- Manual: `Page.getInstallabilityErrors` on the root; after the deploy, an Android phone and an iPhone.
- No workflow runs `tests/` today (the only workflow deploys). Run `node --test` locally, from the repository root.
