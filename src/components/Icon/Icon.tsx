import { cx } from '@styled-system/css';
import { icon, type IconVariantProps } from '@styled-system/recipes';
import type { ColorToken } from '@styled-system/tokens';

import { Box, type BoxProps } from '~/components/Box';
import type { numericSizes } from '~/styles/primitives';
import { useSlotContext } from '~/system/context/SlotContext';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

import { useIconConfig } from './IconContext';

import type { IconNamesList } from './icons';

/**
 * Numeric design-token sizes supported by the icon recipe. Non-numeric sizes
 * do not have corresponding recipe variants.
 */
export type AllowedIconSizes = keyof typeof numericSizes;

type IconOwnProps = {
  /** Symbol identifier from the configured SVG sprite. */
  name: IconNamesList;
  /**
   * Icon size recipe variant. Responsive/conditional recipe values are
   * supported. An explicit value takes precedence over slot context.
   *
   * @default 24px when no size is supplied by the icon or its slot context
   */
  size?: IconVariantProps['size'];
  /**
   * Design-token fill color. An explicit value takes precedence over slot
   * context; otherwise the recipe uses the decorative icon color.
   *
   * @default 'icon.decorative'
   */
  fill?: ColorToken;
};

/**
 * Props for {@link Icon}. Extends SVG and Box props for presentation and
 * accessibility attributes.
 */
export type IconProps = Omit<
  BoxProps,
  keyof IconVariantProps | keyof IconOwnProps
> &
  Omit<IconVariantProps, keyof IconOwnProps> &
  IconOwnProps;

/**
 * Renders an SVG symbol from the configured icon sprite.
 *
 * Icons are visual content, not automatically hidden or named. Pass
 * `aria-hidden` for decorative icons; give meaningful standalone icons an
 * accessible name such as `aria-label`. Wrap meaningful actions in
 * {@link IconButton} rather than using a bare clickable SVG.
 *
 * @example
 * ```tsx
 * <Icon name="info" aria-label="More information" />
 * ```
 */
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

  return (
    <Box
      {...dsComponent('Icon')}
      as="svg"
      name={name}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className={cx(icon({ size }), className)}
      {...otherProps}
    >
      <use xlinkHref={spriteHref} />
    </Box>
  );
};
