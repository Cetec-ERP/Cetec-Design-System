import { FC, ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import { button, type ButtonVariantProps } from '@styled-system/recipes';
import { Grid, HStack } from '@styled-system/jsx';
import { Spinner } from '~/components/Spinner';
import { Icon, type IconProps } from '~/components/Icon';
import { splitProps } from '~/utils/splitProps';

export type ButtonProps = BoxProps &
  ButtonVariantProps & {
    href?: string;
    loading?: boolean;
    children?: string | ReactNode;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    iconStart?: IconProps['name'];
    iconEnd?: IconProps['name'];
  };

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  href,
  children,
  loading,
  disabled,
  type = 'button',
  iconStart,
  iconEnd,
  ...props
}: ButtonProps) => {
  const trulyDisabled = loading || disabled;

  const [className, otherProps] = splitProps(props);
  const classes = button({ variant, size });

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
        {iconStart && (
          <Icon
            name={iconStart}
            size={size === 'small' ? '22' : '24'}
            className={classes.iconStart}
          />
        )}
        {children}
        {iconEnd && (
          <Icon
            name={iconEnd}
            size={size === 'small' ? '22' : '24'}
            className={classes.iconEnd}
          />
        )}
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

export default Button;
