import { useCallback, useMemo, useState, type KeyboardEvent } from 'react';

import { cx } from '@styled-system/css';
import { calendar, type CalendarVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Button } from '~/components/Button';
import {
  compareDates,
  daysInMonth,
  firstWeekdayOfMonth,
  getTodayDate,
  isDateInRange,
  isSameDate,
  shiftMonth,
  type DateValue,
} from '~/components/DateTime/helpers';
import { IconButton } from '~/components/IconButton';
import { Text } from '~/components/Text';
import { splitProps } from '~/utils/splitProps';

// ─── Static data ────────────────────────────────────────────────────────────────

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const MONTH_ABBR = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const WEEKDAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const WEEKDAY_FULL = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const YEAR_WINDOW_SIZE = 12;

type ViewLevel = 'days' | 'months' | 'years';
type ViewDate = { year: number; month: number };
type HeaderConfig = {
  previousLabel: string;
  nextLabel: string;
  title: string;
  titleDisabled?: boolean;
  onTitleClick?: () => void;
  previousDisabled: boolean;
  nextDisabled: boolean;
  onPrevious: () => void;
  onNext: () => void;
};
type CellState = {
  isSelected: boolean;
  isUnavailable: boolean;
  isToday?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isInRange?: boolean;
};

// ─── Bounds helpers (month/year granularity, not just day) ────────────────────

function monthInRange(
  year: number,
  month: number,
  min?: DateValue,
  max?: DateValue,
): boolean {
  if (min && (year < min.year || (year === min.year && month < min.month)))
    return false;
  if (max && (year > max.year || (year === max.year && month > max.month)))
    return false;
  return true;
}

function yearInRange(year: number, min?: DateValue, max?: DateValue): boolean {
  if (min && year < min.year) return false;
  if (max && year > max.year) return false;
  return true;
}

function getYearWindowStart(year: number): number {
  return Math.floor(year / YEAR_WINDOW_SIZE) * YEAR_WINDOW_SIZE;
}

function getCellVariant(state: CellState) {
  if (state.isSelected || state.isRangeStart || state.isRangeEnd) {
    return 'selectedBold';
  }
  return state.isInRange ? 'selected' : 'ghost';
}

function getDayAriaLabel(
  date: DateValue,
  monthName: string,
  state: CellState,
): string {
  const labels = [`${monthName} ${date.day}, ${date.year}`];
  if (state.isToday) labels.push('today');
  if (state.isSelected) labels.push('selected');
  if (state.isRangeStart) labels.push('range start');
  if (state.isRangeEnd) labels.push('range end');
  return labels.join(', ');
}

// ─── Props ─────────────────────────────────────────────────────────────────────

export type CalendarProps = Omit<
  BoxProps,
  keyof CalendarVariantProps | 'children'
> &
  Omit<CalendarVariantProps, 'type'> & {
    /** Controlled selected date */
    value?: DateValue | null;
    /** Called when a day is chosen (Calendar never clears its own value) */
    onChange?: (value: DateValue) => void;
    /**
     * Range-selection endpoints, for DateRangeMenu. Independent of `value` —
     * a Calendar can show a range highlight (start/end fill + in-between
     * tint) regardless of which month it's currently displaying, since a
     * range's two endpoints may fall in months neither calendar is showing.
     */
    rangeStart?: DateValue | null;
    rangeEnd?: DateValue | null;
    /** Earliest selectable date */
    minDate?: DateValue;
    /** Latest selectable date */
    maxDate?: DateValue;
    /** Controlled visible month/year */
    viewDate?: ViewDate;
    /** Initial uncontrolled visible month/year — defaults to `value`, or today */
    defaultViewDate?: ViewDate;
    onViewDateChange?: (viewDate: ViewDate) => void;
    disabled?: boolean;
    /** Accessible label prefix, e.g. "Choose date" */
    label?: string;
  };

// ─── Calendar ──────────────────────────────────────────────────────────────────

