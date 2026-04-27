import type { ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { kbd, type KbdVariantProps } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

const specialSymbols = {
  '⌘': ['command', 'cmd', 'meta'],
  '⌥': ['option', 'alt'],
  '⌃': ['control', 'ctrl', 'meta'],
  '⇪': ['shift'],
  '⎋': ['escape', 'esc'],
  '⌫': ['delete', 'backspace'],
  '↩': ['enter', 'return'],
  '⇥': ['tab'],
  '←': ['left', 'arrowLeft', 'arrow'],
  '→': ['right', 'arrowRight', 'arrow'],
  '↑': ['up', 'arrowUp', 'arrow'],
  '↓': ['down', 'arrowDown', 'arrow'],
} as const;

export type KbdSpecialSymbol = keyof typeof specialSymbols;
export type KbdValue = string;

const isSpecialSymbol = (value: KbdValue): value is KbdSpecialSymbol =>
  value in specialSymbols;

export type KbdProps = Omit<BoxProps, keyof KbdVariantProps> &
  KbdVariantProps & {
    value?: KbdValue;
    children?: ReactNode | string;
  };

export const Kbd = (props: KbdProps) => {
  const { children, value, variant, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  const resolvedValue = value ?? children;
  const resolvedVariant =
    variant ?? (typeof resolvedValue === 'string' && isSpecialSymbol(resolvedValue)
      ? 'symbol'
      : undefined);

  return (
    <Box
      as="kbd"
      className={cx(kbd({ variant: resolvedVariant }), className)}
      {...otherProps}
    >
      {resolvedValue}
    </Box>
  );
};
