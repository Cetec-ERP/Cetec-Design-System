import * as React from 'react';
import { Box, BoxProps } from '../Box';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';
import { fontSizes, fonts } from '~/styles/tokens';

export interface TextProps extends BoxProps<'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4'>, Omit<SystemStyleObject, keyof TextVariantProps> {
  family?: keyof typeof fonts;
  fontSize?: keyof typeof fontSizes;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Text = React.forwardRef<HTMLParagraphElement | HTMLSpanElement | HTMLHeadingElement, TextProps>(
  ({
    as = 'p',
    family,
    fontSize,
    bold,
    italic,
    underline,
  className,
  children,
  ...props
}, ref) => {
  return (
    <Box
      ref={ref}
      as={as}
      className={cx(
        text({ family, italic, bold, underline, fontSize }),
        css(props),
        className,
      )}
      {...props}
    >
      {children}
    </Box>
  );
});
