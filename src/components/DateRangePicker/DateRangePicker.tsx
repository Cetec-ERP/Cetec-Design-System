import type { DatePickerVariantProps } from '@styled-system/recipes';

import { Box } from '~/components/Box';
import { Text } from '~/components/Text';

import { DatePicker, type DateValue } from '../DatePicker/DatePicker';

/** Props for {@link DateRangePicker}, a coordinated pair of {@link DatePicker} controls. */
export type DateRangePickerProps = {
  /** Controlled start date. Use `null` to clear it. */
  startValue?: DateValue | null;
  /** Controlled end date. Use `null` to clear it. */
  endValue?: DateValue | null;
  /** Runs when the start picker produces a complete date or clears all of its segments. */
  onStartChange?: (value: DateValue | null) => void;
  /** Runs when the end picker produces a complete date or clears all of its segments. */
  onEndChange?: (value: DateValue | null) => void;
  /** Earliest calendar-selectable date for both endpoints, unless the selected start date is later for the end picker. */
  minDate?: DateValue;
  /** Latest calendar-selectable date for both endpoints, unless the selected end date is earlier for the start picker. */
  maxDate?: DateValue;
  /** Prevents interaction with both pickers. */
  /** @default false */
  disabled?: boolean;
  /** Applies error styling to both pickers. */
  /** @default false */
  error?: boolean;
  /** Visual size passed to both date pickers. */
  size?: DatePickerVariantProps['size'];
  /** Prefix used to create the accessible names `Start ${label}` and `End ${label}`. */
  /** @default 'Date' */
  label?: string;
};

/**
 * Renders start and end date pickers with calendar constraints that prevent a
 * selected start date from following the end date, and vice versa.
 *
 * This component is controlled by its endpoint values and callbacks; it does
 * not expose uncontrolled defaults. Its labels are generated from `label`, so
 * use a meaningful prefix for the range.
 *
 * @example
 * ```tsx
 * <DateRangePicker
 *   label="Travel date"
 *   startValue={startDate}
 *   endValue={endDate}
 *   onStartChange={setStartDate}
 *   onEndChange={setEndDate}
 * />
 * ```
 */
export const DateRangePicker = (props: DateRangePickerProps) => {
  const {
    startValue,
    endValue,
    onStartChange,
    onEndChange,
    minDate,
    maxDate,
    disabled = false,
    error = false,
    size,
    label = 'Date',
  } = props;
  return (
    <Box display="flex" alignItems="center" gap="8">
      <DatePicker
        value={startValue}
        onChange={onStartChange}
        // Start can't be after end
        minDate={minDate}
        maxDate={endValue ?? maxDate}
        label={`Start ${label}`}
        disabled={disabled}
        error={error}
        size={size}
      />
      <Text color={disabled ? 'text.disabled' : 'text.subtlest'}>&ndash;</Text>
      <DatePicker
        value={endValue}
        onChange={onEndChange}
        // End can't be before start
        minDate={startValue ?? minDate}
        maxDate={maxDate}
        label={`End ${label}`}
        disabled={disabled}
        error={error}
        size={size}
      />
    </Box>
  );
};
