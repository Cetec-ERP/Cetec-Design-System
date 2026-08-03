---
title: Autocomplete Implementation Plan
status: draft
owners:
  - engineering
---

# Autocomplete Implementation Plan

## Summary

Rebuild the drafted `Autocomplete` as a predictable, accessible combobox with
first-class support for single selection, multiple selection, custom values,
asynchronous loading, and keyboard editing of selected values.

This work will fix the current chip and typeable-input layout, separate the
component's state concerns, and split the existing implementation into smaller
parts with clear ownership. The control will use an Autocomplete-specific slot
recipe and internal structure for now.

A shared `InputFrame` extraction is deliberately deferred to a later PR. This
PR should align structurally and visually with `TextInput`, but it should not
change `TextInput`, `Select`, or other field components to achieve that.

## Why this work is needed

The current draft has several connected design and interaction problems:

- Selected chips and the typeable input each claim half of the available
  control width. Long chips clip while the input reserves unused space.
- Chips behave like a separate region rather than values flowing through one
  editable field.
- Keyboard focus is sent to the outer `Chip` container even though its remove
  button is the actual interactive element.
- Chip remove buttons remain in the normal tab order, creating extra stops
  inside the combobox.
- Focusing the control opens the menu and automatically activates the first
  option. Pressing Enter can therefore select an option the user never
  navigated to.
- A selected single value remains ordinary input text. Refocusing and typing
  appends to it instead of replacing it naturally.
- Custom-value creation is implicit when Enter is pressed with no active
  option, rather than being represented as an explicit choice.
- The limit-tags indicator is rendered as a disabled, hidden chip and does not
  communicate the hidden values appropriately.
- The infinite-loading story cannot scroll far enough to invoke its load-more
  behavior.
- The main component is large and combines controlled state, filtering,
  floating positioning, keyboard navigation, token behavior, rendering, and
  form serialization.

These are not independent polish defects. They come from the component's
current state model and control construction, so the implementation should be
reworked around explicit behavior rather than patched one symptom at a time.

## Goals

- Give single- and multiple-select modes clear, documented behavior.
- Separate selected value, typed query, and popup visibility state.
- Make chips and the typeable area flow within one wrapping control surface.
- Keep the native input as the combobox and the only normal tab stop.
- Make token navigation and removal semantic and screen-reader accessible.
- Use explicit listbox options for custom-value creation.
- Support empty, initial-loading, and incremental-loading states.
- Use Floating UI interaction hooks consistently for focus and navigation.
- Inherit applicable state from `FormField` in the same manner as other form
  controls.
- Split the implementation into reviewable components, hooks, and utilities.
- Provide useful Storybook documentation and interaction coverage for every
  supported mode.
- Leave a clean seam for migrating the control to a shared `InputFrame` later.

## Non-goals

- Creating or publishing a shared `InputFrame` primitive.
- Refactoring `TextInput`, `Select`, or segmented date/time inputs.
- Sharing behavior with `Select` before Autocomplete's behavior has settled.
- Adding a new test framework to the repository.
- Supporting arbitrary rich content inside selected tokens.
- Turning the listbox into a general-purpose virtualization system.
- Preserving draft API names when a clearer API is needed. Any intentional
  breaking changes must be documented in the PR.

## Product and interaction decisions

These decisions should be treated as the default contract. Changes made during
implementation should be recorded in the component documentation and PR.

### Opening and closing

- The popup opens when the native input receives focus.
- Opening or filtering the popup activates its first enabled option so Enter
  can select it immediately.
- The control has no popup trigger or dropdown caret.
- Escape closes the popup without changing the query or selected value.
- Selecting an option closes the popup in single-select mode.
- Selecting an option keeps the popup open in multiple-select mode so the user
  can continue adding values.
- Clicking outside closes the popup without discarding committed selections.

### Single selection

- `value` represents the selected option; `inputValue` represents editable
  text.
- Selecting an option commits its display label to the input.
- Refocusing a selected value selects its text so typing replaces it rather
  than appending to it.
- Selecting the currently selected option is a no-op.
- The control has no clear trigger. Consumers clear controlled state directly,
  while multiple values can also be removed through their token controls.
- Editing the displayed text does not silently mutate the selected option. The
  selected option is cleared when the query diverges according to the final
  state rules implemented by the hook.

### Multiple selection

