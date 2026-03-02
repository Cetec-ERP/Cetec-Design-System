# Lint Baseline Rules

Baseline lint/type checks that must exist before custom design-system rules.

## Hard Standards

1. Enable `forceConsistentCasingInFileNames: true` in TypeScript config.
2. Enforce folder filename policy:
   - `src/components/**`: PascalCase component files
   - `src/recipes/**`: camelCase recipe files

## Hard With Exceptions

1. Adopt roadmap baseline ESLint plugins/rules with phased exceptions during migration:
   - `eslint-plugin-import`
   - `eslint-import-resolver-typescript`
   - `eslint-plugin-unicorn`
   - `@typescript-eslint/consistent-type-imports`
   - `import/order`
   - `import/no-unresolved`
   - `unicorn/filename-case`
   - `@typescript-eslint/naming-convention`
2. Legacy filename exceptions may be allowlisted only if narrow, documented, and time-bound.
