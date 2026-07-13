# Button

## Description
Primary interactive element for user actions.

## Variants
- **Accent** — an attention‑driven style for actions that require elevated user focus or carry critical significance
- **Primary** — the high‑priority default style used for key actions and primary user flows. Provides the strongest visual hierarchy
- **Secondary** — a reduced‑emphasis variant intended for supporting actions. Works seamlessly alongside primary and accent styles while maintaining clear interface hierarchy 
- **Tertiary** — a minimal, low‑priority style used for auxiliary actions where reducing visual density is important

## Semantic Variants
- **Success** — a positive semantic style used for actions that require user attention and explicit confirmation of permission. Communicates a safe, approved, or system‑endorsed outcome and is typically applied to actions such as Allow or Confirm
- **Critical** — a high‑risk semantic style used for actions that require user attention and explicit confirmation of prohibition. Indicates a restrictive, potentially irreversible consequence and is applied to actions such as Block or Deny
- **Caution** — a warning semantic style used for actions that require user attention and explicit confirmation of a system‑discouraged choice. Signals elevated risk or deviation from recommended behavior and is applied to actions such as Proceed anyway


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
