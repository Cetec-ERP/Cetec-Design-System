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
- Added baseline ESLint plugins and warn-level rollout rules in `eslint.config.js`:
  - `@typescript-eslint/consistent-type-imports`
  - `import/no-unresolved`
  - `import/order`
  - `@typescript-eslint/naming-convention`
  - `unicorn/filename-case` scoped for components and recipes
- Added lint-related dependencies in `package.json`:
  - `eslint-plugin-import`
  - `eslint-import-resolver-typescript`
  - `eslint-plugin-unicorn`

## Next

1. Install/update lockfile for newly added lint dependencies.
2. Run `npm run validate` and capture baseline warnings/errors.
3. Add narrow allowlist for filename-case legacy exceptions if needed.
4. Create local custom plugin scaffold at `tools/eslint-plugin-cetec/`.
5. Implement custom rules:
   - `recipe-export-name-matches-file`
   - `recipe-jsx-name-matches-component`
   - `no-hardcoded-design-values-in-recipes`
6. Integrate custom rules as warn-level first, then promote to error.
7. Add CI job updates to run `npm run validate` and scoped doctor checks.
