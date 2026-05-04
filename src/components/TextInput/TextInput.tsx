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

export type TextInputProps = Omit<BoxProps, keyof TextInputVariantProps> &
  Omit<TextInputVariantProps, 'iconBefore' | 'iconAfter'> & {
    name: string;
    id?: string;
    before?: ReactNode;
    after?: ReactNode;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    error?: boolean;
    disabled?: boolean;
    valid?: boolean;
    invalid?: boolean;
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
      data-error={error}
      data-invalid={invalid}
      data-valid={valid}
      aria-invalid={invalid || undefined}
    >
      {renderSlot(resolvedBefore, 'before')}
      <Box
        as="input"
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        data-error={error}
        data-valid={valid}
        data-invalid={invalid}
        aria-invalid={invalid || undefined}
        className={cx(classes.input, className)}
        autoComplete={autoComplete}
        {...otherProps}
      />
      {renderSlot(resolvedAfter, 'after')}
    </Box>
  );
};
