import { cx } from '@styled-system/css';
import {
  breakpointIndicator,
  type BreakpointIndicatorVariantProps,
} from '@styled-system/recipes';

import { useMediaQuery } from '~/system/hooks';
import { splitProps } from '~/utils/splitProps';

import { Tag } from '../Tag';

import type { BoxProps } from '../Box';

export type BreakpointIndicatorProps = Omit<
  BoxProps,
  keyof BreakpointIndicatorVariantProps
> &
  BreakpointIndicatorVariantProps & {
    variant: BreakpointIndicatorVariantProps['variant'];
  };

export const BreakpointIndicator = (props: BreakpointIndicatorProps) => {
  // breakpoint labels: [base, xs, sm, md, lg, xl, 2xl]
  // Call all hooks at the top level (React rules)
  const isXs = useMediaQuery('xs');
  const isSm = useMediaQuery('sm');
  const isMd = useMediaQuery('md');
  const isLg = useMediaQuery('lg');
  const isXl = useMediaQuery('xl');
  const is2Xl = useMediaQuery('2xl');

  const { variant, ...rest } = props;
  const [className, otherProps] = splitProps(rest);

  // Find the largest matching breakpoint
  let breakpoint = (
    <Tag
      className={cx(breakpointIndicator({ variant }), className)}
      hue="red"
      variant="bold"
      {...otherProps}
    >
      @media/base
    </Tag>
  );
  if (is2Xl) {
    breakpoint = (
      <Tag
        className={cx(breakpointIndicator({ variant }), className)}
        hue="blue"
        variant="bold"
        {...otherProps}
      >
        @media/2xl
      </Tag>
    );
  } else if (isXl) {
    breakpoint = (
      <Tag
        className={cx(breakpointIndicator({ variant }), className)}
        hue="magenta"
        variant="bold"
        {...otherProps}
      >
        @media/xl
      </Tag>
    );
  } else if (isLg) {
    breakpoint = (
      <Tag
        className={cx(breakpointIndicator({ variant }), className)}
        hue="green"
        variant="bold"
        {...otherProps}
      >
        @media/lg
      </Tag>
    );
  } else if (isMd) {
    breakpoint = (
      <Tag
        className={cx(breakpointIndicator({ variant }), className)}
        hue="indigo"
        variant="bold"
        {...otherProps}
      >
        @media/md
      </Tag>
    );
  } else if (isSm) {
    breakpoint = (
      <Tag
        className={cx(breakpointIndicator({ variant }), className)}
        hue="yellow"
        variant="bold"
        {...otherProps}
      >
        @media/sm
      </Tag>
    );
  } else if (isXs) {
    breakpoint = (
      <Tag
        className={cx(breakpointIndicator({ variant }), className)}
        hue="orange"
        variant="bold"
        {...otherProps}
      >
        @media/xs
      </Tag>
    );
  }

  return <>{breakpoint}</>;
};
