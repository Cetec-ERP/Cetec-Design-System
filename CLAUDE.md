# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Cetec-ERP Design System - a React component library built with TypeScript, Panda CSS, and Vite. Components are bundled for distribution via NPM and documented with Storybook.

## Development Commands

```bash
# Development
npm run dev                  # Start Vite dev server with Panda CSS watch mode
npm run storybook           # Start Storybook on port 6006

# Building
npm run build               # Run Panda codegen + Vite build for distribution
npm run build-storybook     # Build Storybook for deployment

# Code Quality
npm run lint                # Run ESLint
npm run prepare             # Run Panda CSS codegen (runs automatically on install)

# Icon Generation
npm run generate-sprite     # Generate SVG sprite from src/components/Icon/svg files
```

## Architecture

### Panda CSS Design System

The design system is built on **Panda CSS** with a strict tokens-first approach:

- **Tokens**: Design tokens defined in `src/styles/tokens.ts` (colors, spacing, typography, shadows, etc.)
- **Semantic Tokens**: Theme-specific tokens in `src/styles/semanticTokens.ts` (color aliases for light/dark themes)
- **Recipes**: Component style variants in `src/recipes/` (button, input, text, etc.) - use these instead of ad-hoc CSS
- **Slot Recipes**: Multi-part component recipes (checkbox, radio, tooltip, menu)
- **Conditions**: Custom responsive and state conditions in `src/styles/conditions.ts` and `panda.config.ts`

#### Panda CSS Configuration

- **Config files**: `panda.config.ts` (project config) and `panda-preset.ts` (preset for consumers)
- **Output**: Generated to `styled-system/` directory (gitignored)
- **Import map**: `@styled-system` alias for generated utilities
- **Strict tokens**: `strictTokens: true` enforces token-only usage (no hard-coded values)
- **Prefix**: `Cetec` prefix on generated CSS classes

#### Custom Patterns

- **icon**: Pattern for sizing icons consistently via tokens
- **container**: Page container with responsive padding (base: 24, md: 20, sm: 16)

### Component Architecture

Components follow these patterns:

1. **Location**: `src/components/[ComponentName]/`
2. **Structure**:
   - `ComponentName.tsx` - Main component implementation
   - `index.tsx` - Public exports
   - `ComponentName.stories.tsx` - Storybook documentation

3. **Implementation patterns**:
   - Function components only (React 19)
   - TypeScript strict mode with typed props
   - Polymorphic components use `forwardRefWithAs` utility from `src/utils/forwardRefWithAs.ts`
   - Recipe-based styling via Panda CSS (no inline styles or hard-coded values)
   - Export from `src/index.ts` for package consumers

4. **Exported components**: Box, Text, Button, IconButton, Icon, Pre, Heading, Link, Spinner, Divider, CheckBox, Radio, TextInput, Textarea, Card, Toggle, ToggleInput, RadioInput, CheckBoxInput, ThemeSwitcher, Tooltip, Breadcrumbs, Tag, Menu

### Icon System

Icons are managed as an SVG sprite system:

- **Source**: Individual SVG files in `src/components/Icon/svg/`
- **Generation**: `npm run generate-sprite` creates sprite files
- **Usage**: `<Icon name="iconName" />` component references sprite symbols
- **Sizing**: Use the `icon` Panda pattern for consistent sizing via tokens

### Theme System

- **Provider**: `ThemeProvider` from `src/contexts/ThemeContext.tsx` wraps the app
- **Themes**: Defined as Panda CSS conditions (light/dark modes)
- **Switcher**: `ThemeSwitcher` component for toggling themes
- **Implementation**: Uses data attributes and CSS conditions for theme switching

### Build & Distribution

- **Entry**: `src/index.ts` exports all public components
- **Format**: ES modules only (`"type": "module"`)
- **Output**: `dist/cetec-design-system.es.js` (main bundle)
- **Types**: Generated via `vite-plugin-dts` to `dist/`
- **Styled System**: Panda CSS output in `styled-system/` is also distributed
- **Externals**: React and React-DOM are peer dependencies (not bundled)

