# AM Design System

Nx monorepo for the AM Design System — Angular components, design tokens, theming, and Storybook documentation.

## Workspace Structure

```
am-design-system/
├── apps/
│   └── storybook/              # Storybook application
│       ├── .storybook/         # Storybook config (main.ts, preview.ts)
│       └── stories/            # Story files for all components
│
├── libs/
│   ├── tokens/                 # Design tokens (source of truth)
│   │   ├── src/
│   │   │   ├── scss/           # SCSS partials (_palette, _colors, _typography, etc.)
│   │   │   ├── *.json          # Raw Figma token exports
│   │   │   └── index.ts        # Barrel file with token path constants
│   │   └── project.json
│   │
│   ├── core/                   # Angular UI components
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── button/     # ButtonComponent
│   │   │   │   ├── card/       # CardComponent
│   │   │   │   ├── form/       # FormFieldComponent
│   │   │   │   └── modal/      # ModalComponent (placeholder)
│   │   │   └── public-api.ts   # Barrel file
│   │   └── project.json
│   │
│   ├── icons/                  # SVG icon library
│   │   ├── src/
│   │   │   ├── svg/            # Raw SVGs organized by size/weight
│   │   │   └── index.ts        # Barrel file
│   │   └── project.json
│   │
│   ├── theme/                  # Bootstrap theme + token integration
│   │   ├── src/
│   │   │   ├── theme.tokens.scss   # Master SCSS (Bootstrap + tokens + overrides)
│   │   │   ├── theme.service.ts    # Angular service for light/dark toggle
│   │   │   ├── light/theme.css     # Compiled light theme (placeholder)
│   │   │   ├── dark/theme.css      # Compiled dark theme (placeholder)
│   │   │   └── index.ts            # Barrel file
│   │   └── project.json
│   │
│   └── utils/                  # Shared directives, pipes, utilities
│       ├── src/
│       │   ├── highlight.directive.ts
│       │   ├── format-date.pipe.ts
│       │   └── index.ts
│       └── project.json
│
├── tools/
│   └── scripts/
│       ├── build-tokens.js     # Token build pipeline (placeholder)
│       └── generate-icons.js   # Icon generation pipeline (placeholder)
│
├── docs/
│   ├── components/             # Component documentation
│   │   ├── button/README.md
│   │   └── input/README.md
│   └── guidelines/             # Design guidelines
│       ├── colors.md
│       ├── icons.md
│       ├── shadows.md
│       ├── spacing.md
│       └── typography.md
│
├── nx.json                     # Nx workspace config
├── tsconfig.base.json          # Base TypeScript config with path aliases
└── package.json
```

## Path Aliases

Configured in `tsconfig.base.json`:

| Alias        | Path                          |
|-------------|-------------------------------|
| `@am/tokens` | `libs/tokens/src/index.ts`    |
| `@am/core`   | `libs/core/src/public-api.ts` |
| `@am/icons`  | `libs/icons/src/index.ts`     |
| `@am/theme`  | `libs/theme/src/index.ts`     |
| `@am/utils`  | `libs/utils/src/index.ts`     |

## Getting Started

```bash
# Install dependencies
npm install

# Run Storybook
npx nx storybook storybook

# Build Storybook
npx nx build-storybook storybook
```

## Theme

The theme is built on Bootstrap 5 with custom design tokens from Figma. The SCSS compilation order in `libs/theme/src/theme.tokens.scss` follows Bootstrap's required import sequence:

1. Bootstrap functions
2. Palette primitives (SCSS variables)
3. Bootstrap variable overrides
4. Bootstrap variables, maps, mixins, root
5. Bootstrap utilities
6. Bootstrap components
7. Bootstrap utilities API
8. Semantic color tokens (light + dark mode)
9. Typography, spacing, border-radius, shadow tokens
10. Button variant overrides
11. Component styles (focus ring, spinner, icons)
12. Showcase helpers

Light/dark mode is toggled via the `data-bs-theme` attribute on `document.body`, managed by `ThemeService` from `@am/theme`.
