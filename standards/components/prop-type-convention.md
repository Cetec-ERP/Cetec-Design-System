# Component Prop Type Convention

Defines how component prop types are composed from `BoxProps`, recipe variants, and component-specific props.

## Hard Standards

1. Public component prop composition must start from the unspecialized
   `Omit<BoxProps, keyof VariantProps>`. Every design-system component retains
   the complete `BoxProps` styling API.

```ts
export type ComponentProps = Omit<BoxProps, keyof ComponentVariantProps> &
  ComponentVariantProps & {
    // component-specific props
  };
```

2. Do not specialize the public base as `BoxProps<'div'>`,
   `BoxProps<'button'>`, or another concrete element. Concrete `BoxProps`
   specializations are reserved for internal render-time checks, such as a
   `satisfies BoxProps<'button'>` expression for props passed to `Box`.
3. When component-specific, native, pattern, or recipe props can collide with
   `BoxProps`, omit those keys from `BoxProps` before intersecting the types.
   Put the unspecialized `BoxProps` composition first.
4. Prefer React 19 ref-as-prop typing (`ComponentPropsWithRef`) and avoid `forwardRef` wrappers unless external integration requires it.
5. If a component should not accept children, explicitly omit `'children'` from the base type.
6. Do not declare function components with `React.FC` or `FC`; type props on the function parameter.
7. Do not use React namespace type imports/usages (for example `import type React from 'react'` or `React.ReactNode`); use named type imports from `react`.

```ts
export type DatePickerProps = Omit<
  BoxProps,
  keyof DatePickerVariantProps | 'children'
> &
  DatePickerVariantProps & {
    value?: DateValue | null;
  };
```

### Additional prop sources

Name the component-owned surface when several prop sources need to be merged,
then omit every overlapping key before composition. This keeps one authoritative
type for editor IntelliSense, emitted JSDoc, and documentation tooling.

```ts
type ComponentOwnProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export type ComponentProps = Omit<
  BoxProps,
  keyof ComponentVariantProps | keyof ComponentOwnProps
> &
  ComponentVariantProps &
  ComponentOwnProps;
```

If a Panda pattern contributes aliases that are not already represented by
`BoxProps`, pick only those pattern-specific properties instead of intersecting
the pattern's complete JSX props. Complete Panda JSX prop types also contain
the styling and native-element surfaces already supplied by `BoxProps`.

```ts
type WrapPatternProps = Pick<
  WrapProps,
  'align' | 'columnGap' | 'gap' | 'justify' | 'rowGap'
>;

export type GroupProps = Omit<
  BoxProps,
  keyof WrapPatternProps | keyof GroupOwnProps
> &
  WrapPatternProps &
  GroupOwnProps;
```

The public type and its JSDoc are the single source for package declarations,
editor IntelliSense, and Playroom prop metadata. Do not change a public
`BoxProps` composition merely to manipulate one documentation parser.

## Guidance

1. If a recipe prop needs a different public type, omit it from recipe variant props and re-declare it.
2. Prefer declaring component-specific props after base/variant composition for readability.
3. Do not narrow `children` to `string` when component composition is expected.
   - For composable primitives (for example `Button` with inline `Badge`), type as `ReactNode` (or `string | ReactNode`) to preserve valid usage.
   - Prefer adapting prop types over forcing callsite rewrites that reduce component ergonomics.
4. Use concrete element specializations to validate internal conditional
   rendering without changing the public prop surface.

```ts
<Box
  {...({
    as: 'button',
    type: 'button',
  } satisfies BoxProps<'button'>)}
/>
```

### Situational Example: Re-typing Variant Props

```ts
export type ButtonProps = Omit<BoxProps, keyof ButtonVariantProps> &
  Omit<ButtonVariantProps, 'iconBefore' | 'iconAfter'> & {
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
  };
```
