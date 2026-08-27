import type { MouseEvent, ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { link, type LinkVariantProps } from '@styled-system/recipes';
import { type FontToken, type FontWeightToken } from '@styled-system/tokens';

import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Icon } from '../Icon/Icon';

/** Props accepted by {@link Link}. */
export type LinkProps = Omit<BoxProps, keyof LinkVariantProps> &
  LinkVariantProps & {
    /** Destination URL for the native anchor. */
    href: string;
    /** Opens the destination in a new tab and displays an external-link icon. */
    /** @default false */
    external?: boolean;
    /** Prevents navigation and removes the link from sequential keyboard focus. */
    /** @default false */
    disabled?: boolean;
    /** Visual text size. */
    size?: LinkVariantProps['size'];
    /** Font family token used for the link text. */
    /** @default "body" */
    family?: FontToken;
    /** Applies italic styling to the link text. */
    /** @default false */
    italic?: boolean;
    /** Applies the recipe's bold link treatment. */
    /** @default false */
    bold?: boolean;
    /** Explicit font-weight token. */
    weight?: FontWeightToken;
    /** Additional class name merged with the link recipe class. */
    className?: string;
    /** Link label and inline content. */
    children?: ReactNode;
  };

/**
 * Navigates to another location using a native anchor.
 *
 * Set `external` for destinations that should open in a new tab. Use `Button`
 * for actions that do not navigate.
 *
 * @example
 * ```tsx
 * <Link href="/orders">View orders</Link>
 * ```
 */
export const Link = (props: LinkProps) => {
  const {
    href,
    external,
    disabled,
    children,
    size,
    family,
    weight,
    italic,
    bold,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Box
      {...dsComponent('Link')}
      as="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      // aria-disabled and tabIndex are needed to properly disable the link for accessibility
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={cx(link({ family, italic, bold, size, weight }), className)}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
      {external && <Icon name="arrow-square-out" size="20" fill="link" />}
    </Box>
  );
};
