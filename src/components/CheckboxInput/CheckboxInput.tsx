import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';
import { CheckBox } from '../CheckBox/CheckBox';

export type CheckBoxInputProps = BoxProps & {
  error?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  children?: string | ReactNode;
};

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  disabled,
  children,
  error,
  indeterminate,
  ...props
}: CheckBoxInputProps) => {
  return (
    <Label >
      <CheckBox
        {...(disabled && { 'data-disabled': true })}
        {...(error && { 'data-error': true })}
        {...props}
      />
      {children && <Box as="div">{children}</Box>}
    </Label>
  );
};

export default CheckBoxInput;