import { useId, type ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
import {
  toggleInput,
  type ToggleInputVariantProps,
} from '@styled-system/recipes';
import { Toggle, ToggleChangeHandler } from '../Toggle';
import { type BoxProps } from '../Box';
import { Label } from '../Label';

export type ToggleInputProps = Omit<BoxProps, keyof ToggleInputVariantProps> &
  ToggleInputVariantProps & {
    name: string;
    checked: boolean;
    onChange: ToggleChangeHandler;
    id?: string;
    error?: boolean;
    disabled?: boolean;
    children?: string | ReactNode;
  };

export const ToggleInput = (props: ToggleInputProps) => {
  const { name, checked, onChange, id, children, error, disabled, ...rest } =
    props;
  const [className, otherProps] = splitProps(rest);
  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  return (
    <Label
      className={cx(toggleInput({}), className)}
      htmlFor={resolvedId}
      disabled={disabled}
      {...otherProps}
    >
      <Toggle
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
