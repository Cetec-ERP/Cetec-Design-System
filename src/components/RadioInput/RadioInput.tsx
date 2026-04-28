import { useId, type ReactNode } from 'react';

import { cx } from '@styled-system/css';
import {
  radioInput,
  type RadioInputVariantProps,
} from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { type BoxProps } from '../Box';
import { Label } from '../Label';
import { Radio } from '../Radio';

import type { RadioChangeHandler } from '../Radio';

export type RadioInputProps = Omit<BoxProps, keyof RadioInputVariantProps> &
  RadioInputVariantProps & {
    name: string;
    checked: boolean;
    onChange: RadioChangeHandler;
    id?: string;
    error?: boolean;
    invalid?: boolean;
    children?: string | ReactNode;
    disabled?: boolean;
  };

export const RadioInput = (props: RadioInputProps) => {
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
      className={cx(radioInput(), className)}
      htmlFor={resolvedId}
      disabled={disabled}
      {...otherProps}
    >
      <Radio
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
