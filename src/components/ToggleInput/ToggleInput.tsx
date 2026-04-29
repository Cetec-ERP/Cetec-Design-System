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

export type ToggleInputProps = Omit<BoxProps, keyof ToggleInputVariantProps> &
  ToggleInputVariantProps & {
    name: string;
    checked: boolean;
    onChange: ToggleChangeHandler;
    id?: string;
    error?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    children?: string | ReactNode;
  };

export const ToggleInput = (props: ToggleInputProps) => {
  const fieldContext = useFieldContext();
  const {
    name,
    checked,
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
