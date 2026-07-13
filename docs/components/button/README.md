# Button

## Description
Primary interactive element for user actions.

## Variants
- **Primary** — the high‑priority default style used for key actions and primary user flows. Provides the strongest visual hierarchy
- **Secondary** — a reduced‑emphasis variant intended for supporting actions. Works seamlessly alongside primary and accent styles while maintaining clear interface hierarchy 
- **Tertiary** — a minimal, low‑priority style used for auxiliary actions where reducing visual density is important
- **Accent** — an attention‑driven style for actions that require elevated user focus or carry critical significance

## States
- Default
- Hover
- Active
- Focused
- Disabled

## Usage Guidelines

### Do
- Use primary button for the single most important action on screen
- Keep labels short and action-oriented ("Save", "Submit", "Create")
- Use only one primary button per screen section

### Don't
- Don't use more than one primary button in a group
- Don't use generic labels ("Click here", "OK")
- Don't disable buttons without explanation — use tooltips

## Figma
<!-- Link to Figma component: -->

## Accessibility
- Must be focusable via keyboard
- Use `aria-label` when the label is icon-only
