import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import {
  toggleInput,
  type ToggleInputVariantProps,
} from '@styled-system/recipes';
import { splitProps } from '~/utils/splitProps';
import { Label } from '../Label';
import { cx } from '@styled-system/css';
import { Toggle } from '../Toggle/Toggle';

export type ToggleInputProps = BoxProps &
  ToggleInputVariantProps & {
    error?: boolean;
    children?: string | ReactNode;
  };

export const ToggleInput: FC<ToggleInputProps> = ({
  children,
  error,
  ...props
}: ToggleInputProps) => {
  const [className, otherProps] = splitProps(props);
  return (
    <Label className={cx(toggleInput({}), className)} {...otherProps}>
      <Toggle {...(error && { 'data-error': true })} {...props} />
      {children && <Box as="div">{children}</Box>}
    </Label>
  );
};

export default ToggleInput;
