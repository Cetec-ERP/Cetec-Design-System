import { useState } from 'react';

import { Box } from '~/components/Box';
import { Calendar } from '~/components/Calendar';
import { Menu, type MenuProps } from '~/components/Menu';
import { splitProps } from '~/utils/splitProps';

import type { DateValue } from '../helpers/types';

type ViewDate = { year: number; month: number };

export type DateMenuProps = Omit<
  MenuProps,
  'children' | 'onChange' | 'value'
> & {
  value?: DateValue | null;
  /** Commits immediately on day selection, then closes the menu */
  onChange?: (value: DateValue | null) => void;
  minDate?: DateValue;
  maxDate?: DateValue;
  viewDate?: ViewDate;
  defaultViewDate?: ViewDate;
  onViewDateChange?: (viewDate: ViewDate) => void;
  disabled?: boolean;
  label?: string;
};

export const DateMenu = (props: DateMenuProps) => {
  const {
    trigger,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    placement = 'bottom-start',
    value,
    onChange,
    minDate,
    maxDate,
    viewDate,
    defaultViewDate,
    onViewDateChange,
    disabled = false,
    label,
    ...rest
  } = props;
  const isInline = rest.inline === true;
  const [className, otherProps] = splitProps(rest);

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpenControlled = controlledOpen !== undefined;
  const isOpen = isOpenControlled ? controlledOpen : internalOpen;
  const menuOpen = isInline ? true : isOpen;

  const setOpenState = (nextOpen: boolean) => {
    if (!isOpenControlled) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  if (disabled) {
    return trigger;
  }

  return (
    <Menu
      className={className}
      {...otherProps}
      trigger={trigger}
      open={menuOpen}
      onOpenChange={setOpenState}
      placement={placement}
      closeOnSelect={false}
    >
      <Box>
        <Calendar
          value={value}
          onChange={(date) => {
            onChange?.(date);
            setOpenState(false);
          }}
          minDate={minDate}
          maxDate={maxDate}
          viewDate={viewDate}
          defaultViewDate={defaultViewDate}
          onViewDateChange={onViewDateChange}
          disabled={disabled}
          label={label}
        />
      </Box>
    </Menu>
  );
};
