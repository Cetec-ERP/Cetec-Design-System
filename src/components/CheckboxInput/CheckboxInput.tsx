import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';
import { CheckBox } from '../CheckBox/CheckBox';

export type CheckBoxInputProps = BoxProps & {
  name: string;
  id?: string;
  error?: boolean;
  children?: string | ReactNode;
};

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  id,
  name,
  children,
  error,
  indeterminate,
  ...props
}: CheckBoxInputProps) => {
  return (
    <Label htmlFor={id}>
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
