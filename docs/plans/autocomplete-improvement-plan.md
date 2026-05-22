---
title: Autocomplete Improvement Plan
status: draft
owners:
  - engineering
---

# Autocomplete Improvement Plan

## Summary

Refactor `src/components/Autocomplete/` to remove duplication, align it more closely with existing design-system primitives, and fix a few accessibility / disabled-state issues.

## Goals

- Reuse shared list item and highlight primitives instead of custom option rendering.
- Prevent disabled autocomplete instances from allowing chip removal.
- Reduce duplicated logic shared with `Select` and `TextInput`.
- Improve keyboard and listbox behavior consistency.
- Add story coverage for the important interaction paths.

## Non-goals

- Redesigning the visual appearance.
- Changing Autocomplete's public API unless needed for the refactor.
- Rebuilding Select unless a shared abstraction naturally requires it.

## Proposed workstreams

### 1) Fix behavior bugs first

- Pass `disabled` through to selected chips.
- Ensure dismiss and keyboard removal are blocked when the field is disabled.
- Consume `FieldContext` so `Autocomplete` can inherit `size`, `disabled`, `error`, and `invalid` like other form controls.

### 2) Replace custom option rendering with shared primitives

Current Autocomplete option markup duplicates behavior already available in `ListItem`.

Plan:

- Extend `ListItem` or `HighlightText` to support Autocomplete's fuzzy-match highlighting.
- Use `ListItem` props (`label`, `description`, `query`, `highlightMatches`, `iconBefore`, `iconAfter`) instead of passing custom children.
- Keep the checkbox / selected-state affordance in the shared list item path where possible.

If `ListItem` cannot support fuzzy highlighting cleanly, extract a shared `OptionListItem` used by both Autocomplete and Select.

### 3) Extract shared combobox helpers

Pull duplicated logic into shared utilities/hooks, likely under `src/components/Autocomplete/` or `src/components/shared/`:

- chip size resolution
- hidden input rendering for form submission
- selected value normalization
- floating popover sizing middleware
- optionally, option selection helpers shared with `Select`

### 4) Simplify recipes

- Revisit `autocompleteRecipe` vs `textInputRecipe` overlap.
- Move repeated input-frame tokens and sizing into a shared recipe or token layer where it makes sense.
- Replace repeated hard-coded `[26px]`, `[31px]`, etc. with shared tokens or a single source of truth.

### 5) Improve keyboard / listbox behavior

- Decide whether Autocomplete should adopt Floating UI list navigation like `Select`.
- If yes, add `useListNavigation`/`useTypeahead`-style support or an equivalent combobox helper.
- Ensure arrow keys, Enter, Escape, and chip navigation behave consistently.
- Verify option tab stops do not compete with the combobox input.

### 6) Expand Storybook coverage

Add stories or play tests for:

- keyboard selection with arrow keys + Enter
- backspace/delete chip removal
- disabled state behavior
- add-options / custom option creation
- multiple selection chip dismissal
- load-more / infinite scroll

## Implementation order

1. Fix disabled-state bugs.
2. Add FieldContext inheritance.
3. Extract shared helpers for values/chips/hidden inputs.
4. Replace duplicated option rendering with shared primitives.
5. Refactor recipes/token usage.
6. Add/adjust stories and interaction tests.
7. Run lint, typecheck, and Storybook validation.

## Risks

- Changing option rendering may affect current visual spacing and selected-state styling.
- Introducing shared helpers could create coupling with Select; keep the first extraction small.
- Keyboard behavior changes may require Storybook play-test updates.

## Acceptance criteria

- Disabled Autocomplete cannot remove values or create new ones.
- Autocomplete options use shared list primitives instead of custom duplicated markup.
- Duplicated chip/input/floating logic is reduced or centralized.
- Autocomplete inherits FormField context correctly.
- Storybook covers the main interaction paths.
- `npm run validate` passes.
