import React from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { heading, type HeadingVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import forwardRefWithAs, { PolymorphicRef } from '~/utils/forwardRefWithAs';

export type HeadingProps<E extends React.ElementType = 'h2'> = BoxProps<E> & {
  variants?: HeadingVariantProps;
  className?: string;
  children?: React.ReactNode;
};

const HeadingComponent = <E extends React.ElementType = 'h2'>(
  { as, className, children, variants, ...props }: HeadingProps<E>,
  ref: PolymorphicRef<E>
) => {
  return (
    <Box
      as={as}
      ref={ref}
      className={cx(heading({ ...variants }), className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export const Heading = forwardRefWithAs(HeadingComponent);