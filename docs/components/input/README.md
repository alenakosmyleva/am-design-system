# Input

## Description
Text input field for forms and data entry.

## Variants
- **Text** — standard single-line input
- **Password** — masked input
- **Search** — with search icon and clear action
- **Textarea** — multi-line input

## States
- Default
- Hover
- Focused
- Filled
- Error
- Disabled

## Usage Guidelines

### Do
- Always provide a visible label above the input
- Use placeholder text as a hint, not as a label
- Show validation errors inline below the field

### Don't
- Don't rely on placeholder text as the only label
- Don't use red color as the sole indicator of error — add an icon or message
- Don't auto-clear user input on validation failure

## Figma
<!-- Link to Figma component: -->

## Accessibility
- Associate labels with inputs using `for`/`id`
- Use `aria-describedby` for error messages
- Support keyboard navigation (Tab, Shift+Tab)
