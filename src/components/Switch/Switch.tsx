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
        data-checked={checked}
        data-error={error}
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
