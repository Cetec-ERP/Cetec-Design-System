import { useMemo, type Ref } from 'react';

import { type SegmentedInputsVariantProps } from '@styled-system/recipes';

import { type BoxProps } from '~/components/Box';
import type { DateValue } from '~/components/DateTime/helpers/types';

import { SegmentedInput } from './SegmentedInput';

import type {
  SegmentedInputItem,
  SeparatorConfig,
  SeparatorGap,
} from './types';

export type SegmentedDateFormat = 'MM/DD/YYYY' | 'YYYY-MM-DD';
type SegmentedInputVariantProps = Omit<SegmentedInputsVariantProps, 'bare'>;

export type SegmentedDateProps = Omit<
  BoxProps,
  keyof SegmentedInputsVariantProps | 'children' | 'onChange' | 'value'
> &
  SegmentedInputVariantProps & {
    ref?: Ref<HTMLDivElement>;
    value?: DateValue | null;
    defaultValue?: DateValue | null;
    onChange?: (value: DateValue | null) => void;
    format?: SegmentedDateFormat;
    separators?: SeparatorConfig;
    label?: string;
    disabled?: boolean;
    onFocusWithin?: () => void;
    onBlurWithin?: (relatedTarget: Node | null) => void;
  };

const daysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

const clampDayToMonth = (
  day: number,
  month: number | null,
  year: number | null,
) => {
  return Math.min(day, daysInMonth(year ?? 2000, month ?? 1));
};

const getSeparatorContent = (
  format: SegmentedDateFormat,
  separator?: SeparatorConfig,
) => {
  if (separator?.content !== undefined) return separator.content;
  return format === 'YYYY-MM-DD' ? '-' : '/';
};

export const SegmentedDate = (props: SegmentedDateProps) => {
  const {
    value,
    defaultValue = null,
    onChange,
    format = 'MM/DD/YYYY',
    separators,
    label = 'Date',
    disabled,
    onFocusWithin,
    onBlurWithin,
    ...rest
  } = props;
  const resolvedValue = value !== undefined ? value : defaultValue;
  const valueMap =
    value !== undefined
      ? {
          month: value?.month ?? null,
          day: value?.day ?? null,
          year: value?.year ?? null,
        }
      : undefined;
  const separatorGap: SeparatorGap = separators?.gap ?? 'normal';

  const items = useMemo<SegmentedInputItem[]>(() => {
    const values = {
      month: resolvedValue?.month ?? null,
      day: resolvedValue?.day ?? null,
      year: resolvedValue?.year ?? null,
    };
    const separatorContent = getSeparatorContent(format, separators);

    const monthSegment: SegmentedInputItem = {
      type: 'segment',
      kind: 'numeric',
      id: 'month',
      label: 'Month',
      placeholder: 'MM',
      value: values.month,
      digits: 2,
      min: 1,
      max: 12,
    };
    const daySegment: SegmentedInputItem = {
      type: 'segment',
      kind: 'numeric',
      id: 'day',
      label: 'Day',
      placeholder: 'DD',
      value: values.day,
      digits: 2,
      min: 1,
      max: 31,
      clampValue: (day, nextValues) => {
        return clampDayToMonth(
          day,
          nextValues.month as number | null,
          nextValues.year as number | null,
        );
      },
    };
    const yearSegment: SegmentedInputItem = {
      type: 'segment',
      kind: 'numeric',
      id: 'year',
      label: 'Year',
      placeholder: 'YYYY',
      value: values.year,
      digits: 4,
      min: 1900,
      max: 2100,
    };
    const separator = (id: string): SegmentedInputItem => ({
      type: 'separator',
      id,
      content: separatorContent,
      gap: separatorGap,
    });

    if (format === 'YYYY-MM-DD') {
      return [
        yearSegment,
        separator('year-month'),
        monthSegment,
        separator('month-day'),
        daySegment,
      ];
    }

    return [
      monthSegment,
      separator('month-day'),
      daySegment,
      separator('day-year'),
      yearSegment,
    ];
  }, [format, resolvedValue, separatorGap, separators]);

  return (
    <SegmentedInput
      {...rest}
      items={items}
      label={label}
      disabled={disabled}
      value={valueMap}
      onFocusWithin={onFocusWithin}
      onBlurWithin={onBlurWithin}
      onChange={({ values }) => {
        const { month, day, year } = values;
        if (
          typeof month === 'number' &&
          typeof day === 'number' &&
          typeof year === 'number'
        ) {
          onChange?.({ month, day, year });
        } else if (month === null && day === null && year === null) {
          onChange?.(null);
        }
      }}
    />
  );
};
