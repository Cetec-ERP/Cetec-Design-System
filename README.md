# Cetec-ERP Design System

A React component library built with TypeScript and Panda CSS for the Cetec-ERP application and marketing website.

- [Cetec-ERP Design System](#cetec-erp-design-system)
  - [Development](#development)
    - [Setup](#setup)
    - [Commands](#commands)
  - [Standards](#standards)
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
npm run playroom            # Start Playroom on port 9000

# Building
npm run build               # Build for distribution (runs Panda codegen + Vite build)
npm run storybook:build     # Build Storybook for deployment
npm run playroom:build      # Build Playroom for deployment (dist/playroom)

# Code Quality
npm run lint                # Run ESLint
npm run lint:fix            # Run ESLint with autofix
npm run typecheck           # Run TypeScript type checking
npm run validate            # Run lint + typecheck
npm run validate:full       # Run validate + production build
npm run doctor              # Run react-doctor + storybook doctor
npm run prepare             # Run Panda CSS codegen (runs automatically after npm install)

# Icons
npm run generate-sprite     # Generate SVG sprite from icon source files
```

## Standards

Canonical standards now live in `standards/`:

- `standards/components/` - component API, composition, Floating UI, Storybook conventions
- `standards/recipes/` - recipe naming/registration and token-only styling
- `standards/lint/` - baseline lint rules, custom design-system lint rules, rollout workflow
- `standards/index.yml` - index of all standards documents

If this README and `standards/` ever conflict, treat `standards/` as the source of truth.

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

Also see [Component Standards](./src/storybook/docs/componentStandards.mdx)

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
      <Button variant="primary">Click me</Button>
      <Icon name="arrow-right" />
    </>
  );
}
```

## Release Process

This project uses [Auto](https://intuit.github.io/auto/) for automated releases and changelog generation.
Packages are published from the repo root with `dist` included in the published files list.

### Contributing

- **Workflow trigger**: Every push to `main` runs the release workflow.
- **Publishing behavior**: A merged change that resolves to a releasable bump publishes a prerelease by default. Add the `release` label to graduate that merge to a stable `latest` release.
- **Version bump labels**: Use `major`, `minor`, or `patch` to control the semver bump.
- **Default bump**: If the merged PR has no Auto semver label, Auto defaults the head change to `patch`.
- **No-release labels**: `internal`, `documentation`, `tests`, and `dependencies` do not publish on their own.
- **Skip label**: Use `skip-release` to prevent publishing.
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

- `major` - Major version bump (💥 Breaking Change)
- `minor` - Minor version bump (🚀 Enhancement)
- `patch` - Patch version bump (🐛 Bug Fix)
- `release` - Graduate the publish from prerelease to stable `latest`
- `skip-release` - Do not publish a release
- `internal` - Internal changes only (🏠 Internal)
- `documentation` - Documentation updates only (📝 Documentation)
- `tests` - Test-only changes (🧪 Tests)
- `dependencies` - Dependency updates only (🔩 Dependency Updates)
- `performance` - Performance improvements (🏎 Performance)

Examples:

- `minor` => prerelease minor
- `minor` + `release` => stable minor release
- no Auto semver label => prerelease patch
- `documentation` only => no publish
- `skip-release` => no publish

See `.autorc` for the complete configuration.
