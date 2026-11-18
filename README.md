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
- `standards/figma/` - Figma-specific policies and design-system guidance
- `standards/recipes/` - recipe naming/registration and token-only styling
- `standards/lint/` - baseline lint rules, custom design-system lint rules, rollout workflow
- `standards/index.yml` - index of all standards documents

If this README and `standards/` ever conflict, treat `standards/` as the source of truth.

## Plans

Repository plan documents now live in `plans/`.

- Active plans belong in `plans/`
- Completed plans belong in `plans/complete/`

## Architecture

This design system is built on **Panda CSS** with a strict tokens-first approach:

- **Tokens** (`src/styles/primitives/`) - Design tokens for colors, spacing, typography, shadows, etc.
- **Semantic Tokens** (`src/styles/semantics/`) - Theme-specific token aliases for light/dark modes
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
3. Export the recipe from `src/recipes/recipes-regular.ts` or, for a slot recipe, `src/recipes/recipes-slot.ts`
4. Both files are registered automatically through the preset (`src/cetec-preset.ts`); no manual registration is needed
5. Run `npm run prepare` to regenerate Panda CSS types
6. Implement component using the recipe
7. Create Storybook story in component directory: `ComponentName.stories.tsx`
8. Export component from `src/index.ts`

### Component Guidelines

- Use function components only (React 19)
- Type props with TypeScript strict mode
- Style with Panda recipes (no inline styles or hard-coded values)
- Follow accessibility guidelines (semantic HTML, keyboard support, ARIA when needed)
- Native form controls support both controlled and uncontrolled usage where it fits the element semantics. Use `checked` / `value` when React owns the state, and `defaultChecked` / `defaultValue` / `defaultOpen` when the browser or widget should own the initial state.
- Binary and group-based controls (`Checkbox`, `Radio`, `Toggle`, `Select`, `DatePicker`, `TimePicker`, `ChipGroup`) now expose explicit uncontrolled entrypoints so static pages can avoid hydration when they do not need React state.

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

Import the Panda preset from its build-time-only entrypoint:

```typescript
import { defineConfig } from '@pandacss/dev';
import { cetecPreset } from 'cetec-design-system/preset';

export default defineConfig({
  presets: [cetecPreset],
});
```

Set up the `include` option to contain the paths where Panda should look when
building `styled-system` and `styles.css`.

### Using in Your Project

1. **Import the stylesheet** at the root of your project:

