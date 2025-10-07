import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';
import { CheckBox } from '../CheckBox/CheckBox';
import { checkboxInput, type CheckboxInputVariantProps } from '@styled-system/recipes';
import { splitProps } from '~/utils/splitProps';
import { cx } from '@styled-system/css';

export type CheckBoxInputProps = BoxProps & CheckboxInputVariantProps &{
  error?: boolean;
  children?: string | ReactNode;
};

export const CheckBoxInput: FC<CheckBoxInputProps> = ({
  variant,
  children,
  error,
  indeterminate,
  ...props
}: CheckBoxInputProps) => {
    const [className, otherProps] = splitProps(props);
  return (
    <Label className={cx(checkboxInput({ variant }), className)} {...otherProps}>
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
