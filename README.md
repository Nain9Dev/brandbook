<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/banner-light.svg">
  <img src="docs/assets/banner-dark.svg" alt="NainDev Brandbook & Design System" width="100%">
</picture>

<div align="center">

[![Language: English](https://img.shields.io/badge/Language-English-blue?style=flat-square)](README.md)
[![Versión en Español](https://img.shields.io/badge/Versi%C3%B3n-Espa%C3%B1ol-red?style=flat-square)](README.es.md)
[![Live Portal](https://img.shields.io/badge/Live-brand.naindev.com-0047AB?style=flat-square&logo=google-chrome&logoColor=white)](https://brand.naindev.com)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1_AAA%2FAA-80FF00?style=flat-square&logo=checkmarx&logoColor=black)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Tokens](https://img.shields.io/badge/Tokens-CSS_Variables-3C5F94?style=flat-square)](#design-tokens)
[![Cost](https://img.shields.io/badge/Cost-0.00_%E2%82%AC-22c55e?style=flat-square)](#zero-billable-cost)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=flat-square)](#brand-protection--license)

**Official visual identity specifications, geometric logo mathematics, color palette contrast tables, and 7 design principles for the NainDev Ecosystem.**

[Live Brandbook](https://brand.naindev.com) &bull; [Design Tokens](tokens.css) &bull; [Ecosystem Bar](ecosystem-bar.js)

</div>

---

## The Seven Architectural & Design Principles

Every component, interface, and repository in the NainDev ecosystem rigorously enforces seven classical aesthetic and structural principles:

1. **Hierarchy (Jerarquía)**: Strict visual and information hierarchy. Blueprint `<picture>` hero banner (32:9) -> `<h1>` -> subtitle -> standardized badges -> C4 architecture -> technical documentation.
2. **Balance (Equilibrio)**: Balanced structural symmetry. Centered navigation shells, dual-theme balance, reciprocal bilingual parity (`en`/`es`), and harmonized visual weights.
3. **Rhythm (Ritmo)**: Modular spacing cadence based on 4px and 8px units (`--nain-s1` through `--nain-s32`), 40px blueprint millimeter grids with 8px subdivisions.
4. **Proportion (Proporción)**: Precise mathematical ratios. 32:9 hero banners (1280x360 px), 2:1 OG cards (1280x640 px), 68ch reading measures, 52.0° traversal line, and 14.0% stroke ratio on the `N` mark.
5. **Light (Luz)**: Deterministic contrast compliance. Dual dark/light modes meeting WCAG 2.1/2.2 AAA ratios (12.0:1 on `--nain-blue-deep`, 10.6:1 for `--nain-green` on `#002B66`).
6. **Shadow (Sombra)**: Tactile, zero-blur solid block shadows (`22px 22px 0 var(--nain-brand-black)` and `6px 6px 0`). Zero diffuse drop-shadow noise.
7. **Alignment (Alineación)**: Strict coordinate alignment on blueprint grid lines. Zero optical drift, pixel-accurate bounding boxes, and consistent container margins.

---

## Brand Principles

- **The Logo Leads**: All line thicknesses, gaps, and accents derive mathematically from the `N` mark atom (14.0% stroke thickness, 46 px perpendicular clearance, 52.0° diagonal angle).
- **Engineering Over Decoration**: No arbitrary gradients or decorative noise. Graphic components are functional cotas, precision grids, and structured data tables.
- **Surface Law**: Sections alternate between tactile paper (`#EDF1F6`) and deep brand blue (`#002B66`), each with its own verified AAA/AA contrast typography and accent rules.

---

## Design Tokens

Import the standalone token stylesheet into any application:

```html
<link rel="stylesheet" href="https://brand.naindev.com/tokens.css">
```

### Core Palette

| Token | Hex | Role | Luminance Ratio |
| :--- | :--- | :--- | :--- |
| `--nain-blue-deep` | `#002B66` | Primary reading ink | **12.0:1 (AAA)** |
| `--nain-blue` | `#0047AB` | Brand signature & primary CTA | **7.4:1 (AAA)** |
| `--nain-paper` | `#EDF1F6` | Primary background canvas | Base surface |
| `--nain-surface` | `#F7F9FC` | Elevated card container | Raised surface |
| `--nain-green` | `#80FF00` | Complementary accent on deep blue | **10.6:1 on #002B66 (AAA)** |
| `--nain-red` | `#FF001F` | Precision accent & click halo | **180.0° complementary** |
| `--nain-brand-black` | `#1D1D1B` | Print & solid block shadow (22px) | **14.9:1 (AAA)** |

---

## Mathematical Isotype Anatomy

- **Bounding Box**: Exactly 812 × 812 square.
- **Stroke Width**: 114 px (14.0% of bounding height).
- **Corner Radii**: 57 px (exact semicircle: $\frac{1}{2}$ stroke width).
- **Diagonal Traversal**: Angle of 52.0° above horizontal.
- **Clearance**: Minimum perpendicular clearance of 46 px ($0.40 \times$ stroke width).

---

## Zero Billable Cost

The brandbook is hosted statically via GitHub Pages and edge-proxied through Cloudflare at **0.00 €** operating cost.

---

## Brand Protection & License

The NainDev brand assets, logos, typography hierarchy, and visual design specifications are **All Rights Reserved** (see [LICENSE](LICENSE)). The standalone `tokens.css` file is available for technical reference and authorized ecosystem integration. Commercial reproduction or unauthorized rebranding is strictly prohibited.
