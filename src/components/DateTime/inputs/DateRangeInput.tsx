import { type ReactNode, useEffect, useRef, useState } from 'react';

import { cx } from '@styled-system/css';
import {
  segmentedInputs,
  segmentedFields,
  type SegmentedFieldsVariantProps,
} from '@styled-system/recipes';

import { Icon, type IconNamesList } from '~/components/Icon';
import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../../Box';
import { SegmentedDate } from '../../SegmentedInputs/SegmentedDate';

import { InputSlot } from './InputSlot';

import type { DateFormat, DateRangeValue, DateValue } from '../helpers/types';

export type DateRangeInputProps = Omit<
  BoxProps,
  keyof SegmentedFieldsVariantProps | 'children'
> &
  Omit<SegmentedFieldsVariantProps, 'field' | 'range' | 'before' | 'after'> & {
    id?: string;
    value?: DateRangeValue | null;
    defaultValue?: DateRangeValue | null;
    onChange?: (value: DateRangeValue | null) => void;
    dateFormat?: DateFormat;
    startLabel?: string;
    endLabel?: string;
    before?: ReactNode;
    after?: ReactNode;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    error?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    /** Reflected through to the segmented fields — lets a wrapping Menu/Picker show "active anchor" styling */
    open?: boolean;
    /** Forwarded to both segmented fields — see SegmentedDate's onFocusWithin */
    onFocusWithin?: () => void;
    /** Forwarded to both segmented fields — see SegmentedDate's onBlurWithin */
    onBlurWithin?: (relatedTarget: Node | null) => void;
  };

const EMPTY_RANGE: DateRangeValue = { start: null, end: null };

export const DateRangeInput = (props: DateRangeInputProps) => {
  const fieldContext = useFieldContext();
  const {
    id,
    value,
    defaultValue,
    onChange,
    dateFormat,
    startLabel = 'Start date',
    endLabel = 'End date',
    before,
    after,
    iconBefore,
    iconAfter,
    error: errorProp,
    disabled: disabledProp,
    invalid: invalidProp,
    size: sizeProp,
    open,
    onFocusWithin,
    onBlurWithin,
    ...rest
  } = props;
  const size = sizeProp ?? fieldContext?.size;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const resolvedBefore =
    before ?? (iconBefore ? <Icon name={iconBefore} aria-hidden /> : undefined);
  const resolvedAfter =
    after ?? (iconAfter ? <Icon name={iconAfter} aria-hidden /> : undefined);

  const classes = segmentedFields({
    size,
    field: 'date',
    range: 'date',
    before: Boolean(resolvedBefore),
    after: Boolean(resolvedAfter),
  });
  const segmentClasses = segmentedInputs({ size });
  const [className, otherProps] = splitProps(rest);

  // Composed range is tracked internally so an uncontrolled DateRangeInput
  // doesn't lose whichever endpoint was filled in first — each SegmentedDate
  // only reports its own endpoint back via onChange.
  const [internalRange, setInternalRange] = useState<DateRangeValue>(
    value !== undefined
      ? (value ?? EMPTY_RANGE)
      : (defaultValue ?? EMPTY_RANGE),
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalRange(value ?? EMPTY_RANGE);
    }
  }, [value]);

  const range = value !== undefined ? (value ?? EMPTY_RANGE) : internalRange;

  // Lets clicking the "–" separator focus into the end field, matching the
  // click-anywhere-focuses-a-segment behavior of the segments themselves.
  const endFieldRef = useRef<HTMLDivElement>(null);
  const focusEndField = () => {
    endFieldRef.current
      ?.querySelector<HTMLElement>('[role="spinbutton"]')
      ?.focus();
  };

  const emitChange = (
    nextStart: DateValue | null,
    nextEnd: DateValue | null,
  ) => {
    const next: DateRangeValue = { start: nextStart, end: nextEnd };
    setInternalRange(next);
    onChange?.(nextStart === null && nextEnd === null ? null : next);
  };

  return (
    <Box
      id={id}
      className={cx(classes.container, className)}
      aria-disabled={disabled}
      data-disabled={disabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      data-open={open || undefined}
      {...otherProps}
    >
      <InputSlot
        owner="DateRangeInput"
        placement="before"
        slot={resolvedBefore}
        size={size}
        disabled={disabled}
        error={error}
        invalid={invalid}
        buttonSlotClassName={classes.buttonSlot}
        slotClassName={classes.slot}
      />
      <SegmentedDate
        label={startLabel}
        value={range.start}
        onChange={(nextStart) => emitChange(nextStart, range.end)}
        format={dateFormat}
        size={size}
        disabled={disabled}
        onFocusWithin={onFocusWithin}
        onBlurWithin={onBlurWithin}
      />
      <Box
        as="span"
        className={segmentClasses.separator}
        data-gap="loose"
        aria-hidden="true"
        onClick={focusEndField}
      >
        –
      </Box>
      <SegmentedDate
        ref={endFieldRef}
        label={endLabel}
        value={range.end}
        onChange={(nextEnd) => emitChange(range.start, nextEnd)}
        format={dateFormat}
        size={size}
        disabled={disabled}
        onFocusWithin={onFocusWithin}
        onBlurWithin={onBlurWithin}
      />
      <InputSlot
        owner="DateRangeInput"
        placement="after"
        slot={resolvedAfter}
        size={size}
        disabled={disabled}
        error={error}
        invalid={invalid}
        buttonSlotClassName={classes.buttonSlot}
        slotClassName={classes.slot}
      />
    </Box>
  );
};
