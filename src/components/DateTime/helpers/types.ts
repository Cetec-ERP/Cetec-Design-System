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

export type HourCycle = '12' | '24';
export type Meridiem = 'AM' | 'PM';

export type DateSegmentType = 'month' | 'day' | 'year';
export type TimeSegmentType = 'hour' | 'minute' | 'ampm';
export type SegmentType = DateSegmentType | TimeSegmentType;

/** A segment whose value is a number rendered with fixed digit padding (MM, DD, YYYY, HH, MM). */
export interface NumericSegmentDef {
  kind: 'numeric';
  type: Exclude<SegmentType, 'ampm'>;
  placeholder: string;
  digits: number;
  min: number;
  max: number;
  /** Snap interval for arrow-key stepping and typed values. Defaults to 1. */
  step?: number;
}

/** The AM/PM segment in a 12-hour field. */
export interface MeridiemSegmentDef {
  kind: 'ampm';
  type: 'ampm';
  placeholder: string;
}

export type SegmentDef = NumericSegmentDef | MeridiemSegmentDef;

export type SegmentValue = number | Meridiem | null;
export type SegmentValueMap = Record<string, SegmentValue>;
export type SegmentRawInputMap = Record<string, string>;
