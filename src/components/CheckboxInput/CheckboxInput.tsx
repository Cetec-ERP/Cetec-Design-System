import { useId, type ReactNode } from 'react';

import { cx } from '@styled-system/css';
import {
  checkboxInput,
  type CheckboxInputVariantProps,
} from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

import { type BoxProps } from '../Box';
import { Checkbox } from '../Checkbox';
import { Label } from '../Label';

import type { CheckboxChangeHandler } from '../Checkbox';

/** Props for {@link CheckboxInput}, a labelled {@link Checkbox}. */
export type CheckboxInputProps = Omit<
  BoxProps,
  keyof CheckboxInputVariantProps
> &
  CheckboxInputVariantProps & {
    /** Form field name submitted when checked. */ name: string;
    /** Controlled checked state. Pair with `onChange`; do not combine with `defaultChecked`. */ checked?: boolean;
    /** Initial uncontrolled checked state; updates after mount are ignored. */
    /** @default false */
    defaultChecked?: boolean;
    /** Runs when the contained native checkbox changes. */ onChange?: CheckboxChangeHandler;
    /** Input ID. When omitted, a stable React ID is generated for the label association. */ id?: string;
    /** Applies error styling to the checkbox and overrides field context. */ error?: boolean;
    /** Marks the checkbox invalid and overrides field context. */ invalid?: boolean;
    /** Visible label content. Provide text or an accessible label element; this wrapper supplies `htmlFor`. */ children?:
      | string
      | ReactNode;
    /** Disables the label and checkbox, overriding field context. */ disabled?: boolean;
  };

/**
 * A checkbox paired with a clickable label.
 *
 * Use this instead of {@link Checkbox} for ordinary labelled form controls.
 * It generates an input ID when needed and connects it to the rendered label.
 * Its checked-state and field-context behavior match `Checkbox`; explicit
 * `disabled`, `error`, and `invalid` props override field context.
 *
 * @example
 * ```tsx
 * <CheckboxInput name="terms" defaultChecked>
 *   I agree to the terms
 * </CheckboxInput>
 * ```
 */
export const CheckboxInput = (props: CheckboxInputProps) => {
  const fieldContext = useFieldContext();
  const {
    name,
    checked,
    defaultChecked,
    onChange,
    id,
    children,
    error: errorProp,
    invalid: invalidProp,
    disabled: disabledProp,
    indeterminate,
    ...rest
  } = props;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const [className, otherProps] = splitProps(rest);
  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  return (
    <Label
      {...dsComponent('CheckboxInput')}
      className={cx(checkboxInput(), className)}
      htmlFor={resolvedId}
      disabled={disabled}
      {...otherProps}
    >
      <Checkbox
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        id={resolvedId}
        error={error}
        invalid={invalid}
        disabled={disabled}
        indeterminate={indeterminate}
      />
      {children}
    </Label>
  );
};
