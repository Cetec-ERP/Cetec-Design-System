# InputFrame Phase 1 Implementation Plan

## Goal

Create one internal field-shell primitive for `TextInput`, `Select`,
`Autocomplete`, and PR 174's segmented date/time inputs. This phase should
eliminate parallel implementations of borders, sizing, state styling, and
accessory slots before `Autocomplete` builds further on them.

## 1. Define the InputFrame contract

Create an internal slot-based primitive with these responsibilities:

- Field border, background, radius, and transitions.
- Size-dependent height, padding, typography, and accessory dimensions.
- Disabled, invalid, error, valid, hover, focus, and open appearance.
- Leading and trailing decorative or interactive slots.
- Flexible control layout with `flex: 1` and `min-width: 0`.
- Single-line and wrapping content arrangements.
- Support for either a focusable control inside the frame or the frame root
  itself acting as the focusable control.

Proposed structure:

```tsx
<InputFrame.Root
  size={size}
  disabled={disabled}
  invalid={invalid}
  error={error}
  valid={valid}
  open={open}
>
  <InputFrame.Before>{before}</InputFrame.Before>
  <InputFrame.Control>{children}</InputFrame.Control>
  <InputFrame.After>{after}</InputFrame.After>
</InputFrame.Root>
```

Keep the primitive internal until its API has been proven across all four
component families.

## 2. Create the shared slot recipe

Add an `inputFrame` slot recipe containing:

- `root`
- `control`
- `before`
- `after`
- `accessory`
- `interactiveAccessory`

The root must support both focus models:

```css
&:focus-visible
&:focus-within:not(:has(button:focus))
```

It must also support `data-open`, `data-disabled`, `data-error`,
`data-invalid`, and `data-valid`.

The recipe should provide common CSS variables for:

- Inline and block padding.
- Font size.
- Accessory width and padding.
- Minimum control height.
- Content gap.

Do not include component-specific widths, chip styles, segmented typography,
caret behavior, or listbox styling.

## 3. Generalize accessory-slot propagation

Move the existing before/after `SlotContext` setup out of `TextInput` and into
`InputFrame`.

Use a generic `InputFrame` slot owner instead of extending `SlotOwner` with
every consumer such as `DateInput`, `TimeInput`, and `DateTimeInput`.

The accessory implementation must support:

- Decorative icons with `pointer-events: none`.
- Loading spinners and badges.
- Buttons and icon buttons.
- Automatic propagation of size, disabled, error, and invalid state.
- Edge-radius adjustment for interactive accessories.

Prefer an explicit interactive-accessory path over relying exclusively on
element-type comparisons.

## 4. Migrate TextInput as the reference consumer

Refactor `TextInput` first because it represents the simplest "control inside
frame" case:

```tsx
<InputFrame.Root ...>
  <InputFrame.Before>{resolvedBefore}</InputFrame.Before>
  <InputFrame.Control asChild>
    <input ... />
  </InputFrame.Control>
  <InputFrame.After>{resolvedAfter}</InputFrame.After>
</InputFrame.Root>
```

Preserve:

- Native input semantics.
- Existing name, type, autocomplete, and value behavior.
- `FieldContext` precedence.
- `autoSize`.
- Public before/after and icon convenience props.

Remove duplicated frame and accessory styling from `textInputRecipe`. Keep
only native-input-specific styling there if necessary.

## 5. Migrate Select and validate root-focus operation

Use `Select` to prove that `InputFrame` does not assume a native input child.

The `InputFrame` root should remain `Select`'s semantic and interactive
trigger:

```tsx
<InputFrame.Root
  ref={floating.refs.setReference}
  role="combobox"
  tabIndex={disabled ? -1 : 0}
  open={isOpen}
  {...getReferenceProps()}
>
  <InputFrame.Control>
    {multiple ? selectedChips : displayValue}
  </InputFrame.Control>
  <InputFrame.After>
    <Icon name="caret-down" />
  </InputFrame.After>
</InputFrame.Root>
```

Retain `Select`-specific ownership of:

- Floating UI integration.
- Combobox and listbox ARIA.
- Typeahead and keyboard navigation.
- Option selection.
- Hidden form inputs.
- Value and placeholder rendering.
- Chip removal.
- Caret rotation.
- Menu positioning.

