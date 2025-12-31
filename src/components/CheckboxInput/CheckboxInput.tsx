import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';
import { CheckBox } from '../Checkbox/CheckBox';
import {
  checkboxInput,
  type CheckboxInputVariantProps,
} from '@styled-system/recipes';
import { splitProps } from '~/utils/splitProps';
import { cx } from '@styled-system/css';

export type CheckBoxInputProps = BoxProps &
  CheckboxInputVariantProps & {
    error?: boolean;
    children?: string | ReactNode;
    name: string;
    id?: string;
  };

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  id,
  name,
  variant,
  children,
  error,
  indeterminate,
  ...props
}: CheckBoxInputProps) => {
  const [className, otherProps] = splitProps(props);
  return (
    <Label
      className={cx(checkboxInput({ variant }), className)}
      {...otherProps}
    >
      <CheckBox
        id={id}
        name={name}
        error={error}
        {...(error && { 'data-error': true })}
        {...(indeterminate && { 'data-indeterminate': true })}
        {...props}
      />
      {children && <Box as="span">{children}</Box>}
    </Label>
  );
};

export default CheckBoxInput;
