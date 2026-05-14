import {
  type ReactNode,
  useEffect,
  useRef,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';

import { cx } from '@styled-system/css';
import { chip, type ChipVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Icon } from '~/components/Icon';
import { Spinner } from '~/components/Spinner';
import { useFieldContext } from '~/system/context/FieldContext';
import {
  SlotContext,
  type SlotPlacement,
  useSlotContext,
} from '~/system/context/SlotContext';
import { splitProps } from '~/utils/splitProps';

import { useChipGroup } from './ChipGroupContext';

export type ChipProps = Omit<BoxProps, keyof ChipVariantProps> &
  Omit<ChipVariantProps, 'before' | 'after' | 'dismissable'> & {
    children: string;
    before?: ReactNode;
    after?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    deleted?: boolean;
    dismissable?: boolean;
    dismissLabel?: string;
    error?: boolean;
    invalid?: boolean;
    onDismiss?: () => void;
    type?: 'button' | 'submit' | 'reset';
    value?: string;
  };

export const Chip = (props: ChipProps) => {
  const groupContext = useChipGroup();
  const fieldContext = useFieldContext();
  const slotContext = useSlotContext();
  const {
    size: sizeProp,
    children,
    before,
    after,
    loading,
    disabled: disabledProp,
    deleted,
    dismissable,
    dismissLabel,
    onDismiss,
    value,
    error: errorProp,
    invalid: invalidProp,
    onClick,
    type = 'button',
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const registerChip = groupContext?.registerChip;
  const unregisterChip = groupContext?.unregisterChip;

  const size =
    sizeProp ??
    groupContext?.size ??
    (slotContext?.size as ChipVariantProps['size'] | undefined) ??
    fieldContext?.size ??
    undefined;
  const error = errorProp ?? slotContext?.error ?? fieldContext?.error;
  const invalid = invalidProp ?? slotContext?.invalid ?? fieldContext?.invalid;
  const disabled =
    disabledProp ?? slotContext?.disabled ?? fieldContext?.disabled;
  const isDisabled = disabled || loading;

  const isSelectable = value !== undefined && groupContext !== null;
  const hasPrimaryAction = Boolean(onClick) || isSelectable;

  const isMultiSelected =
    isSelectable &&
    value !== undefined &&
    groupContext !== null &&
    groupContext.type === 'multi' &&
    Array.isArray(groupContext.value) &&
    groupContext.value.includes(value);

  const isSelected =
    isSelectable && groupContext !== null
      ? groupContext.type === 'single'
        ? groupContext.value === value
        : isMultiSelected
      : false;

  const hasBefore = Boolean(before) || isMultiSelected;
  const hasAfter = Boolean(after) || dismissable;

  useEffect(() => {
    if (
      !isSelectable ||
      isDisabled ||
      !registerChip ||
      !unregisterChip ||
      value === undefined
    ) {
      return;
    }

    registerChip(value, buttonRef);

    return () => {
      unregisterChip(value);
    };
  }, [isDisabled, isSelectable, registerChip, unregisterChip, value]);

  const classes = chip({
    size,
    before: hasBefore,
    after: hasAfter,
    dismissable,
  });

  const renderSlot = (slot: ReactNode, placement: SlotPlacement) => {
    if (!slot) {
      return null;
    }

    return (
      <SlotContext.Provider
        value={{
          owner: 'Chip',
          placement,
          size,
          disabled,
          error,
          invalid,
        }}
      >
        <Box className={classes.slot}>{slot}</Box>
      </SlotContext.Provider>
    );
  };

  const handleBodyClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isSelectable && groupContext && value !== undefined) {
      if (groupContext.type === 'single') {
        groupContext.onChange(value);
      } else {
        const currentValues = Array.isArray(groupContext.value)
          ? groupContext.value
          : [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((currentValue) => currentValue !== value)
          : [...currentValues, value];
        groupContext.onChange(newValues);
      }
    }

    onClick?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!isSelectable || !groupContext || value === undefined) return;

    if (groupContext.type === 'single') {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        groupContext.focusChip('next', value);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        groupContext.focusChip('prev', value);
      }
    }
  };

  const role =
    isSelectable && groupContext !== null
      ? groupContext.type === 'single'
        ? 'radio'
        : 'checkbox'
      : undefined;

  const getTabIndex = () => {
    if (!isSelectable || !groupContext || isDisabled || value === undefined) {
      return undefined;
    }

    if (groupContext.type === 'single') {
      if (isSelected) return 0;

      const hasSelection =
        groupContext.value !== undefined && groupContext.value !== '';
      if (!hasSelection && groupContext.chipValues[0] === value) return 0;

      return -1;
    }

    return 0;
  };

  const resolvedDismissLabel = dismissLabel || `Remove ${children}`;

  const handleDismissClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDismiss?.();
  };

  const dismissButton = (
    <Box
      as="button"
      type="button"
      className={classes.dismissButton}
      aria-label={resolvedDismissLabel}
      aria-hidden={dismissable ? undefined : true}
      disabled={isDisabled || !onDismiss}
      onClick={handleDismissClick}
      opacity={loading ? 0 : 1}
      data-selected={isSelected ? true : undefined}
      data-deleted={deleted ? true : undefined}
      data-disabled={isDisabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
    >
      <Icon name="x" aria-hidden />
    </Box>
  );

  const bodyContent = (
    <>
      {isMultiSelected && (
        <Box as="span" className={classes.slot}>
          <Icon name="check" fill="icon.inverse" aria-hidden />
        </Box>
      )}
      {renderSlot(before, 'before')}
      <Box as="span" className={classes.mainContent}>
        {children}
      </Box>
      {renderSlot(after, 'after')}
    </>
  );

  const body = hasPrimaryAction ? (
    <Box
      as="button"
      ref={buttonRef}
      className={classes.body}
      onClick={handleBodyClick}
      onKeyDown={handleKeyDown}
      tabIndex={getTabIndex()}
      disabled={isDisabled}
      role={role}
      aria-checked={isSelectable ? isSelected : undefined}
      data-selected={isSelected ? true : undefined}
      data-loading={loading ? true : undefined}
      data-deleted={deleted ? true : undefined}
      data-disabled={isDisabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      type={type}
      opacity={loading ? 0 : 1}
    >
      {bodyContent}
    </Box>
  ) : (
    <Box
      as="span"
      className={classes.body}
      data-deleted={deleted ? true : undefined}
      data-disabled={isDisabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      opacity={loading ? 0 : 1}
    >
      {bodyContent}
    </Box>
  );

  return (
    <Box
      className={`${cx(classes.container, className)} group`}
      data-loading={loading ? true : undefined}
      data-deleted={deleted ? true : undefined}
      data-disabled={disabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      aria-busy={loading ? true : undefined}
      aria-disabled={disabled || undefined}
      aria-invalid={invalid || undefined}
      {...otherProps}
    >
      {body}
      {dismissable && dismissButton}
      {loading && <Spinner size="sm" centered />}
    </Box>
  );
};
