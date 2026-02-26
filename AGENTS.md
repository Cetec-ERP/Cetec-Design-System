# AGENTS.md

This file provides guidance to AI coding agents when working with the Cetec-ERP Design System codebase.

## Project Overview

React component library built with TypeScript, Panda CSS, and Vite. Components are bundled for NPM distribution and documented with Storybook.

## Build/Lint/Test Commands

```bash
# Development
npm run dev                  # Start Vite dev server + Panda CSS watch mode
npm run storybook           # Start Storybook on port 6006

# Building
npm run build               # Run Panda codegen + Vite build for distribution
npm run storybook:build     # Build Storybook for deployment

# Code Quality
npm run lint                # Run ESLint on all files
npm run prepare             # Run Panda CSS codegen (auto-runs on install)

# Icon Generation
npm run generate-sprite     # Generate SVG sprite from src/components/Icon/svg files

# MCP
npm run panda-mcp           # Run local Panda CSS MCP server to expose the design system to AI tools
```

**Note:** This project currently has NO test framework configured. Do not attempt to run tests.

## Code Style & Conventions

### Imports

**Order:** External packages → React → Panda CSS → Internal components → Utils

```tsx
import { FC, ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import { button, type ButtonVariantProps } from '@styled-system/recipes';
import { splitProps } from '~/utils/splitProps';
```

**Path Aliases:**

- `~/*` → `./src/*` (internal imports)
- `@styled-system/*` → `./styled-system/*` (Panda CSS generated)

**Type Imports:** Use `type` keyword for type-only imports when mixing with value imports:

```tsx
import { button, type ButtonVariantProps } from '@styled-system/recipes';
```

### Formatting (Prettier)

- **Tabs:** 2 spaces (no tabs)
- **Semicolons:** Always
- **Quotes:** Single quotes
- **Trailing commas:** Always
- **Line width:** 80 characters
- **Enforced via ESLint:** Prettier rules run as ESLint errors

### TypeScript

**Strict mode enabled** with additional strictness:

- `noUncheckedIndexedAccess: true` - Array access returns `T | undefined`
- `noUnusedLocals: true` - No unused variables
- `noUnusedParameters: true` - No unused function parameters
- `noFallthroughCasesInSwitch: true` - Explicit breaks in switches
- `noUncheckedSideEffectImports: true` - Side-effect imports must be explicit

**Component Props Pattern:**

```tsx
export type ComponentProps = BoxProps &
  VariantProps & {
    customProp?: string;
    required: string;
  };

export const Component: FC<ComponentProps> = ({ required, ...props }) => {
  // Implementation
};
```

**Type Composition:** Extend base types, use `Omit` for conflicts:

```tsx
export type CheckboxProps = Omit<BoxProps, keyof CheckboxVariantProps> &
  CheckboxVariantProps & {
    name: string;
  };
```

### React Conventions

**Function Components Only:** No class components, use hooks for state/effects

**Controlled Components:** Use controlled pattern for all form inputs (checkboxes, radios, text inputs)

**Accessibility Baseline:**

- Use semantic HTML elements first (button, input, label)
- Add ARIA attributes when needed: `aria-label`, `aria-disabled`, `aria-checked`
- Ensure keyboard navigation works
- Visible focus states (handled by Panda recipes)

**Component Structure:**

```tsx
export const Component: FC<ComponentProps> = ({
  variant,
  size,
  children,
  ...props
}) => {
  const [className, otherProps] = splitProps(props);

  return (
    <Box
      as="element"
      className={cx(recipe({ variant, size }), className)}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
```

### Panda CSS Rules

**CRITICAL: Tokens-First Approach**

- **NO hard-coded values:** No hex colors, px values, or magic numbers
- **Use design tokens:** All colors, spacing, radii, typography from `src/styles/tokens.ts`
- **strictTokens: true** enforces this at build time

**Styling Priority:**

1. **Recipes first:** Use existing recipes from `src/recipes/` for components
2. **Create new recipes:** For repeated patterns (not ad-hoc CSS)
3. **Panda utilities:** Use `css()` or `styled()` for one-offs
4. **Never inline styles:** No `style={{}}` prop

**Recipe Pattern:**

```tsx
// src/recipes/componentname.ts
import { defineRecipe } from '@pandacss/dev';

export const componentRecipe = defineRecipe({
  className: 'component',
  jsx: ['Component'],
  base: {
    position: 'relative',
    fontFamily: 'body',
    fontSize: '16',
    borderRadius: '4',
  },
  variants: {
    variant: {
      primary: {
        bg: { base: 'slate.90', _dark: 'slate.5' },
        color: { base: 'slate.0', _dark: 'slate.90' },
      },
    },
    size: {
      medium: { py: '3', px: '10' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
```

**Theme Conditions:** Use `{ base: 'value', _dark: 'value' }` for theme-aware styles

**Slot Recipes:** For multi-part components (checkbox, radio, tooltip, menu) - must be registered in `panda.config.ts` under `theme.extend.recipes`

### Naming Conventions

**Files:** PascalCase for components: `Button.tsx`, `Button.stories.tsx`

**Recipes:** camelCase with "Recipe" suffix: `buttonRecipe`, `checkboxRecipe`

**Exports:** Named exports only (no default exports except in component files)

```tsx
export { Button } from './components/Button';
export { buttonRecipe } from './recipes/button';
```

### Error Handling

**TypeScript strictness** catches most errors at compile time

**No try-catch unless necessary:** Let errors bubble up to error boundaries

**Runtime validation:** Use TypeScript types + PropTypes if needed for consumer DX

## Component Development Workflow

### Adding a New Component

1. **Create directory:** `src/components/[ComponentName]/`
2. **Create recipe:** `src/recipes/[componentname].ts` with variants
3. **Export recipe:** Add to `src/recipes/index.ts`
4. **For slot recipes:** Register in `panda.config.ts` under `theme.extend.recipes`
5. **Run codegen:** `npm run prepare` to regenerate Panda CSS types
6. **Implement component:** `src/components/[ComponentName]/ComponentName.tsx`
7. **Create stories:** `src/components/[ComponentName]/ComponentName.stories.tsx`
8. **Export from index:** Add to `src/index.ts`

### Modifying Design Tokens

1. Edit `src/styles/tokens.ts` or `src/styles/semanticTokens.ts`
2. Run `npm run prepare` to regenerate Panda CSS
3. Update affected components if breaking changes

### Adding Icons

1. Add SVG file to `src/utils/svgsSource/`
2. Run `npm run generate-sprite` to update sprite
3. Use new icon: `<Icon name="newIconName" />`

## Git Conventions

**Commit Format:** Conventional commits: `type(scope): summary`

**Types:** feat, fix, docs, refactor, perf, test, chore, build, ci

**Branch Naming:** `feat/<area>-<slug>`, `fix/<area>-<slug>`, `chore/<area>-<slug>`

**PR Title Format:** Must follow conventional commits for Auto release:

```
type(scope): summary
type(scope)!: breaking change summary
```

**Valid Scopes:** major, minor, patch, ticket, config, script, cypress

**Breaking Changes:** Add `!` before colon: `feat(major)!: breaking stuff`

## Distribution & Build

**Entry:** `src/index.ts` exports all public components

**Format:** ES modules only (`"type": "module"`)

**Output:** `dist/cetec-design-system.es.js` (main bundle)

**Types:** Generated via `vite-plugin-dts` to `dist/`

**Externals:** React and React-DOM are peer dependencies (not bundled)

**Panda CSS:** `styled-system/` output is distributed with package
