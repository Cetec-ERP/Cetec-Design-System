import type { DateValue } from '~/components/DateTime/helpers';
import { DEFAULT_LOCALE } from '~/system/context/locale-context';

/** Locale-specific names and formatters used by {@link Calendar}. */
export interface CalendarNames {
  /** Full month names, January first. */
  months: string[];
  /** Abbreviated month names, January first. */
  monthsShort: string[];
  /** Full weekday names, Sunday first. */
  weekdays: string[];
  /** Abbreviated weekday names without a trailing period, Sunday first. */
  weekdaysShort: string[];
  /** Formats a month and year, such as "October 2026". */
  formatMonthYear: (year: number, month: number) => string;
  /** Formats a full date, such as "October 5, 2026". */
  formatDate: (date: DateValue) => string;
}

// 2017-01-01 is a Sunday, so day offsets 0-6 map to Sunday-Saturday.
const WEEK_START_UTC = Date.UTC(2017, 0, 1);
const DAY_MS = 24 * 60 * 60 * 1000;

// Date.UTC maps years 0-99 to 1900-1999; setUTCFullYear does not.
function utcDate(year: number, month: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return date;
}

function resolveLocale(locale: string): string {
  try {
    return Intl.DateTimeFormat.supportedLocalesOf(locale).length > 0
      ? locale
      : DEFAULT_LOCALE;
  } catch {
    // An invalid tag throws a RangeError.
    return DEFAULT_LOCALE;
  }
}

/**
 * Builds month and weekday names and date formatters for a locale with
 * `Intl.DateTimeFormat`. Falls back to `en-US` when the locale is invalid or
 * unsupported. All dates are formatted in UTC, so the user's time zone cannot
 * shift a day.
 */
export function getCalendarNames(locale: string): CalendarNames {
  const resolved = resolveLocale(locale);
  const format = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(resolved, { ...options, timeZone: 'UTC' });

  const monthLong = format({ month: 'long' });
  const monthShort = format({ month: 'short' });
  const weekdayLong = format({ weekday: 'long' });
  const weekdayShort = format({ weekday: 'short' });
  const monthYear = format({ month: 'long', year: 'numeric' });
  const fullDate = format({ month: 'long', day: 'numeric', year: 'numeric' });

  const monthDates = Array.from({ length: 12 }, (_, index) =>
    utcDate(2000, index + 1, 1),
  );
  const weekDates = Array.from(
    { length: 7 },
    (_, index) => new Date(WEEK_START_UTC + index * DAY_MS),
  );

  return {
    months: monthDates.map((date) => monthLong.format(date)),
    monthsShort: monthDates.map((date) => monthShort.format(date)),
    weekdays: weekDates.map((date) => weekdayLong.format(date)),
    weekdaysShort: weekDates.map((date) =>
      weekdayShort.format(date).replace(/\.$/, ''),
    ),
    formatMonthYear: (year, month) => monthYear.format(utcDate(year, month, 1)),
    formatDate: ({ year, month, day }) =>
      fullDate.format(utcDate(year, month, day)),
  };
}
