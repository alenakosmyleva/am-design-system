# Icons

## Overview

Icon library is stored in `/icons/` organized by size and style. All icons are SVG files using `currentColor` for dynamic coloring through CSS.

## Structure

```
icons/
├── 16/regular/     — 16x16 regular weight
├── 20/regular/     — 20x20 regular weight
├── 24/
│   ├── regular/    — 24x24 regular weight
│   └── bold/       — 24x24 bold weight
└── ...
```

## Available Sizes

| Size | Use case                              |
|------|---------------------------------------|
| 16px | Inline with small text, compact UI    |
| 20px | Default size for most UI elements     |
| 24px | Buttons, navigation, prominent icons  |
| 32px | Headers, empty states                 |
| 40px | Large feature icons                   |
| 48px | Illustrations, onboarding             |
| 64px | Hero sections, empty states           |

## Styles

| Style   | Description                    | Available sizes      |
|---------|--------------------------------|----------------------|
| regular | Standard stroke weight (1.5px) | All sizes            |
| bold    | Heavier stroke weight (2px)    | 24px and above       |
| filled  | Solid fill variant             | Varies per icon      |

## Coloring

All icons use `currentColor` — they inherit color from their parent element via CSS:

```html
<am-icon name="edit" class="icon-primary"></am-icon>
<am-icon name="delete" class="icon-critical"></am-icon>
```

```css
.icon-primary  { color: var(--icon-primary); }
.icon-critical { color: var(--icon-critical); }
```

## Icon + Badge Composition

For composite icons (e.g., user with a red cross), use two separate icons composed in a wrapper component. Do not bake multiple colors into a single SVG.

## SVG Requirements

When adding new icons:
- viewBox must match the icon size (e.g., `0 0 24 24`)
- Use `fill`, not `stroke` for paths
- No hardcoded colors — must use `currentColor`
- No `fill-opacity`, groups (`<g>`), masks, or clip-paths
- Flatten all boolean operations before export

## Usage Guidelines

### Do
- Use the correct size for context (16px inline, 24px in buttons)
- Color icons through semantic tokens (`icon/primary`, `icon/critical`)
- Use the same icon name across sizes for consistency

### Don't
- Don't hardcode colors in SVG files
- Don't scale icons via CSS transform — use the correct size variant
- Don't mix icon styles (regular/bold) within the same UI context
