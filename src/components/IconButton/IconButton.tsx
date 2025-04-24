import React, {
  FC,
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import {
  iconButton,
  type IconButtonVariantProps,
} from '@styled-system/recipes';
import { ButtonContent } from '~/components/Button/ButtonContent';
import { Icon } from '~/components/Icon';
import { splitProps } from '~/utils/splitProps';
import { buttonTypes } from '~/recipes/button';

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
    type?: buttonTypes;
  };

const isInvalidIconButton = (children: ReactNode): boolean => {
  if (children == null) return true;
  if (Children.count(children) !== 1) return true;
  const onlyChild = Children.only(children);
  return !(isValidElement(onlyChild) && onlyChild.type === Icon);
};

export const IconButton: FC<IconButtonProps> = ({
  variant,
  size,
  href,
  className: customClassName = '',
  children,
  loading,
  disabled,
  type,
  ...props
}: IconButtonProps) => {
  const isDisabled = loading || disabled;
  const [className, otherProps] = splitProps(props);

  const isInvalidElement = isInvalidIconButton(children);

  if (isInvalidElement) {
    console.error(
      'IconButton: expected a single <Icon> child but received invalid children.',
    );
    return null;
  }

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={cx(iconButton({ variant, size }), className, customClassName)}
      {...(href ? { href } : { type: type || 'button' })}
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
