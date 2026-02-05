import { ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { HStack, Grid } from '@styled-system/jsx';
import { Box, type BoxProps } from '~/components/Box';
import { button, type ButtonVariantProps } from '@styled-system/recipes';
import { splitProps } from '~/utils/splitProps';
import { Spinner } from '~/components/Spinner';
import { Icon, type IconNamesList } from '~/components/Icon';

export type ButtonProps = Omit<BoxProps, keyof ButtonVariantProps> &
  Omit<ButtonVariantProps, 'iconBefore' | 'iconAfter'> & {
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    href?: string;
    loading?: boolean;
    children?: string | ReactNode;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
  };

export const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    href,
    iconBefore,
    iconAfter,
    children,
    loading,
    disabled,
    type = 'button',
    ...rest
  } = props;
  const classes = button({
    variant,
    size,
    iconBefore: Boolean(iconBefore),
    iconAfter: Boolean(iconAfter),
  });
  const [className, otherProps] = splitProps(rest);
  const trulyDisabled = loading || disabled;

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={trulyDisabled}
      aria-disabled={trulyDisabled}
      aria-label={children}
      className={`${cx(classes.container, className)} group`}
      {...(href ? { href } : { type })}
      {...otherProps}
      {...(trulyDisabled &&
        href && {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
            e.preventDefault(),
        })}
    >
      <>
        <HStack gap="4" opacity={loading ? 0 : 1}>
          {iconBefore && <Icon name={iconBefore} className={classes.icon} />}
          {children}
          {iconAfter && <Icon name={iconAfter} className={classes.icon} />}
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
            <Spinner size="sm" />
          </Grid>
        )}
      </>
    </Box>
  );
};

export default Button;
