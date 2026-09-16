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
10. Enforce `avoid-compound-variants-in-recipes`.
11. Enforce `use-correct-conditional-variant-type`.
12. Enforce `no-static-css-in-recipe-files`.

## Hard With Exceptions

Enforce `no-hardcoded-design-values-in-recipes`, with narrowly documented exceptions for known false positives or parser limits.

Warn on `discourage-css-variable-styling` to guide migration from
`var(--...)` references toward semantic tokens.

Warn first on the conditional-variant migration rules when introducing them to
legacy files, then promote to errors once the current recipe and component set
has been cleaned up.
