import { Box, type BoxProps } from '../Box/Box';
// import type { ColorToken } from '@styled-system/tokens';
// import type { ColorToken, NumericSizes } from '@styled-system/tokens';
import { divider, type DividerVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type DividerProps = Omit<BoxProps, keyof DividerVariantProps> & DividerVariantProps & {
  direction?: 'horizontal' | 'vertical';
  // weight?: keyof typeof numericSizes;
  // color?: ColorToken;
};

export const Divider: React.FC<DividerProps> = (
  { 
    direction,
    // color,
    // weight,
    ...props 
  }: DividerProps,
) => {
  const [ className, otherProps ] = splitProps(props);
  return (
    <Box
      as="div"
      className={cx(
        divider({ direction }), 
        // divider({ direction, weight, color }), 
        className,
      )}
      {...otherProps}
    />
  );
};
