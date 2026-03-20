# Design-System Custom Lint Rules

Repo-specific invariants are enforced via a local ESLint plugin.

## Hard Standards

1. Maintain a local plugin (for example `tools/eslint-plugin-cetec/`) for custom rules.
2. Enforce `recipe-export-name-matches-file`.
3. Enforce `recipe-jsx-name-matches-component`.
4. Enforce `no-react-fc-components`.
5. Enforce `no-react-namespace-type-imports`.
6. Enforce `no-inline-style-prop`.
7. Enforce `no-pixel-units`.
8. Enforce `no-raw-font-weight-values`.
9. Enforce `no-classname-css-call`.

## Hard With Exceptions

Enforce `no-hardcoded-design-values-in-recipes`, with narrowly documented exceptions for known false positives or parser limits.

Warn on `discourage-css-variable-styling` to guide migration from
`var(--...)` references toward semantic tokens.
