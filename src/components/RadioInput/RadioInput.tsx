import { splitProps } from '~/utils/splitProps';
import { Label } from '../Label';
import { Radio } from '../Radio/Radio';
import {
  radioInput,
  type RadioInputVariantProps,
} from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '../Box';
import { FC, ReactNode } from 'react';

export type RadioInputProps = BoxProps &
  RadioInputVariantProps & {
    error?: boolean;
    children?: string | ReactNode;
  };

export const RadioInput: FC<RadioInputProps> = ({
  variant,
  children,
  error,
  ...props
}: RadioInputProps) => {
  const [className, otherProps] = splitProps(props);
  return (
    <Label className={cx(radioInput({ variant }), className)} {...otherProps}>
      <Radio
        {...error && { 'data-error': true }}
        {...props}/>
      {children && <Box as="div">{children}</Box>}
    </Label>
  );
};

export default RadioInput;
