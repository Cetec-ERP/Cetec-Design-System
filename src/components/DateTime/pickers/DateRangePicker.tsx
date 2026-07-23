import { useEffect, useState } from 'react';

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

  // The picker owns the committed range — DateRangeInput commits immediately
  // per typed endpoint, DateRangeMenu only commits (via its own Cancel/Apply
  // draft) when Apply is pressed. Both write to the same place.
  const [internalValue, setInternalValue] = useState<DateRangeValue | null>(
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

  const emitChange = (next: DateRangeValue | null) => {
    setInternalValue(next);
    onChange?.(next);
  };

  return (
    <DateRangeMenu
      trigger={
        <DateRangeInput
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
      value={currentValue}
      onChange={emitChange}
      minDate={minDate}
      maxDate={maxDate}
      disabled={disabled}
      startLabel={startLabel}
      endLabel={endLabel}
    />
  );
};
