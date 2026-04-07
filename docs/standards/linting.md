# Linting Standards

The `tools/eslint-plugin-cetec/` directory contains a local ESLint plugin with
rules specific to the Cetec design system. All rules are exposed under the
`cetec/` prefix and are configured in `eslint.config.js`.

## Rules

| Rule                                          | Type  | Description                                                                           |
| --------------------------------------------- | ----- | ------------------------------------------------------------------------------------- |
| `cetec/no-important`                          | error | Disallow `!important` in strings and template literals                                |
| `cetec/no-pixel-units`                        | error | Disallow raw `px` values in JSX attributes                                            |
| `cetec/no-inline-style-prop`                  | error | Disallow `style={{}}` in JSX                                                          |
| `cetec/no-classname-css-call`                 | error | Disallow `className={css(...)}` in JSX                                                |
| `cetec/no-hardcoded-design-values-in-recipes` | error | Disallow hex colors, absolute units, and raw color functions in recipe configs        |
| `cetec/no-raw-font-weight-values`             | error | Disallow numeric `fontWeight` values in JSX — use font weight tokens instead          |
| `cetec/discourage-css-variable-styling`       | warn  | Prefer semantic tokens over raw `var(--…)` references in JSX attributes               |
| `cetec/no-react-fc-components`                | warn  | Disallow `React.FC` type annotations — type props on the function parameter           |
| `cetec/no-react-namespace-type-imports`       | warn  | Disallow default/namespace React imports and `React.X` type references                |
| `cetec/recipe-export-name-matches-file`       | error | Recipe export name must match the filename (e.g. `textInput.ts` → `textInputRecipe`)  |
| `cetec/recipe-jsx-name-matches-component`     | error | Recipe `jsx` array must include the PascalCase component name derived from the export |

## Inline Ignore

When a violation cannot be resolved with a token or recipe — for example, a
third-party constraint, a one-off animation value, or a deliberate exception —
suppress it with a `validate-ignore` comment rather than disabling the entire
ESLint rule.

### Format

```
// validate-ignore: rule-name — reason
```

The `— reason` portion is optional but strongly encouraged so reviewers
understand why the exception exists.

### Placement

The comment may appear on the **same line** as the violation (inline) or on the
**line immediately before** it.

```tsx
// Same line
<Component width="24px" /> // validate-ignore: no-pixel-units — SVG viewBox contract requires exact pixel size

// Line before
// validate-ignore: no-inline-style-prop — animation offset must be driven by JS at runtime
<Component style={{ transform: `translateX(${offset}px)` }} />
```

### Multiple rules

Comma-separate rule names to suppress more than one rule with a single comment.

```tsx
// validate-ignore: no-pixel-units, no-inline-style-prop — third-party embed requires exact pixel sizing via style
<ThirdPartyEmbed style={{ width: '320px' }} />
```

### In recipes

```ts
export const exceptionRecipe = defineRecipe({
  base: {
    // validate-ignore: no-hardcoded-design-values-in-recipes — vendored brand color, no token available yet
    color: '#E63946',
  },
});
```

### What to avoid

Do not use `// eslint-disable` to silence cetec rules — it bypasses all rules
on the line rather than naming the specific exception, making it harder to audit
later.

```tsx
// Bad — suppresses everything silently
{/* eslint-disable-next-line */}
<Component width="24px" />

// Good — names the rule and the reason
<Component width="24px" /> // validate-ignore: no-pixel-units — SVG viewBox contract
```

## Adding a New Rule

1. Create `tools/eslint-plugin-cetec/rules/my-rule.js` and export `RULE_NAME`
   and the rule object.
2. Import and register it in `tools/eslint-plugin-cetec/index.js`.
3. Add `cetec/my-rule` to `eslint.config.js` at the appropriate severity.
4. Import `hasValidateIgnoreComment` from `../utils.js` and call it before every
   `context.report()` so the inline-ignore mechanism works automatically.
5. Add the rule to the table above.
