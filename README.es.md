<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/banner-light.svg">
  <img src="docs/assets/banner-dark.svg" alt="Manual de Marca y Sistema de Diseño de NainDev" width="100%">
</picture>

<div align="center">

[![Versión en Español](https://img.shields.io/badge/Idioma-Espa%C3%B1ol-red?style=flat-square)](README.es.md)
[![English Version](https://img.shields.io/badge/Language-English-blue?style=flat-square)](README.md)
[![Portal en Vivo](https://img.shields.io/badge/En%20Vivo-brand.naindev.com-0047AB?style=flat-square&logo=google-chrome&logoColor=white)](https://brand.naindev.com)
[![Accesibilidad](https://img.shields.io/badge/WCAG-2.1_AAA%2FAA-80FF00?style=flat-square&logo=checkmarx&logoColor=black)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Tokens](https://img.shields.io/badge/Tokens-Variables_CSS-3C5F94?style=flat-square)](#tokens-de-diseño)
[![Coste](https://img.shields.io/badge/Coste-0.00_%E2%82%AC-22c55e?style=flat-square)](#cero-coste-facturable)
[![Licencia](https://img.shields.io/badge/Licencia-Todos_los_Derechos_Reservados-red?style=flat-square)](#protección-de-marca-y-licencia)

**Especificaciones oficiales de identidad visual, matemáticas geométricas del isotipo, tablas de contraste de color y los 7 principios de diseño del ecosistema NainDev.**

[Manual en Vivo](https://brand.naindev.com) &bull; [Tokens de Diseño](tokens.css) &bull; [Barra de Ecosistema](ecosystem-bar.js)

</div>

---

## Los Siete Principios de Arquitectura y Diseño

Cada componente, interfaz y repositorio en el ecosistema NainDev aplica rigurosamente siete principios estéticos y estructurales clásicos:

1. **Jerarquía**: Jerarquía visual y de información estricta. Banner técnico `<picture>` (32:9) -> `<h1>` -> subtítulo -> insignias estandarizadas -> arquitectura C4 -> documentación técnica estructurada.
2. **Equilibrio**: Simetría estructural balanceada. Contenedores de navegación centrados, equilibrio en doble tema, paridad bilingüe recíproca (`en`/`es`) y pesos visuales armonizados.
3. **Ritmo**: Cadencia modular de espaciado basada en múltiplos de 4px y 8px (`--nain-s1` a `--nain-s32`), cuadrícula milimétrica de plano técnico de 40px con subdivisiones de 8px.
4. **Proporción**: Razones matemáticas exactas. Banners hero 32:9 (1280x360 px), tarjetas OG 2:1 (1280x640 px), medidas de lectura de 68ch, línea transversal a 52.0° y grosor de trazo del 14.0% en el isotipo `N`.
5. **Luz**: Conformidad determinista de contraste. Doble modo oscuro/claro que cumple los ratios WCAG 2.1/2.2 AAA (12.0:1 en `--nain-blue-deep`, 10.6:1 para `--nain-green` sobre `#002B66`).
6. **Sombra**: Sombras táctiles en bloque macizo sin desenfoque (`22px 22px 0 var(--nain-brand-black)` y `6px 6px 0`). Cero ruido difuso decorativo.
7. **Alineación**: Alineación estricta de coordenadas sobre la cuadrícula del plano. Cero desviación óptica, cajas delimitadoras exactas al píxel y márgenes consistentes.

---

## Principios de Marca

- **El Logotipo Marca la Pauta**: Todos los grosores de línea, separaciones y acentos derivan matemáticamente del átomo de la `N` (grosor de trazo del 14.0%, separación perpendicular de 46 px, ángulo diagonal de 52.0°).
- **Ingeniería sobre Decoración**: Sin degradados arbitrarios ni artificios decorativos. Los elementos gráficos son cotas funcionales, cuadrículas de precisión y tablas estructuradas.
- **Ley de Superficies**: Las secciones alternan entre papel táctil (`#EDF1F6`) y azul profundo de marca (`#002B66`), cada uno con sus propias reglas de tipografía y acentos verificados en contraste AAA/AA.

---

## Tokens de Diseño

Importa la hoja de estilos de tokens independiente en cualquier aplicación:

```html
<link rel="stylesheet" href="https://brand.naindev.com/tokens.css">
```

### Paleta Principal

| Token | Hex | Rol | Ratio de Luminancia |
| :--- | :--- | :--- | :--- |
| `--nain-blue-deep` | `#002B66` | Tinta de lectura principal | **12.0:1 (AAA)** |
| `--nain-blue` | `#0047AB` | Firma de marca y llamada a la acción principal | **7.4:1 (AAA)** |
| `--nain-paper` | `#EDF1F6` | Lienzo de fondo base | Superficie base |
| `--nain-surface` | `#F7F9FC` | Contenedor de tarjetas elevadas | Superficie elevada |
| `--nain-green` | `#80FF00` | Acento complementario sobre azul profundo | **10.6:1 sobre #002B66 (AAA)** |
| `--nain-red` | `#FF001F` | Acento de precisión y halo de clic | **Complementario 180.0°** |
| `--nain-brand-black` | `#1D1D1B` | Impresión y sombra maciza en bloque (22px) | **14.9:1 (AAA)** |

---

## Anatomía Geométrica del Isotipo

- **Caja Delimitadora**: Cuadrado exacto de 812 × 812.
- **Grosor de Trazo**: 114 px (14.0% de la altura total).
- **Radios de Esquina**: 57 px (semicírculo exacto: $\frac{1}{2}$ del grosor del trazo).
- **Línea Diagonal**: Ángulo de 52.0° sobre la horizontal.
- **Separación**: Distancia perpendicular mínima de 46 px ($0.40 \times$ grosor de trazo).

---

## Cero Coste Facturable

El manual de marca está alojado de forma estática mediante GitHub Pages y enrutado a través de Cloudflare Edge a un coste operativo de **0.00 €**.

---

## Protección de Marca y Licencia

Los activos de la marca NainDev, logotipos, jerarquía tipográfica y especificaciones de diseño visual están protegidos bajo **Todos los Derechos Reservados** (ver [LICENSE](LICENSE)). El archivo independiente `tokens.css` está disponible para referencia técnica e integración autorizada en el ecosistema. Queda estrictamente prohibida la reproducción comercial o el cambio de marca sin autorización.
