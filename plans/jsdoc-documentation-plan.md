# Public API JSDoc Documentation Plan

## Goal

Make source JSDoc a reliable point-of-implementation guide for every public
design-system component, prop, hook, helper, and public type. Keep Storybook as
the longer-form teaching surface, but ensure consumers can understand the API
without leaving their editor.

## Current Baseline

The August 2026 audit found:

- 54 public React component exports in `src/index.ts`
- 7 of 54 components with component-level JSDoc (13%)
- 62 of 386 component-owned prop declarations with JSDoc (16%)
- 37 components with neither component-level nor component-owned prop JSDoc
- No public `Props` declaration with its own overview JSDoc
- No canonical JSDoc standard in `standards/`
- Inconsistent use of `@example`, prose defaults, accessibility guidance, and
  controlled/uncontrolled terminology
- A stale checked-in `dist/types/index.d.ts` containing declarations that no
  longer match the source entrypoint

The prop count excludes inherited DOM, Panda, and recipe properties. Those
surfaces should retain their upstream documentation rather than being copied
into every component.

## Scope

This plan covers:

- Public React components exported from `src/index.ts`
- Component-owned props and their public `Props` types
- Public hooks, providers, helper functions, event types, and value types
- Documentation that is emitted into `dist/types/index.d.ts`
- Structural validation that prevents documentation coverage from regressing
- Alignment between source JSDoc and Storybook guidance

This plan does not require duplicating documentation for inherited HTML props,
Panda style props, or generated recipe variant types. It also does not replace
Storybook usage pages with large JSDoc essays.

## Decisions

1. Source JSDoc is the canonical API reference for editor IntelliSense.
2. Storybook is the canonical surface for extended examples, visual variants,
   realistic scenarios, and interactive accessibility demonstrations.
3. Every public symbol gets a concise overview; every component-owned prop gets
   a useful behavioral description.
4. Documentation describes observable contracts, not implementation details
   that consumers cannot rely on.
5. Defaults use the `@default` tag, matching generated Panda declaration output.
6. Examples use fenced `tsx` blocks under `@example`.
7. Existing documentation is corrected during migration rather than preserved
   merely because a comment already exists.

## Phase 1: Establish the Canonical JSDoc Standard

Land the standard before expanding component coverage so all later work follows
one convention.

### Files

- Add `standards/components/jsdoc-documentation.md`
- Register `components.jsdoc-documentation` in `standards/index.yml`
- Cross-link the new standard from
  `standards/components/storybook-conventions.md`
- Add a short reference to `docs/standards/linting.md` once enforcement exists

### Required component documentation

Every public component must have JSDoc directly attached to its exported
declaration. The block must cover, when applicable:

1. What the component represents and its primary use case
2. When a nearby component or native element is a better choice
3. The semantic element it renders, especially when that can change
4. Controlled/uncontrolled behavior and valid prop pairings
5. Required parent/child composition or provider context
6. Important keyboard, focus, labeling, and screen-reader behavior
7. One minimal copy-paste `@example`
8. A Storybook `@see` reference only when a stable link or identifier is
   available

Example shape:

````tsx
/**
 * Performs a user action or navigates to another location.
 *
 * Renders a button by default and an anchor when `href` is provided. Use
 * `IconButton` for icon-only actions.
 *
 * @example
 * ```tsx
 * <Button onClick={save}>Save</Button>
 * ```
 */
export const Button = (props: ButtonProps) => {
  // ...
};
````

### Required prop documentation

Document every property introduced by the design system. Each description must
answer what a consumer needs to decide or implement correctly, rather than
merely restating the property name.

- Boolean props: explain what changes when true.
- Callback props: explain when the callback runs and the meaning of its
  arguments.
- Controlled props: identify the corresponding callback and uncontrolled
  alternative.
- Uncontrolled props: state that the value is used only for initialization.
- Accessibility props: explain labeling or semantic responsibility.
- Precedence: document which prop or context wins when multiple inputs can
  supply the same state.
- Units: state units for numeric duration, distance, and dimension props.
- Defaults: use a separate `@default` tag, not `Default:` embedded in prose.
- Deprecated aliases: use `@deprecated` with the replacement and removal plan.
- Responsive/conditional values: mention support only where the local type or
  runtime behavior differs from normal Panda behavior.

