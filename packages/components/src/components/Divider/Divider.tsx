import { cx } from '@cetec/styled-system/css';
import {
  divider,
  type DividerVariantProps,
} from '@cetec/styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';

export type DividerProps = Omit<BoxProps, keyof DividerVariantProps> &
  DividerVariantProps & {
    direction?: string;
    weight?: string;
  };

export const Divider = (props: DividerProps) => {
  const { direction, weight, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  return (
    <Box
      as="div"
      className={cx(divider({ direction, weight }), className)}
      {...otherProps}
    />
  );
};
