import { Box, type BoxProps } from '../Box';
import { switchbox, type SwitchboxVariantProps } from '@styled-system/recipes';
import { Icon } from '../Icon';
import { Label } from '../Label';
import React from 'react';

export type SwitchBoxProps = Omit<BoxProps, keyof SwitchboxVariantProps> &
  SwitchboxVariantProps & {
    error?: boolean;
    disabled?: boolean;
  };

export const Switch: React.FC<SwitchBoxProps> = ({
  error,
  disabled,
  checked,
  ...props
}: SwitchBoxProps) => {
  const { container, input, indicator, background } = switchbox({});
  return (
    <Label
      className={container}
      {...disabled && { 'data-disabled': true }}
    >
      <Box
        as="input"
        type="checkbox"
        className={input}
        data-checked={checked}
        {...error && { 'data-error': true }}
        {...props}
      />
      <Box
        as="span"
        class={background}
        name={'switch-bg'}
      />
      <Icon name={'circle'} className={indicator} />
      <Icon name={'circle-check'} className={indicator} />
    </Label>
  );
};
