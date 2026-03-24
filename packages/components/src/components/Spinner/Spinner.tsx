import { cx } from '@cetec/styled-system/css';
import {
  spinner,
  type SpinnerVariantProps,
} from '@cetec/styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';

export type SpinnerProps = Omit<BoxProps, keyof SpinnerVariantProps> &
  SpinnerVariantProps & {
    inverse?: boolean;
    centered?: boolean;
  };

export const Spinner = (props: SpinnerProps) => {
  const { size, inverse, centered, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  const classes = spinner({
    size,
    inverse,
    centered,
  });

  return (
    <Box className={cx(classes.container, className)} {...otherProps}>
      <Box
        as="div"
        className={classes.spinnerDiv}
        data-inverse={inverse ? 'true' : undefined}
      />
    </Box>
  );
};