Do not duplicate descriptions of inherited native or Panda props. If a
component changes the behavior of an inherited prop, redeclare or document the
changed contract explicitly.

### Required public type, hook, and helper documentation

- `Props` types: summarize the component contract and point to the component.
- Event and handler aliases: identify the native event and intended target.
- Value types: explain normalization rules, such as 24-hour internal time.
- Hooks: describe valid call context, return value, and thrown errors.
- Providers: describe when direct use is necessary and what descendants receive.
- Helpers: document inputs, output, edge cases, and whether the helper is meant
  for application use or only internal composition.

### Standard acceptance criteria

- The standard includes compliant examples for a component, a prop type, a
  callback, a controlled/uncontrolled pair, a default, and a deprecated prop.
- The standard clearly divides JSDoc responsibilities from Storybook
  responsibilities.
- `standards/index.yml` registers the document using the existing index format.
- Reviewers have a single checklist that can be applied without subjective
  interpretation.

## Phase 2: Document the Highest-Risk APIs

Prioritize APIs where missing guidance is most likely to cause semantic,
accessibility, state-management, or composition errors.

### Batch 2A: Actions, fields, and icons

Components:

- `Button`
- `FormField`
- `Icon`
- `IconProvider`
- `IconButton`

Required topics:

- `Button`: button versus anchor rendering, default `type`, loading behavior,
  disabled links, slot precedence, field/slot context inheritance, and icon-only
  alternatives.
- `FormField`: `labelFor`/input `id` contract, help/error/success precedence,
  required indicators, inline layout, tooltip labeling, and provided field
  context.
- `Icon`: decorative versus meaningful icons, accessible naming, sprite setup,
  fill and size behavior, and responsive size support.
- `IconProvider`: sprite path purpose, default behavior, and provider scope.
- `IconButton`: required accessible label, button versus link behavior, loading,
  disabled state, and icon naming.

### Batch 2B: Selection and overlay composition

Components and types:

- `Select`, `SelectOption`
- `Menu`, `MenuItem`, `MenuGroup`, `SubMenu`, `MenuProvider`
- `Modal`, `ModalHeader`, `ModalBody`, `ModalFooter`, `useModalContext`

Required topics:

- Controlled and uncontrolled open/value pairs
- Single versus multiple selection value shapes
- Callback timing and whether callbacks represent requests or committed state
- Required child components and how metadata-only children such as
  `SelectOption` are interpreted
- Trigger and panel rendering behavior
- Focus entry, restoration, dismissal, and keyboard navigation
- Filtering, item text derivation, empty states, and match highlighting
- Menu interaction modes, submenu interaction, close-on-select behavior, and
  inline/panel variants
- Modal labeling responsibilities, overlay dismissal, Escape behavior, portal
  behavior, and header/body/footer composition

Correct the current imbalance in `MenuProps`: document the common API at least
as thoroughly as the specialized menubar callback.

### Batch 2C: Stateful controls and pickers

Components and types:

- `Checkbox`, `CheckboxInput`
- `Radio`, `RadioGroup`, `RadioInput`
- `Toggle`, `ToggleInput`
- `DatePicker`, `DateRangePicker`, `DateValue`
- `TimePicker`, `TimeRangePicker`, `TimeValue`, `HourCycle`

Required topics:

- Native primitive versus labeled wrapper responsibilities
- Controlled versus uncontrolled state and invalid prop combinations
- Native change-event semantics and group callback semantics
- `name`, `id`, form submission, labeling, disabled, invalid, and error behavior
- Checkbox indeterminate behavior
- Radio group value coordination and keyboard behavior
- Date/time value normalization and null semantics
- Range constraints and how one endpoint constrains the other
- Popover open-state control, min/max behavior, hour-cycle display, minute step,
  and accessible label generation

Preserve the useful examples already present on `Checkbox`, `Radio`, and
`Toggle`, but move them into the standard format and add prop-level guidance.

### High-risk phase acceptance criteria

- Every component in batches 2A-2C has component-level JSDoc and a minimal
  `@example`.
