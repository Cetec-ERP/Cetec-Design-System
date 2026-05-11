import type { ElementType, ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { skeleton } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { splitProps } from '~/utils/splitProps';

export type SkeletonVariant = 'text' | 'circular' | 'rounded' | 'rectangular';
export type SkeletonAnimation = 'pulse' | 'wave' | false;

export type SkeletonProps = Omit<
  BoxProps,
  'as' | 'children' | 'width' | 'height'
> & {
  animation?: SkeletonAnimation;
  variant?: SkeletonVariant;
  component?: ElementType;
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
};

export const Skeleton = (props: SkeletonProps) => {
  const {
    animation = 'pulse',
    component = 'span',
    variant = 'text',
    width,
    height,
    children,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const hasChildren = Boolean(children);
  const animationVariant = animation === false ? 'none' : animation;

  const classes = skeleton({
    variant,
    animation: animationVariant,
    hasChildren,
    fitContent: hasChildren && width == null,
    heightAuto: hasChildren && height == null,
  });

  return (
    <Box
      as={component}
      width={width as BoxProps['width']}
      height={height as BoxProps['height']}
      className={cx(classes, className)}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
