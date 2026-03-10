import { cx } from '@styled-system/css';
import { optionRow, type OptionRowVariantProps } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

export type OptionRowProps = Omit<
  BoxProps<'button'>,
  keyof OptionRowVariantProps | 'as' | 'type'
> &
  Omit<OptionRowVariantProps, 'selected'> & {
    selected?: boolean;
  };

export const OptionRow = ({
  selected = false,
  children,
  ...rest
}: OptionRowProps) => {
  const [className, otherProps] = splitProps(rest);
  const isSelected = Boolean(selected);

  return (
    <Box
      as="button"
      type="button"
      className={cx(optionRow({ selected: isSelected }), className)}
      role="option"
      aria-selected={isSelected}
      data-selected={isSelected || undefined}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