- Every component-owned prop in those batches has behavioral documentation.
- Every runtime default in those batches is represented by `@default`.
- Controlled/uncontrolled pairs use the same terminology across components.
- Accessibility guidance agrees with the rendered markup and Storybook examples.
- Existing comments that are vague, redundant, or inaccurate are corrected.

## Phase 3: Complete the Remaining Component Surface

Migrate the remaining components in cohesive review batches.

### Batch 3A: Foundations and typography

- `Box`
- `Text`
- `Heading`
- `Label`
- `Link`
- `Code`
- `Pre`
- `Kbd`
- `Divider`

Focus on semantic element selection, polymorphic behavior, inherited props,
keyboard semantics, external-link behavior, code language metadata, and the
difference between visual styling and semantic meaning.

### Batch 3B: Content and status

- `Avatar`
- `Badge`
- `Tag`
- `Card`
- `Skeleton`
- `Spinner`

Focus on fallback behavior, accessible image text, status meaning, interactive
cards, loading-state announcements, placeholder semantics, and animation.
Correct `Badge` overflow wording so it reflects a configurable
`overflowCount`, and convert prose defaults to `@default`.

### Batch 3C: Navigation and collections

- `Breadcrumbs`
- `List`
- `ListItem`
- `ListItemGroup`
- `HighlightText`

Focus on item data shape, links versus controls, selection controls, grouping,
density inheritance, match highlighting, and breadcrumb semantics.

### Batch 3D: Inputs and utility components

- `TextInput`
- `Textarea`
- `Tooltip`
- `Chip`
- `ChipGroup`
- `BreakpointIndicator`
- `ThemeSwitcher`

Focus on slot precedence, auto-sizing, form-field context, tooltip suitability
and trigger behavior, chip selection/dismissal, group submission semantics,
development-only behavior, and theme side effects.

### Remaining-surface acceptance criteria

- All 54 current public React components have direct component-level JSDoc.
- All component-owned props have direct behavioral documentation.
- Existing strong comments on `Avatar`, `Badge`, `Box`, and `Kbd` conform to the
  new standard rather than being exempted.
- Storybook-only component descriptions are moved or adapted onto source
  declarations; Storybook retains extended examples.
- No documentation promises behavior that is absent from the implementation.

## Phase 4: Normalize the Public Type and Helper Surface

Audit `src/index.ts` and each component barrel after component documentation is
complete.

### Work

1. Define which public prop types consumers are expected to import.
2. Export prop types consistently from the package root, or document and enforce
   an intentional policy for inferred-only types.
3. Review exports currently written as `type use...` or `type get...` and decide
   whether they should be runtime exports, actual type aliases, or private.
4. Remove accidental public helpers from barrels rather than documenting them as
   supported application APIs.
5. Add JSDoc to every retained public provider, hook, helper, event alias, and
   value type.
6. Verify that declaration bundling preserves the documentation on the public
   symbol consumers actually import.

### Acceptance criteria

- Root exports follow one documented policy for component props and public
  helpers.
- Runtime functions are not exposed through misleading type-only exports.
- All retained public non-component symbols have JSDoc appropriate to their
  intended audience.
- Removing or changing an existing public export is treated as an API change,
  not folded silently into the documentation work.

## Phase 5: Add Documentation Coverage Enforcement

Add enforcement after migration so the rule does not create a large temporary
suppression list.

### Recommended implementation

Create `tools/check-public-jsdoc.mjs` using the installed TypeScript compiler
API. The check should:

1. Read public exports from `src/index.ts`.
2. Resolve component exports through component barrel files.
3. Require direct JSDoc on every public component declaration.
4. Resolve each public component's local `Props` declaration.
5. Require JSDoc on every property signature introduced by that declaration.
6. Ignore inherited DOM, `BoxProps`, Panda style, and generated recipe members.
7. Require JSDoc on retained public hooks, helpers, providers, and named types.
8. Print actionable failures with symbol name, file, and line number.
9. Detect stale or unresolved public exports.

Add package scripts:

```json
{
  "check:jsdoc": "node tools/check-public-jsdoc.mjs",
  "validate": "npm run lint && npm run typecheck && npm run check:jsdoc"
}
```

