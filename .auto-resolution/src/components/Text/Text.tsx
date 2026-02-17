import React, { AriaAttributes, ReactNode, type ElementType } from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type TextProps = Omit<BoxProps, keyof TextVariantProps> &
  TextVariantProps & {
    children: string | ReactNode;
    as?: ElementType;
    role?: string;
    tabIndex?: number;
  } & AriaAttributes; // all aria attributes when we need.

export const Text: React.FC<TextProps> = ({
  as = 'span',
  family,
  italic,
  bold,
  underline,
  size,
  children,
  textStyle,
  weight,
  role, // role if use in form input text for refrence, also semantic role overrides if non-semantic tag.
  tabIndex, // tabIndex main use for in list or loop select text using key press focus
  truncate,
  allCaps,
  ...props
}: TextProps) => {
  const [className, otherProps] = splitProps(props);

  return (
    <Box
      as={as}
      textStyle={textStyle}
      className={cx(
        text({ family, bold, underline, italic, size, weight, truncate, allCaps }),
        className,
      )}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
