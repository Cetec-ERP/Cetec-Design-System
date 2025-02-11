import React from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import type { FontSizeToken, FontToken } from '@styled-system/tokens';
import forwardRefWithAs, { PolymorphicRef } from '~/utils/forwardRefWithAs';

/**
 * TextProps extends BoxProps, which includes the necessary style props (from HTMLStyledProps<E>)
 */
// Interfaces in TypeScript can only extend object types with statically known members. Since BoxProps<E> is a generic type alias, you can’t extend it with an interface directly. Instead, using a type alias with an intersection (&) works perfectly.
export type TextProps<E extends React.ElementType = 'p'> = BoxProps<E> & {
  variants?: TextVariantProps;
  fontSize?: FontSizeToken;
  family?: FontToken;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const TextComponent = <E extends React.ElementType = 'p'>(
  { as, fontSize, family, italic, bold, underline, className, children, variants, ...props }: TextProps<E>,
  ref: PolymorphicRef<E>,
) => {
  const Component = as || 'p';

  return (
    <Box
      as={Component}
      ref={ref}
      className={cx(
        text({ fontSize, family, italic, bold, underline, ...variants }),
        className,
      )}
      {...props}
    >
      {children}
    </Box>
  );
};

export const Text = forwardRefWithAs(TextComponent);