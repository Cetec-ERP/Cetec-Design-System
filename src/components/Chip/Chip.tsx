import {
  type ReactNode,
  useRef,
  useEffect,
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
    children: string | ReactNode;
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
  const groupContext = useChipGroup();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const size =
    sizeProp ??
    groupContext?.size ??
    (slotContext?.size as ChipVariantProps['size'] | undefined) ??
    fieldContext?.size;
  const error = errorProp ?? slotContext?.error ?? fieldContext?.error;
  const invalid = invalidProp ?? slotContext?.invalid ?? fieldContext?.invalid;
  const disabled =
    disabledProp ?? slotContext?.disabled ?? fieldContext?.disabled;

  // Determine if this chip is selectable (has value and is inside ChipGroup)
  const isSelectable = value !== undefined && groupContext !== null;
  const hasPrimaryAction = Boolean(onClick) || isSelectable;

  // Register/unregister with ChipGroup for keyboard navigation
  useEffect(() => {
    if (isSelectable && value && groupContext) {
      groupContext.registerChip(value, buttonRef);
      return () => groupContext.unregisterChip(value);
    }
  }, [isSelectable, value, groupContext]);

  // Determine if selected
  const isSelected = isSelectable
    ? groupContext.type === 'single'
      ? groupContext.value === value
      : Array.isArray(groupContext.value) && groupContext.value.includes(value)
    : false;

  // MultiSelect shows check icon when selected
  const isMultiSelected =
    isSelectable && groupContext.type === 'multi' && isSelected;

  // Determine if there's content before/after for padding adjustments
  const hasBefore = Boolean(before) || isMultiSelected;
  const hasAfter = Boolean(after) || dismissable;

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
    if (isSelectable && groupContext) {
      if (groupContext.type === 'single') {
        groupContext.onChange(value);
      } else {
        const currentValues = Array.isArray(groupContext.value)
          ? groupContext.value
          : [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
        groupContext.onChange(newValues);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    // Handle keyboard navigation for selectable chips
    if (!isSelectable || !groupContext || !value) return;

    if (groupContext.type === 'single') {
      // Single select: arrow keys navigate and select
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        groupContext.focusChip('next', value);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        groupContext.focusChip('prev', value);
      }
    }
  };

  const role = isSelectable
    ? groupContext.type === 'single'
      ? 'radio'
      : 'checkbox'
    : undefined;

  const getTabIndex = () => {
    if (!isSelectable || !groupContext) return undefined;
    if (groupContext.type === 'single') {
      if (isSelected) return 0;
      const hasSelection =
        groupContext.value !== undefined && groupContext.value !== '';
      if (!hasSelection && groupContext.chipValues[0] === value) return 0;
      return -1;
    }
    return 0;
  };

  const resolvedDismissLabel =
    dismissLabel ??
    (typeof children === 'string' ? `Remove ${children}` : undefined);
  const dismissDisabled = disabled || loading || !onDismiss;

  const dismissButton = (
    <Box
      as="button"
      type="button"
      className={classes.dismissButton}
      aria-label={resolvedDismissLabel}
      disabled={dismissDisabled}
      onClick={onDismiss}
      opacity={loading ? 0 : 1}
    >
      <Icon name="x" className={classes.chipIcon} aria-hidden />
    </Box>
  );

  // const innerWrapper = (
  //   <Box className={classes.innerWrapper} opacity={loading ? 0 : 1}>
  //     {children}
  //   </Box>
  // );

  const bodyContent = (
    <Box className={classes.innerWrapper} opacity={loading ? 0 : 1}>
      {isMultiSelected && (
        <Box as="span" className={classes.slot}>
          <Icon name="check" className={classes.chipIcon} aria-hidden />
        </Box>
      )}
      {before && renderSlot(before, 'before')}
      {children}
      {after && renderSlot(after, 'after')}
    </Box>
  );

  if (dismissable) {
    return (
      <Box
        className={`${cx(classes.container, className)} group`}
        data-loading={loading ? true : undefined}
        data-deleted={deleted ? true : undefined}
        data-disabled={disabled || undefined}
        {...otherProps}
      >
        {hasPrimaryAction ? (
          <Box
            as="button"
            ref={buttonRef}
            className={classes.body}
            onClick={handleBodyClick}
            onKeyDown={handleKeyDown}
            tabIndex={getTabIndex()}
            disabled={disabled || loading}
            role={role}
            aria-checked={isSelectable ? isSelected : undefined}
            aria-busy={loading ? true : undefined}
            data-selected={isSelected ? true : undefined}
            // data-loading={loading ? true : undefined}
            // data-deleted={deleted ? true : undefined}
            type={type}
          >
            {bodyContent}
          </Box>
        ) : (
          <Box as="span" className={classes.body}>
            {bodyContent}
          </Box>
        )}
        {dismissButton}
        {loading && <Spinner size="sm" centered />}
      </Box>
    );
  }

  return (
    <Box
      as="button"
      ref={buttonRef}
      className={`${cx(classes.container, className)} group`}
      onClick={handleBodyClick}
      onKeyDown={handleKeyDown}
      tabIndex={getTabIndex()}
      disabled={disabled}
      role={role}
      aria-checked={isSelectable ? isSelected : undefined}
      data-selected={isSelected ? true : undefined}
      data-loading={loading ? true : undefined}
      aria-busy={loading ? true : undefined}
      type={type}
      data-deleted={deleted ? true : undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      aria-invalid={invalid || undefined}
      {...otherProps}
    >
      <Box as="span" className={classes.body}>
        {bodyContent}
      </Box>
      {loading && <Spinner size="sm" centered />}
    </Box>
  );
};
