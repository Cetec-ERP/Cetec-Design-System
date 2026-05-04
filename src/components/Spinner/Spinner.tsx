import { cx } from '@styled-system/css';
import { spinner, type SpinnerVariantProps } from '@styled-system/recipes';

import { useSlotContext } from '~/system/context/SlotContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Icon } from '../Icon';

export type SpinnerProps = Omit<BoxProps, keyof SpinnerVariantProps> &
  SpinnerVariantProps & {
    inverse?: boolean;
    centered?: boolean;
    size?: SpinnerVariantProps['size'];
  };

export const Spinner = (props: SpinnerProps) => {
  const slotContext = useSlotContext();
  const { size: sizeProp, inverse, centered, ...rest } = props;
  const size =
    sizeProp ?? (slotContext?.size as SpinnerProps['size'] | undefined);
  const [className, otherProps] = splitProps(rest);
  const classes = spinner({
    size,
    inverse,
    centered,
  });

  return (
    <Box className={cx(classes.container, className)} {...otherProps}>
      <Icon
        name="spinner"
        className={classes.spinnerSvg}
        data-inverse={inverse ? 'true' : undefined}
      />
    </Box>
  );
};
