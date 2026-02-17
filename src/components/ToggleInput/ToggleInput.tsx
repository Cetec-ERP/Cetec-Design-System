import type { ReactNode, ChangeEventHandler } from 'react';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
import { BoxProps } from '../Box';
import {
  toggleInput,
  type ToggleInputVariantProps,
} from '@styled-system/recipes';
import { Label } from '../Label';
import { Toggle } from '../Toggle';
import { Text } from '../Text';

export type ToggleInputProps = Omit<BoxProps, keyof ToggleInputVariantProps> &
  ToggleInputVariantProps & {
    name: string;
    children: string | ReactNode;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    id?: string;
    error?: boolean;
    disabled?: boolean;
  };

export const ToggleInput = (props: ToggleInputProps) => {
  const { name, id, checked, onChange, children, error, disabled, ...rest } =
    props;
  const [className, otherProps] = splitProps(rest);
  return (
    <Label
      className={cx(toggleInput({}), className)}
      htmlFor={name}
      disabled={disabled}
      data-error={error}
      {...otherProps}
    >
      <Toggle
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        data-error={error}
      />
      <Text>{children}</Text>
    </Label>
  );
};

// export default ToggleInput;
