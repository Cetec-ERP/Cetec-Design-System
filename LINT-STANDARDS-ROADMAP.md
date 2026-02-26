# Lint Standards Roadmap (Future Branch)

## Objective

Implement enforceable linting and static-analysis standards so merge mistakes,
filename-casing drift, and design-system convention violations are caught
locally and in CI before code reaches `main`.

This plan is intentionally scoped for a **new branch** (not the current one).

## Outcomes We Want

- Enforce recipe filename and export naming conventions consistently.
- Catch import/filepath casing issues across macOS/Linux environments.
- Enforce import order and type-only import conventions.
- Add design-system-specific guardrails (token usage and recipe conventions).
- Provide a low-friction rollout that does not block active feature work.

## Phase 1: Baseline Hardening (No Custom Rules Yet)

### 1) TypeScript casing safety

- Ensure `tsconfig.json` has `forceConsistentCasingInFileNames: true`.
- Confirm CI runs typecheck so casing errors fail the pipeline.

### 2) Add core ESLint plugins and rules

Planned plugin additions:

- `eslint-plugin-import`
- `eslint-import-resolver-typescript`
- `eslint-plugin-unicorn`

Planned rules:

- `@typescript-eslint/consistent-type-imports`
- `import/order`
- `import/no-unresolved` (with TS resolver)
- `unicorn/filename-case`
- `@typescript-eslint/naming-convention`

### 3) Folder-specific filename policy

- `src/components/**`: PascalCase for component files.
- `src/recipes/**`: camelCase for recipe files.
- Support a narrow allowlist for known legacy exceptions (if any).

## Phase 2: Design-System-Specific Enforcement

### 1) Local ESLint plugin for repo-specific rules

Create a local plugin (e.g., `tools/eslint-plugin-cetec/`) with initial custom
rules:

1. `recipe-export-name-matches-file`
   - Example: `textInput.ts` must export `textInputRecipe`.
2. `recipe-jsx-name-matches-component`
   - Ensure recipe `jsx` naming follows component naming patterns.
3. `no-hardcoded-design-values-in-recipes`
   - Flag obvious non-token values in recipe style objects
     (hex, arbitrary px literals, etc.).

### 2) Start with warn-level for noisy rules

- Introduce custom rules as `warn` first.
- Promote to `error` after cleanup is complete.

## Phase 3: CI + Developer Workflow Integration

### 1) NPM scripts

Add/verify scripts:

- `lint` (existing)
- `lint:fix`
- `typecheck`
- `validate` (composed script for CI: lint + typecheck + build if desired)

### 2) CI enforcement

- Require lint + typecheck on pull requests.
- Fail PRs on casing mismatches and unresolved imports.

### 3) Pre-commit guardrails (optional but recommended)

- Use `lint-staged` + `husky` to run eslint on changed files only.
- Keep hooks fast to avoid developer friction.

## Proposed Implementation Sequence

1. Create branch: `chore/config-lint-standards`.
2. Add plugins + resolver + baseline rules in `eslint.config.js`.
3. Add/verify TypeScript casing guard in `tsconfig.json`.
4. Run lint, fix autofixable issues, then manually resolve remaining ones.
5. Add folder-specific filename-case overrides.
6. Add local ESLint plugin scaffold with one custom rule.
7. Apply rule to recipe files and clean up violations.
8. Add CI `validate` job updates.
9. Document standards in `README.md` and/or `AGENTS.md`.
10. Promote warning rules to errors after team sign-off.

## Acceptance Criteria

- Recipe filenames in `src/recipes` are camelCase and enforced by lint.
- Import path casing mismatches fail local checks and CI.
- Type-only import convention is enforced and autofixable where possible.
- Custom recipe rule(s) run in CI and catch naming drift.
- Documentation explains the standards and how to fix violations.

## Risks and Mitigations

- **Risk:** Large initial lint noise.
  - **Mitigation:** Roll out strictness in phases (warn -> error).
- **Risk:** Slower lint runtime.
  - **Mitigation:** Scope heavy rules to `src/recipes/**` and use `lint-staged`.
- **Risk:** False positives from custom rules.
  - **Mitigation:** Start with one rule, add fixtures/tests for rule behavior.

## Suggested Follow-up Tasks

- Add a small fixture-based test harness for custom ESLint rules.
- Add a `docs/standards/linting.md` reference with examples.
- Consider adding a codemod for import casing normalization if needed.
