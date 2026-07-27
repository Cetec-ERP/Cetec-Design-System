import { useControllableState } from '~/utils/useControllableState';

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

  const [currentValue, emitChange] =
    useControllableState<TimeRangeValue | null>({
      value,
      defaultValue: defaultValue ?? null,
      onChange,
    });
  const resolvedValue = currentValue ?? EMPTY_RANGE;

  return (
    <TimeRangeMenu
      trigger={
        <TimeRangeInput
          id={id}
          value={resolvedValue}
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
      value={resolvedValue}
      onChange={emitChange}
      timeFormat={timeFormat}
      minuteStep={minuteStep}
      disabled={disabled}
      startLabel={startLabel}
      endLabel={endLabel}
    />
  );
};
