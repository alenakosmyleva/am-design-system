# Typography

## Overview

Typography system defines font families, sizes, weights, and line heights used across all products. Values are stored in `/tokens/tokens.json`.

## Scale

| Token          | Size | Weight | Line height | Use case              |
|----------------|------|--------|-------------|-----------------------|
| heading-xl     | 32px | 700    | 40px        | Page titles           |
| heading-lg     | 24px | 700    | 32px        | Section titles        |
| heading-md     | 20px | 600    | 28px        | Card titles           |
| body-lg        | 16px | 400    | 24px        | Primary body text     |
| body-md        | 14px | 400    | 20px        | Secondary body text   |
| body-sm        | 12px | 400    | 16px        | Captions, labels      |

## Font Family

```
font-family: 'Inter', sans-serif;
```

## Usage Guidelines

### Do
- Use the type scale consistently — don't invent custom sizes
- Maintain clear hierarchy on every screen
- Use font weight to create emphasis, not font size alone

### Don't
- Don't use more than 2 font weights on a single screen
- Don't go below 12px for any readable text
- Don't use ALL CAPS for more than short labels
