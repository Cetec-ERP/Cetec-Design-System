import { useEffect, useRef, useState } from 'react';

import { Box } from '~/components/Box';

import { DateTimePicker } from './DateTimePicker';

import type {
  DateTimeRangeValue,
  DateTimeValue,
  DateValue,
} from '../helpers/types';
import type { DateTimeInputProps } from '../inputs/DateTimeInput';
import type { Placement } from '@floating-ui/react';

// Per the recommended file shape there is no unified DateTimeRangeInput —
// this composes two independent DateTimePicker instances + a separator,
// matching the Figma wrapping-behavior frame (296-6020): full width shows
// both fields side by side with a dash between them; below that they stack
// vertically with no separator; each field's own minW (216px, from
// dateTimeInputs.ts) is what makes the narrowest stacked state work.
const WRAP_BREAKPOINT = 458;

export type DateTimeRangePickerProps = Pick<
  DateTimeInputProps,
  | 'before'
  | 'after'
  | 'iconBefore'
  | 'iconAfter'
  | 'error'
  | 'disabled'
  | 'invalid'
  | 'dateFormat'
  | 'timeFormat'
  | 'size'
> & {
  value?: DateTimeRangeValue | null;
  defaultValue?: DateTimeRangeValue | null;
  onChange?: (value: DateTimeRangeValue | null) => void;
  minuteStep?: number;
  minDate?: DateValue;
  maxDate?: DateValue;
  startDateLabel?: string;
  startTimeLabel?: string;
  endDateLabel?: string;
  endTimeLabel?: string;
  placement?: Placement;
};

const EMPTY_RANGE: DateTimeRangeValue = { start: null, end: null };

export const DateTimeRangePicker = (props: DateTimeRangePickerProps) => {
  const {
    before,
    after,
    iconBefore,
    iconAfter,
    error,
    disabled,
    invalid,
    dateFormat,
    size,
    value,
    defaultValue,
    onChange,
    timeFormat,
    minuteStep,
    minDate,
    maxDate,
    startDateLabel = 'Start date',
    startTimeLabel = 'Start time',
    endDateLabel = 'End date',
    endTimeLabel = 'End time',
    placement,
  } = props;

  const [internalValue, setInternalValue] = useState<DateTimeRangeValue | null>(
    value !== undefined ? value : (defaultValue ?? null),
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const currentValue =
    value !== undefined
      ? (value ?? EMPTY_RANGE)
      : (internalValue ?? EMPTY_RANGE);

  const emitChange = (
    nextStart: DateTimeValue | null,
    nextEnd: DateTimeValue | null,
  ) => {
    const next =
      nextStart === null && nextEnd === null
        ? null
        : { start: nextStart, end: nextEnd };
    setInternalValue(next);
    onChange?.(next);
  };

  // Measures the container so the separator can be hidden below the full
  // side-by-side width rather than leaving a dangling dash on its own
  // wrapped row — the 458px breakpoint itself is inferred from Figma, not
  // explicitly confirmed (see Cetec-DateTime-Picker-Refactor.md).
  const containerRef = useRef<HTMLDivElement>(null);
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        setIsStacked(entry.contentRect.width < WRAP_BREAKPOINT);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      display="flex"
      flexDirection={isStacked ? 'column' : 'row'}
      alignItems={isStacked ? 'stretch' : 'center'}
      gap="8"
      width="full"
    >
      <Box flex="1" minW="216">
        <DateTimePicker
          dateLabel={startDateLabel}
          timeLabel={startTimeLabel}
          before={before}
          after={after}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          error={error}
          disabled={disabled}
          invalid={invalid}
          size={size}
          dateFormat={dateFormat}
          timeFormat={timeFormat}
          minuteStep={minuteStep}
          minDate={minDate}
          maxDate={maxDate}
          value={currentValue.start}
          onChange={(next) => emitChange(next, currentValue.end)}
          placement={placement}
        />
      </Box>
      {!isStacked && (
        <Box as="span" aria-hidden="true" color="text.placeholder" flex="none">
          –
        </Box>
      )}
      <Box flex="1" minW="216">
        <DateTimePicker
          dateLabel={endDateLabel}
          timeLabel={endTimeLabel}
          before={before}
          after={after}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          error={error}
          disabled={disabled}
          invalid={invalid}
          size={size}
          dateFormat={dateFormat}
          timeFormat={timeFormat}
          minuteStep={minuteStep}
          minDate={minDate}
          maxDate={maxDate}
          value={currentValue.end}
          onChange={(next) => emitChange(currentValue.start, next)}
          placement={placement}
        />
      </Box>
    </Box>
  );
};
