import React, { ReactNode, type ElementType } from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type TextProps = Omit<BoxProps, keyof TextVariantProps> &
  TextVariantProps & {
    children: string | ReactNode;
    as?: ElementType;
  };

export const Text: React.FC<TextProps> = ({
  as = 'p',
  family,
  italic,
  bold,
  underline,
  size,
  children,
  ...props
}: TextProps) => {
  const [className, otherProps] = splitProps(props);

  return (
    <Box
      as={as}
      className={cx(text({ family, bold, underline, italic, size }), className)}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
