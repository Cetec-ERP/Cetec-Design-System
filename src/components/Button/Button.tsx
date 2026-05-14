import { type MouseEvent, type ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { HStack } from '@styled-system/jsx';
import { button, type ButtonVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Icon, type IconNamesList } from '~/components/Icon';
import { Spinner } from '~/components/Spinner';
import { useFieldContext } from '~/system/context/FieldContext';
import {
  SlotContext,
  type SlotPlacement,
  useSlotContext,
} from '~/system/context/SlotContext';
import { splitProps } from '~/utils/splitProps';

export type ButtonProps = Omit<BoxProps, keyof ButtonVariantProps> &
  Omit<ButtonVariantProps, 'before' | 'after' | 'iconBefore' | 'iconAfter'> & {
    before?: ReactNode;
    after?: ReactNode;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    href?: string;
    loading?: boolean;
    children: string | ReactNode; // include ReactNode so we can pass in components
    error?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
  };

export const Button = (props: ButtonProps) => {
  const fieldContext = useFieldContext();
  const slotContext = useSlotContext();
  const {
    variant,
    size: sizeProp,
    href,
    before,
    after,
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
  const size =
    sizeProp ??
    (slotContext?.size as ButtonVariantProps['size'] | undefined) ??
    fieldContext?.size;
  const error = errorProp ?? slotContext?.error ?? fieldContext?.error;
  const invalid = invalidProp ?? slotContext?.invalid ?? fieldContext?.invalid;
  const disabled =
    disabledProp ?? slotContext?.disabled ?? fieldContext?.disabled;

  // Temporary compatibility. Will be removed in future versions.
  const resolvedBefore =
    before ?? (iconBefore ? <Icon name={iconBefore} aria-hidden /> : undefined);
  const resolvedAfter =
    after ?? (iconAfter ? <Icon name={iconAfter} aria-hidden /> : undefined);

  if (import.meta.env.DEV) {
    if (before && iconBefore) {
      console.warn(
        'Button received both "before" and "iconBefore". "before" takes precedence.',
      );
    }

    if (after && iconAfter) {
      console.warn(
        'Button received both "after" and "iconAfter". "after" takes precedence.',
      );
    }
  }

  const classes = button({
    variant,
    size,
    before: Boolean(resolvedBefore),
    after: Boolean(resolvedAfter),
  });
  const [className, otherProps] = splitProps(rest);

  const renderSlot = (slot: ReactNode, placement: SlotPlacement) => {
    if (!slot) {
      return null;
    }

    return (
      <SlotContext.Provider
        value={{
          owner: 'Button',
          placement,
          size,
          disabled,
          error,
          invalid,
        }}
      >
        <Box className={classes.slot}>{slot}</Box>
      </SlotContext.Provider>
    );
  };

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
      <HStack gap="0" opacity={loading ? 0 : 1}>
        {renderSlot(resolvedBefore, 'before')}
        <Box className={classes.mainContent}>{children}</Box>
        {renderSlot(resolvedAfter, 'after')}
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
