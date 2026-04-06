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
npm run lint:fix            # Run ESLint with autofix
npm run typecheck           # Run TypeScript type checking
npm run validate            # Run lint + typecheck
npm run validate:full       # Run validate + production build
npm run doctor              # Run react-doctor + storybook doctor
npm run prepare             # Run Panda CSS codegen (auto-runs on install)

# Icon Generation
npm run generate-sprite     # Generate SVG sprite from src/components/Icon/svg files

# MCP
npm run panda-mcp           # Run local Panda CSS MCP server to expose the design system to AI tools
```

**Note:** This project currently has NO test framework configured. Do not attempt to run tests.

## Canonical Standards

The canonical standards set is in `standards/`.

- `standards/components/`
- `standards/figma/`
- `standards/recipes/`
- `standards/lint/`
- `standards/index.yml`

Use these files as the source of truth for component, recipe, and lint conventions.

## Repo Organization

Repository planning and standards docs should follow these paths:

- Active plan files belong in `plans/`
- Completed plan files belong in `plans/complete/`
- Standards documents belong in `standards/`
- Figma-specific standards belong in `standards/figma/`

If a plan or standards document is created in the repo root or another ad hoc folder, move it to the correct location instead of leaving it there.

## Figma MCP Integration

Use this repo's code as the source of truth when syncing to Figma. If code and Figma disagree, update Figma unless the user explicitly asks for a drift report.

- Relevant Figma files live in the "Cetec Design System" project: `https://www.figma.com/files/team/1398315283038910767/project/258973630?fuid=1425146119342731304`
- For write operations, get the exact Figma file URL or node ID before making changes. Project-level browsing is not enough to target writes safely.
- Search existing Figma components, variables, and styles before creating new ones.
- For `use_figma` writes, always load the `figma-use` skill first. Do not call `use_figma` cold.
- For multi-step design-system creation or sync work, pair `figma-use` with `figma-generate-library`.
- For Code Connect mapping work, use `figma-code-connect`.
- For new, beta, or unfamiliar Figma features, check the official Figma Help Center or developer docs before implementing. Do not infer feature behavior from adjacent APIs.
- Verify that the feature is actually supported by the current MCP or Plugin API surface before building around it. If native support is missing, say so plainly instead of approximating it and presenting the workaround as the real feature.
- Prefer existing library assets over rebuilding duplicates.
- Preserve the repo's naming, token hierarchy, variant structure, and light/dark behavior in Figma.

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
- **Use design tokens:** Primitive tokens live in `src/styles/primitives/` and semantic tokens live in `src/styles/semantics/`
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

### Storybook Documentation Strategy

- **Public primitive stories first:** Use primitive component names as Storybook entry points for controls (`Checkbox`, `Radio`, `Toggle`) instead of only wrapper entries.
- **Wrapper guidance inside primitive stories:** Demonstrate `CheckboxInput`, `RadioInput`, and `ToggleInput` usage inside those primitive stories to teach composition patterns.
- **Beginner-first story structure:** Each component story should explain when to use it, when not to use it, include a minimal copy-paste snippet, and include at least one realistic app example.
- **Accessibility is explicit:** Add keyboard and labeling examples in stories for interactive components.
- **Foundations are visible:** `Box` should have a dedicated story because it is a frequently used primitive; link it to Panda layout/pattern docs.
- **Patterns docs:** Document Panda native patterns in a single docs page and cross-link relevant component stories.
- **Legacy components:** Do not create or expand Storybook coverage for `MenuLegacy`.

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

1. Edit the relevant file in `src/styles/primitives/` or `src/styles/semantics/`
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
