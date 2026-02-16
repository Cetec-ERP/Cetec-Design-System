import { Box, type BoxProps } from '../Box/Box';
import { spinner, type SpinnerVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

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
        size={size}
        inverse={inverse}
      />
    </Box>
  );
};
