import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactElement,
  type Ref,
  type RefObject,
} from 'react';

import { timeMenus } from '@styled-system/recipes';

import { Box } from '~/components/Box';
import { List, ListItem } from '~/components/List';
import { Menu } from '~/components/Menu';

import { to12Hour, to24Hour } from '../helpers/dateTimeUtils';

import type { HourCycle, Meridiem, TimeValue } from '../helpers/types';
import type { Placement } from '@floating-ui/react';

export type TimeMenuProps = {
  /** The element that opens the menu */
  trigger?: ReactElement<HTMLAttributes<HTMLElement>>;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
  inline?: boolean;
  value?: TimeValue | null;
  onChange?: (value: TimeValue | null) => void;
  hourCycle?: HourCycle;
  minuteStep?: number;
  disabled?: boolean;
  /**
   * Ref to the popover's content wrapper — lets a wrapping Picker tell
   * whether a blur's newly-focused element landed inside the popover so it
   * doesn't close the menu focus just moved into.
   */
  contentRef?: Ref<HTMLDivElement>;
};

const range = (count: number, step = 1, offset = 0) =>
  Array.from({ length: count }, (_, i) => offset + i * step);

// Scrolls the currently-selected item in a column into view, centered below
// the sticky header, the moment the menu opens — matches the legacy
// TimePicker's TimeList behavior so long lists don't always open at the top.
const scrollSelectedIntoView = (colRef: RefObject<HTMLDivElement | null>) => {
  const col = colRef.current;
  const el = col?.querySelector('[aria-selected="true"]') as HTMLElement | null;
  if (!col || !el) return;

  const header = col.querySelector(
    '[data-column-header]',
  ) as HTMLElement | null;
  const headerHeight = header?.offsetHeight ?? 0;
  const viewportHeight = Math.max(col.clientHeight - headerHeight, 0);

  const colRect = col.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const elRelativeTop = elRect.top - colRect.top + col.scrollTop;

  const targetScrollTop =
    elRelativeTop - headerHeight - viewportHeight / 2 + el.clientHeight / 2;
  const maxScrollTop = col.scrollHeight - col.clientHeight;
  col.scrollTop = Math.min(Math.max(targetScrollTop, 0), maxScrollTop);
};

export const TimeMenu = (props: TimeMenuProps) => {
  const {
    trigger,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    placement = 'bottom-start',
    inline = false,
    value,
    onChange,
    hourCycle = '12',
    minuteStep = 1,
    disabled = false,
    contentRef,
  } = props;

  // Tracked locally (even though TimeMenu itself never needs to force-close,
  // unlike the range/DateTime menus) so the scroll-into-view effect below can
  // detect "just opened" in the uncontrolled case too, where Menu manages its
  // own internal open state that isn't otherwise visible to this component.
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpenControlled = controlledOpen !== undefined;
  const isOpen = isOpenControlled ? controlledOpen : internalOpen;
  const menuOpen = inline ? true : isOpen;

  const setOpenState = (nextOpen: boolean) => {
    if (!isOpenControlled) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  const classes = timeMenus();

  const displayHour =
    value && hourCycle === '12'
      ? to12Hour(value.hour).hour12
      : (value?.hour ?? null);
  const displayMeridiem =
    value && hourCycle === '12' ? to12Hour(value.hour).meridiem : null;
  const displayMinute = value?.minute ?? null;

  // Commits immediately with sensible fallback defaults for whatever hasn't
  // been picked yet (hour → 12/0, minute → current or 0, meridiem → current
  // or AM) — matches the legacy TimePicker's TimeList selection handlers, so
  // a single click always produces a valid time instead of requiring all
  // three pieces to be set first.
  const emitHour = (hour: number) => {
    const hour24 =
      hourCycle === '12' ? to24Hour(hour, displayMeridiem ?? 'AM') : hour;
    onChange?.({ hour: hour24, minute: displayMinute ?? 0 });
  };

  const emitMinute = (minute: number) => {
    const hour24 =
      hourCycle === '12'
        ? to24Hour(displayHour ?? 12, displayMeridiem ?? 'AM')
        : (displayHour ?? 0);
    onChange?.({ hour: hour24, minute });
  };

  const emitMeridiem = (meridiem: Meridiem) => {
    const hour24 = to24Hour(displayHour ?? 12, meridiem);
    onChange?.({ hour: hour24, minute: displayMinute ?? 0 });
  };

  const hourValues = hourCycle === '12' ? range(12, 1, 1) : range(24, 1, 0);
  const minuteValues = range(Math.ceil(60 / minuteStep), minuteStep, 0);

  const hourColRef = useRef<HTMLDivElement>(null);
  const minuteColRef = useRef<HTMLDivElement>(null);
  const meridiemColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    // Deferred a frame — FloatingFocusManager's initial focus (default
    // initialFocus=0, landing on the first column item) triggers the
    // browser's native scroll-into-view for the newly-focused element,
    // which lands *after* this effect and clobbers a synchronous scroll
    // here back to showing item 1. Running one frame later wins that race.
    const raf = requestAnimationFrame(() => {
      scrollSelectedIntoView(hourColRef);
      scrollSelectedIntoView(minuteColRef);
      if (hourCycle === '12') scrollSelectedIntoView(meridiemColRef);
    });
    return () => cancelAnimationFrame(raf);
  }, [menuOpen, hourCycle]);

  if (disabled) {
    return trigger;
  }

  return (
    <Menu
      trigger={trigger}
      open={menuOpen}
      onOpenChange={setOpenState}
      placement={placement}
      inline={inline}
      closeOnSelect={false}
      // Opts into Menu's order={['reference', 'content']} focus management
      // (see Menu's own doc comment on this prop) so opening the popover
      // doesn't yank focus off the segment the user just clicked/typed into
      // and onto the first HR list item.
      onMenubarEdgeNavigate={() => {}}
    >
      <Box ref={contentRef} className={classes.columns}>
        <Box
          ref={hourColRef}
          className={classes.column}
          role="listbox"
          aria-label="Hour"
        >
          <Box data-column-header className={classes.columnHeader}>
            HR
          </Box>
          <List>
            {hourValues.map((hour) => (
              <ListItem
                key={hour}
                selected={displayHour === hour}
                label={String(hour).padStart(2, '0')}
                justifyContent="center"
                onClick={() => emitHour(hour)}
              />
            ))}
          </List>
        </Box>
        <Box
          ref={minuteColRef}
          className={classes.column}
          role="listbox"
          aria-label="Minute"
        >
          <Box data-column-header className={classes.columnHeader}>
            MIN
          </Box>
          <List>
            {minuteValues.map((minute) => (
              <ListItem
                key={minute}
                selected={displayMinute === minute}
                label={String(minute).padStart(2, '0')}
                justifyContent="center"
                onClick={() => emitMinute(minute)}
              />
            ))}
          </List>
        </Box>
        {hourCycle === '12' && (
          <Box
            ref={meridiemColRef}
            className={classes.column}
            role="listbox"
            aria-label="AM or PM"
          >
            <Box data-column-header className={classes.columnHeader}>
              AM/PM
            </Box>
            <List>
              {(['AM', 'PM'] as Meridiem[]).map((meridiem) => (
                <ListItem
                  key={meridiem}
                  selected={displayMeridiem === meridiem}
                  label={meridiem}
                  justifyContent="center"
                  onClick={() => emitMeridiem(meridiem)}
                />
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Menu>
  );
};
