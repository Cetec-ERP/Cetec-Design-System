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
4. Standard `recipes` are registered automatically, but new `slotRecipes` need to be manually registered in `panda.config.ts` under `theme.extend.recipes`
5. Run `npm run prepare` to regenerate Panda CSS types
6. Implement component using the recipe
7. Create Storybook story in component directory: `ComponentName.stories.tsx`
8. Export component from `src/index.ts`

### Component Guidelines

- Use function components only (React 19)
- Type props with TypeScript strict mode
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

Copy `/panda.config.ts` and adjust the import paths to point to the package in `node_modules`.
Set up the `include` option to contain the paths where Panda should look when building `styled-system` and `styles.css`.

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

## Release Process

This project uses [Auto](https://intuit.github.io/auto/) for automated releases and changelog generation.

### Contributing

- **Release Labels**: PRs must have a release label (major, minor, patch, or release) to trigger a release
- **Changelog**: Auto-generated based on PR labels and titles
- **PR Titles**: Must follow our defined format for Auto release automation:

> Conventional Commits Spec for PR Titles
> PR titles should adhere to the following format:
>
> (scope):
>
> Examples:
> fix: I fixed a bug
> chore(minor): doin stuff and things
> refactor(major)!: breaking stuff but not things
>
> Adding a '!' before the colon ‘:’ will flag the PR as a breaking change.
> i.e. feat(major)!: breaking stuff
>
> Valid types are:
> "feat" - new feature
> "fix" - bug fix
> "docs" - documentation only changes
> "style" - purely CSS/formatting changes
> "refactor" - neither fixes a bug nor adds a feature
> "perf" - code change to improve performance
> "test" - creating/deleting/changing tests only
> "build" - changes affecting build process or changes to external dependencies
> "ci" - changes to ci setup
> "chore" - small changes that don't apply to other types
> "revert" - reverting a commit
>
> Valid Scopes:
> "major", "minor", "patch" - correspond to the potential impact of the change
> "ticket" - fix pertaining to a ticket
> "config" - changes to a config setting (add/remove/delete)
> "script" - customer specific scripts that don't affect the greater codebase
> "cypress" - pertaining to cypress tests only
>
> Use your best judgement when deciding what type and scope to use for the PR you’re creating.

### Release Labels

- `major` - Breaking changes (💥 Breaking Change)
- `minor` - New features (🚀 Enhancement)
- `patch` - Bug fixes (🐛 Bug Fix)
- `skip-release` - No version bump
- `internal` - Internal changes (🏠 Internal)
- `documentation` - Documentation updates (📝 Documentation)
- `performance` - Performance improvements (🏎 Performance)

See `.autorc` for the complete configuration.