- Selected values render as tokens followed by the native input within the
  same wrapping value container.
- Tokens keep their intrinsic width and wrap as needed.
- The input consumes remaining space while retaining a useful minimum editable
  width.
- Selecting an option clears the query and keeps focus in the input.
- Already selected options cannot be added twice unless duplicate values are
  explicitly supported in a future API.
- `limitTags` only collapses tokens while the control is unfocused. Focusing
  the control exposes all selected values for editing.

### Token keyboard editing

- The native input is the only part of the value area in the normal tab order.
- ArrowLeft from an empty input moves focus to the last removable token.
- ArrowLeft and ArrowRight move between token remove buttons.
- ArrowRight from the last token returns focus to the input.
- Backspace from an empty input first focuses the last removable token rather
  than immediately deleting it.
- Backspace or Delete on a focused token removes it.
- After removal, focus moves to the previous token, the next token, or the
  input, depending on what remains.
- Escape from a focused token returns focus to the input without removing the
  value.
- Disabled tokens cannot be removed or focused as removal targets.
- Pointer removal returns focus to the input unless the user has moved focus
  elsewhere.

### Listbox navigation

- ArrowDown and ArrowUp open the listbox when necessary and move through
  enabled options.
- Home and End move to the first and last enabled options while navigating the
  listbox.
- Enter selects only an explicitly active option.
- Disabled options are never active or selectable.
- Pointer movement updates the active option without moving DOM focus out of
  the input.
- Native text-editing keys remain available while focus is in the input.
- Listbox options do not enter the page tab order.

### Custom values

- Custom values are opt-in through `allowCustomValue`.
- A non-empty query that does not exactly match an existing selectable option
  produces a visible `Create “query”` option.
- The create option participates in the same keyboard and pointer navigation
  as ordinary options.
- Enter never creates a value merely because no ordinary option is active.
- The create label can be customized for product language or localization.
- Creation uses the same selection callback path as ordinary options, with a
  reason that identifies the action as custom-value creation.

### Loading and empty states

- Initial loading, loading more, no matches, and an empty option source are
  represented as explicit listbox states.
- The control exposes loading with `aria-busy`.
- Status text is announced without becoming a selectable option.
- Incremental loading preserves the current query, selection, scroll position,
  and active option when possible.
- `onLoadMore` is called only when more results are available and a request is
  not already in progress.

## Proposed public API

The final generic types should preserve strong option and value inference. The
exact callback signatures may be adjusted during implementation, but state
ownership and behavior reasons should remain explicit.

```tsx
export type AutocompleteChangeReason =
  | 'select-option'
  | 'remove-option'
  | 'clear'
  | 'create-option';

export type AutocompleteInputChangeReason = 'input' | 'selection' | 'clear';

export type AutocompleteOpenChangeReason =
  | 'input'
  | 'focus'
  | 'keyboard'
  | 'selection'
  | 'escape'
  | 'outside-press';

export type AutocompleteProps<Option, Multiple extends boolean = false> = {
  options: readonly Option[];
  value?: AutocompleteValue<Option, Multiple>;
  defaultValue?: AutocompleteValue<Option, Multiple>;
  onValueChange?: (
    value: AutocompleteValue<Option, Multiple>,
    reason: AutocompleteChangeReason,
  ) => void;

  inputValue?: string;
  defaultInputValue?: string;
  onInputValueChange?: (
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => void;

  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean, reason: AutocompleteOpenChangeReason) => void;

  multiple?: Multiple;
  allowCustomValue?: boolean;
  limitTags?: number;

  getOptionLabel: (option: Option) => string;
  getOptionValue: (option: Option) => string;
  getOptionDisabled?: (option: Option) => boolean;
  getCreateOptionLabel?: (inputValue: string) => string;

  loading?: boolean;
  loadingMore?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
  loadingText?: ReactNode;
  noOptionsText?: ReactNode;
};
```

### API changes from the draft

- Add controlled and uncontrolled pairs for selected value, query, and popup
  state.
- Export `AutocompleteValue` so consumers can type external state without
  recreating the conditional type.
- Replace boolean `limitTags` with `limitTags?: number`.
- Replace `addOptions` with `allowCustomValue` and an explicit create option.
- Make focus-triggered opening the fixed interaction model.
- Add asynchronous-status props.
- Remove `autoSize`. Wrapping selected values is the default multiple-select
  behavior.
