import type { SVGAttributes } from 'react';

import { cx } from '@styled-system/css';
import { icon, type IconVariantProps } from '@styled-system/recipes';
import type { ColorToken } from '@styled-system/tokens';

import { Box, type BoxProps } from '~/components/Box';
import type { numericSizes } from '~/styles/primitives';
import { useSlotContext } from '~/system/context/SlotContext';
import { splitProps } from '~/utils/splitProps';

import { useIconConfig } from './IconContext';

import type { IconNamesList } from './icons';

/*
 * Size is constrained to numeric token keys so it maps 1:1 to recipe
 * variants in the icon recipe. Non-numeric sizes (full, auto, etc.)
 * are excluded because they don't have corresponding variant entries.
 */
export type AllowedIconSizes = keyof typeof numericSizes;

export type IconProps = Omit<BoxProps, IconNamesList | 'size'> &
  SVGAttributes<SVGElement> &
  IconVariantProps & {
    name: IconNamesList;
    size?: IconVariantProps['size'];
    fill?: ColorToken;
  };

export const Icon = (props: IconProps) => {
  const slotContext = useSlotContext();
  const { spritePath } = useIconConfig();

  const { name, size: sizeProp, fill: fillProp, ...rest } = props;
  const [className, otherProps] = splitProps(rest);

  const spriteHref = `${spritePath}#${name}`;

  const slotSize = slotContext?.size as IconProps['size'] | undefined;
  const slotFill = slotContext?.fill as IconProps['fill'] | undefined;

  const size = sizeProp ?? slotSize;
  const fill = fillProp ?? slotFill;
  const useContextFill = Boolean(slotFill && !fillProp);

  return (
    <Box
      as="svg"
      name={name}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className={cx(
        icon({ size }),
        useContextFill ? icon({ size, contextFill: true }) : icon({ size }),
        className,
      )}
      {...otherProps}
    >
      <use xlinkHref={spriteHref} />
    </Box>
  );
};
