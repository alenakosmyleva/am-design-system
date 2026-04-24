# Typography

## Overview

Typography system defines font families, sizes, weights, and line heights used across all products. Values are stored in `/tokens/tokens.json`.

## Font Families

| Font | CSS Variable | Use case |
|------|-------------|----------|
| Inter | `--font-family-primary` | Titles, labels, body text |
| Noto Sans | `--font-family-number` | Numeric values, data, KPIs |

```css
--font-family-primary: "Inter", "Helvetica", "Arial", sans-serif;
--font-family-number: "Noto Sans", "Inter", "Helvetica", "Arial", sans-serif;
```

## Type Scale

### Title (Inter, Medium 500)

| Token | Size | Weight | Line height | CSS Variable prefix | Use case |
|-------|------|--------|-------------|---------------------|----------|
| H1 | 28px | 500 | 40px | `--title-h1-*` | Page titles, hero headings |
| H2 | 24px | 500 | 32px | `--title-h2-*` | Section headings |
| H3 | 20px | 500 | 28px | `--title-h3-*` | Card titles, subsection headings |

### Label (Inter, Medium 500)

| Token | Size | Weight | Line height | CSS Variable prefix | Use case |
|-------|------|--------|-------------|---------------------|----------|
| xl | 20px | 500 | 28px | `--label-xl-*` | Large labels, prominent UI elements |
| l | 16px | 500 | 24px | `--label-l-*` | Default labels, buttons, navigation |
| m | 14px | 500 | 20px | `--label-m-*` | Small labels, tags, badges |

### Body (Inter, Regular 400)

| Token | Size | Weight | Line height | CSS Variable prefix | Use case |
|-------|------|--------|-------------|---------------------|----------|
| xl | 20px | 400 | 28px | `--body-xl-*` | Lead paragraphs |
| l | 16px | 400 | 24px | `--body-l-*` | Primary body text |
| m | 14px | 400 | 20px | `--body-m-*` | Secondary body text |
| s | 13px | 400 | 18px | `--body-s-*` | Captions, hints, helper text |

### Number (Noto Sans)

| Token | Size | Weight | Line height | CSS Variable prefix | Use case |
|-------|------|--------|-------------|---------------------|----------|
| xxl | 24px | 500 | 32px | `--number-xxl-*` | Large KPIs, dashboards |
| xl | 20px | 400 | 28px | `--number-xl-*` | Medium numeric values |
| l | 16px | 400 | 24px | `--number-l-*` | Table numbers, standard data |
| l-significant | 16px | 600 | 24px | `--number-l-significant-*` | Highlighted numbers, totals |
| m | 14px | 400 | 20px | `--number-m-*` | Small numeric values |

## CSS Usage

Each token provides three CSS custom properties: `-size`, `-weight`, and `-line-height`.

```css
/* Example: applying title H1 style */
.page-title {
  font-family: var(--font-family-primary);
  font-size: var(--title-h1-size);
  font-weight: var(--title-h1-weight);
  line-height: var(--title-h1-line-height);
}

/* Example: applying number style for a dashboard KPI */
.kpi-value {
  font-family: var(--font-family-number);
  font-size: var(--number-xxl-size);
  font-weight: var(--number-xxl-weight);
  line-height: var(--number-xxl-line-height);
}
```

## Usage Guidelines

### Do
- Use the type scale consistently — don't invent custom sizes
- Maintain clear hierarchy on every screen
- Use font weight to create emphasis, not font size alone
- Use Noto Sans for all numeric/data values for better readability
- Use `label` category for interactive elements (buttons, navigation, form labels)
- Use `body` category for running text and descriptions

### Don't
- Don't use more than 2 font weights on a single screen
- Don't go below 13px for any readable text
- Don't use ALL CAPS for more than short labels
- Don't use Inter for numeric-heavy data — use Noto Sans instead
- Don't mix title and label styles for the same hierarchy level
