import React, { FC, Children, isValidElement, useMemo } from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import {
  iconButton,
  type IconButtonVariantProps,
} from '@styled-system/recipes';
import { ButtonContent } from '~/components/Button/ButtonContent';
import { Icon, type IconNamesList } from '~/components/Icon';
import { splitProps } from '~/utils/splitProps';

/**
 * We've added a new optional prop 'iconName'. When provided (and if no children
 * are passed), IconButton will render the corresponding Icon automatically.
 */
export type IconButtonProps = BoxProps &
  IconButtonVariantProps & {
    href?: string;
    loading?: boolean;
    loadingText?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    iconName?: IconNamesList;
  };

/**
 * The IconButton component builds on Box.
 * It automatically renders as a "button" (or an "a" if an href is provided)
 * and applies the iconButton recipe styles.
 *
 * If the caller does not pass children but does provide an 'iconName',
 * the component renders the corresponding Icon automatically.
 */
export const IconButton: FC<IconButtonProps> = ({
  variant,
  size,
  href,
  children,
  loading,
  disabled,
  iconName,
  type,
  ...props
}: IconButtonProps) => {
  const trulyDisabled = loading || disabled;

  const [className, otherProps] = splitProps(props);

  const containsIcon = useMemo(() => {
    let isThereIconInChild = false;

    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === Icon) {
        isThereIconInChild = true;
      }
    });

    return isThereIconInChild;
  }, [children]);

  if (!containsIcon) {
    alert('IconButton requires at least one Icon component in children.');
    throw new Error(
      'IconButton requires at least one Icon component in children.',
    );
  }

  // If no children are provided and an iconName is specified, render the Icon automatically.
  const content =
    children ??
    (iconName ? (
      <Icon name={iconName} size={size === 'small' ? '22' : '24'} />
    ) : null);

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={trulyDisabled}
      aria-disabled={trulyDisabled}
      className={cx(iconButton({ variant, size }), className)}
      {...(href ? { href } : { type: type || 'button' })}
      {...otherProps}
    >
      <ButtonContent loading={!!loading}>{content}</ButtonContent>
    </Box>
  );
};
