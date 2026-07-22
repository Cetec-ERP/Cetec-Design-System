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
import { useRadioGroup } from '../Radio/RadioGroupContext';

import type { RadioChangeHandler } from '../Radio';

export type RadioInputProps = Omit<BoxProps, keyof RadioInputVariantProps> &
  RadioInputVariantProps & {
    name?: string;
    value?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: RadioChangeHandler;
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
    value,
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
  const radioGroup = useRadioGroup();
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const disabled =
    disabledProp ?? radioGroup?.disabled ?? fieldContext?.disabled;
  const [className, otherProps] = splitProps(rest);
  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  const resolvedName = radioGroup?.name ?? name;
  const isGrouped = Boolean(radioGroup && value !== undefined);
  const resolvedChecked =
    isGrouped && radioGroup ? radioGroup.value === value : checked;

  const handleChange: RadioChangeHandler | undefined = (event) => {
    if (isGrouped && value !== undefined && radioGroup) {
      radioGroup.setValue(value);
    }

    onChange?.(event);
  };

  return (
    <Label
      className={cx(radioInput(), className)}
      htmlFor={resolvedId}
      disabled={disabled}
      {...otherProps}
    >
      <Radio
        name={resolvedName}
        checked={resolvedChecked}
        defaultChecked={!isGrouped ? defaultChecked : undefined}
        onChange={handleChange}
        id={resolvedId}
        error={error}
        invalid={invalid}
        disabled={disabled}
      />
      {children}
    </Label>
  );
};
