import { splitProps } from '~/utils/splitProps';
import { Label } from '../Label';
import { Radio } from '../Radio/Radio';
import {
  radioInput,
  type RadioInputVariantProps,
} from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { type BoxProps } from '../Box';
import { FC, ReactNode } from 'react';
import { Text } from '../Text';

export type RadioInputProps = BoxProps &
  RadioInputVariantProps & {
    name: string;
    id?: string;
    error?: boolean;
    children?: string | ReactNode;
  };

export const RadioInput: FC<RadioInputProps> = ({
  id,
  name,
  children,
  error,
  ...props
}: RadioInputProps) => {
  const [className, otherProps] = splitProps(props);
  return (
    <Label
      className={cx(radioInput(), className)}
      {...otherProps}
      htmlFor={id}
    >
      <Radio
        name={name}
        id={id}
        {...(error && { 'data-error': true })}
        {...props}
      />
      {children && <Text as="span">{children}</Text>}
    </Label>
  );
};

export default RadioInput;
