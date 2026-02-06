import { SVGAttributes } from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { cx } from '@styled-system/css';
import { IconNamesList } from './icons';
import { icon } from '@styled-system/patterns';
import { numericSizes } from '~/styles/primitives';
import { ColorToken } from '@styled-system/tokens';
import { splitProps } from '~/utils/splitProps';

/*
 * Using the size prop in this way cannot handle non-numeric sizes,
 * so importing this list of keys directly from the tokens to ensure
 * that only valid sizes are allowed.
 */
export type AllowedIconSizes = keyof typeof numericSizes;

export type IconProps = Omit<BoxProps, 'size'> &
  SVGAttributes<SVGElement> & {
    name: IconNamesList;
    size?: AllowedIconSizes;
    fill?: ColorToken;
  };

export const Icon: React.FC<IconProps> = ({
  name,
  size = '24',
  fill,
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
