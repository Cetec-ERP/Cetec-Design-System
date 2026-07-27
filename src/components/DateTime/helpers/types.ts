// Shared value/segment types for the DateTime component family (helpers,
// inputs, menus, pickers). These are the canonical definitions — no other
// file in this family should redeclare DateValue/TimeValue/etc locally.

/** A calendar date. Month is 1-indexed (1 = January) to match human-readable input. */
export interface DateValue {
  year: number;
  month: number;
  day: number;
}

/** A time of day. Hour is always 24-hour (0-23) internally, regardless of display cycle. */
export interface TimeValue {
  hour: number;
  minute: number;
}

/** A committed date range — either endpoint may be null while only partially filled in. */
export interface DateRangeValue {
  start: DateValue | null;
  end: DateValue | null;
}

/** A committed time range — either endpoint may be null while only partially filled in. */
export interface TimeRangeValue {
  start: TimeValue | null;
  end: TimeValue | null;
}

/** A combined date+time value — either half may be null while only partially filled in. */
export interface DateTimeValue {
  date: DateValue | null;
  time: TimeValue | null;
}

/** A committed date+time range — either endpoint may be null while only partially filled in. */
export interface DateTimeRangeValue {
  start: DateTimeValue | null;
  end: DateTimeValue | null;
}

export type TimeFormat = '12' | '24';
export type DateFormat = 'MM/DD/YYYY' | 'YYYY-MM-DD';
export type Meridiem = 'AM' | 'PM';