Remove frame styling from `selectRecipe`; retain only `Select`-specific
content, chips, caret, and overlay styles.

## 6. Support single-line and wrapping control layouts

`InputFrame.Control` needs layout variants suitable for:

- `TextInput`: one native control.
- `Select`: text or selected chips.
- `Autocomplete`: chips followed by a typeable input.
- Date/time: multiple adjacent segmented groups.

The shared layout must establish:

```css
display: flex;
align-items: center;
flex: 1;
min-width: 0;
```

A wrapping mode should additionally provide:

```css
flex-wrap: wrap;
align-content: center;
```

`InputFrame` should own the geometry, but individual components continue to
own their child styling and behavior.

## 7. Integrate PR 174's segmented inputs

Once `InputFrame` is available, rebase or update PR 174 so its higher-level
fields compose it:

- `DateInput`
- `DateRangeInput`
- `TimeInput`
- `TimeRangeInput`
- `DateTimeInput`

`SegmentedInput`, `SegmentedDate`, and `SegmentedTime` should remain
behaviorally independent. They continue to own:

- Spinbutton semantics.
- Segment focus.
- Arrow navigation.
- Numeric entry.
- Auto-advance.
- Date/time formatting.

Replace the duplicated shells in:

- `dateInputsRecipe`
- `timeInputsRecipe`
- `dateTimeInputsRecipe`

Keep component-specific minimum widths outside `InputFrame`:

| Consumer         | Minimum width |
| ---------------- | ------------: |
| `DateInput`      |           128 |
| `TimeInput`      |           104 |
| `DateTimeInput`  |           216 |
| `DateRangeInput` |           248 |
| `TimeRangeInput` |           200 |

Composite fields should render their segmented groups inside one control slot:

```tsx
<InputFrame.Control>
  <SegmentedDate ... />
  <SegmentedSeparator>–</SegmentedSeparator>
  <SegmentedDate ... />
</InputFrame.Control>
```

## 8. Add focus-request behavior without embedding control logic

`InputFrame` must not decide which descendant is the "real" input. Provide a
small mechanism for consumers to handle clicks on unused frame space.

Expected behavior:

- `TextInput` focuses its native input.
- `Autocomplete` focuses its typeable input.
- Date/time focuses the first enabled segment.
- `Select` already focuses and activates the root.
- Clicking an interactive accessory does not redirect focus.
- Clicking a separator may focus the following segmented group.

This could be an `onControlFocusRequest` callback or a consumer-owned root
handler.

## 9. Preserve semantic ownership

`InputFrame` should primarily apply structure and data attributes. Consumers
remain responsible for semantic attributes:

- `TextInput`: native input attributes.
- `Autocomplete`: combobox attributes on the typeable input.
- `Select`: combobox attributes on the frame trigger.
- Segmented input: group and spinbutton attributes.

Do not add a generic role to `InputFrame`.

Propagate `aria-invalid` and `aria-disabled` to the actual semantic control,
not only to the visual shell.

## 10. Storybook validation matrix

Add or update stories that compare the shared frame across consumers:

- All four sizes.
- Empty and populated.
- Before and after decorative accessories.
- Before and after interactive accessories.
- Disabled.
- Invalid/error.
- Valid where supported.
- Focused.
- Open.
- Long content and constrained width.
- Multiple `Select` with one-line chips.
- Multiple `Select` with wrapping chips.
- Segmented date, time, date/time, and ranges.
- Dark theme.

The stories should make visual drift between components obvious.

## Phase 1 completion criteria

Phase 1 is complete when:

- `TextInput` and `Select` use `InputFrame`.
- `Autocomplete` can compose `InputFrame` without adding field-shell CSS.
- PR 174 can replace all date/time field shells with `InputFrame`.
- Common field styling exists in only one recipe.
- Both root-focus and descendant-focus patterns work.
- Decorative and interactive accessories behave consistently.
- Chip and segmented content can shrink or wrap without overflowing.
- Keyboard and ARIA behavior remains owned by each consumer.
- Lint, typecheck, build, Storybook build, React Doctor, and Storybook Doctor
  pass.
