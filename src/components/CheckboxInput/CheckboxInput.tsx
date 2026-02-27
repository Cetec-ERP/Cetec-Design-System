import { useId, type ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
import {
  checkboxInput,
  type CheckboxInputVariantProps,
} from '@styled-system/recipes';
import { Checkbox, CheckboxChangeHandler } from '../Checkbox';
import { type BoxProps } from '../Box';
import { Label } from '../Label';

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
    children?: string | ReactNode;
    disabled?: boolean;
  };

export const CheckboxInput = (props: CheckboxInputProps) => {
  const {
    name,
    checked,
    onChange,
    id,
    children,
    error,
    disabled,
    indeterminate,
    ...rest
  } = props;
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
        disabled={disabled}
        indeterminate={indeterminate}
      />
      {children}
    </Label>
  );
};
