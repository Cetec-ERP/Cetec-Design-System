import { cx } from '@styled-system/css';
import { tag, type TagVariantProps } from '@styled-system/recipes';

import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';
import { Icon, type IconProps } from '../Icon/Icon';

import type { IconNamesList } from '../Icon/icons';

/** Props accepted by {@link Tag}. */
export type TagProps = Omit<BoxProps, keyof TagVariantProps> &
  Omit<TagVariantProps, 'iconBefore' | 'iconAfter'> & {
    /** Visible tag label. */
    children: string;
    /** Decorative icon shown before the label. */
    iconBefore?: IconNamesList;
    /** Decorative icon shown after the label. */
    iconAfter?: IconNamesList;
    /** Visual emphasis treatment. */
    /** @default "default" */
    variant?: TagVariantProps['variant'];
    /** Color family used by the tag treatment. */
    /** @default "slate" */
    hue?: TagVariantProps['hue'];
    /** Height and text size. Use `sm` in dense rows such as table cells. */
    /** @default "md" */
    size?: TagVariantProps['size'];
  };

/**
 * Icon sizes share the Tag size names: `sm` is 16 and `md` is 20. The Tag
 * recipe defaults to `md`, but the Icon recipe has no default, so a
 * conditional value without `base` gets `base: 'md'` here.
 */
const getIconSize = (size: TagProps['size']): IconProps['size'] => {
  if (size == null) return 'md';
  if (typeof size === 'object' && !Array.isArray(size)) {
    return { base: 'md', ...size };
  }
  return size;
};

/**
 * Displays a compact, non-interactive category or status label.
 *
 * Use `Chip` when the item can be selected or dismissed. Icons are decorative,
 * so the text must communicate the tag's meaning.
 *
 * @example
 * ```tsx
 * <Tag hue="green">Approved</Tag>
 * ```
 */
export const Tag = (props: TagProps) => {
  const { variant, hue, size, iconBefore, iconAfter, children, ...rest } =
    props;
  const iconSize = getIconSize(size);
  const [className, otherProps] = splitProps(rest);

  return (
    <Box
      {...dsComponent('Tag')}
      className={cx(
        tag({
          size,
          variant,
          hue,
          iconBefore: Boolean(iconBefore),
          iconAfter: Boolean(iconAfter),
        }),
        className,
      )}
      {...otherProps}
    >
      {iconBefore && (
        <Icon
          name={iconBefore}
          fill="current"
          color="inherit"
          size={iconSize}
        />
      )}
      {children}
      {iconAfter && (
        <Icon name={iconAfter} fill="current" color="inherit" size={iconSize} />
      )}
    </Box>
  );
};