export const Calendar = (props: CalendarProps) => {
  const {
    value = null,
    onChange,
    rangeStart = null,
    rangeEnd = null,
    minDate,
    maxDate,
    viewDate: viewDateProp,
    defaultViewDate,
    onViewDateChange,
    disabled = false,
    label = 'Choose date',
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const today = useMemo(() => getTodayDate(), []);

  const [internalViewDate, setInternalViewDate] = useState<ViewDate>(
    () =>
      defaultViewDate ??
      (value
        ? { year: value.year, month: value.month }
        : { year: today.year, month: today.month }),
  );
  const viewDate = viewDateProp ?? internalViewDate;

  const setViewDate = useCallback(
    (next: ViewDate) => {
      setInternalViewDate(next);
      onViewDateChange?.(next);
    },
    [onViewDateChange],
  );

  const [viewLevel, setViewLevel] = useState<ViewLevel>('days');
  const [yearWindowStart, setYearWindowStart] = useState(() =>
    getYearWindowStart(viewDate.year),
  );

  const classes = calendar({ type: viewLevel });
  const monthName = MONTH_NAMES[viewDate.month - 1] ?? '';
  const monthLabel = `${monthName} ${viewDate.year}`;
  const yearWindowEnd = yearWindowStart + YEAR_WINDOW_SIZE - 1;

  const dayCells = useMemo(() => {
    const firstDay = firstWeekdayOfMonth(viewDate.year, viewDate.month);
    const totalDays = daysInMonth(viewDate.year, viewDate.month);
    const cells: Array<number | null> = [];
    for (let i = 0; i < firstDay; i += 1) cells.push(null);
    for (let day = 1; day <= totalDays; day += 1) cells.push(day);
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [viewDate.month, viewDate.year]);

  const windowYears = useMemo(
    () =>
      Array.from({ length: YEAR_WINDOW_SIZE }, (_, i) => yearWindowStart + i),
    [yearWindowStart],
  );

  const handleDaySelect = useCallback(
    (date: DateValue) => {
      if (disabled || !isDateInRange(date, minDate, maxDate)) return;
      onChange?.(date);
    },
    [disabled, minDate, maxDate, onChange],
  );

  const handleMonthSelect = useCallback(
    (month: number) => {
      if (disabled) return;
      setViewDate({ year: viewDate.year, month });
      setViewLevel('days');
    },
    [disabled, viewDate.year, setViewDate],
  );

  const handleYearSelect = useCallback(
    (year: number) => {
      if (disabled) return;
      setViewDate({ year, month: viewDate.month });
      setViewLevel('months');
    },
    [disabled, viewDate.month, setViewDate],
  );

  const getDayState = (date: DateValue): CellState => {
    const isRangeStart = rangeStart ? isSameDate(rangeStart, date) : false;
    const isRangeEnd = rangeEnd ? isSameDate(rangeEnd, date) : false;
    return {
      isSelected: value ? isSameDate(value, date) : false,
      isUnavailable: !isDateInRange(date, minDate, maxDate),
      isToday: isSameDate(today, date),
      isRangeStart,
      isRangeEnd,
      isInRange:
        rangeStart && rangeEnd
          ? compareDates(date, rangeStart) > 0 &&
            compareDates(date, rangeEnd) < 0
          : false,
    };
  };

  const getMonthState = (month: number): CellState => ({
    isSelected: month === viewDate.month,
    isUnavailable: !monthInRange(viewDate.year, month, minDate, maxDate),
    isToday: today.year === viewDate.year && today.month === month,
  });

  const getYearState = (year: number): CellState => ({
    isSelected: year === viewDate.year,
    isUnavailable: !yearInRange(year, minDate, maxDate),
    isToday: year === today.year,
  });

  const renderCell = ({
    key,
    label,
    ariaLabel,
    state,
    onClick,
    onKeyDown,
  }: {
    key: string | number;
    label: string | number;
    ariaLabel: string;
    state: CellState;
    onClick: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
  }) => (
    <Button
      key={key}
      role="gridcell"
      variant={getCellVariant(state)}
      className={classes.day}
      fontVariant="mono"
      data-today={state.isToday || undefined}
      data-range-start={state.isRangeStart || undefined}
      data-range-end={state.isRangeEnd || undefined}
      data-in-range={state.isInRange || undefined}
      disabled={disabled || state.isUnavailable}
      data-unavailable={state.isUnavailable || undefined}
      aria-selected={state.isSelected || state.isRangeStart || state.isRangeEnd}
      aria-label={ariaLabel}
      tabIndex={state.isUnavailable ? -1 : 0}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {label}
    </Button>
  );

  const previousMonth = shiftMonth(viewDate.year, viewDate.month, -1);
  const nextMonth = shiftMonth(viewDate.year, viewDate.month, 1);

  const getHeaderConfig = (): HeaderConfig => {
    switch (viewLevel) {
      case 'days':
        return {
          previousLabel: 'Previous month',
          nextLabel: 'Next month',
          title: monthLabel,
          onTitleClick: () => setViewLevel('months'),
          previousDisabled:
            disabled ||
            !monthInRange(
              previousMonth.year,
              previousMonth.month,
              minDate,
              maxDate,
            ),
          nextDisabled:
            disabled ||
            !monthInRange(nextMonth.year, nextMonth.month, minDate, maxDate),
          onPrevious: () => setViewDate(previousMonth),
          onNext: () => setViewDate(nextMonth),
        };
      case 'months':
        return {
          previousLabel: 'Previous year',
          nextLabel: 'Next year',
          title: String(viewDate.year),
          onTitleClick: () => {
            // Recenter the year window on the current view before showing it.
            setYearWindowStart(getYearWindowStart(viewDate.year));
            setViewLevel('years');
          },
          previousDisabled:
            disabled || !yearInRange(viewDate.year - 1, minDate, maxDate),
          nextDisabled:
            disabled || !yearInRange(viewDate.year + 1, minDate, maxDate),
          onPrevious: () =>
            setViewDate({ ...viewDate, year: viewDate.year - 1 }),
          onNext: () => setViewDate({ ...viewDate, year: viewDate.year + 1 }),
        };
      case 'years':
        return {
          previousLabel: 'Previous years',
          nextLabel: 'Next years',
          title: `${yearWindowStart}-${yearWindowEnd}`,
          titleDisabled: true,
          previousDisabled:
            disabled || !yearInRange(yearWindowStart - 1, minDate, maxDate),
          nextDisabled:
            disabled ||
            !yearInRange(yearWindowStart + YEAR_WINDOW_SIZE, minDate, maxDate),
          onPrevious: () =>
            setYearWindowStart((year) => year - YEAR_WINDOW_SIZE),
          onNext: () => setYearWindowStart((year) => year + YEAR_WINDOW_SIZE),
        };
    }
  };
  const headerConfig = getHeaderConfig();

  const gridAriaLabel =
    viewLevel === 'days'
      ? monthLabel
      : viewLevel === 'months'
        ? `Choose a month in ${viewDate.year}`
        : 'Choose a year';

  const renderGridContent = () => {
    if (viewLevel === 'days') {
      return (
        <>
          {WEEKDAY_LABELS.map((weekday, i) => (
            <Text
              key={weekday}
              textStyle="mono.xs"
              allCaps
              className={classes.weekdayLabel}
              role="columnheader"
              aria-label={WEEKDAY_FULL[i] ?? weekday}
            >
              {weekday}
            </Text>
          ))}

          {Array.from({ length: dayCells.length / 7 }, (_, rowIdx) => (
            <Box key={rowIdx} role="row" display="contents">
              {dayCells.slice(rowIdx * 7, rowIdx * 7 + 7).map((day, colIdx) => {
                if (day === null) {
                  return (
                    <Box
                      key={`empty-${rowIdx}-${colIdx}`}
                      role="gridcell"
                      aria-hidden="true"
                    />
                  );
                }

                const date = {
                  year: viewDate.year,
                  month: viewDate.month,
                  day,
                };
                const state = getDayState(date);

                return renderCell({
                  key: day,
                  label: day,
                  ariaLabel: getDayAriaLabel(date, monthName, state),
                  state,
                  onClick: () => handleDaySelect(date),
                  onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleDaySelect(date);
                    }
                  },
                });
              })}
            </Box>
          ))}
        </>
      );
    }

    if (viewLevel === 'months') {
      return MONTH_ABBR.map((label, idx) => {
        const month = idx + 1;
        const fullMonthName = MONTH_NAMES[idx] ?? label;
        return renderCell({
          key: label,
          label,
          ariaLabel: `${fullMonthName} ${viewDate.year}`,
          state: getMonthState(month),
          onClick: () => handleMonthSelect(month),
        });
      });
    }

    return windowYears.map((year) =>
      renderCell({
        key: year,
        label: year,
        ariaLabel: String(year),
        state: getYearState(year),
        onClick: () => handleYearSelect(year),
      }),
    );
  };

  return (
    <Box
      className={cx(classes.root, className)}
      role="group"
      aria-label={label}
      {...otherProps}
    >
      <Box className={classes.header}>
        <IconButton
          altText={headerConfig.previousLabel}
          disabled={headerConfig.previousDisabled}
          onClick={headerConfig.onPrevious}
          iconName="caret-left"
          variant="ghost"
        />
        <Button
          variant="ghost"
          disabled={disabled || headerConfig.titleDisabled}
          fontVariant="mono"
          onClick={headerConfig.onTitleClick}
        >
          {headerConfig.title}
        </Button>
        <IconButton
          altText={headerConfig.nextLabel}
          disabled={headerConfig.nextDisabled}
          onClick={headerConfig.onNext}
          iconName="caret-right"
          variant="ghost"
        />
      </Box>

      <Box
        className={viewLevel === 'days' ? classes.grid : classes.monthYearGrid}
        role="grid"
        aria-label={gridAriaLabel}
      >
        {renderGridContent()}
      </Box>
    </Box>
  );
};
