import { useId, type ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
import {
  radioInput,
  type RadioInputVariantProps,
} from '@styled-system/recipes';
import { Radio, RadioChangeHandler } from '../Radio';
import { type BoxProps } from '../Box';
import { Label } from '../Label';

export type RadioInputProps = Omit<BoxProps, keyof RadioInputVariantProps> &
  RadioInputVariantProps & {
    name: string;
    checked: boolean;
    onChange: RadioChangeHandler;
    id?: string;
    error?: boolean;
    children?: string | ReactNode;
    disabled?: boolean;
  };

export const RadioInput = (props: RadioInputProps) => {
  const { name, checked, onChange, id, children, error, disabled, ...rest } =
    props;
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
        disabled={disabled}
      />
      {children}
    </Label>
  );
};
