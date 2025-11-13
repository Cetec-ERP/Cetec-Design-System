# Cetec-ERP Design System

A React component library built with TypeScript and Panda CSS for the Cetec-ERP application and marketing website.

- [Cetec-ERP Design System](#cetec-erp-design-system)
	- [Development](#development)
		- [Setup](#setup)
		- [Commands](#commands)
	- [Architecture](#architecture)
		- [Key Principles](#key-principles)
	- [Working with Components](#working-with-components)
		- [Adding a New Component](#adding-a-new-component)
		- [Component Guidelines](#component-guidelines)
	- [Working with Icons](#working-with-icons)
		- [Adding Icons](#adding-icons)
	- [Usage in Consumer Projects](#usage-in-consumer-projects)
		- [Installation](#installation)
		- [Panda CSS Configuration](#panda-css-configuration)
		- [Using in Your Project](#using-in-your-project)
		- [Available Components](#available-components)
	- [Release Process](#release-process)
		- [Contributing](#contributing)
		- [Release Labels](#release-labels)

## Development

### Setup

```bash
npm install
```

### Commands

```bash
# Development
npm run dev                  # Start Vite dev server with Panda CSS watch mode
npm run storybook           # Start Storybook on port 6006

# Building
npm run build               # Build for distribution (runs Panda codegen + Vite build)
npm run build-storybook     # Build Storybook for deployment

# Code Quality
npm run lint                # Run ESLint
npm run prepare             # Run Panda CSS codegen (runs automatically after npm install)

# Icons
npm run generate-sprite     # Generate SVG sprite from icon source files
```

## Architecture

This design system is built on **Panda CSS** with a strict tokens-first approach:

- **Tokens** (`src/styles/tokens.ts`) - Design tokens for colors, spacing, typography, shadows, etc.
- **Semantic Tokens** (`src/styles/semanticTokens.ts`) - Theme-specific token aliases for light/dark modes
- **Recipes** (`src/recipes/`) - Component style variants (button, input, text, etc.)
- **Components** (`src/components/`) - React components using recipes and tokens
- **Icons** (`src/utils/svgsSource/`) - SVG icons compiled into a sprite system

### Key Principles

1. **Tokens-first**: No hard-coded hex colors or pixel values - use design tokens only
2. **Recipe-based styling**: Use existing recipes for components instead of ad-hoc CSS
3. **Responsive by default**: Container queries + breakpoints for responsive design
4. **Semantic HTML + Accessibility**: Proper elements, visible focus, keyboard navigation
5. **Strict TypeScript**: Type-safe props and strict mode enabled

## Working with Components

### Adding a New Component

1. Create component directory: `src/components/[ComponentName]/`
2. Create a recipe in `src/recipes/[componentname].ts` defining style variants
3. Export recipe from `src/recipes/index.ts`
4. Register recipe in `panda.config.ts` under `theme.extend.recipes` (or `slotRecipes` for multi-part components)
5. Run `npm run prepare` to regenerate Panda CSS types
6. Implement component using the recipe
7. Create Storybook story: `ComponentName.stories.tsx`
8. Export from `src/index.ts`

### Component Guidelines

- Use function components only (React 19)
- Type props with TypeScript strict mode
- Use `forwardRefWithAs` utility for polymorphic components
- Style with Panda recipes (no inline styles or hard-coded values)
- Follow accessibility guidelines (semantic HTML, keyboard support, ARIA when needed)

## Working with Icons

### Adding Icons

1. Add SVG file to `src/utils/svgsSource/`
2. Run `npm run generate-sprite` to update the sprite
3. Use the icon: `<Icon name="iconName" />`

The icon system compiles individual SVGs into a sprite for optimal performance.

## Usage in Consumer Projects

### Installation

```bash
npm install cetec-design-system
```

### Panda CSS Configuration

Copy the Panda config below and adjust the import paths to point to the package in `node_modules`.
Set up the `include` option to contain the paths where Panda should look when building `styled-system` and `styles.css`.

```
import {
  defineConfig,
  defineTokens,
  defineSemanticTokens,
} from '@pandacss/dev';
import pandaBasePreset from '@pandacss/preset-base';

import * as tokens from 'node_modules/cetec-design-system/src/styles/tokens';
import * as semanticTokens from 'node_modules/cetec-design-system/src/styles/semanticTokens';
import { globalCss } from 'node_modules/cetec-design-system/src/styles/globalStyle';
import { conditions } from 'node_modules/cetec-design-system/src/styles/conditions';
import {
  buttonRecipe,
  iconButtonRecipe,
  inputRecipe,
  textareaRecipe,
  headingRecipe,
  linkRecipe,
  labelRecipe,
  textRecipe,
  checkBoxRecipe,
  spinnerRecipe,
  dividerRecipe,
  preRecipe,
  codeRecipe,
  boxRecipe,
  radioRecipe,
  textinputRecipe,
} from 'node_modules/cetec-design-system/src/recipes';
import { benefitsRecipe } from "./src/recipes";

// https://panda-css.com/docs/concepts/extend#removing-something-from-the-base-presets
// omit default patterns here
const { box, divider, ...pandaBasePresetPatterns } = pandaBasePreset.patterns;
const pandaBasePresetConditions = pandaBasePreset.conditions;
const pandaBasePresetUtilities = pandaBasePreset.utilities;
const pandaBasePresetGlobalCss = pandaBasePreset.globalCss;

// using pandas methods to define type-safe tokens
const theme = {
  tokens: defineTokens({
    aspectRatios: tokens.aspectRatios,
    borders: tokens.borders,
    shadows: tokens.shadows,
    easings: tokens.easings,
    durations: tokens.durations,
    letterSpacings: tokens.letterSpacings,
    lineHeights: tokens.lineHeights,
    blurs: tokens.blurs,
    animations: tokens.animations,
    colors: tokens.colors,
    fonts: tokens.fonts,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    sizes: tokens.sizes,
    numericSizes: tokens.numericSizes,
    spacing: tokens.sizes,
    radii: tokens.radii,
    keyframes: tokens.keyframes,
    containerSizes: tokens.containerSizes,
    breakpoints: tokens.breakpoints,
  }),
  semanticTokens: defineSemanticTokens({
    colors: semanticTokens.colors,
  }),
};

export default defineConfig({
  presets: ['@pandacss/dev/presets'],
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  watch: true,
  include: ["./src/pages/index.astro", "./src/components/**/*{ts, tsx, js, jsx, astro}"],
  preflight: true,
  exclude: [],
  strictTokens: true,
  importMap: '@styled-system',
  outdir: 'styled-system',

  theme: {
    containerSizes: tokens.containerSizes,
    keyframes: tokens.keyframes,
    tokens: {
      aspectRatios: theme.tokens.aspectRatios,
      borders: theme.tokens.borders,
      shadows: theme.tokens.shadows,
      easings: theme.tokens.easings,
      durations: theme.tokens.durations,
      letterSpacings: theme.tokens.letterSpacings,
      lineHeights: theme.tokens.lineHeights,
      blurs: theme.tokens.blurs,
      animations: theme.tokens.animations,
      colors: theme.tokens.colors,
      fonts: theme.tokens.fonts,
      fontSizes: theme.tokens.fontSizes,
      fontWeights: theme.tokens.fontWeights,
      sizes: theme.tokens.sizes,
      numericSizes: theme.tokens.numericSizes,
      spacing: theme.tokens.sizes,
      radii: theme.tokens.radii,
    },
    semanticTokens: {
      colors: theme.semanticTokens.colors,
    },
    extend: {
      breakpoints: theme.tokens.breakpoints,
      textStyles: tokens.textStyles,
      recipes: {
        benefits: benefitsRecipe,
        text: textRecipe,
        heading: headingRecipe,
        link: linkRecipe,
        label: labelRecipe,
        button: buttonRecipe,
        iconButton: iconButtonRecipe,
        input: inputRecipe,
        textinput: textinputRecipe,
        textarea: textareaRecipe,
        code: codeRecipe,
        pre: preRecipe,
        spinner: spinnerRecipe,
        divider: dividerRecipe,
        box: boxRecipe,
      },
      slotRecipes: {
        checkbox: checkBoxRecipe,
        radio: radioRecipe,
      },
    },
  },

  utilities: {
    ...pandaBasePresetUtilities,
  },

  patterns: {
    icon: {
      properties: {
        size: {
          type: 'enum',
          value: Object.keys(tokens.sizes),
        },
      },
      transform(props) {
        const { size, ...rest } = props;
        return {
          width: size,
          height: size,
          ...rest,
        };
      },
    },
    extend: {
      ...pandaBasePresetPatterns,
      container: {
        transform(props) {
          return Object.assign(
            {
              position: 'relative',
              width: '100%',
              maxWidth: '7xl',
              mx: 'auto',
              px: { base: '24', md: '20', sm: '16' },
            },
            props,
          );
        },
      },
    },
  },

  globalCss: {
    ...pandaBasePresetGlobalCss,
    ...globalCss,
    html: {
      '--global-font-heading': 'fonts.heading',
      '--global-font-body': 'fonts.body',
      '--global-font-mono': 'fonts.mono',
    },
  },
  conditions: {
    ...pandaBasePresetConditions,
    // Core conditions pulled from panda preset-base package
    ...conditions,

    // Themes moved to conditions.tx

    // States
    indeterminate:
      '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
    hidden: '&:is([hidden])',
    current: '&:is([data-current])',
    today: '&:is([data-today])',
    collapsed:
      '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',

    // Containers
    containerSmall: '@container (max-width: 560px)',
    containerMedium: '@container (min-width: 561px) and (max-width: 999px)',
    containerLarge: '@container (min-width: 1000px)',
  },
});
```

### Using in Your Project

1. **Import the stylesheet** at the root of your project:

```typescript
import '@styled-system/styles.css';
```

2. **Wrap your app with ThemeProvider**:

```typescript
import { ThemeProvider } from "cetec-design-system";

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

3. **Import and use components**:

```typescript
import { Button, Text, Icon } from "cetec-design-system";

function MyComponent() {
  return (
    <>
      <Text>Hello World</Text>
      <Button intent="primary">Click me</Button>
      <Icon name="arrow-right" />
    </>
  );
}
```

### Available Components

Box, Text, Button, IconButton, Icon, Pre, Heading, Link, Spinner, Divider, CheckBox, Radio, TextInput, Textarea, Card, Toggle, ToggleInput, RadioInput, CheckBoxInput, ThemeSwitcher, Tooltip, Breadcrumbs, Tag, Menu

## Release Process

This project uses [Auto](https://intuit.github.io/auto/) for automated releases and changelog generation.

### Contributing

- **PR Titles**: Must follow [Conventional Commits](https://www.conventionalcommits.org/) format
- **Release Labels**: PRs must have a release label (major, minor, patch, or release) to trigger a release
- **Changelog**: Auto-generated based on PR labels and titles

### Release Labels

- `major` - Breaking changes (💥 Breaking Change)
- `minor` - New features (🚀 Enhancement)
- `patch` - Bug fixes (🐛 Bug Fix)
- `skip-release` - No version bump
- `internal` - Internal changes (🏠 Internal)
- `documentation` - Documentation updates (📝 Documentation)
- `performance` - Performance improvements (🏎 Performance)

See `.autorc` for the complete configuration.
