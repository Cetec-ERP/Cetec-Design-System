import { splitProps } from '~/utils/splitProps';
import { Label } from '../Label';
import { Radio } from '../Radio/Radio';
import {
  radioInput,
  type RadioInputVariantProps,
} from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { type BoxProps } from '../Box';
import { FC, ReactNode, ChangeEventHandler } from 'react';

export type RadioInputProps = BoxProps &
  RadioInputVariantProps & {
    name: string;
    /** Value for this radio option (REQUIRED) */
    value: string;
    /** Controlled checked state (REQUIRED) */
    checked: boolean;
    /** Change handler (REQUIRED) */
    onChange: ChangeEventHandler<HTMLInputElement>;
    id?: string;
    error?: boolean;
    disabled?: boolean;
    children?: string | ReactNode;
  };

export const RadioInput: FC<RadioInputProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  children,
  error,
  disabled,
  ...props
}: RadioInputProps) => {
  const [className, otherProps] = splitProps(props);
  return (
    <Label className={cx(radioInput(), className)} {...otherProps}>
      <Radio
        {...otherProps}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        error={error}
        disabled={disabled}
      />
      {children}
    </Label>
  );
};

export default RadioInput;
