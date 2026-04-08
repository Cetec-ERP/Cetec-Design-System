import { css } from '@styled-system/css';

import { useMediaQuery } from '~/system/hooks';

import { Box } from '../Box';
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

  const styles = css({
    position: 'fixed',
    bottom: '40',
    right: '16',
    zIndex: '1100',
  });

  // Find the largest matching breakpoint
  let breakpoint = (
    <Tag className={styles} hue="red" variant="bold">
      @media/base
    </Tag>
  );
  if (is2Xl) {
    breakpoint = (
      <Tag className={styles} hue="blue" variant="bold">
        @media/2xl
      </Tag>
    );
  } else if (isXl) {
    breakpoint = (
      <Tag className={styles} hue="magenta" variant="bold">
        @media/xl
      </Tag>
    );
  } else if (isLg) {
    breakpoint = (
      <Tag className={styles} hue="green" variant="bold">
        @media/lg
      </Tag>
    );
  } else if (isMd) {
    breakpoint = (
      <Tag className={styles} hue="indigo" variant="bold">
        @media/md
      </Tag>
    );
  } else if (isSm) {
    breakpoint = (
      <Tag className={styles} hue="yellow" variant="bold">
        @media/sm
      </Tag>
    );
  } else if (isXs) {
    breakpoint = (
      <Tag className={styles} hue="orange" variant="bold">
        @media/xs
      </Tag>
    );
  }

  return <Box {...props}>{breakpoint}</Box>;
};
