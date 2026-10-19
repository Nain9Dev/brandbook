# NainDev Brandbook & Design System (v1.5)

[![Live Portal](https://img.shields.io/badge/Live-brand.naindev.com-0047AB)](https://brand.naindev.com)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1_AAA%2FAA-22c55e)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Tokens](https://img.shields.io/badge/Tokens-CSS_Variables-3C5F94)](#design-tokens)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red)](#brand-protection--license)
[![Cost](https://img.shields.io/badge/Cost-0.00_%E2%82%AC-22c55e)](#zero-billable-cost)

Official visual identity specifications, geometric logo mathematics, color palette contrast tables, typography scale, and layout guidelines for the **NainDev Ecosystem**.

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
