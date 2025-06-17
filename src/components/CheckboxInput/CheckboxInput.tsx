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
  ...props
}: CheckBoxInputProps) => {
  return (
    <Label >
      <CheckBox
        {...(error && { 'data-error': true })}
        {...props}
      />
      {children && <Box as="div">{children}</Box>}
    </Label>
  );
};

export default CheckBoxInput;