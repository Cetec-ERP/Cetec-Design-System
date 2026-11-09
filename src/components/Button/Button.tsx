import { type MouseEvent, type ReactNode, useId, useMemo } from 'react';

import { cx } from '@styled-system/css';
import { HStack } from '@styled-system/jsx';
import { button, type ButtonVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Icon, type IconNamesList } from '~/components/Icon';
import { Spinner } from '~/components/Spinner';
import { Tooltip } from '~/components/Tooltip';
import { useFieldContext } from '~/system/context/FieldContext';
import {
  SlotContext,
  type SlotPlacement,
  useSlotContext,
} from '~/system/context/SlotContext';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

/**
 * Props for {@link Button}. Extends {@link BoxProps} for layout and native
 * element attributes while reserving the button recipe's visual variants.
 */
export type ButtonProps = Omit<
  BoxProps,
  keyof ButtonVariantProps | 'fontSize' | 'fontVariant'
> &
  Omit<ButtonVariantProps, 'before' | 'after' | 'iconBefore' | 'iconAfter'> & {
    /** Content rendered before the button label. Takes precedence over `iconBefore`. */
    before?: ReactNode;
    /** Content rendered after the button label. Takes precedence over `iconAfter`. */
    after?: ReactNode;
    /**
     * Legacy icon name rendered before the label when `before` is not provided.
     *
     * @deprecated Use `before={<Icon name="..." aria-hidden />}`. This alias
     * will be removed in a future major release.
     */
    iconBefore?: IconNamesList;
    /**
     * Legacy icon name rendered after the label when `after` is not provided.
     *
     * @deprecated Use `after={<Icon name="..." aria-hidden />}`. This alias
     * will be removed in a future major release.
     */
    iconAfter?: IconNamesList;
    /** When provided, renders an anchor instead of a native button. */
    href?: string;
    /**
     * Shows a centered spinner, hides the visible content, and sets
     * `aria-busy`. Loading does not disable the control; set `disabled` when
     * the action must not be available.
     *
     * @default false
     */
    loading?: boolean;
    /** Visible label and optional inline content for the action. */
    children: string | ReactNode;
    /** Marks the control as having an error for styling and descendant slots. */
    error?: boolean;
    /** Sets `aria-invalid` and marks the control invalid for styling and slots. */
    invalid?: boolean;
    /**
     * Disables a native button. For links, marks the anchor `aria-disabled`,
     * removes its `href` so it can't navigate, and keeps it focusable.
     */
    disabled?: boolean;
    /**
     * Disables the action and explains why. The control stays focusable and
     * is marked `aria-disabled`, clicks are blocked, the reason shows in a
     * tooltip on hover and focus, and it is linked with `aria-describedby`.
     * Use it instead of `disabled` whenever the user can't tell why an action
     * is unavailable, such as a missing permission or a locked record.
     */
    disabledReason?: string;
    /**
     * Native button type; ignored when `href` causes the component to render an
     * anchor.
     *
     * @default 'button'
     */
    type?: 'submit' | 'reset' | 'button';
    /** Font size forwarded to the button's text treatment. */
    fontSize?: BoxProps['fontSize'];
    /** Font variant forwarded to the button's text treatment. */
    fontVariant?: BoxProps['fontVariant'];
  };

/**
 * Performs an action or navigates to a location.
 *
 * Renders a native `button` by default, or an anchor when `href` is supplied.
 * Use {@link IconButton} for actions represented only by an icon. In a
 * `FormField` or slot context, explicitly supplied `size`, `error`, `invalid`,
 * and `disabled` values take precedence over slot context, which takes
 * precedence over field context. Its recipe defaults to the `standard` variant
 * and `md` size. Set `disabledReason` instead of `disabled` when the user needs
 * to know why the action is unavailable.
 *
 * @example
 * ```tsx
 * <Button onClick={saveInvoice}>Save invoice</Button>
 * <Button disabledReason="Closed orders can't be edited.">Edit order</Button>
 * ```
 */
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
    disabledReason,
    type = 'button',
    fontSize,
    fontVariant,
    onClick,
    'aria-describedby': ariaDescribedBy,
    ...rest
  } = props;
  const reasonId = useId();
  const hasReason = Boolean(disabledReason);
  const size =
    sizeProp ??
    (slotContext?.size as ButtonVariantProps['size'] | undefined) ??
    fieldContext?.size;
  const error = errorProp ?? slotContext?.error ?? fieldContext?.error;
  const invalid = invalidProp ?? slotContext?.invalid ?? fieldContext?.invalid;
  const disabled = hasReason
    ? true
    : (disabledProp ?? slotContext?.disabled ?? fieldContext?.disabled);

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

  const slotContexts = useMemo(
    () => ({
      before: {
        owner: 'Button' as const,
        placement: 'before' as const,
        size,
        disabled,
        error,
        invalid,
      },
      after: {
        owner: 'Button' as const,
        placement: 'after' as const,
        size,
        disabled,
        error,
        invalid,
      },
    }),
    [disabled, error, invalid, size],
  );

  const renderSlot = (slot: ReactNode, placement: SlotPlacement) => {
    if (!slot) {
      return null;
    }

    return (
      <SlotContext.Provider value={slotContexts[placement]}>
        <Box className={classes.slot}>{slot}</Box>
      </SlotContext.Provider>
    );
  };

  const control = (
    <Box
      {...dsComponent('Button')}
      {...(href
        ? ({
            as: 'a',
            // A live href still opens on middle-click or from the context
            // menu, so a disabled link drops it and keeps its role and focus.
            ...(disabled ? { role: 'link', tabIndex: 0 } : { href }),
          } satisfies BoxProps<'a'>)
        : ({
            as: 'button',
            type,
            // A reason keeps the button focusable, so it can show the reason.
            disabled: hasReason ? undefined : disabled,
          } satisfies BoxProps<'button'>))}
      onClick={
        disabled && (href || hasReason)
          ? (e: MouseEvent<HTMLElement>) => e.preventDefault()
          : onClick
      }
      // The global disabled style turns off pointer events. A reason needs
      // hover to show its tooltip. The onClick guard above still blocks clicks.
      pointerEvents={hasReason ? 'auto' : undefined}
      className={`${cx(classes.container, className)} group`}
      {...(loading && {
        'aria-busy': true,
        'aria-live': 'polite',
      })}
      aria-disabled={disabled}
      aria-describedby={
        [hasReason ? reasonId : undefined, ariaDescribedBy]
          .filter(Boolean)
          .join(' ') || undefined
      }
      aria-invalid={invalid || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      {...otherProps}
    >
      <HStack gap="0" opacity={loading ? 0 : 1}>
        {renderSlot(resolvedBefore, 'before')}
        <Box
          className={classes.mainContent}
          fontSize={fontSize}
          fontVariant={fontVariant}
        >
          {children}
        </Box>
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

  // Always in a Tooltip, so a reason that comes or goes does not remount the
  // button and drop its focus. `asChild` adds no wrapper, so layout is unchanged.
  // The hidden text already describes the button, so the tooltip does not.
  return (
    <>
      <Tooltip
        asChild
        text={disabledReason ?? ''}
        placement="top"
        disabled={!hasReason}
        describeTrigger={false}
      >
        {control}
      </Tooltip>
      {hasReason && (
        <Box as="span" id={reasonId} hidden>
          {disabledReason}
        </Box>
      )}
    </>
  );
};

export default Button;
