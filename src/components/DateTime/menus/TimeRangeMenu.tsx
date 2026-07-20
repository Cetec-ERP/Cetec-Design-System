import { useEffect, useRef, useState, type RefObject } from 'react';

import { timeMenus } from '@styled-system/recipes';

import { Box } from '~/components/Box';
import { Button } from '~/components/Button';
import { Divider } from '~/components/Divider';
import { List, ListItem } from '~/components/List';
import { Menu, type MenuProps } from '~/components/Menu';
import { splitProps } from '~/utils/splitProps';

import { to12Hour, to24Hour } from '../helpers/dateTimeUtils';

import type {
  Meridiem,
  TimeFormat,
  TimeRangeValue,
  TimeValue,
} from '../helpers/types';

export type TimeRangeMenuProps = Omit<
  MenuProps,
  'children' | 'onChange' | 'value'
> & {
  value?: TimeRangeValue | null;
  /** Committed only when Apply is pressed — Cancel discards the pending selection */
  onChange?: (value: TimeRangeValue | null) => void;
  timeFormat?: TimeFormat;
  minuteStep?: number;
  disabled?: boolean;
  startLabel?: string;
  endLabel?: string;
};

const EMPTY_RANGE: TimeRangeValue = { start: null, end: null };

const range = (count: number, step = 1, offset = 0) =>
  Array.from({ length: count }, (_, i) => offset + i * step);

// Scrolls the currently-selected item in a column into view, centered below
// the sticky header.
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

// Draft time values are tracked in 24h internally (unlike TimeMenu's Draft,
// which needed a display-cycle shape) since range endpoints commit as soon
// as any piece of them is picked — see the fallback-default pattern below.
type ColumnsProps = {
  classes: ReturnType<typeof timeMenus>;
  label: string;
  timeFormat: TimeFormat;
  hourValues: number[];
  minuteValues: number[];
  value: TimeValue | null;
  onChange: (value: TimeValue) => void;
};

const TimeColumns = ({
  classes,
  label,
  timeFormat,
  hourValues,
  minuteValues,
  value,
  onChange,
}: ColumnsProps) => {
  const displayHour =
    value && timeFormat === '12'
      ? to12Hour(value.hour).hour12
      : (value?.hour ?? null);
  const displayMeridiem =
    value && timeFormat === '12' ? to12Hour(value.hour).meridiem : null;
  const displayMinute = value?.minute ?? null;

  const emitHour = (hour: number) => {
    const hour24 =
      timeFormat === '12' ? to24Hour(hour, displayMeridiem ?? 'AM') : hour;
    onChange({ hour: hour24, minute: displayMinute ?? 0 });
  };

  const emitMinute = (minute: number) => {
    const hour24 =
      timeFormat === '12'
        ? to24Hour(displayHour ?? 12, displayMeridiem ?? 'AM')
        : (displayHour ?? 0);
    onChange({ hour: hour24, minute });
  };

  const emitMeridiem = (meridiem: Meridiem) => {
    const hour24 = to24Hour(displayHour ?? 12, meridiem);
    onChange({ hour: hour24, minute: displayMinute ?? 0 });
  };

  const hourColRef = useRef<HTMLDivElement>(null);
  const minuteColRef = useRef<HTMLDivElement>(null);
  const meridiemColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Deferred a frame — FloatingFocusManager's initial focus (default
    // initialFocus=0) triggers the browser's native scroll-into-view for the
    // newly-focused first item, landing *after* this effect and clobbering a
    // synchronous scroll here. Running one frame later wins that race.
    const raf = requestAnimationFrame(() => {
      scrollSelectedIntoView(hourColRef);
      scrollSelectedIntoView(minuteColRef);
      if (timeFormat === '12') scrollSelectedIntoView(meridiemColRef);
    });
    return () => cancelAnimationFrame(raf);
    // Runs once per mount (the columns remount whenever the menu opens,
    // since TimeRangeMenu itself isn't rendered until then).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        ref={hourColRef}
        className={classes.column}
        role="listbox"
        aria-label={`${label} hour`}
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
        aria-label={`${label} minute`}
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
      {timeFormat === '12' && (
        <Box
          ref={meridiemColRef}
          className={classes.column}
          role="listbox"
          aria-label={`${label} AM or PM`}
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
    </>
  );
};

export const TimeRangeMenu = (props: TimeRangeMenuProps) => {
  const {
    trigger,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    placement = 'bottom-start',
    value,
    onChange,
    timeFormat = '12',
    minuteStep = 1,
    disabled = false,
    startLabel = 'Start time',
    endLabel = 'End time',
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

  const classes = timeMenus();
  const resolvedTimeFormat = timeFormat;

  const [draft, setDraft] = useState<TimeRangeValue>(value ?? EMPTY_RANGE);

  useEffect(() => {
    if (menuOpen) {
      setDraft(value ?? EMPTY_RANGE);
    }
  }, [menuOpen, value]);

  const handleApply = () => {
    onChange?.(draft.start && draft.end ? draft : null);
    setOpenState(false);
  };

  const handleCancel = () => {
    setDraft(value ?? EMPTY_RANGE);
    setOpenState(false);
  };

  const hourValues =
    resolvedTimeFormat === '12' ? range(12, 1, 1) : range(24, 1, 0);
  const minuteValues = range(Math.ceil(60 / minuteStep), minuteStep, 0);

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
        <Box className={classes.columns}>
          <TimeColumns
            classes={classes}
            label={startLabel}
            timeFormat={resolvedTimeFormat}
            hourValues={hourValues}
            minuteValues={minuteValues}
            value={draft.start}
            onChange={(next) =>
              setDraft((current) => ({ ...current, start: next }))
            }
          />
          <Divider direction="vertical" weight="thick" aria-hidden="true" />
          <TimeColumns
            classes={classes}
            label={endLabel}
            timeFormat={resolvedTimeFormat}
            hourValues={hourValues}
            minuteValues={minuteValues}
            value={draft.end}
            onChange={(next) =>
              setDraft((current) => ({ ...current, end: next }))
            }
          />
        </Box>
        <Box className={classes.footer}>
          <Button variant="standard" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={!draft.start || !draft.end}
            onClick={handleApply}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Menu>
  );
};
