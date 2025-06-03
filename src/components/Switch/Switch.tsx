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
      data-disabled={disabled}
    >
      <Box
        as="input"
        type="checkbox"
        className={input}
        {...props}
        data-checked={checked}
      />
      <Box
        as="span"
        class={background}
        data-checked={checked}
        name={'switch-bg'}
        data-error={error}
      />
      <Icon name={'circle'} className={indicator} />
      <Icon name={'circle-check'} className={indicator} />
    </Label>
  );
};
