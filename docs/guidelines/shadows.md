# Shadows

## Overview

Shadow system provides depth and elevation for UI elements. Shadow tokens are stored in `/tokens/shadow.json`. Shadow colors reference semantic tokens from `/tokens/colors.json` (`effects/primary`, `effects/secondary`, `effects/tertiary`), which support Light and Dark modes.

## Scale

Each shadow consists of two layers for a realistic effect: a soft ambient layer and a sharper direct layer.

| Token     | Layer 1 (ambient)       | Layer 2 (direct)        | Use case                     |
|-----------|-------------------------|-------------------------|------------------------------|
| shadow/sm | 0 4px 12px effects/secondary | 0 1px 1px effects/tertiary | Cards, inputs, subtle lift   |
| shadow/md | 0 8px 24px effects/primary   | 0 1px 4px effects/secondary | Dropdowns, popovers, tooltips |
| shadow/lg | 0 20px 64px effects/primary  | 0 2px 12px effects/secondary | Modals, dialogs, overlays    |

## CSS Output

```css
/* shadow/sm */
box-shadow: 0px 4px 12px 0px var(--effects-secondary),
            0px 1px 1px 0px var(--effects-tertiary);

/* shadow/md */
box-shadow: 0px 8px 24px 0px var(--effects-primary),
            0px 1px 4px 0px var(--effects-secondary);

/* shadow/lg */
box-shadow: 0px 20px 64px 0px var(--effects-primary),
            0px 2px 12px 0px var(--effects-secondary);
```

## Usage Guidelines

### Do
- Use shadow/sm for static elements that need subtle elevation (cards, inputs)
- Use shadow/md for interactive overlays (dropdowns, popovers)
- Use shadow/lg for modals and dialogs that sit on top of everything
- Shadows adapt to Light/Dark mode automatically through effects tokens

### Don't
- Don't create custom shadow values outside this scale
- Don't combine multiple shadow tokens on one element
- Don't use shadows as the only indicator of interactivity
