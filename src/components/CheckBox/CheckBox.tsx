import { Box, type BoxProps } from '../Box';
import { ReactNode } from 'react';
import { Label } from '../Label';
import { checkbox, type CheckboxVariantProps } from '@styled-system/recipes';
import { Icon } from '../Icon';

export type CheckBoxProps = Omit<BoxProps, keyof CheckboxVariantProps> &
  CheckboxVariantProps & {
    indeterminate?: boolean;
    error?: boolean;
    children?: ReactNode | string;
  };

export const CheckBox: React.FC<CheckBoxProps> = ({
  error = false,
  indeterminate = false,
  children,
  ...props
}: CheckBoxProps) => {
  const { container, input, indicator } = checkbox({});
  return (
    <Label className={container}>
      <Box as="input" type="checkbox" className={input} {...props} />
      <Icon className={indicator} name={'checkbox'} />
      <Icon className={indicator} name={'checkbox-checked'} />
      <Icon className={indicator} name={'checkbox-indeterminate'} />
      {children}
    </Label>
  );
};
