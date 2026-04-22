# Colors

## Overview
Color palette for the design system. All colors are defined in `/tokens/tokens.json` and should be referenced through design tokens, not hardcoded values.

## Palette Structure

### Brand Colors
Primary and secondary brand colors used across the product.

### Semantic Colors
- **Success** — positive actions, confirmations
- **Warning** — alerts, caution states
- **Error** — destructive actions, validation errors
- **Info** — informational messages

### Neutral Colors
Grays and neutral tones for text, backgrounds, borders.

## Usage Guidelines

### Do
- Use semantic colors for their intended purpose
- Ensure contrast ratios meet WCAG AA (4.5:1 for text)
- Use tokens: `var(--color-primary)`, not `#3B82F6`

### Don't
- Don't hardcode HEX values in components
- Don't use color as the only way to convey meaning
- Don't create one-off colors outside the palette
