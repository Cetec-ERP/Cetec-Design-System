import { useId, type ReactNode } from 'react';

import { cx } from '@styled-system/css';
import {
  toggleInput,
  type ToggleInputVariantProps,
} from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { type BoxProps } from '../Box';
import { Label } from '../Label';
import { Toggle } from '../Toggle';

import type { ToggleChangeHandler } from '../Toggle';

/** Props for {@link ToggleInput}, a labelled {@link Toggle}. */
export type ToggleInputProps = Omit<BoxProps, keyof ToggleInputVariantProps> &
  ToggleInputVariantProps & {
    /** Form field name submitted when the toggle is on. */ name: string;
    /** Controlled on/off state. Pair with `onChange`; do not combine with `defaultChecked`. */ checked?: boolean;
    /** Initial uncontrolled on/off state; later updates are ignored. */
    /** @default false */
    defaultChecked?: boolean;
    /** Runs when the contained native checkbox changes. */ onChange?: ToggleChangeHandler;
    /** Input ID. A stable ID is generated when omitted and associated with the label. */ id?: string;
    /** Applies error styling, overriding field context. */ error?: boolean;
    /** Marks the toggle invalid, overriding field context. */ invalid?: boolean;
    /** Disables the label and toggle, overriding field context. */ disabled?: boolean;
    /** Visible label content. */ children?: string | ReactNode;
  };

/**
 * A toggle paired with a clickable label.
 *
 * Use it for binary settings with a visible text label. It generates an ID when
 * needed and associates that ID with the label. Its state and field-context
 * precedence match {@link Toggle}.
 *
 * @example
 * ```tsx
 * <ToggleInput name="emailUpdates" defaultChecked>
 *   Email updates
 * </ToggleInput>
 * ```
 */
export const ToggleInput = (props: ToggleInputProps) => {
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
      className={cx(toggleInput({}), className)}
      htmlFor={resolvedId}
      error={error}
      disabled={disabled}
      {...otherProps}
    >
      <Toggle
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        id={resolvedId}
        error={error}
        invalid={invalid}
        disabled={disabled}
      />
      {children}
    </Label>
  );
};
