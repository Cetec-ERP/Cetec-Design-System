# Design-System Custom Lint Rules

Repo-specific invariants are enforced via a local ESLint plugin.

## Hard Standards

1. Maintain a local plugin (for example `tools/eslint-plugin-cetec/`) for custom rules.
2. Enforce `recipe-export-name-matches-file`.
3. Enforce `recipe-jsx-name-matches-component`.

## Hard With Exceptions

Enforce `no-hardcoded-design-values-in-recipes`, with narrowly documented exceptions for known false positives or parser limits.
