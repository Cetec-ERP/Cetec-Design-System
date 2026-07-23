import type {
  DateSegmentType,
  DateValue,
  TimeFormat,
  Meridiem,
  NumericSegmentDef,
  SegmentDef,
  TimeValue,
} from './types';

// ─── Date math ──────────────────────────────────────────────────────────────

/** Number of days in the given month (1-indexed). */
export function daysInMonth(year: number, month: number): number {
  // Day 0 of the *next* month is the last day of `month`.
  return new Date(year, month, 0).getDate();
}

/** Day-of-week (0 = Sunday) for the 1st of the given month. */
export function firstWeekdayOfMonth(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay();
}

/** Shifts a (year, month) pair by `delta` months, rolling over the year as needed. */
export function shiftMonth(
  year: number,
  month: number,
  delta: number,
): { year: number; month: number } {
  const zeroBased = month - 1 + delta;
  const rolledYear = year + Math.floor(zeroBased / 12);
  const rolledMonth = ((zeroBased % 12) + 12) % 12; // 0-indexed, always positive
  return { year: rolledYear, month: rolledMonth + 1 };
}

/** Clamps `day` so it can't exceed the number of days in (month, year). Falls back to a leap year when year is unknown, so Feb 29 stays selectable while typing. */
export function clampDayToMonth(
  day: number,
  month: number | null,
  year: number | null,
): number {
  const y = year ?? 2000;
  const m = month ?? 1;
  return Math.min(day, daysInMonth(y, m));
}

export function compareDates(a: DateValue, b: DateValue): number {
  if (a.year !== b.year) return a.year - b.year;
  if (a.month !== b.month) return a.month - b.month;
  return a.day - b.day;
}

export function isSameDate(a: DateValue, b: DateValue): boolean {
  return compareDates(a, b) === 0;
}

export function isDateBefore(
  date: DateValue,
  bound: DateValue | undefined,
): boolean {
  return bound !== undefined && compareDates(date, bound) < 0;
}

export function isDateAfter(
  date: DateValue,
  bound: DateValue | undefined,
): boolean {
  return bound !== undefined && compareDates(date, bound) > 0;
}

export function isDateInRange(
  date: DateValue,
  min?: DateValue,
  max?: DateValue,
): boolean {
  return !isDateBefore(date, min) && !isDateAfter(date, max);
}

export function getTodayDate(): DateValue {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
}

// ─── Time math ──────────────────────────────────────────────────────────────

export function to12Hour(hour24: number): {
  hour12: number;
  meridiem: Meridiem;
} {
  if (hour24 === 0) return { hour12: 12, meridiem: 'AM' };
  if (hour24 < 12) return { hour12: hour24, meridiem: 'AM' };
  if (hour24 === 12) return { hour12: 12, meridiem: 'PM' };
  return { hour12: hour24 - 12, meridiem: 'PM' };
}

export function to24Hour(hour12: number, meridiem: Meridiem): number {
  if (meridiem === 'AM') return hour12 === 12 ? 0 : hour12;
  return hour12 === 12 ? 12 : hour12 + 12;
}

export function getTodayTime(): TimeValue {
  const now = new Date();
  return { hour: now.getHours(), minute: now.getMinutes() };
}

/** Clamps an arbitrary `minuteStep` to a safe divisor of 60 (1-60) so menu generation can't hang or emit out-of-range minutes. */
export function normalizeMinuteStep(minuteStep: number): number {
  const step = Math.floor(minuteStep);
  if (!Number.isFinite(step) || step < 1) return 1;
  return Math.min(step, 60);
}

/** Minute options for a time menu, always within [0, 59] regardless of `minuteStep`. */
export function getMinuteValues(minuteStep: number): number[] {
  const step = normalizeMinuteStep(minuteStep);
  const values: number[] = [];
  for (let minute = 0; minute < 60; minute += step) {
    values.push(minute);
  }
  return values;
}

// ─── Segment definitions ────────────────────────────────────────────────────

export function getDateSegmentDefs(): NumericSegmentDef[] {
  return [
    {
      kind: 'numeric',
      type: 'month',
      placeholder: 'MM',
      digits: 2,
      min: 1,
      max: 12,
    },
    {
      kind: 'numeric',
      type: 'day',
      placeholder: 'DD',
      digits: 2,
      min: 1,
      max: 31,
    },
    {
      kind: 'numeric',
      type: 'year',
      placeholder: 'YYYY',
      digits: 4,
      min: 1900,
      max: 2100,
    },
  ];
}

export function getTimeSegmentDefs(
  timeFormat: TimeFormat,
  minuteStep = 1,
): SegmentDef[] {
  const hourMax = timeFormat === '12' ? 12 : 23;
  const hourMin = timeFormat === '12' ? 1 : 0;
  const defs: SegmentDef[] = [
    {
      kind: 'numeric',
      type: 'hour',
      placeholder: 'HH',
      digits: 2,
      min: hourMin,
      max: hourMax,
    },
    {
      kind: 'numeric',
      type: 'minute',
      placeholder: 'MM',
      digits: 2,
      min: 0,
      max: 59,
      step: minuteStep,
    },
  ];
  if (timeFormat === '12') {
    defs.push({ kind: 'ampm', type: 'ampm', placeholder: 'AM' });
  }
  return defs;
}

// ─── Segment interaction primitives ────────────────────────────────────────
// Shared by SegmentedDate and SegmentedTime so the keyboard model (and its
// bugs, or lack thereof) lives in exactly one place.

/**
 * Steps a segment's numeric value up or down within [min, max], snapping to
 * `step` and wrapping at the boundary. Matches the WAI-ARIA spinbutton
 * pattern: 'increment' == Arrow Up, 'decrement' == Arrow Down.
 *
 * Arrow Up increments and Arrow Down decrements.
 */
export function stepSegmentValue(
  current: number | null,
  range: Pick<NumericSegmentDef, 'min' | 'max' | 'step'>,
  direction: 'increment' | 'decrement',
): number {
  const step = range.step ?? 1;
  const maxAligned = Math.floor(range.max / step) * step;

  if (direction === 'increment') {
    if (current === null) return range.min;
    const next = current + step;
    return next > range.max ? range.min : next;
  }

  if (current === null) return maxAligned;
  const next = current - step;
  return next < range.min ? maxAligned : next;
}

/**
 * True once enough digits have been typed into a segment that the next
 * keystroke should move focus to the following segment — either the digit
 * budget is used up, or one more digit would exceed the segment's max value.
 */
export function shouldAutoAdvanceSegment(
  digit: number,
  rawSoFar: string,
  max: number,
  digits: number,
): boolean {
  const next = rawSoFar + String(digit);
  if (next.length >= digits) return true;
  return Number(next) * 10 > max;
}

export type { DateSegmentType };
