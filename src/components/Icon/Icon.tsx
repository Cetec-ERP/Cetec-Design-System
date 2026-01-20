import { SVGAttributes } from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { cx } from '@styled-system/css';
import { IconNames } from './iconNames';
import { icon } from '@styled-system/patterns';
import { colors, numericSizes } from '~/styles/primitives';
import { colors as semanticColors } from '~/styles/semantics';
import { splitProps } from '~/utils/splitProps';
// import { ColorToken } from '@styled-system/tokens';

/*
 * Using the size prop in this way cannot handle non-numeric sizes,
 * so importing this list of keys directly from the tokens to ensure
 * that only valid sizes are allowed.
 */
export type AllowedIconSizes = keyof typeof numericSizes;
type LeafKeys<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends object
  ? T[K] extends { value: any }
  ? `${Prefix}${K & string}`
  : LeafKeys<T[K], `${Prefix}${K & string}.`>
  : `${Prefix}${K & string}`
}[keyof T];

export type AllowedColorTokens =
  | LeafKeys<typeof colors>
  | LeafKeys<typeof semanticColors>;
export type AllowedIconNames = keyof typeof IconNames;

export type IconProps = Omit<BoxProps, 'size'> &
  SVGAttributes<SVGElement> & {
    name: AllowedIconNames;
    size?: AllowedIconSizes;
    fill?: AllowedColorTokens;
  };

export const Icon: React.FC<IconProps> = ({
  name,
  size = '24',
  fill = 'current',
  ...props
}: IconProps) => {
  const [className, otherProps] = splitProps(props);
  return (
    <Box
      as="svg"
      name={name}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(icon({ size: size, fill }), className)}
      {...otherProps}
    >
      <use xlinkHref={`/sprite.svg#${name}`} />
    </Box>
  );
};
