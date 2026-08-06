import type { ReactNode } from 'react';

import { cx, css } from '@styled-system/css';
import { badge, type BadgeVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { useSlotContext } from '~/system/context/SlotContext';
import { splitProps } from '~/utils/splitProps';

/** Supported visual color treatments for {@link Badge}. */
export type BadgeVariant =
  | 'neutral'
  | 'subtle'
  | 'bold'
  | 'inverse'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

/** Props accepted by {@link Badge}. */
export type BadgeProps = Omit<BoxProps, keyof BadgeVariantProps> &
  Omit<BadgeVariantProps, 'standalone' | 'dot'> & {
    /** Numeric content. Providing a value switches the badge from dot mode to count mode. */
    count?: number;
    /** Keeps the indicator visible when `count` is zero. */
    /** @default false */
    showZero?: boolean;
    /** Largest count shown directly; larger values render as `{overflowCount}+`. */
    /** @default 99 */
    overflowCount?: number;
    /** Semantic color treatment of the indicator. */
    /** @default "danger" */
    variant?: BadgeVariantProps['variant'];
    /** Content used as the positioning anchor. Without children, the badge is standalone. */
    children?: ReactNode;
    /** Visual indicator size. An explicit value takes precedence over slot context. */
    size?: BadgeVariantProps['size'];
  };

// Animation styles
const animationStyles = {
  pop: css({
    animationName: 'badgePop',
    animationDuration: 'normal',
    animationTimingFunction: 'default',
  }),
  popStandalone: css({
    animationName: 'badgePopStandalone',
    animationDuration: 'normal',
    animationTimingFunction: 'default',
  }),
};

/**
 * Displays a notification count or compact status indicator.
 *
 * Without `children`, the badge is standalone. With children, it positions the
 * indicator at the anchor's top-right. Omitting `count` renders a dot. The
 * badge does not announce updates by itself; add an accessible label or live
 * region when the value conveys essential information.
 *
 * @example
 * ```tsx
 * <Badge count={3}><Icon name="bell" aria-label="Notifications" /></Badge>
 * ```
 */
export const Badge = (props: BadgeProps) => {
  const slotContext = useSlotContext();
  const {
    count,
    showZero = false,
    overflowCount = 99,
    variant = 'danger',
    size: sizeProp,
    children,
    ref,
    ...rest
  } = props;
  const size =
    sizeProp ?? (slotContext?.size as BadgeProps['size'] | undefined);
  const [className, otherProps] = splitProps(rest);
  // Determine if we're in count mode or dot mode
  const isCountMode = count !== undefined;
  const isDotMode = !isCountMode;

  // Determine if badge should be visible
  const isVisible = isDotMode || count !== 0 || showZero;

  // Calculate display text for count mode
  const displayCount =
    isCountMode && count !== undefined
      ? count > overflowCount
        ? `${overflowCount}+`
        : count
      : null;

  // Determine if standalone (no children)
  const isStandalone = !children;

  // Get recipe classes
  const classes = badge({
    size,
    standalone: isStandalone,
    dot: isDotMode,
    variant,
  });

  // Animation class based on position mode
  const animationClass = isCountMode
    ? isStandalone
      ? animationStyles.popStandalone
      : animationStyles.pop
    : '';

  // If not visible, don't render the indicator (but still render children wrapper if needed)
  if (!isVisible && !children) {
    return null;
  }

  const indicator = isVisible ? (
    <Box
      as="span"
      key={isCountMode ? `count-${String(displayCount)}` : 'dot'}
      className={cx(classes.indicator, animationClass)}
    >
      {displayCount}
    </Box>
  ) : null;

  // Standalone mode: just return the indicator
  if (isStandalone) {
    return (
      <Box
        as="span"
        ref={ref}
        className={cx(classes.root, className)}
        {...otherProps}
      >
        {indicator}
      </Box>
    );
  }

  // Wrapper mode: wrap children with positioned indicator
  return (
    <Box
      as="span"
      ref={ref}
      className={cx(classes.root, className)}
      {...otherProps}
    >
      {children}
      {indicator}
    </Box>
  );
};
