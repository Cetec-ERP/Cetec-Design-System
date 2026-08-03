import { type ReactNode, useEffect, useRef, useState } from 'react';

import { cx } from '@styled-system/css';
import {
  segmentedFields,
  segmentedInputs,
  type SegmentedFieldsVariantProps,
} from '@styled-system/recipes';

import { Icon, type IconNamesList } from '~/components/Icon';
import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../../Box';
import { SegmentedTime } from '../../SegmentedInputs/SegmentedTime';

import { InputSlot } from './InputSlot';

import type { TimeFormat, TimeRangeValue, TimeValue } from '../helpers/types';

export type TimeRangeInputProps = Omit<
  BoxProps,
  keyof SegmentedFieldsVariantProps | 'children'
> &
  Omit<SegmentedFieldsVariantProps, 'field' | 'range' | 'before' | 'after'> & {
    id?: string;
    value?: TimeRangeValue | null;
    defaultValue?: TimeRangeValue | null;
    onChange?: (value: TimeRangeValue | null) => void;
    timeFormat?: TimeFormat;
    minuteStep?: number;
    startLabel?: string;
    endLabel?: string;
    before?: ReactNode;
    after?: ReactNode;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    error?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    /** Reflected through to the segmented fields — lets a wrapping Menu/Picker show "active anchor" styling */
    open?: boolean;
    /** Forwarded to both segmented fields — see SegmentedTime's onFocusWithin */
    onFocusWithin?: () => void;
    /** Forwarded to both segmented fields — see SegmentedTime's onBlurWithin */
    onBlurWithin?: (relatedTarget: Node | null) => void;
  };

const EMPTY_RANGE: TimeRangeValue = { start: null, end: null };

export const TimeRangeInput = (props: TimeRangeInputProps) => {
  const fieldContext = useFieldContext();
  const {
    id,
    value,
    defaultValue,
    onChange,
    timeFormat,
    minuteStep,
    startLabel = 'Start time',
    endLabel = 'End time',
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

  const classes = segmentedFields({
    size,
    field: 'time',
    range: 'time',
    before: Boolean(resolvedBefore),
    after: Boolean(resolvedAfter),
  });
  const segmentClasses = segmentedInputs({ size });
  const [className, otherProps] = splitProps(rest);

  // Composed range is tracked internally so an uncontrolled TimeRangeInput
  // doesn't lose whichever endpoint was filled in first — each SegmentedTime
  // only reports its own endpoint back via onChange.
  const [internalRange, setInternalRange] = useState<TimeRangeValue>(
    value !== undefined
      ? (value ?? EMPTY_RANGE)
      : (defaultValue ?? EMPTY_RANGE),
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalRange(value ?? EMPTY_RANGE);
    }
  }, [value]);

  const range = value !== undefined ? (value ?? EMPTY_RANGE) : internalRange;

  // Lets clicking the "–" separator focus into the end field, matching the
  // click-anywhere-focuses-a-segment behavior of the segments themselves.
  const endFieldRef = useRef<HTMLDivElement>(null);
  const focusEndField = () => {
    endFieldRef.current
      ?.querySelector<HTMLElement>('[role="spinbutton"]')
      ?.focus();
  };

  const emitChange = (
    nextStart: TimeValue | null,
    nextEnd: TimeValue | null,
  ) => {
    const next: TimeRangeValue = { start: nextStart, end: nextEnd };
    setInternalRange(next);
    onChange?.(nextStart === null && nextEnd === null ? null : next);
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
      <InputSlot
        owner="TimeRangeInput"
        placement="before"
        slot={resolvedBefore}
        size={size}
        disabled={disabled}
        error={error}
        invalid={invalid}
        buttonSlotClassName={classes.buttonSlot}
        slotClassName={classes.slot}
      />
      <SegmentedTime
        label={startLabel}
        value={range.start}
        onChange={(nextStart) => emitChange(nextStart, range.end)}
        timeFormat={timeFormat}
        minuteStep={minuteStep}
        size={size}
        disabled={disabled}
        onFocusWithin={onFocusWithin}
        onBlurWithin={onBlurWithin}
      />
      <Box
        as="span"
        className={segmentClasses.separator}
        data-gap="loose"
        aria-hidden="true"
        onClick={focusEndField}
      >
        –
      </Box>
      <SegmentedTime
        ref={endFieldRef}
        label={endLabel}
        value={range.end}
        onChange={(nextEnd) => emitChange(range.start, nextEnd)}
        timeFormat={timeFormat}
        minuteStep={minuteStep}
        size={size}
        disabled={disabled}
        onFocusWithin={onFocusWithin}
        onBlurWithin={onBlurWithin}
      />
      <InputSlot
        owner="TimeRangeInput"
        placement="after"
        slot={resolvedAfter}
        size={size}
        disabled={disabled}
        error={error}
        invalid={invalid}
        buttonSlotClassName={classes.buttonSlot}
        slotClassName={classes.slot}
      />
    </Box>
  );
};
