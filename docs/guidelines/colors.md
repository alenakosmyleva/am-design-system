# Colors

## Overview

Color system is built on two levels of tokens, stored in `/tokens/`:

- **`palette.json`** — primitive colors (HEX/RGBA values). The single source of truth for all color values.
- **`colors.json`** — semantic aliases that reference palette tokens. Supports Light and Dark modes.

All components must use semantic tokens, not palette primitives or hardcoded values.

## Architecture

```
palette.json (primitives)        colors.json (semantic)
─────────────────────────        ──────────────────────
black/minor: #333333       ←──  button/primary (Light)
white/90:    #ffffffe5     ←──  button/primary (Dark)
red/main:    #ff3d61       ←──  icon/critical, text/critical, border/critical
green/main:  #60b076       ←──  icon/success, text/success, border/success
blue/main:   #4a7dff       ←──  icon/info, text/info, border/info
yellow/main: #ec9f00       ←──  icon/caution, text/caution, border/caution
```

Changing a value in `palette.json` automatically propagates to all semantic tokens that reference it.

## Palette Groups

| Group      | Purpose                          | Examples                    |
|------------|----------------------------------|-----------------------------|
| product    | Brand accent color               | product/main                |
| black      | Dark base + opacity variants     | black/main, black/80, black/24 |
| white      | Light base + opacity variants    | white/main, white/90, white/50 |
| blue-black | Primary neutral tone             | blue-black/main, blue-black/60 |
| grey       | Pure neutrals                    | grey/1 through grey/10      |
| blue-grey  | Cool neutrals                    | blue-grey/1 through blue-grey/9 |
| red        | Critical/error states            | red/main, red/1, red/9      |
| green      | Success states                   | green/main, green/1, green/9 |
| blue       | Info states                      | blue/main, blue/1, blue/9   |
| yellow     | Caution/warning states           | yellow/main, yellow/1, yellow/9 |
| purple     | Debug/special states             | purple/main, purple/1, purple/9 |

## Semantic Token Groups

| Group    | Purpose               | Examples                              |
|----------|-----------------------|---------------------------------------|
| text     | Text colors           | text/primary, text/disabled, text/critical |
| icon     | Icon colors           | icon/primary, icon/secondary, icon/info |
| button   | Button fills          | button/primary, button/hover, button/disabled |
| fill     | Surface/background fills | fill/success, fill/hover, fill/selected |
| bg       | Page backgrounds      | bg/primary, bg/secondary, bg/tertiary |
| border   | Border colors         | border/primary, border/disabled, border/critical |
| effects  | Shadow colors         | effects/primary, effects/secondary, effects/tertiary |

## Usage Guidelines

### Do
- Use semantic tokens for their intended purpose
- Ensure contrast ratios meet WCAG AA (4.5:1 for text)
- Use tokens: `var(--text-primary)`, not `#333333`
- Reference semantic tokens in components, not palette primitives

### Don't
- Don't hardcode HEX values in components
- Don't use color as the only way to convey meaning
- Don't create one-off colors outside the palette
- Don't reference palette tokens directly in components — use semantic tokens
