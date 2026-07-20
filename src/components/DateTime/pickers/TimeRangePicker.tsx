import { useEffect, useState } from 'react';

import {
  TimeRangeInput,
  type TimeRangeInputProps,
} from '../inputs/TimeRangeInput';
import { TimeRangeMenu } from '../menus/TimeRangeMenu';

import type { TimeRangeValue } from '../helpers/types';
import type { Placement } from '@floating-ui/react';

export type TimeRangePickerProps = Pick<
  TimeRangeInputProps,
  | 'id'
  | 'startLabel'
  | 'endLabel'
  | 'before'
  | 'after'
  | 'iconBefore'
  | 'iconAfter'
  | 'error'
  | 'disabled'
  | 'invalid'
  | 'timeFormat'
  | 'size'
> & {
  value?: TimeRangeValue | null;
  defaultValue?: TimeRangeValue | null;
  onChange?: (value: TimeRangeValue | null) => void;
  minuteStep?: number;
  placement?: Placement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const EMPTY_RANGE: TimeRangeValue = { start: null, end: null };

export const TimeRangePicker = (props: TimeRangePickerProps) => {
  const {
    id,
    startLabel,
    endLabel,
    before,
    after,
    iconBefore,
    iconAfter,
    error,
    disabled,
    invalid,
    size,
    value,
    defaultValue,
    onChange,
    timeFormat,
    minuteStep,
    placement,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
  } = props;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpenControlled = controlledOpen !== undefined;
  const isOpen = isOpenControlled ? controlledOpen : uncontrolledOpen;

  const setOpenState = (nextOpen: boolean) => {
    if (!isOpenControlled) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  const openMenu = () => {
    if (!isOpen) {
      setOpenState(true);
    }
  };

  const [internalValue, setInternalValue] = useState<TimeRangeValue | null>(
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

  const emitChange = (next: TimeRangeValue | null) => {
    setInternalValue(next);
    onChange?.(next);
  };

  return (
    <TimeRangeMenu
      trigger={
        <TimeRangeInput
          id={id}
          value={currentValue}
          onChange={emitChange}
          startLabel={startLabel}
          endLabel={endLabel}
          before={before}
          after={after}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          error={error}
          disabled={disabled}
          invalid={invalid}
          size={size}
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
      value={currentValue}
      onChange={emitChange}
      timeFormat={timeFormat}
      minuteStep={minuteStep}
      disabled={disabled}
      startLabel={startLabel}
      endLabel={endLabel}
    />
  );
};
