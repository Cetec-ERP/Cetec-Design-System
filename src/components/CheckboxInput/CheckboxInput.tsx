import { splitProps } from '~/utils/splitProps';
import { FC, ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { BoxProps } from '../Box';
import { Label } from '../Label';
import { Checkbox } from '../Checkbox';
import {
  checkboxInput,
  type CheckboxInputVariantProps,
} from '@styled-system/recipes';

export type CheckboxInputProps = BoxProps &
  CheckboxInputVariantProps & {
    name: string;
    id?: string;
    error?: boolean;
    children?: string | ReactNode;
  };

export const CheckboxInput: FC<CheckboxInputProps> = ({
  id,
  name,
  children,
  error,
  indeterminate,
  ...props
}: CheckboxInputProps) => {
  const [className, otherProps] = splitProps(props);
  return (
    <Label className={cx(checkboxInput(), className)} {...otherProps} htmlFor={id}>
      <Checkbox
        id={id}
        name={name}
        error={error}
        indeterminate={indeterminate}
        {...props}
      />
      {children}
    </Label>
  );
};

export default CheckboxInput;
