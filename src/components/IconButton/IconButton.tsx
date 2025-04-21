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
import { HStack } from '@styled-system/jsx';
import { AllowedIconSizes } from '../Icon/Icon';

type IconPositions = 'left' | 'right';

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
    buttonText?: string;
    iconPosition?: IconPositions | undefined;
  };

type IconButtonComponent = {
  buttonText?: string;
  iconName: IconNamesList;
  iconPosition: IconPositions;
  size: AllowedIconSizes;
};
const IconButtonComponent: FC<IconButtonComponent> = ({
  buttonText,
  iconName,
  iconPosition,
  size,
}) => {
  return (
    <HStack
      gap="8"
      flexDirection={iconPosition === 'right' ? 'row' : 'row-reverse'}
    >
      <Box as="span" {...(!buttonText && { display: 'none' })}>
        {buttonText}
      </Box>
      <Icon name={iconName} size={size} />
    </HStack>
  );
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
  buttonText,
  iconPosition = 'right',
  ...props
}: IconButtonProps) => {
  const isDisabled = loading || disabled;
  const isChildrenExists = children !== undefined;

  const [className, otherProps] = splitProps(props);

  const containsIcon = useMemo(() => {
    if (!isChildrenExists) return false;

    let isThereIconInChild = false;

    Children?.forEach(children, (child) => {
      if (isValidElement(child) && child.type === Icon) {
        isThereIconInChild = true;
      }
    });

    return isThereIconInChild;
  }, [isChildrenExists, children]);

  if (
    (isChildrenExists && !containsIcon) ||
    (!isChildrenExists && iconName === undefined)
  ) {
    console.error(
      'Please provide IconButton with at least one Icon component in children or proper iconName',
    );
    return null;
  }

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={cx(iconButton({ variant, size }), className)}
      {...(href ? { href } : { type: type || 'button' })}
      {...otherProps}
    >
      <ButtonContent loading={!!loading}>
        <ButtonContent loading={!!loading}>
          {isChildrenExists ? (
            children
          ) : (
            <IconButtonComponent
              buttonText={buttonText}
              iconName={iconName!}
              iconPosition={iconPosition}
              size={size === 'small' ? '22' : '24'}
            />
          )}
        </ButtonContent>
      </ButtonContent>
    </Box>
  );
};
