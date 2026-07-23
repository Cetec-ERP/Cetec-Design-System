import { useMemo, type Ref } from 'react';

import { type SegmentedInputsVariantProps } from '@styled-system/recipes';

import { type BoxProps } from '~/components/Box';
import { normalizeMinuteStep } from '~/components/DateTime/helpers';
import type {
  Meridiem,
  TimeFormat,
  TimeValue,
} from '~/components/DateTime/helpers/types';

import { SegmentedInput } from './SegmentedInput';

import type {
  SegmentedInputItem,
  SeparatorConfig,
  SeparatorGap,
} from './types';

type SegmentedInputVariantProps = Omit<SegmentedInputsVariantProps, 'bare'>;

export type SegmentedTimeProps = Omit<
  BoxProps,
  keyof SegmentedInputsVariantProps | 'children' | 'onChange' | 'value'
> &
  SegmentedInputVariantProps & {
    ref?: Ref<HTMLDivElement>;
    value?: TimeValue | null;
    defaultValue?: TimeValue | null;
    onChange?: (value: TimeValue | null) => void;
    timeFormat?: TimeFormat;
    minuteStep?: number;
    separators?: {
      time?: SeparatorConfig;
      meridiem?: SeparatorConfig;
    };
    label?: string;
    disabled?: boolean;
    onFocusWithin?: () => void;
    onBlurWithin?: (relatedTarget: Node | null) => void;
  };

const to12Hour = (hour24: number) => {
  if (hour24 === 0) return { hour: 12, meridiem: 'AM' as Meridiem };
  if (hour24 < 12) return { hour: hour24, meridiem: 'AM' as Meridiem };
  if (hour24 === 12) return { hour: 12, meridiem: 'PM' as Meridiem };
  return { hour: hour24 - 12, meridiem: 'PM' as Meridiem };
};

const to24Hour = (hour12: number, meridiem: string) => {
  if (meridiem === 'AM') return hour12 === 12 ? 0 : hour12;
  return hour12 === 12 ? 12 : hour12 + 12;
};

export const SegmentedTime = (props: SegmentedTimeProps) => {
  const {
    value,
    defaultValue = null,
    onChange,
    timeFormat,
    minuteStep = 1,
    separators,
    label = 'Time',
    disabled,
    onFocusWithin,
    onBlurWithin,
    ...rest
  } = props;
  const resolvedTimeFormat = timeFormat ?? '12';
  const resolvedMinuteStep = normalizeMinuteStep(minuteStep);
  const resolvedValue = value !== undefined ? value : defaultValue;
  const valueMap =
    value !== undefined
      ? {
          hour:
            value && resolvedTimeFormat === '12'
              ? to12Hour(value.hour).hour
              : (value?.hour ?? null),
          minute: value?.minute ?? null,
          meridiem:
            value && resolvedTimeFormat === '12'
              ? to12Hour(value.hour).meridiem
              : null,
        }
      : undefined;

  const items = useMemo<SegmentedInputItem[]>(() => {
    const displayHour =
      resolvedValue && resolvedTimeFormat === '12'
        ? to12Hour(resolvedValue.hour).hour
        : (resolvedValue?.hour ?? null);
    const meridiem =
      resolvedValue && resolvedTimeFormat === '12'
        ? to12Hour(resolvedValue.hour).meridiem
        : null;
    const timeGap: SeparatorGap = separators?.time?.gap ?? 'tight';
    const meridiemGap: SeparatorGap = separators?.meridiem?.gap ?? 'tight';

    const nextItems: SegmentedInputItem[] = [
      {
        type: 'segment',
        kind: 'numeric',
        id: 'hour',
        label: 'Hour',
        placeholder: 'HH',
        value: displayHour,
        digits: 2,
        min: resolvedTimeFormat === '12' ? 1 : 0,
        max: resolvedTimeFormat === '12' ? 12 : 23,
      },
      {
        type: 'separator',
        id: 'hour-minute',
        content: separators?.time?.content ?? ':',
        gap: timeGap,
      },
      {
        type: 'segment',
        kind: 'numeric',
        id: 'minute',
        label: 'Minute',
        placeholder: 'MM',
        value: resolvedValue?.minute ?? null,
        digits: 2,
        min: 0,
        max: 59,
        step: resolvedMinuteStep,
      },
    ];

    if (resolvedTimeFormat === '12') {
      nextItems.push(
        {
          type: 'separator',
          id: 'minute-meridiem',
          content: separators?.meridiem?.content ?? ' ',
          gap: meridiemGap,
        },
        {
          type: 'segment',
          kind: 'choice',
          id: 'meridiem',
          label: 'AM or PM',
          placeholder: 'AM',
          value: meridiem,
          choices: ['AM', 'PM'],
          inputKeys: {
            a: 'AM',
            p: 'PM',
          },
        },
      );
    }

    return nextItems;
  }, [resolvedMinuteStep, resolvedTimeFormat, resolvedValue, separators]);

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
        const hour = values.hour;
        const minute = values.minute;
        if (typeof hour !== 'number' || typeof minute !== 'number') return;

        if (resolvedTimeFormat === '12') {
          onChange?.({
            hour: to24Hour(hour, (values.meridiem as string | null) ?? 'AM'),
            minute,
          });
          return;
        }

        onChange?.({ hour, minute });
      }}
    />
  );
};
