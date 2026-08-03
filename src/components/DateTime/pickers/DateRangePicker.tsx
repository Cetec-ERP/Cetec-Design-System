import { useControllableState } from '~/utils/useControllableState';

import {
  DateRangeInput,
  type DateRangeInputProps,
} from '../inputs/DateRangeInput';
import { DateRangeMenu } from '../menus/DateRangeMenu';

import type { DateRangeValue, DateValue } from '../helpers/types';
import type { Placement } from '@floating-ui/react';

export type DateRangePickerProps = Pick<
  DateRangeInputProps,
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
  | 'dateFormat'
  | 'size'
> & {
  value?: DateRangeValue | null;
  defaultValue?: DateRangeValue | null;
  onChange?: (value: DateRangeValue | null) => void;
  minDate?: DateValue;
  maxDate?: DateValue;
  placement?: Placement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const EMPTY_RANGE: DateRangeValue = { start: null, end: null };

export const DateRangePicker = (props: DateRangePickerProps) => {
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
    dateFormat,
    size,
    value,
    defaultValue,
    onChange,
    minDate,
    maxDate,
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

  // The picker owns the committed range — DateRangeInput commits immediately
  // per typed endpoint, DateRangeMenu only commits (via its own Cancel/Apply
  // draft) when Apply is pressed. Both write to the same place.
  const [currentValue, emitChange] =
    useControllableState<DateRangeValue | null>({
      value,
      defaultValue: defaultValue ?? null,
      onChange,
    });
  const resolvedValue = currentValue ?? EMPTY_RANGE;

  return (
    <DateRangeMenu
      trigger={
        <DateRangeInput
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
          dateFormat={dateFormat}
          size={size}
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
      disabled={disabled}
      startLabel={startLabel}
      endLabel={endLabel}
    />
  );
};
