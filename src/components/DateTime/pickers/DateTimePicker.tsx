import { useControllableState } from '~/utils/useControllableState';

import {
  DateTimeInput,
  type DateTimeInputProps,
} from '../inputs/DateTimeInput';
import { DateTimeMenu } from '../menus/DateTimeMenu';

import type { DateTimeValue, DateValue } from '../helpers/types';
import type { Placement } from '@floating-ui/react';

type ViewDate = { year: number; month: number };

export type DateTimePickerProps = Pick<
  DateTimeInputProps,
  | 'id'
  | 'dateLabel'
  | 'timeLabel'
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
  value?: DateTimeValue | null;
  defaultValue?: DateTimeValue | null;
  onChange?: (value: DateTimeValue | null) => void;
  minuteStep?: number;
  minDate?: DateValue;
  maxDate?: DateValue;
  viewDate?: ViewDate;
  defaultViewDate?: ViewDate;
  onViewDateChange?: (viewDate: ViewDate) => void;
  placement?: Placement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const EMPTY_VALUE: DateTimeValue = { date: null, time: null };

export const DateTimePicker = (props: DateTimePickerProps) => {
  const {
    id,
    dateLabel,
    timeLabel,
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
    viewDate,
    defaultViewDate,
    onViewDateChange,
    placement,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
  } = props;

  const [isOpen, setOpenState] = useControllableState({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const openMenu = () => {
    if (!isOpen) {
      setOpenState(true);
    }
  };

  // DateTimeInput commits immediately per typed segment; DateTimeMenu only
  // commits (via its own Cancel/Apply draft) when Apply is pressed. Both
  // write to the same place.
  const [currentValue, emitChange] = useControllableState<DateTimeValue | null>(
    {
      value,
      defaultValue: defaultValue ?? null,
      onChange,
    },
  );
  const resolvedValue = currentValue ?? EMPTY_VALUE;

  return (
    <DateTimeMenu
      trigger={
        <DateTimeInput
          id={id}
          value={resolvedValue}
          onChange={emitChange}
          dateLabel={dateLabel}
          timeLabel={timeLabel}
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
          open={isOpen}
          onFocusWithin={openMenu}
        />
      }
      open={isOpen}
      onOpenChange={setOpenState}
      triggerInteraction="focus"
      placement={placement}
      value={resolvedValue}
      onChange={emitChange}
      minDate={minDate}
      maxDate={maxDate}
      viewDate={viewDate}
      defaultViewDate={defaultViewDate}
      onViewDateChange={onViewDateChange}
      timeFormat={timeFormat}
      minuteStep={minuteStep}
      disabled={disabled}
      dateLabel={dateLabel}
    />
  );
};
