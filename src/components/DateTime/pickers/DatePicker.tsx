import { useControllableState } from '~/utils/useControllableState';

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

  // The picker owns the committed value so both the typed segmented field
  // and the calendar's day-click write to the same place — DateInput commits
  // immediately per keystroke, DateMenu commits immediately on day select.
  const [currentValue, emitChange] = useControllableState<DateValue | null>({
    value,
    defaultValue: defaultValue ?? null,
    onChange,
  });

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
