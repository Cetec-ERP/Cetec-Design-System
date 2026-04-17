import { cva } from '@styled-system/css';

import { useMediaQuery } from '~/system/hooks';

import { Tag } from '../Tag';

import type { BoxProps } from '../Box';

type BreakpointIndicatorProps = BoxProps & {};

export const BreakpointIndicator = (props: BreakpointIndicatorProps) => {
  // breakpoint labels: [base, xs, sm, md, lg, xl, 2xl]
  // Call all hooks at the top level (React rules)
  const isXs = useMediaQuery('xs');
  const isSm = useMediaQuery('sm');
  const isMd = useMediaQuery('md');
  const isLg = useMediaQuery('lg');
  const isXl = useMediaQuery('xl');
  const is2Xl = useMediaQuery('2xl');

  const styles = cva({
    base: {
      zIndex: '1100',
    },
    variants: {
      variant: {
        default: {
          position: 'relative',
          bottom: 'auto',
          right: 'auto',
        },
        fixed: {
          position: 'fixed',
          bottom: '40',
          right: '16',
        },
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  });

  // Find the largest matching breakpoint
  let breakpoint = (
    <Tag className={styles} hue="red" variant="bold" {...props}>
      @media/base
    </Tag>
  );
  if (is2Xl) {
    breakpoint = (
      <Tag className={styles} hue="blue" variant="bold" {...props}>
        @media/2xl
      </Tag>
    );
  } else if (isXl) {
    breakpoint = (
      <Tag className={styles} hue="magenta" variant="bold" {...props}>
        @media/xl
      </Tag>
    );
  } else if (isLg) {
    breakpoint = (
      <Tag className={styles} hue="green" variant="bold" {...props}>
        @media/lg
      </Tag>
    );
  } else if (isMd) {
    breakpoint = (
      <Tag className={styles} hue="indigo" variant="bold" {...props}>
        @media/md
      </Tag>
    );
  } else if (isSm) {
    breakpoint = (
      <Tag className={styles} hue="yellow" variant="bold" {...props}>
        @media/sm
      </Tag>
    );
  } else if (isXs) {
    breakpoint = (
      <Tag className={styles} hue="orange" variant="bold" {...props}>
        @media/xs
      </Tag>
    );
  }

  return <>{breakpoint}</>;
};
