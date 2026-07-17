import { type ReactNode, isValidElement } from 'react';

import { cx } from '@styled-system/css';
import {
  timeInputs,
  type TimeInputsVariantProps,
} from '@styled-system/recipes';

import { Button } from '~/components/Button';
import { Icon, type IconNamesList } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { useFieldContext } from '~/system/context/FieldContext';
import { SlotContext, type SlotPlacement } from '~/system/context/SlotContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../../Box';
import { SegmentedTime } from '../../SegmentedInputs';

import type { HourCycle, TimeValue } from '../helpers/types';

export type TimeInputProps = Omit<
  BoxProps,
  keyof TimeInputsVariantProps | 'children'
> &
  Omit<TimeInputsVariantProps, 'range' | 'before' | 'after'> & {
    id?: string;
    value?: TimeValue | null;
    defaultValue?: TimeValue | null;
    onChange?: (value: TimeValue | null) => void;
    hourCycle?: HourCycle;
    minuteStep?: number;
    label?: string;
    before?: ReactNode;
    after?: ReactNode;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    error?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    /** Reflected through to the segmented field — lets a wrapping Menu/Picker show "active anchor" styling */
    open?: boolean;
    /** Forwarded to the segmented field — see SegmentedTime's onFocusWithin */
    onFocusWithin?: () => void;
    /** Forwarded to the segmented field — see SegmentedTime's onBlurWithin */
    onBlurWithin?: (relatedTarget: Node | null) => void;
  };

export const TimeInput = (props: TimeInputProps) => {
  const fieldContext = useFieldContext();
  const {
    id,
    value,
    defaultValue,
    onChange,
    hourCycle,
    minuteStep,
    label,
    before,
    after,
    iconBefore,
    iconAfter,
    error: errorProp,
    disabled: disabledProp,
    invalid: invalidProp,
    size: sizeProp,
    open,
    onFocusWithin,
    onBlurWithin,
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

  const classes = timeInputs({
    size,
    before: Boolean(resolvedBefore),
    after: Boolean(resolvedAfter),
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
          owner: 'TimeInput',
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
      data-open={open || undefined}
      {...otherProps}
    >
      {renderSlot(resolvedBefore, 'before')}
      <SegmentedTime
        flex="1"
        minW="0"
        id={id}
        label={label}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        hourCycle={hourCycle}
        minuteStep={minuteStep}
        size={size}
        disabled={disabled}
        onFocusWithin={onFocusWithin}
        onBlurWithin={onBlurWithin}
      />
      {renderSlot(resolvedAfter, 'after')}
    </Box>
  );
};
