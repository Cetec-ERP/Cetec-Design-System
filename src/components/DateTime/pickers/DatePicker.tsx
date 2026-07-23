import { useEffect, useState } from 'react';

import { DateInput, type DateInputProps } from '../inputs/DateInput';
import { DateMenu } from '../menus/DateMenu';

import type { DateValue } from '../helpers/types';
import type { Placement } from '@floating-ui/react';

type ViewDate = { year: number; month: number };

export type DatePickerProps = Pick<
  DateInputProps,
  | 'id'
  | 'label'
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
  value?: DateValue | null;
  defaultValue?: DateValue | null;
  onChange?: (value: DateValue | null) => void;
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

export const DatePicker = (props: DatePickerProps) => {
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
    dateFormat,
    size,
    value,
    defaultValue,
    onChange,
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

  // The picker owns the committed value so both the typed segmented field
  // and the calendar's day-click write to the same place — DateInput commits
  // immediately per keystroke, DateMenu commits immediately on day select.
  const [internalValue, setInternalValue] = useState<DateValue | null>(
    value !== undefined ? value : (defaultValue ?? null),
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const currentValue = value !== undefined ? value : internalValue;

  const emitChange = (next: DateValue | null) => {
    setInternalValue(next);
    onChange?.(next);
  };

  return (
    <DateMenu
      trigger={
        <DateInput
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
      viewDate={viewDate}
      defaultViewDate={defaultViewDate}
      onViewDateChange={onViewDateChange}
      disabled={disabled}
      label={label}
    />
  );
};
