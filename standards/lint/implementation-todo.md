# Lint Standards Implementation TODO

Tracks concrete implementation work for lint standards and rollout.

## Completed

- Added standards cross-links in `AGENTS.md` and `README.md`.
- Added quality scripts in `package.json`:
  - `lint:fix`
  - `typecheck`
  - `validate`
  - `validate:full`
  - `doctor`, `doctor:react`, `doctor:storybook`
- Added TypeScript casing safety:
  - `forceConsistentCasingInFileNames: true` in `tsconfig.json`.
- Added baseline ESLint plugins and warn-level rollout rules in
  `eslint.config.js`:
  - `@typescript-eslint/consistent-type-imports`
  - `import/no-unresolved`
  - `import/order`
  - `@typescript-eslint/naming-convention`
  - `unicorn/filename-case` scoped for components and recipes
  - `src/types/**` excluded from lint scope
- Added lint-related dependencies in `package.json`:
  - `eslint-plugin-import`
  - `eslint-import-resolver-typescript`
  - `eslint-plugin-unicorn`
- Installed updated dependencies and lockfile.
- Ran `npm run validate` and captured baseline warning/error profile.
- Added local ESLint plugin scaffold in `tools/eslint-plugin-cetec/`.
- Implemented and wired first custom rule at warn-level:
  - `cetec/recipe-export-name-matches-file`
- Implemented and wired additional custom rules at warn-level:
  - `cetec/recipe-jsx-name-matches-component`
  - `cetec/no-hardcoded-design-values-in-recipes`
  - `cetec/no-react-fc-components`
  - `cetec/no-react-namespace-type-imports`
- Implemented and wired additional styling consistency rules:
  - `cetec/no-inline-style-prop` (error)
  - `cetec/no-pixel-units` (error)
  - `cetec/no-raw-font-weight-values` (error)
  - `cetec/no-classname-css-call` (error)
  - `cetec/discourage-css-variable-styling` (warn)
- Added CI workflow for rollout gating and report-only doctor checks:
  - `.github/workflows/standards-rollout-ci.yml`

## Next

1. Add narrow allowlist for filename-case legacy exceptions if needed.
2. Integrate custom rules as warn-level first, then promote to
   error.
3. Decide whether `doctor` should become blocking in CI after baseline
   cleanup.
