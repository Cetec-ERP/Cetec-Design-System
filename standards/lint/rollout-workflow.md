# Lint Rollout Workflow

Defines how standards become enforceable without blocking delivery.

## Hard Standards

1. Roll out noisy/new rules at `warn`, then promote to `error` after cleanup.
2. CI must run lint + typecheck on pull requests.
3. Provide and maintain scripts:
   - `lint`
   - `lint:fix`
   - `typecheck`
   - `validate` (composed CI/local parity command)

## Hard With Exceptions

Specialized analyzers (for example `react-doctor`, Storybook doctor) are explicit scripts and CI checks that complement ESLint.
They may start as non-blocking/report-only checks during initial rollout.

## Tooling Split

- ESLint + custom plugin: naming, imports, token/recipe conventions
- React Doctor: React-specific health checks and autofix-oriented diagnostics
- Storybook Doctor: Storybook ecosystem/package health
