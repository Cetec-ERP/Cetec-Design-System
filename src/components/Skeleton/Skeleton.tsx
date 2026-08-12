import type { ElementType, ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { skeleton } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

/** Supported placeholder shapes for {@link Skeleton}. */
export type SkeletonVariant = 'text' | 'circular' | 'rounded' | 'rectangular';

/** Supported animation modes for {@link Skeleton}. */
export type SkeletonAnimation = 'pulse' | 'wave' | false;

/** Props accepted by {@link Skeleton}. */
export type SkeletonProps = Omit<
  BoxProps,
  'as' | 'children' | 'width' | 'height'
> & {
  /** Loading animation, or `false` for a static placeholder. */
  /** @default "pulse" */
  animation?: SkeletonAnimation;
  /** Placeholder shape. */
  /** @default "text" */
  variant?: SkeletonVariant;
  /** Element or component rendered as the placeholder root. */
  /** @default "span" */
  component?: ElementType;
  /** Explicit placeholder width; content determines width when omitted. */
  width?: string | number;
  /** Explicit placeholder height; content determines height when omitted. */
  height?: string | number;
  /** Content whose dimensions the skeleton should match. */
  children?: ReactNode;
};

/**
 * Reserves the shape of content while that content is loading.
 *
 * `Skeleton` is visual only and does not announce loading. Put it in a region
 * with an appropriate accessible loading state when users need that feedback.
 *
 * @example
 * ```tsx
 * <Skeleton width="full" height="40" aria-hidden />
 * ```
 */
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
      {...dsComponent('Skeleton')}
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
