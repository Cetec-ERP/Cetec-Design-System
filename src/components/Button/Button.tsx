import { ReactNode, MouseEvent } from 'react';
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

  return (
    <Box
      as={href ? 'a' : 'button'}
      className={`${cx(classes.container, className)} group`}
      {...(href ? { href } : { type })}
      {...otherProps}
      {...(loading && {
        'aria-busy': true,
        'aria-live': 'polite',
      })}
      {...(disabled && {
        disabled: true,
        'aria-disabled': true,
        ...(href && {
          tabIndex: -1,
          onClick: (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
        }),
      })}
    >
      <>
        <HStack gap="4" opacity={loading ? 0 : 1}>
          {iconBefore && <Icon name={iconBefore} className={classes.icon} />}
          {children}
          {iconAfter && <Icon name={iconAfter} className={classes.icon} />}
        </HStack>
        {loading && (
          <Spinner
            size="sm"
            inverse={variant === 'primary' || variant === 'danger'}
            centered
          />
        )}
      </>
    </Box>
  );
};

export default Button;
