import { useControllableState } from '~/utils/useControllableState';

import { TimeInput, type TimeInputProps } from '../inputs/TimeInput';
import { TimeMenu } from '../menus/TimeMenu';

import type { TimeValue } from '../helpers/types';
import type { Placement } from '@floating-ui/react';

export type TimePickerProps = Pick<
  TimeInputProps,
  | 'id'
  | 'label'
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
  value?: TimeValue | null;
  defaultValue?: TimeValue | null;
  onChange?: (value: TimeValue | null) => void;
  minuteStep?: number;
  placement?: Placement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const TimePicker = (props: TimePickerProps) => {
  const {
    id,
    label,
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

  const [currentValue, emitChange] = useControllableState<TimeValue | null>({
    value,
    defaultValue: defaultValue ?? null,
    onChange,
  });

  return (
    <TimeMenu
      trigger={
        <TimeInput
          id={id}
          value={currentValue}
          onChange={emitChange}
          label={label}
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
    />
  );
};
