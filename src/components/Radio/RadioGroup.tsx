import { useState, type ReactNode } from 'react';

import { Box, type BoxProps } from '../Box';

import { RadioGroupContext } from './RadioGroupContext';

export type RadioGroupProps = Omit<BoxProps, 'children' | 'role'> & {
  name: string;
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (value: string) => void;
  children: ReactNode;
  label?: string;
  id?: string;
  disabled?: boolean;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const {
    name,
    value,
    defaultValue = null,
    onChange,
    children,
    label,
    id,
    disabled,
    ...rest
  } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<string | null>(
    defaultValue,
  );
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : uncontrolledValue;

  const setSelectedValue = (nextValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(nextValue);
    }

    onChange?.(nextValue);
  };

  return (
    <RadioGroupContext.Provider
      value={{
        name,
        value: selectedValue,
        setValue: setSelectedValue,
        disabled,
      }}
    >
      <Box
        role="radiogroup"
        aria-label={label}
        aria-labelledby={id ? `${id}-label` : undefined}
        id={id}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </Box>
    </RadioGroupContext.Provider>
  );
};
