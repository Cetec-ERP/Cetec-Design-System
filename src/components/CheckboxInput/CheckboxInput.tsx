import { useId, type ReactNode } from 'react';

import { cx } from '@styled-system/css';
import {
  checkboxInput,
  type CheckboxInputVariantProps,
} from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { type BoxProps } from '../Box';
import { Checkbox } from '../Checkbox';
import { Label } from '../Label';

import type { CheckboxChangeHandler } from '../Checkbox';

export type CheckboxInputProps = Omit<
  BoxProps,
  keyof CheckboxInputVariantProps
> &
  CheckboxInputVariantProps & {
    name: string;
    checked: boolean;
    onChange: CheckboxChangeHandler;
    id?: string;
    error?: boolean;
    invalid?: boolean;
    children?: string | ReactNode;
    disabled?: boolean;
  };

export const CheckboxInput = (props: CheckboxInputProps) => {
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
      className={cx(checkboxInput(), className)}
      htmlFor={resolvedId}
      disabled={disabled}
      {...otherProps}
    >
      <Checkbox
        name={name}
        checked={checked}
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
