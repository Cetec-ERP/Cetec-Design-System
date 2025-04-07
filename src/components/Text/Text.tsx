import React, { ReactNode, type ElementType } from 'react';
import { Box, type BoxProps } from '~/components/Box';
import type { FontToken, FontWeightToken } from '@styled-system/tokens';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
import { TextSizes } from '~/recipes/text';

export type TextProps = Omit<BoxProps, keyof TextVariantProps> &
  TextVariantProps & {
    italic?: boolean;
    family?: FontToken;
    bold?: boolean;
    underline?: boolean;
    size?: TextSizes;
    weight?: FontWeightToken;
    children?: string | ReactNode;
    as?: ElementType;
  };

export const Text: React.FC<TextProps> = ({
  as = 'p',
  family,
  italic = false,
  bold = false,
  underline = false,
  size,
  weight,
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