### Path Aliases

- `~` → `./src`
- `@styled-system` → `./styled-system`

## Code Style & Conventions

### Panda CSS Rules (from `.cursor/rules/panda-css.mdc`)

- **Tokens-first**: All colors, spacing, radii, typography via design tokens (no hard-coded hex/px values)
- **Recipes over ad-hoc CSS**: Use existing recipes for components; create new recipes for repeated patterns
- **Responsive by default**: Use breakpoints AND container queries (`_containerSm`, `_containerMd`, `_containerLg`)
- **Semantic HTML + baseline a11y**: Choose correct elements, visible focus, labels/focus management
- **Flat selectors**: Prefer utilities/patterns over deep nesting

### TypeScript + React Rules (from `.cursor/rules/typescript-react.mdc`)

- **Semantic first**: Pick correct HTML element before styling; ARIA only to fill semantic gaps
- **Baseline a11y**: Visible focus, label-control associations, keyboard paths, motion-reduce support
- **Strict TypeScript**: No ambient `any`; isolate escapes with TODO comments
- **Composition > prop soup**: Small components that compose; avoid mega-props
- **Function components only**: Hooks for state/effects; no legacy lifecycles
- **Props typing**: Use `React.ComponentProps<"element">` for intrinsic elements

### Git Conventions (from `.cursor/rules/git.mdc`)

- **Commit format**: Conventional commits `type(scope): summary`
- **Types**: `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`
- **Branch naming**: `feat/<area>-<slug>`, `fix/<area>-<slug>`, `chore/<area>-<slug>`
- **PR titles**: Must follow conventional commits format for Auto release automation

## Release Process

This project uses **Auto** for automated releases:

- **Trigger**: PRs must have a release label (major, minor, patch, release) from `.autorc`
- **Main branch**: `main` is the release branch
- **Prerelease mode**: All releases are prereleases
- **Version format**: No `v` prefix (e.g., `0.0.38-0`)
- **Labels**: Defined in `.autorc` for changelog generation (💥 Breaking Change, 🚀 Enhancement, 🐛 Bug Fix, etc.)
- **CHANGELOG**: Auto-generated in `CHANGELOG.md`

## Consumer Integration

Projects consuming this design system must:

1. Install the package and configure Panda CSS with the preset from `panda-preset.ts` or follow the example in README.md
2. Import `@styled-system/styles.css` at the project root
3. Configure `include` paths in their `panda.config.ts` to watch their source files
4. Import components: `import { Button, Text } from "cetec-design-system"`
5. Import icons: `import * as icons from "cetec-design-system/icons"`
6. Wrap app with `<ThemeProvider>` for theme support

## Working with This Codebase

### Adding a New Component

1. Create directory: `src/components/[ComponentName]/`
2. Create recipe in `src/recipes/[componentname].ts` with variants
3. Export recipe from `src/recipes/index.ts`
4. Register recipe in `panda.config.ts` under `theme.extend.recipes` or `theme.extend.slotRecipes`
5. Run `npm run prepare` to regenerate Panda CSS types
6. Implement component using the recipe
7. Create Storybook stories
8. Export from `src/index.ts`

### Modifying Design Tokens

1. Edit tokens in `src/styles/tokens.ts` or `src/styles/semanticTokens.ts`
2. Run `npm run prepare` to regenerate Panda CSS
3. Update affected components if breaking changes

### Adding Icons

1. Add SVG file to `src/utils/svgsSource/`
2. Run `npm run generate-sprite` to update sprite
3. Use new icon with `<Icon name="newIconName" />`

## Important Files

- `panda.config.ts` - Panda CSS configuration (tokens, recipes, conditions)
- `vite.config.ts` - Vite build configuration
- `src/index.ts` - Public API exports
- `src/styles/` - Design tokens and global styles
- `src/recipes/` - Component style recipes
- `.autorc` - Auto release configuration
- `.cursor/rules/` - Development guidelines and conventions