- Narrow `OptionProps`; it should not accept general `BoxProps` that can
  override semantics or internal interaction handlers.
- Ensure callback reasons let controlled consumers distinguish user actions
  without inferring them from values.

Before implementation is complete, audit the current branch and package
exports for any consumers of renamed draft props. If compatibility is needed,
use a small deprecated adapter rather than maintaining two internal behavior
paths.

## Internal architecture

Replace the single large component with parts that have narrow ownership.

```text
Autocomplete
├── useAutocompleteState
├── useAutocompleteOptions
├── useAutocompleteNavigation
├── AutocompleteControl
│   ├── AutocompleteTokenList
│   │   ├── AutocompleteToken
│   │   └── AutocompleteOverflowIndicator
│   ├── native combobox input
│   └── loading indicator
├── AutocompleteListbox
│   ├── AutocompleteOption
│   ├── AutocompleteCreateOption
│   └── AutocompleteStatus
└── hidden form value serialization
```

Suggested files:

- `src/components/Autocomplete/Autocomplete.tsx`
- `src/components/Autocomplete/AutocompleteControl.tsx`
- `src/components/Autocomplete/AutocompleteListbox.tsx`
- `src/components/Autocomplete/AutocompleteOption.tsx`
- `src/components/Autocomplete/AutocompleteToken.tsx`
- `src/components/Autocomplete/useAutocompleteState.ts`
- `src/components/Autocomplete/useAutocompleteNavigation.ts`
- `src/components/Autocomplete/utils.ts`
- `src/components/Autocomplete/types.ts`

The split should follow actual responsibility. Avoid creating pass-through
components or utilities used only once when they do not clarify ownership.

### State ownership

`useAutocompleteState` should normalize controlled and uncontrolled state and
provide intent-oriented actions:

- `setInputValue`
- `selectOption`
- `removeOption`
- `createOption`
- `openPopup`
- `closePopup`

The hook should be the single place that decides:

- whether single or multiple selection closes the popup;
- when selection resets the query;
- when edited text invalidates a single selected value;
- how callback reasons are emitted;
- whether a proposed action is blocked by disabled or read-only state.

Do not synchronize derived state through effects when it can be calculated
during render or changed in the same event that changes its source.

### Option identity and filtering

- Use `getOptionValue` as the stable identity for selection and lookup.
- Build `Set` or `Map` indexes once per relevant option/value change rather
  than repeatedly scanning arrays.
- Keep filtering separate from selection state.
- Preserve the supplied option order unless an explicitly documented fuzzy
  ranking algorithm changes it.
- Treat the create option as a distinct internal item, not as a mutation of the
  consumer's options array.
- Centralize exact-match rules so creation, filtering, and duplicate prevention
  agree.

## Autocomplete-specific control construction

The control will use its own slot recipe in this PR:

- `root`
- `control`
- `valueContainer`
- `input`
- `token`
- `overflowIndicator`
- `loadingIndicator`
- `listbox`
- `status`

Conceptual structure:

```tsx
<div className={styles.root}>
  <div className={styles.control} data-open={open}>
    <div className={styles.valueContainer}>
      {tokens}
      <input className={styles.input} role="combobox" />
    </div>
    {loadingIndicator}
  </div>
  {listbox}
</div>
```

This is an internal implementation, not a new public compound-component API.
It should use names and boundaries that map cleanly to a future `InputFrame`,
without importing private `TextInput` internals or duplicating its entire
recipe.

### Layout requirements

- The control is one visible bordered surface.
- `valueContainer` uses flex wrapping and `min-width: 0`.
- Tokens use intrinsic sizing and do not grow to consume half the row.
- The input uses a flexible basis with a token-backed minimum editable width.
- Long token labels truncate inside the token without forcing the loading
  indicator out of the control.
- Multiple rows increase the control height naturally while preserving the
  minimum height for the selected size.
- Clicking unused control space focuses the native input.
- Clicking a token remove button performs that action without the frame
  redirecting the event.
- Do not introduce a horizontal token scroller as the default layout.
- Do not use hard-coded pixel values; add or reuse design tokens as required.

## Token and Chip integration

The preferred implementation is to extend `Chip` only where doing so improves
its generally useful dismissible-token contract. Avoid Autocomplete reaching
through `Chip` markup or attaching button refs to its outer container.

