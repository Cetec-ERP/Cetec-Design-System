import { SVGAttributes } from 'react';
import { Box, type BoxProps } from '~/components/Box';
import { cx } from '@styled-system/css';
import { IconNamesList } from './icons';
import { icon } from '@styled-system/patterns';
import { numericSizes } from '~/styles/tokens';
import { splitProps } from '~/utils/splitProps';
import { getSvgUrl } from '~/utils/getSvgUrl';
import { ConditionalValue } from '@styled-system/types';
import { WithEscapeHatch } from '@styled-system/types/prop-type';
import { ColorToken } from '@styled-system/tokens';

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
    fill?: ConditionalValue<WithEscapeHatch<ColorToken | `var(--${string})`>>;
  };

export const Icon: React.FC<IconProps> = ({
  name,
  size = '24',
  fill = 'current',
  ...props
}: IconProps) => {
  const [className, otherProps] = splitProps(props);
  const iconURL = getSvgUrl(name);
  return (
    <Box
      as="svg"
      name={name}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(icon({ size: size, fill }), className)}
      {...otherProps}
    >
      <use xlinkHref={iconURL} />
    </Box>
  );
};
