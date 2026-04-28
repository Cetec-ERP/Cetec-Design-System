import type { MouseEvent, ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { HStack } from '@styled-system/jsx';
import { button, type ButtonVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Icon, type IconNamesList } from '~/components/Icon';
import { Spinner } from '~/components/Spinner';
import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

export type ButtonProps = Omit<BoxProps, keyof ButtonVariantProps> &
  Omit<ButtonVariantProps, 'iconBefore' | 'iconAfter'> & {
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    href?: string;
    loading?: boolean;
    children: string | ReactNode; // include ReactNode so we can pass in components like <Badge/>
    error?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
  };

export const Button = (props: ButtonProps) => {
  const fieldContext = useFieldContext();
  const {
    variant,
    size: sizeProp,
    href,
    iconBefore,
    iconAfter,
    children,
    loading,
    error: errorProp,
    invalid: invalidProp,
    disabled: disabledProp,
    type = 'button',
    ...rest
  } = props;
  const size = sizeProp ?? fieldContext?.size;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const classes = button({
    variant,
    size,
    iconBefore: Boolean(iconBefore),
    iconAfter: Boolean(iconAfter),
  });
  const [className, otherProps] = splitProps(rest);

  return (
    <Box
      {...(href
        ? ({
            as: 'a',
            href,
            ...(disabled && {
              onClick: (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
            }),
          } satisfies BoxProps<'a'>)
        : ({
            as: 'button',
            type,
            disabled,
          } satisfies BoxProps<'button'>))}
      className={`${cx(classes.container, className)} group`}
      {...(loading && {
        'aria-busy': true,
        'aria-live': 'polite',
      })}
      aria-disabled={disabled}
      aria-invalid={invalid || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      {...otherProps}
    >
      <HStack gap={size === 'xl' ? '6' : '4'} opacity={loading ? 0 : 1}>
        {iconBefore && (
          <Icon
            name={iconBefore}
            className={cx(classes.icon, classes.iconBefore)}
          />
        )}
        {children}
        {iconAfter && (
          <Icon
            name={iconAfter}
            className={cx(classes.icon, classes.iconAfter)}
          />
        )}
      </HStack>
      {loading && (
        <Spinner
          size="sm"
          inverse={
            variant === 'primary' ||
            variant === 'danger' ||
            variant === 'selectedBold'
          }
          centered
        />
      )}
    </Box>
  );
};

export default Button;
