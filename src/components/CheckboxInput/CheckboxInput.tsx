import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';
import { CheckBox } from '../CheckBox/CheckBox';

export type CheckBoxInputProps = BoxProps & {
  error?: boolean;
  children?: string | ReactNode;
};

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  children,
  error,
  indeterminate,
  ...props
}: CheckBoxInputProps) => {
  return (
    <Label>
      <CheckBox
        error = {error}
        {...(error && { 'data-error': true })}
        {...(indeterminate && { 'data-indeterminate': true })}
        {...props}
      />
      {children && <Box as="div">{children}</Box>}
    </Label>
  );
};

export default CheckBoxInput;
