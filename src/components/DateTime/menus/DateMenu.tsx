import { useState, type Ref } from 'react';

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
  /**
   * Ref to the popover's content wrapper — lets a wrapping Picker tell
   * whether a blur's newly-focused element landed inside the popover (e.g. a
   * Calendar day button) so it doesn't close the menu focus just moved into.
   */
  contentRef?: Ref<HTMLDivElement>;
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
    contentRef,
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
      // Opts into Menu's order={['reference', 'content']} focus management
      // (see Menu's own doc comment on this prop) so opening the popover
      // doesn't yank focus off the segment the user just clicked/typed into
      // and onto the Calendar's first button.
      onMenubarEdgeNavigate={() => {}}
    >
      <Box ref={contentRef}>
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
