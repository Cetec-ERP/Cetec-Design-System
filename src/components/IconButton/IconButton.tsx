import React, { FC, ReactElement } from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import {
  iconButton,
  type IconButtonVariantProps,
} from '@styled-system/recipes';
import { ButtonContent } from '~/components/Button/ButtonContent';
import { Icon } from '~/components/Icon';
import { splitProps } from '~/utils/splitProps';

/**
 * The IconButton component builds on Box.
 * It automatically renders as a "button" (or an "a" if an href is provided)
 * and applies the iconButton recipe styles.
 *
 * It requires exactly one child which must be an <Icon /> element.
 */
export type IconButtonProps = BoxProps &
  IconButtonVariantProps & {
    href?: string;
    loading?: boolean;
    className?: string;
    children: ReactElement<typeof Icon>;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
  };

export const IconButton: FC<IconButtonProps> = ({
  variant,
  size,
  href,
  children,
  loading,
  disabled,
  type = 'button',
  ...props
}: IconButtonProps) => {
  const isDisabled = loading || disabled;
  const [className, otherProps] = splitProps(props);

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={cx(iconButton({ variant, size }), className)}
      {...(href ? { href } : { type })}
      {...otherProps}
      {...(isDisabled &&
        href && {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
            e.preventDefault(),
        })}
    >
      <ButtonContent loading={!!loading}>{children}</ButtonContent>
    </Box>
  );
};