```typescript
import 'cetec-design-system/styles.css';
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

### Fonts

The package ships the Ruda and Recursive variable fonts. Import the font
stylesheet once, next to the main stylesheet:

```typescript
import 'cetec-design-system/fonts.css';
```

`fonts.css` points at `./fonts/*.woff2` relative to itself, so any bundler
(Vite, webpack, esbuild) resolves the files from `node_modules`. Consumers do not
need to install `@fontsource-variable/*`. The source is
`src/styles/font-imports.css`; `tools/build-fonts.mjs` builds the published copy.

### Printed documents

The print path does not use React. The Go print helper writes plain HTML with
the same classes as the print recipes. The package ships four things for it:

| File                                        | What it holds                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `cetec-design-system/print.css`             | Tokens without dark values, the fonts, a small reset, and every print recipe with all variants   |
| `cetec-design-system/print-classes.json`    | The class manifest: root classes, each print recipe with its slots and variants, the page footer |
| `cetec-design-system/print-fixtures/*.json` | One markup fixture file per print recipe: an input and the HTML Go must write for it             |
| `dist/fonts/`                               | The font files. `print.css` points at `./fonts/*.woff2`, so keep this folder next to the file    |

**Link the stylesheet.** Every kit document links `print.css` and nothing
else. Serve it from a URL that also serves `fonts/` beside it. If you inline the
CSS into the document, rewrite the `./fonts/` URLs first. Put both root classes
on `<html>`, not on `<body>`:

```html
<html class="cetec-printDoc cetec-ink-thermal">
  <head>
    <link rel="stylesheet" href="/static/cetec-design-system/print.css" />
  </head>
  <body>
    …
  </body>
</html>
```

- `cetec-printDoc` goes on every kit document. It sets the white sheet, the
  paper ink, and the body text style.
- `cetec-ink-thermal` goes next to it for thermal label printers. Every paper
  ink turns solid black, and rules are at least 1.5 pt.
- Go writes the `@page` rule. Paper size is a template setting: `letter`, `A4`,
  or `legal`. The default is `letter`.

**Read the manifest.** Go reads class names from `print-classes.json` and never
spells them by hand. The build writes the file from the recipe configs and
tokens, then checks that every class in it is in `print.css`.

```json
{
  "stylesheet": "print.css",
  "roots": {
    "printDoc": { "className": "cetec-printDoc", "element": "html" },
    "thermal": { "className": "cetec-ink-thermal", "element": "html" }
  },
  "recipes": {
    "printDoc": {
      "kind": "recipe",
      "className": "cetec-printDoc",
      "variants": {},
      "defaultVariants": {},
      "fixtures": "print-fixtures/printDoc.json"
    }
  },
  "pageFooter": {
    "textStyle": "print.pageFooter",
    "marginBox": "@bottom-center"
  }
}
```

- A `recipe` has one `className` and `variants`, keyed by variant name, then by
  value. A `slotRecipe` has `slots` instead, each with its own `className` and
  `variants`.
- `defaultVariants` are the values to use when the kit element sets none.
  Write the default variant classes too.
- `fixtures` is the path of the recipe's fixture file, relative to `dist`.
- `pageFooter` is for page numbers ("Page 2", "Page 2 of 3"). A margin box
  cannot carry a class, so Go writes these declarations into its `@page` rule.
  `content` holds the counter values. `declarations` use token variables with
  literal fallbacks. They work in a margin box because margin boxes read custom
  properties from `<html>`. `literal` and `literalThermal` hold plain values for
  places with no variables, such as a Chrome `printToPDF` footer template.

**Read the fixtures.** Each fixture has a `name`, a `description`, the kit
element `input`, the `root` classes for `<html>`, and the `html` Go writes
inside `<body>`. A Go test can read the files from
`node_modules/cetec-design-system/dist/print-fixtures/` and compare its own
output with `html`. Each fixture also has a story in Storybook under "Print",
which renders the same HTML on a page.

**Types.** CSS and JSON files have no declarations. TypeScript code that reads
them can use the `PrintClassManifest` and `PrintFixtureFile` types from
`cetec-design-system`.

**Canvas layouts.** Checks and labels place kit elements in slots on a
1/64 in grid. Go writes one `printCanvas` per label or check sheet, with the
stock size as inline values, and one `printSlot` per slot, with its position
and size as inline values. The classes carry the look, never the position.

```html
<div class="cetec-printCanvas__root" style="width:4in;height:6in">
  <div class="cetec-printCanvas__layer">
    <div
      class="cetec-printSlot__root"
      data-slot="part"
      style="left:0in;top:0.5in;width:4in;height:0.6875in"
    >
      <div class="cetec-printSlot__content">…</div>
    </div>
  </div>
</div>
```

- A slot clips its content and never grows.
- `rotate: 90` turns a whole layout (`cetec-printCanvas__layer--rotate_90`) or
  one slot's content (`cetec-printSlot__content--rotate_90`) a quarter turn
  clockwise. Slot positions stay in layout space.
- A repeating label is one canvas per item. Each canvas starts a new page.
- The MICR slot (`cetec-printSlot__content--micr_true`) sets the locked look.
  The Go print path sets the MICR font.

**Barcodes.** Go encodes the value and writes the bars as an inline SVG with
the `cetec-barcode__bars` class. The `viewBox` is one unit per module, with
the quiet zone inside it. The class sets the bar ink and the height. Go sets
the attributes CSS cannot:

- Code 128: `preserveAspectRatio="none"` and a `width` in inches, the module
  count times the module width. In a slot, use the widest whole number of
  printer dots that fits the slot width.
- QR and Data Matrix: `preserveAspectRatio="xMinYMin meet"`. In a slot, set
  `width` and `height` to the largest square that fits.
- When a value cannot be encoded, the preview writes `cetec-barcode__error`
  with the message instead of the bars. It never changes the value.

**Add a print recipe.** Add its name to `printRecipeNames` in
`src/print/printRecipes.ts`. Add `src/recipes/<name>.fixtures.json` and a story
for each fixture that renders it through `PrintFixtureView`. The recipe joins
the always-on `staticCss`, `print.css`, and the manifest on its own. The build
and the "Print/Class manifest" story fail when a print recipe has no fixture,
or when a fixture uses a class that is not in the manifest.

## Release Process

This project uses [Auto](https://intuit.github.io/auto/) for automated releases and changelog generation.
Packages are published from the repo root with `dist` included in the published files list.

### Contributing

- **Workflow trigger**: Every push to `main` runs the release workflow.
- **Automatic labels**: PR title labels are synced automatically from the Conventional Commit title.
- **Merge strategy**: Release resolution assumes squash merges and reads the PR number from the squash commit title when possible.
- **Publishing behavior**: A merged change that resolves to a releasable bump publishes a prerelease by default. Add the `release` label to graduate that merge to a stable `latest` release.
- **Version bump labels**: `major`, `minor`, and `patch` remain manual labels.
- **Default bump**: If the merged PR has no semver label, Auto will not publish a release.
- **No-release labels**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, and `revert` are changelog labels. They do not publish on their own unless paired with a semver label.
- **Skip label**: Use `skip-release` to prevent publishing.
- **Version source of truth**: Publish version selection is based on versions already published to npm. `package.json` is only a fallback when there is no published history yet.
- **Version handoff**: The workflow passes its resolved version directly to Auto. Prereleases use npm's `next` dist-tag and a prerelease GitHub release without invoking Auto's separate `next` version-calculation path.
- **Stable releases**: A `release` label promotes the PR’s semver bump from the highest published stable version.
- **Prereleases**: Without `release`, the workflow bumps from the highest published version overall, including existing prereleases, then publishes the next prerelease for that line.
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

Auto-applied label behavior:

- Title type `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, and `revert` applies the matching PR-type label.
- `major`, `minor`, `patch`, `release`, and `skip-release` remain manual labels.
- PR title scopes such as `major`, `minor`, and `patch` are allowed by validation, but they do not apply labels automatically.

### Release Labels

- `major` - Use for breaking changes that should trigger a major version bump when merged
- `minor` - Use for new functionality that should trigger a minor version bump when merged
- `patch` - Use for fixes or small improvements that should trigger a patch version bump when merged
- `release` - Graduate the merge from a prerelease publish to a stable latest release
- `skip-release` - Prevent Auto from publishing a release for this PR when it is merged
- `changes` - Fallback changelog section for merged work that does not match a more specific PR type label
- `feat` - Feature work that adds or expands user-facing functionality
- `fix` - Bug fix work that corrects broken or incorrect behavior
- `docs` - Documentation-only work such as guides, examples, or API docs
- `style` - Visual or formatting changes that do not alter component behavior
- `refactor` - Code restructuring or cleanup that does not change intended behavior
- `perf` - Performance-focused work that improves speed, efficiency, or bundle cost
- `test` - Test-only work such as adding coverage or improving existing test cases
- `build` - Build, packaging, dependency, or tooling changes affecting how the project is produced
- `ci` - Continuous integration or deployment workflow changes
- `chore` - General maintenance work that does not fit a more specific change type
- `revert` - Reverts a previous change or backs out an earlier merge

Examples:

- `feat: add modal` => label `feat`, no publish until a semver label is added
- `ci: update release workflow` => label `ci`, no publish
- `fix(patch): restore export` => label `fix`, no publish until a semver label is added
- `refactor(major)!: break input API` => label `refactor`, no publish until a semver label is added
- `feat: add modal` + manual `minor` label => prerelease minor
- `feat: add modal` + manual `minor` + `release` labels => stable minor release
- highest published version `2.0.0-next.0` + manual `patch` label => `2.0.1-next.0`
- highest published stable version `2.0.0` + manual `patch` + `release` labels => `2.0.1`
- `skip-release` => no publish

See `.autorc` for the complete configuration.
