import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactElement,
  type Ref,
  type RefObject,
} from 'react';

import { dateTimeMenus, timeMenus } from '@styled-system/recipes';

import { Box } from '~/components/Box';
import { Button } from '~/components/Button';
import { Calendar } from '~/components/Calendar';
import { Divider } from '~/components/Divider';
import { List, ListItem } from '~/components/List';
import { Menu } from '~/components/Menu';

import { to12Hour, to24Hour } from '../helpers/dateTimeUtils';

import type {
  DateTimeValue,
  DateValue,
  HourCycle,
  Meridiem,
  TimeValue,
} from '../helpers/types';
import type { Placement } from '@floating-ui/react';

type ViewDate = { year: number; month: number };

export type DateTimeMenuProps = {
  /** The element that opens the menu */
  trigger?: ReactElement<HTMLAttributes<HTMLElement>>;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
  inline?: boolean;
  value?: DateTimeValue | null;
  /** Committed only when Apply is pressed — Cancel discards the pending selection */
  onChange?: (value: DateTimeValue | null) => void;
  minDate?: DateValue;
  maxDate?: DateValue;
  viewDate?: ViewDate;
  defaultViewDate?: ViewDate;
  onViewDateChange?: (viewDate: ViewDate) => void;
  hourCycle?: HourCycle;
  minuteStep?: number;
  disabled?: boolean;
  dateLabel?: string;
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
// the sticky header — matches the legacy TimePicker's TimeList behavior.
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

export const DateTimeMenu = (props: DateTimeMenuProps) => {
  const {
    trigger,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    placement = 'bottom-start',
    inline = false,
    value,
    onChange,
    minDate,
    maxDate,
    viewDate,
    defaultViewDate,
    onViewDateChange,
    hourCycle = '12',
    minuteStep = 1,
    disabled = false,
    dateLabel,
    contentRef,
  } = props;

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

  const classes = dateTimeMenus();
  const columnClasses = timeMenus({ stretch: true });

  // Pending selection, separate from the committed `value` — only Apply
  // commits it via onChange; Cancel discards it.
  const [draftDate, setDraftDate] = useState<DateValue | null>(
    value?.date ?? null,
  );
  const [draftTime, setDraftTime] = useState<TimeValue | null>(
    value?.time ?? null,
  );

  useEffect(() => {
    if (menuOpen) {
      setDraftDate(value?.date ?? null);
      setDraftTime(value?.time ?? null);
    }
  }, [menuOpen, value]);

  const handleApply = () => {
    onChange?.(
      draftDate && draftTime ? { date: draftDate, time: draftTime } : null,
    );
    setOpenState(false);
  };

  const handleCancel = () => {
    setDraftDate(value?.date ?? null);
    setDraftTime(value?.time ?? null);
    setOpenState(false);
  };

  const displayHour =
    draftTime && hourCycle === '12'
      ? to12Hour(draftTime.hour).hour12
      : (draftTime?.hour ?? null);
  const displayMeridiem =
    draftTime && hourCycle === '12' ? to12Hour(draftTime.hour).meridiem : null;
  const displayMinute = draftTime?.minute ?? null;

  // Commits immediately with sensible fallback defaults for whatever hasn't
  // been picked yet, same as TimeMenu/TimeRangeMenu — matches the legacy
  // TimePicker's TimeList selection handlers.
  const emitHour = (hour: number) => {
    const hour24 =
      hourCycle === '12' ? to24Hour(hour, displayMeridiem ?? 'AM') : hour;
    setDraftTime({ hour: hour24, minute: displayMinute ?? 0 });
  };

  const emitMinute = (minute: number) => {
    const hour24 =
      hourCycle === '12'
        ? to24Hour(displayHour ?? 12, displayMeridiem ?? 'AM')
        : (displayHour ?? 0);
    setDraftTime({ hour: hour24, minute });
  };

  const emitMeridiem = (meridiem: Meridiem) => {
    const hour24 = to24Hour(displayHour ?? 12, meridiem);
    setDraftTime({ hour: hour24, minute: displayMinute ?? 0 });
  };

  const hourValues = hourCycle === '12' ? range(12, 1, 1) : range(24, 1, 0);
  const minuteValues = range(Math.ceil(60 / minuteStep), minuteStep, 0);

  const hourColRef = useRef<HTMLDivElement>(null);
  const minuteColRef = useRef<HTMLDivElement>(null);
  const meridiemColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    // Deferred a frame — FloatingFocusManager's initial focus (default
    // initialFocus=0) triggers the browser's native scroll-into-view for the
    // newly-focused first item, landing *after* this effect and clobbering a
    // synchronous scroll here. Running one frame later wins that race.
    const raf = requestAnimationFrame(() => {
      scrollSelectedIntoView(hourColRef);
      scrollSelectedIntoView(minuteColRef);
      if (hourCycle === '12') scrollSelectedIntoView(meridiemColRef);
    });
    return () => cancelAnimationFrame(raf);
  }, [menuOpen, hourCycle]);

  // Time columns need to match the Calendar's real rendered height, not
  // just stretch to it — a flex item's own content height still wins a
  // stretch-aligned row's auto-sizing calculation (that's the CSS flexbox
  // "hypothetical cross size" rule) regardless of min-height:0, so the
  // 60-row minute list was silently forcing the whole row (Calendar
  // included) up to its own full content height instead of the other way
  // around. Measuring the Calendar directly and applying that height
  // explicitly sidesteps the auto-sizing ambiguity entirely.
  //
  // This has to be a ref callback, not a useEffect/useLayoutEffect keyed on
  // `isOpen` — Menu's FloatingPortal mounts its content a tick after `isOpen`
  // itself flips true, so an effect keyed on `isOpen` fires before Calendar
  // actually exists in the DOM and (since `isOpen` doesn't change again)
  // never gets a chance to re-run once it does. A ref callback fires exactly
  // when the node attaches/detaches, regardless of the portal's timing.
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const timeColumnsRef = useRef<HTMLDivElement>(null);

  const setTimeColumnsHeight = useCallback((height: number) => {
    if (timeColumnsRef.current) {
      timeColumnsRef.current.style.height = `${height}px`;
    }
  }, []);

  const calendarRef = useCallback(
    (el: HTMLDivElement | null) => {
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      if (!el) {
        setTimeColumnsHeight(0);
        return;
      }
      setTimeColumnsHeight(el.getBoundingClientRect().height);
      const observer = new ResizeObserver(([entry]) => {
        if (entry) setTimeColumnsHeight(entry.contentRect.height);
      });
      observer.observe(el);
      resizeObserverRef.current = observer;
    },
    [setTimeColumnsHeight],
  );

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
      // and onto the Calendar's first button — this trigger is a composite
      // multi-segment field, not a single button, so keeping focus where the
      // user put it matters far more than it would for a typical menu.
      onMenubarEdgeNavigate={() => {}}
    >
      <Box ref={contentRef}>
        <Box className={classes.content}>
          <Calendar
            ref={calendarRef}
            label={dateLabel}
            value={draftDate}
            onChange={setDraftDate}
            minDate={minDate}
            maxDate={maxDate}
            viewDate={viewDate}
            defaultViewDate={defaultViewDate}
            onViewDateChange={onViewDateChange}
            disabled={disabled}
          />
          <Divider direction="vertical" weight="thick" aria-hidden="true" />
          <Box
            ref={timeColumnsRef}
            className={columnClasses.columns}
            // Starts pinned to 0 (rather than left auto/undefined) so the
            // very first, pre-measurement layout pass can't let the columns'
            // own oversized content dictate the row's height — see the
            // effect above for why that matters. Swaps to the real measured
            // value in the same pre-paint layout pass once known.
            h="0"
          >
            <Box
              ref={hourColRef}
              className={columnClasses.column}
              role="listbox"
              aria-label="Hour"
            >
              <Box data-column-header className={columnClasses.columnHeader}>
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
              className={columnClasses.column}
              role="listbox"
              aria-label="Minute"
            >
              <Box data-column-header className={columnClasses.columnHeader}>
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
                className={columnClasses.column}
                role="listbox"
                aria-label="AM or PM"
              >
                <Box data-column-header className={columnClasses.columnHeader}>
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
        </Box>
        <Box className={classes.footer}>
          <Button variant="standard" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={!draftDate || !draftTime}
            onClick={handleApply}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Menu>
  );
};
