import { type ReactNode, isValidElement } from 'react';

import { cx } from '@styled-system/css';
import { textInput, type TextInputVariantProps } from '@styled-system/recipes';

import { Button } from '~/components/Button';
import { Icon, type IconNamesList } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { useFieldContext } from '~/system/context/FieldContext';
import { SlotContext, type SlotPlacement } from '~/system/context/SlotContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';

/** Props for {@link TextInput}, a single-line native input with optional slots. */
export type TextInputProps = Omit<BoxProps, keyof TextInputVariantProps> &
  Omit<
    TextInputVariantProps,
    'before' | 'after' | 'iconBefore' | 'iconAfter'
  > & {
    /** Form field name submitted with the input value. */
    name: string;
    /** Identifier used to associate a visible `Label` with this input. */
    id?: string;
    /** Content rendered before the native input. Takes precedence over `iconBefore`. */
    before?: ReactNode;
    /** Content rendered after the native input. Takes precedence over `iconAfter`. */
    after?: ReactNode;
    /** Decorative icon rendered before the input when `before` is omitted. */
    iconBefore?: IconNamesList;
    /** Decorative icon rendered after the input when `after` is omitted. */
    iconAfter?: IconNamesList;
    /** Applies error styling. The local value takes precedence over field context. */
    error?: boolean;
    /** Disables the native input. The local value takes precedence over slot and field context. */
    disabled?: boolean;
    /** Applies valid styling without changing native constraint validation. */
    valid?: boolean;
    /** Marks the native input invalid with `aria-invalid` and applies invalid styling. */
    invalid?: boolean;
    /**
     * Native autocomplete hint for the input. This component disables browser autocomplete by default.
     * @default 'off'
     */
    autoComplete?: string;
    /**
     * Native input type.
     * @default 'text'
     */
    type?:
      | 'text'
      | 'number'
      | 'email'
      | 'password'
      | 'search'
      | 'tel'
      | 'url'
      | 'date'
      | 'time'
      | 'datetime-local'
      | 'month'
      | 'week';
  };

/**
 * Renders a single-line native input with optional leading and trailing slots.
 *
 * Use a `Label` or `FormField` to provide an accessible name. `before` and
 * `after` can contain controls; they inherit size and state through slot
 * context. Explicit slots take precedence over `iconBefore` and `iconAfter`.
 *
 * @example
 * ```tsx
 * <TextInput id="email" name="email" type="email" iconBefore="mail" />
 * ```
 */
export const TextInput = (props: TextInputProps) => {
  const fieldContext = useFieldContext();
  const {
    name,
    id,
    before,
    after,
    iconBefore,
    iconAfter,
    error: errorProp,
    disabled: disabledProp,
    valid,
    invalid: invalidProp,
    type = 'text',
    size: sizeProp,
    autoSize = false,
    autoComplete = 'off',
    ...rest
  } = props;
  const size = sizeProp ?? fieldContext?.size;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const resolvedBefore =
    before ?? (iconBefore ? <Icon name={iconBefore} aria-hidden /> : undefined);
  const resolvedAfter =
    after ?? (iconAfter ? <Icon name={iconAfter} aria-hidden /> : undefined);

  if (import.meta.env.DEV) {
    if (before && iconBefore) {
      console.warn(
        'TextInput received both "before" and "iconBefore". "before" takes precedence.',
      );
    }

    if (after && iconAfter) {
      console.warn(
        'TextInput received both "after" and "iconAfter". "after" takes precedence.',
      );
    }
  }

  const classes = textInput({
    size,
    before: Boolean(resolvedBefore),
    after: Boolean(resolvedAfter),
    autoSize,
  });
  const [className, otherProps] = splitProps(rest);

  const isButtonLikeSlot = (slot: ReactNode) =>
    isValidElement(slot) && (slot.type === Button || slot.type === IconButton);

  const renderSlot = (slot: ReactNode, placement: SlotPlacement) => {
    if (!slot) {
      return null;
    }

    return (
      <SlotContext.Provider
        value={{
          owner: 'TextInput',
          placement,
          size,
          disabled,
          error,
          invalid,
        }}
      >
        <Box
          className={isButtonLikeSlot(slot) ? classes.buttonSlot : classes.slot}
        >
          {slot}
        </Box>
      </SlotContext.Provider>
    );
  };

  return (
    <Box
      className={cx(classes.container, className)}
      aria-disabled={disabled}
      data-disabled={disabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      data-valid={valid || undefined}
      aria-invalid={invalid || undefined}
    >
      {renderSlot(resolvedBefore, 'before')}
      <Box
        as="input"
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        data-error={error || undefined}
        data-valid={valid || undefined}
        data-invalid={invalid || undefined}
        aria-invalid={invalid || undefined}
        className={cx(classes.input, className)}
        autoComplete={autoComplete}
        {...otherProps}
      />
      {renderSlot(resolvedAfter, 'after')}
    </Box>
  );
};