Potential `Chip` additions:

```tsx
type ChipProps = {
  dismissButtonRef?: Ref<HTMLButtonElement>;
  dismissButtonTabIndex?: number;
  onDismissKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
};
```

Requirements:

- Token focus targets the actual remove button.
- The ref type matches the runtime element.
- Remove buttons use `tabIndex={-1}` until token-editing mode is entered.
- Each remove button has an accessible label containing the option label.
- Disabled Autocomplete instances block pointer and keyboard removal.
- Selection and removal are announced through a concise live region.
- The overflow count is styled as an indicator, not as a disabled chip.
- The overflow indicator communicates the number of hidden values. If its
  label exposes individual values, keep the announcement reasonably short.

## Popup and Floating UI integration

Use Floating UI for positioning and interaction coordination:

- `useFloating` for anchoring, width, flip, offset, and size middleware.
- `useRole` for combobox/listbox relationships where appropriate.
- `useListNavigation` with virtual focus so DOM focus remains in the input.
- `useDismiss` for Escape and outside press.
- `getReferenceProps`, `getFloatingProps`, and `getItemProps` to compose event
  handlers instead of overwriting them.

Implementation requirements:

- Put `role="combobox"`, `aria-expanded`, `aria-controls`,
  `aria-autocomplete="list"`, and `aria-activedescendant` on the native input.
- Use stable IDs for the input, listbox, and options.
- Clear `aria-activedescendant` when there are no enabled options.
- Reset or preserve the active index intentionally when filtering changes.
- Automatically activate the first enabled option when the popup opens or the
  filtered results change.
- Keep popup width aligned to the control while allowing viewport constraints.
- Ensure portalled listboxes work with Storybook play queries and assistive
  technology relationships.
- Do not render a popup indicator, dropdown caret, or clear trigger.

## Option rendering

Review `ListItem` and `HighlightText` before retaining custom option markup.
Reuse them only if they can support combobox semantics without leaking or
overwriting handlers supplied by Floating UI.

Each option must support:

- label and optional description;
- query-match highlighting;
- selected state;
- active state;
- disabled state;
- optional leading or trailing content;
- multiple-select selection affordance;
- ordinary and create-option variants.

If the shared primitive cannot do this cleanly, keep a narrow
Autocomplete-specific option component. Do not expand a general primitive
with Autocomplete-only behavior solely to claim reuse.

## Form and field integration

- Inherit `size`, `disabled`, `error`, and `invalid` from `FieldContext`, using
  the established explicit-prop precedence.
- Preserve native input props that apply to an editable combobox.
- Associate the combobox with `FormField` label, description, and error IDs.
- Ensure disabled state blocks opening, selection, creation, and token removal.
- Define hidden-input serialization for single and multiple values in one
  utility.
- Use `getOptionValue` for submitted option values, not display labels.
- Document custom-value serialization.
- Avoid duplicate submission from both the visible query input and hidden
  selected-value inputs.

## Recipe work

- Convert `autocompleteRecipe` into a registered slot recipe.
- Register it in `panda.config.ts` under `theme.extend.slotRecipes` or the
  repository's current slot-recipe registration path.
- Move its generated export to the slot-recipe barrel if the generated Panda
  structure requires it.
- Reuse existing semantic tokens for border, background, foreground, focus,
  validation, and disabled states.
- Add tokens only for reusable concepts, such as minimum editable width, that
  are not expressible with existing tokens.
- Remove the current competing `flex: 1` rules on chips and input.
- Remove arbitrary control heights, chip dimensions, and offsets.
- Support every existing component size and theme.
- Run Panda code generation after recipe changes.

## Implementation phases

### Phase 1: Establish types and state behavior

1. Inventory current public exports and draft consumers.
2. Define generic value, option, callback-reason, and controlled-state types.
3. Implement controlled/uncontrolled selected value, query, and open state.
4. Centralize selection, removal, creation, and open/close actions.
5. Add indexed option identity and selected-value lookup.
6. Remove effect-based synchronization where state can be derived or changed
   atomically.

Deliverable: state behavior can be reviewed independently of visual layout.

### Phase 2: Split the implementation

