import { cx } from '@styled-system/css';
import { kbd, type KbdVariantProps } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

export type KbdProps = Omit<BoxProps, keyof KbdVariantProps> &
  KbdVariantProps & {
    children: React.ReactNode | string;
  };

export const Kbd = (props: KbdProps) => {
  const { children, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  return (
    <Box as="kbd" className={cx(kbd({}), className)} {...otherProps}>
      {children}
    </Box>
  );
};
