# Public API JSDoc

Source JSDoc is the canonical API reference shown to consumers in editor
IntelliSense and generated declarations. Storybook remains the canonical place
for visual variants, realistic application examples, and interactive behavior.

Follow `public-api-exports.md` to decide which symbols belong to the supported
package API and how runtime values and types are exposed.

## Public Surface

These rules apply to every component, provider, hook, helper, type, and prop
exported from `src/index.ts`. They also apply to named props and value types used
by those exports, even when the type is not exported separately.

Do not add documentation to private implementation details only to satisfy a
coverage target. Promote a private symbol to the public contract only when
consumers are expected to depend on it.

## Component Documentation

Attach JSDoc directly to the exported component declaration. Cover the parts of
this list that affect consumers:

1. What the component represents and when to use it.
2. When a native element or nearby design-system component is a better choice.
3. Which semantic element it renders, including polymorphic behavior.
4. Controlled and uncontrolled state modes.
5. Required parent, child, or provider composition.
6. Keyboard, focus, labeling, and screen-reader responsibilities.
7. One minimal, copyable `@example` using a fenced `tsx` block.

Keep the first paragraph useful on its own because editors may collapse the
remainder. Document observable behavior, not internal hooks or styling
mechanics that consumers cannot rely on.

````tsx
/**
 * Performs an action or navigates to another location.
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

Use `@see` only for a stable documentation URL or identifier. Do not add a
fragile local Storybook development URL.

## Props Types

Attach a concise overview to each public component props declaration. Point to
the corresponding component and describe important inherited surfaces without
copying them.

```tsx
/** Props accepted by {@link Button}. Includes compatible native element props. */
export type ButtonProps = BoxProps & {
  // ...
};
```

Document every property introduced or behaviorally changed by this library.
Inherited HTML, `BoxProps`, Panda style props, and generated recipe variants
retain their upstream documentation unless the component changes their
contract.

### Property descriptions

- Explain what a consumer needs to decide or implement correctly.
- For booleans, explain what changes when the value is true.
- For callbacks, explain when the callback runs and what its arguments mean.
- For accessibility props, state the consumer's labeling responsibility.
- For numeric durations, distances, or dimensions, state the unit.
- For context-aware props, state the precedence between an explicit prop and
  inherited context.
- Do not merely restate the property name or its TypeScript type.

```tsx
type ExampleProps = {
  /** Prevents activation and removes the control from form submission. */
  disabled?: boolean;

  /** Runs after the user commits a new value. */
  onChange?: (value: string) => void;
};
```

### Defaults

Put runtime defaults in a separate `@default` tag. The documented value must
match the component implementation or the registered recipe default.

```tsx
type ExampleProps = {
  /** Controls the visual density of the component. */
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
};
```

When the default comes from context or a recipe and can vary, describe that
precedence instead of claiming a fixed runtime value.

### Controlled and uncontrolled pairs

Use the same terminology across all stateful components:

```tsx
type DisclosureProps = {
  /**
   * Controlled open state. Pair with `onOpenChange` to apply state-change
   * requests.
   */
  open?: boolean;

  /** Initial open state when `open` is not provided. */
  /** @default false */
  defaultOpen?: boolean;

  /** Runs when user interaction requests a change to the open state. */
  onOpenChange?: (open: boolean) => void;
};
```

Do not describe an uncontrolled default as a value that continues to control
the component after initialization.

### Deprecated properties

Use `@deprecated` with a replacement and, when known, a removal milestone.

```tsx
type ButtonProps = {
  /**
   * Legacy leading icon name.
   *
   * @deprecated Use `before={<Icon name="add" />}`. Planned for removal in the
   * next major release.
   */
  iconBefore?: IconNamesList;
};
```

## Types, Hooks, Providers, and Helpers

Public supporting symbols require direct JSDoc:

- Event and handler aliases identify the native event and intended target.
- Value types explain normalization rules and sentinel values.
- Hooks describe valid call context, return value, and thrown errors.
- Providers explain when direct use is necessary and what descendants receive.
- Helpers document inputs, output, edge cases, and whether application code is
  expected to call them.

```tsx
/** A time value normalized to a 24-hour `hour` and a zero-based minute. */
export interface TimeValue {
  /** Hour in 24-hour format from 0 through 23. */
  hour: number;
  /** Minute from 0 through 59. */
  minute: number;
}
```

## Examples

- Use `@example` followed by a fenced `tsx` block.
- Keep examples minimal and valid when copied into a component body.
- Prefer the recommended API, not compatibility aliases.
- Show both controlled and uncontrolled examples when the distinction is central
  to correct use; otherwise keep the second form in Storybook.
- Do not import symbols in every example unless the import itself is important.

## Relationship to Storybook

JSDoc answers: "What is this API and how do I call it correctly here?"

Storybook answers: "How does it look and behave across variants and realistic
scenarios?"

Behavioral claims must agree in both places. A useful story-file description
should be adapted onto the source declaration rather than left where editor
hover cannot display it. Keep extended compositions, visual comparisons,
interactive controls, and keyboard demonstrations in Storybook.

## Review Checklist

- JSDoc is attached to the symbol a package consumer imports.
- The first sentence distinguishes the component from nearby alternatives.
- Rendered element and polymorphic behavior are accurate.
- Controlled and uncontrolled modes use the canonical terminology.
- Callback timing and arguments are clear.
- Runtime defaults use `@default` and match the implementation.
- Prop/context precedence is documented when relevant.
- Accessibility obligations are explicit when not handled automatically.
- The example is minimal, valid TSX, and uses the preferred API.
- Inherited and generated documentation is not duplicated.
- Storybook and source JSDoc make the same behavioral claims.
