import type { ReactNode } from 'react';

import { cx } from '@styled-system/css';
import {
  segmentedFields,
  type SegmentedFieldsVariantProps,
} from '@styled-system/recipes';

import { Icon, type IconNamesList } from '~/components/Icon';
import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../../Box';
import { SegmentedTime } from '../../SegmentedInputs/SegmentedTime';

import { InputSlot } from './InputSlot';

import type { TimeFormat, TimeValue } from '../helpers/types';

export type TimeInputProps = Omit<
  BoxProps,
  keyof SegmentedFieldsVariantProps | 'children'
> &
  Omit<SegmentedFieldsVariantProps, 'field' | 'range' | 'before' | 'after'> & {
    id?: string;
    value?: TimeValue | null;
    defaultValue?: TimeValue | null;
    onChange?: (value: TimeValue | null) => void;
    timeFormat?: TimeFormat;
    minuteStep?: number;
    label?: string;
    before?: ReactNode;
    after?: ReactNode;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    error?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    /** Reflected through to the segmented field — lets a wrapping Menu/Picker show "active anchor" styling */
    open?: boolean;
    /** Forwarded to the segmented field — see SegmentedTime's onFocusWithin */
    onFocusWithin?: () => void;
    /** Forwarded to the segmented field — see SegmentedTime's onBlurWithin */
    onBlurWithin?: (relatedTarget: Node | null) => void;
  };

export const TimeInput = (props: TimeInputProps) => {
  const fieldContext = useFieldContext();
  const {
    id,
    value,
    defaultValue,
    onChange,
    timeFormat,
    minuteStep,
    label,
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
    field: 'time',
    before: Boolean(resolvedBefore),
    after: Boolean(resolvedAfter),
  });
  const [className, otherProps] = splitProps(rest);

  return (
    <Box
      className={cx(classes.container, className)}
      aria-disabled={disabled}
      data-disabled={disabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      data-open={open || undefined}
      {...otherProps}
    >
      <InputSlot
        owner="TimeInput"
        placement="before"
        slot={resolvedBefore}
        size={size}
        disabled={disabled}
        error={error}
        invalid={invalid}
        buttonSlotClassName={classes.buttonSlot}
        slotClassName={classes.slot}
      />
      <SegmentedTime
        flex="1"
        minW="0"
        id={id}
        label={label}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        timeFormat={timeFormat}
        minuteStep={minuteStep}
        size={size}
        disabled={disabled}
        onFocusWithin={onFocusWithin}
        onBlurWithin={onBlurWithin}
      />
      <InputSlot
        owner="TimeInput"
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
