# Cetec Figma vNext Libraries Plan

## Summary

Create two new parallel Figma libraries up front: **Tokens vNext** and
**Components vNext**. Treat the repo as canonical, but do not mirror older
Figma structure if it conflicts with current best practices. The goal is not
just parity; it is a modernized Figma implementation aligned to the current
codebase and current Figma architecture patterns for variables, semantic
aliasing, component properties, slots, and auto layout.

The rollout starts with a small **core-primitives pilot** in Components vNext,
then expands outward. Skip the interim audit of “new tokens with old
components”; that hybrid state is not the target. Old libraries remain stable
for consumers during migration, but all net-new design-system investment goes
into vNext.

## Architecture Decisions

### 1. Tokens vNext is the new foundation

Build `Tokens vNext` from the Panda source of truth in
`src/cetec-preset.ts`, `src/styles/primitives/index.ts`, and
`src/styles/semantics/index.ts`.

Figma token architecture requirements:

- Separate primitive variables from semantic variables.
- Preserve Panda naming paths as closely as Figma allows.
- Represent `base` and `_dark` as explicit modes.
- Use semantic aliases instead of flattening values into styles or
  components.
- Create styles only where Figma styles add real consumer value on top of
  variables, not as a duplicate universe of nearly-the-same things.

### 2. Components vNext is greenfield, not a clone

Build `Components vNext` as a fresh library that consumes Tokens vNext and
follows current Figma component best practices, even if that differs from the
legacy library.

Component architecture requirements:

- Model public repo components, not internal implementation debris.
- Preserve slot anatomy for slot-recipe components instead of flattening
  layers.
- Use component properties and variants for real API surface, not random visual
  permutations.
- Use auto layout systematically; use layout grids and spacing variables where
  appropriate.
- Normalize layer naming, descriptions, and property naming so the library is
  teachable and scalable.
- Structure components so they are easy to extend later for Code Connect and
  design-to-code workflows.

### 3. Pilot starts with core primitives

Initial Components vNext pilot should cover a compact foundation set that
proves tokens, layout, and component property conventions:

Recommended first wave:

- `Box`
- `Text`
- `Heading`
- `Button`
- `IconButton`
- `TextInput`

These components are enough to validate:

- foundational layout and typography tokens
- semantic color and state token usage
- slot structure on button/input patterns
- variant naming and property conventions
- auto layout and sizing rules consumers will feel immediately

After the pilot, expand to the next wave only after parity and usability checks
pass.

## Implementation Plan

### 1. Establish vNext foundations before broad sync

Before any mass write pass:

- choose exact Figma target files for `Tokens vNext` and `Components vNext`
- define naming conventions for libraries, pages, sections, and deprecation
  labels
- define a small set of reusable Figma architecture rules for variables,
  styles, modes, component properties, slots, and layout behavior
- document which repo paths are authoritative for each asset class

This foundation work should be treated as part of the deliverable, not optional
setup.

### 2. Build Tokens vNext first, then wire Components vNext to it immediately

Execution order:

1. Sync primitive variables from `src/styles/primitives/*`
2. Sync semantic variables from `src/styles/semantics/*`
3. Validate representative token families across light/dark modes
4. Create any minimal supporting styles that make Figma consumption cleaner
5. Start Components vNext using only Tokens vNext assets

Rule: do not build pilot components against legacy tokens. That would be
architectural debt with a fresh coat of paint, which is still debt.

### 3. Build the pilot component wave in Components vNext

For each pilot component:

- read the component file, recipe file, export status, and any relevant
  standards
- search for existing design-system assets only to avoid reinventing useful
  structure, not to inherit old mistakes
- model Figma variants/properties from the code contract
- preserve slot anatomy where the repo uses slot recipes
- apply auto layout and spacing tokens consistently
- add descriptions and naming that match public usage

Primary repo sources for this wave include `src/index.ts`,
`src/recipes/button.ts`, and the relevant component files under
`src/components`.

### 4. Expand the library in waves

After the pilot, expand in this order:

1. foundational text/layout/action/input primitives
2. selection and form composition components
3. feedback and data-display components
4. higher-complexity composite components like menu, modal, date/time pickers

Wave promotion criteria:

- token usage is consistent
- variant/property naming is stable
- slot anatomy is scalable
- designers can use the components without frequent detach-and-fix behavior
- the component structure still maps cleanly to repo contracts

### 5. Govern rollout and deprecation centrally

Use central design-system ownership for promotion and deprecation. Old
libraries stay available during migration, but only vNext receives feature work
and architecture improvements.

Deprecation sequence:

1. launch vNext libraries with pilot guidance
2. migrate a small set of real consumer files
3. freeze net-new use of old assets once pilot is proven
4. mark old assets deprecated with clear naming/descriptions
5. retire old libraries on a dated schedule

Do not let both generations run indefinitely. That way lies folklore, duplicate
maintenance, and somebody insisting the detached instance is “basically the
same.”

## Public Interfaces And Figma Contracts

Planned Figma-facing outputs:

- `Tokens vNext` library for primitives, semantic aliases, and mode-aware
  variables
- `Components vNext` library for modernized repo-aligned components
- component/property naming aligned to public exports from `src/index.ts`
- future Code Connect mappings should target vNext components only

Best-practice defaults to enforce:

- variables first, styles second
- semantic aliasing preserved
- modes explicit
- auto layout default, not optional decoration
- slot-aware component anatomy
- property-driven variants instead of combinatorial component sprawl
- consistent descriptions, naming, and layer hygiene for maintainability

## Validation And Acceptance

Acceptance checks for Tokens vNext:

- representative primitive and semantic token parity against repo
- light/dark mode validation
- no flattening of semantic aliases into raw values

Acceptance checks for Components vNext pilot:

- pilot components match repo contracts and recipe structure
- slots and properties are modeled intentionally
- layout uses tokens and auto layout consistently
- at least one real consumer file can assemble a small UI from vNext without
  workarounds
- the resulting structure is cleaner and more scalable than the legacy library,
  not just newer

Program-level checks:

- migration guidance exists for consumers
- old/new library boundaries are unambiguous
- deprecation milestones are defined before expansion beyond the pilot wave

## Assumptions And Defaults

- Repo code is the source of truth over current Figma assets.
- Exact Figma file keys still need to be identified before execution.
- Chosen defaults for this plan:
  - parallel Tokens and Components libraries from the start
  - best-practice-first modernization
  - core-primitives pilot first
  - central governance
  - soft-then-hard deprecation
- Existing library structure should not constrain vNext if it conflicts with
  maintainable modern Figma architecture.
