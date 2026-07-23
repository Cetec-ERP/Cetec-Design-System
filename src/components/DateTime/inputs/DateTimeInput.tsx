import {
  type ReactNode,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { cx } from '@styled-system/css';
import {
  dateTimeInputs,
  type DateTimeInputsVariantProps,
  segmentedInputs,
} from '@styled-system/recipes';

import { Button } from '~/components/Button';
import { Icon, type IconNamesList } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { useFieldContext } from '~/system/context/FieldContext';
import { SlotContext, type SlotPlacement } from '~/system/context/SlotContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../../Box';
import { SegmentedDate, SegmentedTime } from '../../SegmentedInputs';

import type {
  DateFormat,
  DateTimeValue,
  DateValue,
  TimeFormat,
  TimeValue,
} from '../helpers/types';

export type DateTimeInputProps = Omit<
  BoxProps,
  keyof DateTimeInputsVariantProps | 'children'
> &
  Omit<DateTimeInputsVariantProps, 'before' | 'after'> & {
    id?: string;
    value?: DateTimeValue | null;
    defaultValue?: DateTimeValue | null;
    onChange?: (value: DateTimeValue | null) => void;
    dateFormat?: DateFormat;
    timeFormat?: TimeFormat;
    minuteStep?: number;
    dateLabel?: string;
    timeLabel?: string;
    before?: ReactNode;
    after?: ReactNode;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    error?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    /** Reflected through to the segmented fields — lets a wrapping Menu/Picker show "active anchor" styling */
    open?: boolean;
    /** Forwarded to both segmented fields — see SegmentedDate/SegmentedTime's onFocusWithin */
    onFocusWithin?: () => void;
    /** Forwarded to both segmented fields — see SegmentedDate/SegmentedTime's onBlurWithin */
    onBlurWithin?: (relatedTarget: Node | null) => void;
  };

export const DateTimeInput = (props: DateTimeInputProps) => {
  const fieldContext = useFieldContext();
  const {
    id,
    value,
    defaultValue,
    onChange,
    dateFormat,
    timeFormat,
    minuteStep,
    dateLabel = 'Date',
    timeLabel = 'Time',
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

  const classes = dateTimeInputs({
    size,
    before: Boolean(resolvedBefore),
    after: Boolean(resolvedAfter),
  });
  const segmentClasses = segmentedInputs({ size });
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
          owner: 'DateTimeInput',
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

  // Composed date+time is tracked internally so an uncontrolled DateTimeInput
  // doesn't lose whichever half (date/time) was filled in first — SegmentedDate
  // and SegmentedTime each only report their own half back via onChange.
  const [internalDate, setInternalDate] = useState<DateValue | null>(
    value !== undefined ? (value?.date ?? null) : (defaultValue?.date ?? null),
  );
  const [internalTime, setInternalTime] = useState<TimeValue | null>(
    value !== undefined ? (value?.time ?? null) : (defaultValue?.time ?? null),
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalDate(value?.date ?? null);
      setInternalTime(value?.time ?? null);
    }
  }, [value]);

  const dateValue = value !== undefined ? (value?.date ?? null) : internalDate;
  const timeValue = value !== undefined ? (value?.time ?? null) : internalTime;

  // Lets clicking the separator between the date and time halves focus into
  // the time field, matching the click-anywhere-focuses-a-segment behavior
  // of the segments themselves.
  const timeFieldRef = useRef<HTMLDivElement>(null);
  const focusTimeField = () => {
    timeFieldRef.current
      ?.querySelector<HTMLElement>('[role="spinbutton"]')
      ?.focus();
  };

  const emitChange = (
    nextDate: DateValue | null,
    nextTime: TimeValue | null,
  ) => {
    setInternalDate(nextDate);
    setInternalTime(nextTime);
    if (nextDate === null && nextTime === null) {
      onChange?.(null);
      return;
    }
    onChange?.({ date: nextDate, time: nextTime });
  };

  return (
    <Box
      id={id}
      className={cx(classes.container, className)}
      aria-disabled={disabled}
      data-disabled={disabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      data-open={open || undefined}
      {...otherProps}
    >
      {renderSlot(resolvedBefore, 'before')}
      <SegmentedDate
        label={dateLabel}
        value={dateValue}
        onChange={(nextDate) => emitChange(nextDate, timeValue)}
        format={dateFormat}
        size={size}
        disabled={disabled}
        onFocusWithin={onFocusWithin}
        onBlurWithin={onBlurWithin}
      />
      <Box
        as="span"
        className={segmentClasses.separator}
        aria-hidden="true"
        onClick={focusTimeField}
      >
        {' '}
      </Box>
      <SegmentedTime
        ref={timeFieldRef}
        label={timeLabel}
        value={timeValue}
        onChange={(nextTime) => emitChange(dateValue, nextTime)}
        timeFormat={timeFormat}
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