1. Extract the control, listbox, option, and token components.
2. Extract state, filtering, navigation, and form serialization helpers.
3. Keep public exports limited to supported consumer APIs.
4. Remove obsolete paths from the original monolithic component as each part
   is adopted.

Deliverable: the top-level component primarily composes state and view parts.

### Phase 3: Rebuild the control layout

1. Create and register the Autocomplete slot recipe.
2. Render tokens and the native input in one wrapping value container.
3. Give the input a useful flexible minimum width.
4. Add dedicated loading, overflow, and status slots.
5. Add focus-request behavior for clicks on unused control space.
6. Verify narrow widths, long labels, multiple rows, all sizes, validation
   states, disabled state, and both themes.

Deliverable: selected values and the input behave as one editable surface with
no clipping or artificial half-width split.

### Phase 4: Correct token interaction

1. Extend `Chip` with explicit dismiss-button ref and keyboard hooks if needed.
2. Remove chip dismiss buttons from the normal tab sequence.
3. Implement ArrowLeft/ArrowRight token navigation.
4. Implement two-step Backspace behavior and Delete removal.
5. Restore focus predictably after removal.
6. Add live announcements for added and removed values.
7. Replace the disabled-chip overflow representation.

Deliverable: token editing is semantic, predictable, and does not create a
large tab sequence.

### Phase 5: Rebuild popup navigation and selection

1. Compose Floating UI positioning and interaction hooks.
2. Keep virtual list navigation anchored to the native input.
3. Activate the first enabled option when the popup opens or filtering changes.
4. Implement disabled-option skipping, Home/End, Enter, and Escape.
5. Verify pointer, touch, and keyboard selection in single and multiple modes.

Deliverable: focus remains stable and Enter acts only on an option the user has
explicitly activated.

### Phase 6: Add custom, empty, and asynchronous states

1. Add the explicit create option and creation callback reason.
2. Add no-options and initial-loading status content.
3. Add loading-more content and guarded `onLoadMore` triggering.
4. Preserve navigation state while results append.
5. Announce loading and result-state changes without excessive repetition.

Deliverable: non-static data paths are visible, navigable, and demonstrable in
Storybook.

### Phase 7: Rewrite Storybook coverage

Create beginner-oriented documentation explaining when to use Autocomplete,
when a `Select` or `TextInput` is more appropriate, and how its three state
channels work.

Recommended stories:

- `Default`
- `Selected`
- `Multiple`
- `MultipleLongValues`
- `LimitTags`
- `Sizes`
- `ValidationStates`
- `Disabled`
- `DisabledOptions`
- `AllowCustomValue`
- `Loading`
- `InfiniteLoading`
- `EmptyResults`
- `ControlledInput`
- `ControlledOpen`
- `WithFormField`
- `TechnologyAssignmentExample`
- `KeyboardTokenEditing`

Add play coverage for:

- typing filters without selecting;
- ArrowDown/ArrowUp plus Enter selection;
- Enter doing nothing before an option is active;
- Escape closing without changing selection;
- single-value replacement after refocus;
- multiple selection keeping the popup open;
- token navigation and two-step Backspace removal;
- disabled component and disabled option behavior;
- explicit custom-value creation;
- limit-tags expansion on focus;
- initial and incremental loading;
- load-more firing from a genuinely scrollable list;
- controlled query and controlled popup examples.

Because the popup is portalled, interaction tests should query it through the
document body rather than assuming it is inside the story canvas root.

### Phase 8: Cleanup and verification

1. Remove obsolete draft props, helpers, recipes, and story fixtures.
2. Confirm public exports and generated recipe exports.
3. Run `npm run prepare`.
4. Run `npm run validate`.
5. Run `npm run build`.
6. Run `npm run storybook:build`.
7. Run `npm run doctor` after the React refactor.
8. Manually verify all stories at narrow and wide widths, light and dark
   themes, browser zoom, keyboard-only use, and at least one screen reader.
9. Review the final diff for unrelated branch changes before committing.

The repository has no configured test framework. Do not add or invoke a test
command as part of this plan; Storybook play coverage and the existing
validation commands are the available automated checks.

## Accessibility checklist

- The visible input retains native text-editing behavior.
- The input is the only normal tab stop inside the combobox control.
- The input has a programmatic label in every story and usage example.
- `aria-expanded`, `aria-controls`, and `aria-activedescendant` reflect current
  state.
