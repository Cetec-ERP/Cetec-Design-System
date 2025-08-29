import React, { FC } from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import {
  iconButton,
  type IconButtonVariantProps,
} from '@styled-system/recipes';
import { Grid, HStack } from '@styled-system/jsx';
import { Spinner } from '~/components/Spinner';
import { Icon, type IconProps } from '~/components/Icon';
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
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    name: IconProps['name'];
  };

export const IconButton: FC<IconButtonProps> = ({
  variant,
  size = 'medium',
  href,
  loading,
  disabled,
  type = 'button',
  name,
  ...props
}: IconButtonProps) => {
  const trulyDisabled = loading || disabled;
  const [className, otherProps] = splitProps(props);
  const classes = iconButton({ variant, size });

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={trulyDisabled}
      aria-disabled={trulyDisabled}
      className={cx(classes.root, className)}
      {...(href ? { href } : { type })}
      {...otherProps}
    >
      <HStack gap="4" opacity={loading ? 0 : 1}>
        <Icon
          name={name}
          size={size === 'small' ? '22' : '24'}
          className={classes.icon}
        />
      </HStack>
      {loading && (
        <Grid
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          placeItems="center"
        >
          <Spinner size={size === 'small' ? 'small' : 'medium'} />
        </Grid>
      )}
    </Box>
  );
};
