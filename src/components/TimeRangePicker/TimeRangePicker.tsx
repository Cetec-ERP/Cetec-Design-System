import type { TimePickerVariantProps } from '@styled-system/recipes';

import { Box } from '~/components/Box';

import { TimePicker, type HourCycle, type TimeValue } from '../TimePicker';

/** Props for {@link TimeRangePicker}, a pair of coordinated {@link TimePicker} controls. */
export type TimeRangePickerProps = {
  /** Controlled start time, using a 24-hour `hour`; use `null` to clear. */
  startValue?: TimeValue | null;
  /** Controlled end time, using a 24-hour `hour`; use `null` to clear. */
  endValue?: TimeValue | null;
  /** Runs when the start picker produces a complete time. */
  onStartChange?: (value: TimeValue | null) => void;
  /** Runs when the end picker produces a complete time. */
  onEndChange?: (value: TimeValue | null) => void;
  /** Display cycle passed to both time pickers; emitted values remain 24-hour. */
  /** @default '12' */
  hourCycle?: HourCycle;
  /** Minute increment passed to both time pickers. */
  /** @default 1 */
  minuteStep?: number;
  /** Prevents interaction with both pickers. */
  /** @default false */
  disabled?: boolean;
  /** Applies error styling to both pickers. */
  /** @default false */
  error?: boolean;
  /** Visual size passed to both time pickers. */
  size?: TimePickerVariantProps['size'];
  /** Prefix used to create the accessible names `Start ${label}` and `End ${label}`. */
  /** @default 'Time' */
  label?: string;
};

/**
 * Renders start and end time pickers using one display cycle and minute step.
 *
 * It is controlled through its endpoint values and callbacks; it does not
 * enforce chronological ordering between start and end times. Both generated
 * labels need a meaningful `label` prefix.
 *
 * @example
 * ```tsx
 * <TimeRangePicker
 *   label="Shift time"
 *   startValue={startTime}
 *   endValue={endTime}
 *   onStartChange={setStartTime}
 *   onEndChange={setEndTime}
 *   minuteStep={15}
 * />
 * ```
 */
export const TimeRangePicker = ({
  startValue,
  endValue,
  onStartChange,
  onEndChange,
  hourCycle = '12',
  minuteStep = 1,
  disabled = false,
  error = false,
  size,
  label = 'Time',
}: TimeRangePickerProps) => {
  return (
    <Box display="flex" alignItems="center" gap="8">
      <TimePicker
        value={startValue}
        onChange={onStartChange}
        hourCycle={hourCycle}
        minuteStep={minuteStep}
        label={`Start ${label}`}
        disabled={disabled}
        error={error}
        size={size}
      />
      <TimePicker
        value={endValue}
        onChange={onEndChange}
        hourCycle={hourCycle}
        minuteStep={minuteStep}
        label={`End ${label}`}
        disabled={disabled}
        error={error}
        size={size}
      />
    </Box>
  );
};