- The listbox and every selectable option have stable IDs and correct roles.
- Active, selected, and disabled option states are conveyed programmatically.
- Token remove controls are actual buttons with specific accessible names.
- Token navigation never focuses a non-interactive wrapper.
- Selection, removal, result changes, and loading are announced
  concisely.
- Focus remains visible in both themes and every validation state.
- Pointer-only affordances have keyboard equivalents.
- Status rows are not exposed as selectable options.
- The popup remains usable at zoom and within a constrained viewport.

## Risks and mitigations

### Public API churn

The component is drafted, but branch or downstream consumers may already use
its current props. Audit usage before removal and document every rename. Use a
temporary deprecated adapter only if an actual consumer requires it.

### Controlled-state feedback loops

Three controlled state channels can cause duplicate callbacks or stale
rendering. Normalize them through one hook, emit callbacks from user intents,
and do not mirror controlled props into effect-managed state.

### Focus regressions

Token editing, virtual option focus, and portalled content can compete for
focus. Keep the native input as the default focus owner, use explicit refs for
token dismiss buttons, and cover every focus transition in Storybook.

### Premature shared abstractions

Autocomplete resembles `TextInput` and `Select`, but forcing a shared frame or
combobox abstraction now could spread an unproven contract. Keep the shell and
behavior local, with clean internal slots that can be compared during a later
extraction.

### Recipe drift before InputFrame

The local recipe temporarily duplicates some field-shell concepts. Limit that
duplication to visual tokens and state selectors, document it, and avoid
inventing incompatible public slot APIs. The follow-up refactor should compare
the working TextInput and Autocomplete implementations before extracting their
shared frame.

### Loading race conditions

Repeated scroll events can request the same page multiple times. Guard loading
with `loadingMore` and `hasMore`; keep data fetching and cancellation owned by
the consumer.

## Acceptance criteria

- Single selection, multiple selection, custom values, and async
  loading follow the behavior defined in this plan.
- Selected tokens and the typeable input share one wrapping surface without
  clipping, a fixed 50/50 split, or a separate horizontal chip scroller.
- Long values remain legible and do not displace the loading indicator.
- The input is the only normal tab stop in the control.
- Keyboard token editing focuses actual remove buttons and restores focus
  predictably after removal.
- Refocusing a selected single value allows typing to replace it naturally.
- Focusing the component opens the popup and activates the first enabled
  option.
- Pressing Enter immediately selects the active first option.
- The control renders no dropdown caret or clear trigger.
- Custom values appear as an explicit `Create` option.
- `limitTags` is numeric and collapses values only while unfocused.
- Disabled state blocks every mutating interaction.
- Empty, loading, and loading-more states are visible and accessible.
- FormField state and accessible descriptions are inherited correctly.
- The implementation is split into components and hooks with clear ownership;
  the original monolith is removed.
- The Autocomplete recipe uses design tokens and follows slot-recipe
  conventions.
- Storybook documents supported usage and covers critical keyboard behavior.
- `npm run validate`, `npm run build`, `npm run storybook:build`, and
  `npm run doctor` pass, aside from any clearly documented pre-existing issue.

## Follow-up PR: shared InputFrame

After the Autocomplete behavior and local control structure are proven, a
separate PR may extract a shared internal `InputFrame` from the working
`TextInput` and `AutocompleteControl` implementations, then evaluate `Select`
and segmented inputs as additional consumers.

That follow-up should:

- preserve the public behavior and visuals delivered here;
- extract only genuinely shared shell geometry, state styling, and accessory
  handling;
- leave combobox semantics, token layout, popup behavior, and selection state
  owned by Autocomplete;
- migrate one consumer at a time with visual and interaction verification;
- keep the shared primitive internal until its contract is proven.

## References

- [WAI-ARIA Authoring Practices: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [WAI-ARIA Authoring Practices: Layout Grid Examples](https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/layout-grids/)
- [MUI Autocomplete](https://mui.com/material-ui/react-autocomplete/)
- [Primer Autocomplete](https://primer.style/product/components/autocomplete/)
- [Primer TextInputWithTokens](https://primer.style/product/components/text-input-with-tokens/)
- [Fluent 2 Combobox](https://fluent2.microsoft.design/components/web/react/core/combobox/usage)
- [React Spectrum ComboBox](https://react-spectrum.adobe.com/ComboBox)
