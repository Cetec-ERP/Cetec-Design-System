# DatePicker + TimePicker Standards Alignment Plan

## Goal

Align `DatePicker` and `TimePicker` with established component standards used by `TextInput`, `Button`, and `Menu`.

## Scope

- Components to update:
  - `src/components/DatePicker/`
  - `src/components/TimePicker/`
- Reference components for standards:
  - `src/components/TextInput/`
  - `src/components/Button/`
  - `src/components/Menu/`

## Plan

1. Audit and map gaps against reference standards
   - Compare DatePicker/TimePicker implementation and stories to patterns in TextInput, Button, and Menu.
   - Focus on import ordering, type import style, prop composition, splitProps usage, className handling, accessibility props, and story formatting conventions.

2. Refactor DatePicker component files to shared standards
   - Update `src/components/DatePicker/DatePicker.tsx` and `src/components/DatePicker/Calendar.tsx` to use consistent import order and React type usage (no `type React` namespace style).
   - Normalize prop handling/className composition to match project patterns and remove non-standard/comment-heavy structure where it hurts readability.
   - Keep behavior unchanged while improving consistency and lint compliance.

3. Refactor TimePicker component files to shared standards
   - Update `src/components/TimePicker/TimePicker.tsx` and `src/components/TimePicker/TimeList.tsx` with the same conventions as step 2.
   - Normalize React type usage, prop flow, and event typing to align with existing component style.
   - Preserve current UX/keyboard behavior and controlled/uncontrolled logic.

4. Align DatePicker and TimePicker Storybook files
   - Update `src/components/DatePicker/DatePicker.stories.tsx` and `src/components/TimePicker/TimePicker.stories.tsx` to match story conventions seen in Button/TextInput/Menu (quote style, import style/order, meta typing pattern, layout props over inline style where applicable).
   - Correct non-standard import paths and keep story scenarios functionally equivalent.

5. Validate and report
   - Run `npm run lint` to verify style/typing consistency.
   - Summarize exact files/changes and call out any follow-up opportunities if discovered.

## Notes

- No functional behavior changes are intended.
- Primary objective is consistency with existing component standards.