Prefer this public-export-aware check over a blanket ESLint rule. A blanket rule
would either miss cross-file export intent or force documentation onto private
implementation details.

### Enforcement acceptance criteria

- Removing JSDoc from a public component fails `npm run check:jsdoc`.
- Adding an undocumented component-owned prop fails with its exact location.
- Private helpers and inherited props do not produce false positives.
- Public exports through barrels are resolved correctly.
- `npm run validate` includes the check and passes without suppressions.

## Phase 6: Rebuild and Verify Consumer Output

Documentation is complete only if it reaches package consumers.

### Verification steps

1. Run `npm run validate`.
2. Run `npm run build` to regenerate `dist` from a clean build.
3. Confirm stale declarations, including the obsolete `Autocomplete` surface,
   are removed unless restored in source intentionally.
4. Inspect `dist/types/index.d.ts` for representative component, prop, hook,
   default, deprecated, and example comments.
5. Create a temporary TypeScript consumer fixture that imports representative
   symbols from the package root and confirms the intended types resolve.
6. Run `npm run storybook:build` to ensure documentation comments and Storybook
   metadata do not introduce build failures.
7. Spot-check editor hover output for at least:
   - `Button`
   - `Menu`
   - `Select`
   - `Modal`
   - `Checkbox`
   - `DatePicker`
   - `Icon`

This repository has no test framework configured, so verification uses lint,
type checking, production builds, declaration inspection, Storybook build, and
the focused consumer fixture.

## Review Checklist

Apply this checklist to each migration batch:

- Is the JSDoc attached to the exported symbol rather than only a story or
  internal helper?
- Does the first sentence distinguish this component from nearby alternatives?
- Does the documentation match the actual rendered element and behavior?
- Are controlled and uncontrolled modes described consistently?
- Are callback timing and arguments clear?
- Are runtime defaults represented with `@default`?
- Are precedence and context inheritance documented?
- Are accessibility obligations explicit where the component cannot satisfy
  them automatically?
- Is the example minimal, valid TSX, and aligned with preferred usage?
- Does the comment avoid duplicating inherited or generated documentation?
- Do Storybook and JSDoc make the same behavioral claims?

## Suggested Delivery Sequence

Keep changes reviewable and avoid one repository-wide comment dump:

1. PR 1: JSDoc standard and standards index
2. PR 2: Actions, fields, and icons
3. PR 3: Selection and overlay composition
4. PR 4: Stateful controls and pickers
5. PR 5: Foundations, content, navigation, inputs, and utilities
6. PR 6: Public export normalization and JSDoc enforcement
7. PR 7: Clean rebuild, declaration verification, and any final Storybook
   alignment

Each PR should update its components completely: component overview, prop type,
all owned props, related public symbols, and any conflicting Storybook prose.

## Risks and Mitigations

- **Documentation drift:** Gate public API additions with `check:jsdoc` and keep
  behavioral assertions close to the implementation.
- **Low-value boilerplate:** Require descriptions to explain behavior, defaults,
  precedence, or usage decisions; reject comments that only repeat names.
- **Oversized hover text:** Keep the core contract in JSDoc and move multi-step
  scenarios to Storybook.
- **Incorrect accessibility claims:** Verify against rendered markup and
  keyboard behavior before documenting guarantees.
- **Accidental API changes:** Separate export cleanup from comment-only work and
  flag removals or type changes explicitly.
- **Noisy generated declarations:** Validate the consumer-facing declaration,
  not just source comment presence.
- **Merge conflicts:** Work in the component batches above and avoid unrelated
  implementation refactors during documentation-only PRs.

## Definition of Done

- A canonical JSDoc standard is registered under `standards/`.
- Every public component and retained public API symbol has direct, useful
  JSDoc.
- Every component-owned prop is documented, including defaults, callback
  semantics, controlled-state relationships, and accessibility obligations where
  applicable.
- Storybook and source JSDoc agree while serving their distinct purposes.
- Root exports follow a consistent documented policy.
- `npm run check:jsdoc`, `npm run validate`, `npm run build`, and
  `npm run storybook:build` pass.
- `dist/types/index.d.ts` matches the current source API and preserves the
  intended documentation for package consumers.
