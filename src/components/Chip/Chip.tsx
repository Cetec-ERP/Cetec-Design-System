import {
  type ReactNode,
  useRef,
  useEffect,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';

import { cx } from '@styled-system/css';
import { chip, type ChipVariantProps } from '@styled-system/recipes';

import { Avatar, type AvatarProps } from '~/components/Avatar';
import { Badge, type BadgeProps } from '~/components/Badge';
import { Box, type BoxProps } from '~/components/Box';
import { Icon, type IconNamesList, type IconProps } from '~/components/Icon';
import { Spinner } from '~/components/Spinner';
import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { useChipGroup } from './ChipGroupContext';

export type ChipIconSlot = {
  name: IconNamesList;
  fill?: IconProps['fill'];
};

export type ChipAvatarSlot = {
  src?: string;
  alt?: string;
  name?: string;
  fallback?: ReactNode;
};

export type ChipBadgeSlot = {
  count?: number;
  variant?: BadgeProps['variant'];
};

type ChipSize = NonNullable<ChipProps['size']>;

type ChipSizeKeys = Extract<ChipSize, string>;

const chipSizeToIconSize: Record<ChipSizeKeys, IconProps['size']> = {
  sm: '20',
  md: '20',
  lg: '24',
};

const chipSizeToAvatarSize: Record<ChipSizeKeys, AvatarProps['size']> = {
  sm: 'xs',
  md: 'sm',
  lg: 'lg',
};

const chipSizeToBadgeSize: Record<ChipSizeKeys, BadgeProps['size']> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const isChipSizeKey = (size: unknown): size is ChipSizeKeys =>
  typeof size === 'string' && size in chipSizeToIconSize;

const mapChiptoAvatarSize = (size: ChipProps['size']): AvatarProps['size'] => {
  if (isChipSizeKey(size)) {
    return chipSizeToAvatarSize[size];
  }

  if (size && typeof size === 'object') {
    const mapped: Record<string, AvatarProps['size']> = {};

    Object.entries(size as Record<string, unknown>).forEach(([key, value]) => {
      mapped[key] = chipSizeToAvatarSize[value as ChipSizeKeys];
    });

    return mapped;
  }

  return chipSizeToAvatarSize.md;
};

const mapChiptoBadgeSize = (size: ChipProps['size']): BadgeProps['size'] => {
  if (isChipSizeKey(size)) {
    return chipSizeToBadgeSize[size];
  }

  if (size && typeof size === 'object') {
    const mapped: Record<string, BadgeProps['size']> = {};

    Object.entries(size as Record<string, unknown>).forEach(([key, value]) => {
      mapped[key] = chipSizeToBadgeSize[value as ChipSizeKeys];
    });

    return mapped;
  }

  return chipSizeToBadgeSize.md;
};

const getStructuredSlotCount = (slots: Array<unknown>) =>
  slots.filter(Boolean).length;

const resolveBeforeSlot = (
  avatarBefore?: ChipAvatarSlot,
  iconBefore?: ChipIconSlot,
  badgeBefore?: ChipBadgeSlot,
) => avatarBefore ?? iconBefore ?? badgeBefore;

const resolveAfterSlot = (
  iconAfter?: ChipIconSlot,
  badgeAfter?: ChipBadgeSlot,
) => iconAfter ?? badgeAfter;

export type ChipProps = Omit<BoxProps, keyof ChipVariantProps> &
  Omit<ChipVariantProps, 'before' | 'after'> & {
    children: string | ReactNode;
    /** Structured icon slot rendered before the label */
    iconBefore?: ChipIconSlot;
    /** Structured icon slot rendered after the label */
    iconAfter?: ChipIconSlot;
    /** Structured avatar slot rendered before the label */
    avatarBefore?: ChipAvatarSlot;
    /** Structured badge slot rendered before the label */
    badgeBefore?: ChipBadgeSlot;
    /** Structured badge slot rendered after the label */
    badgeAfter?: ChipBadgeSlot;
    disabled?: boolean;
    loading?: boolean;
    deleted?: boolean;
    dismissable?: boolean;
    error?: boolean;
    invalid?: boolean;
    onDismiss?: () => void;
    value?: string;
  };

export const Chip = (props: ChipProps) => {
  const fieldContext = useFieldContext();
  const {
    size: sizeProp,
    children,
    loading,
    disabled: disabledProp,
    deleted,
    iconBefore,
    iconAfter,
    avatarBefore,
    badgeBefore,
    badgeAfter,
    dismissable,
    onDismiss,
    value,
    error: errorProp,
    invalid: invalidProp,
    onClick,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);
  const groupContext = useChipGroup();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fieldSize = fieldContext?.size;
  const size =
    sizeProp ??
    groupContext?.size ??
    (isChipSizeKey(fieldSize) ? fieldSize : undefined) ??
    'md';
  const disabled = disabledProp ?? fieldContext?.disabled;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;

  // Determine if this chip is selectable (has value and is inside ChipGroup)
  const isSelectable = value !== undefined && groupContext !== null;

  const avatarSize = mapChiptoAvatarSize(size);
  const badgeSize = mapChiptoBadgeSize(size);

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

  // Error if more than one before or after slot is used
  if (import.meta.env.DEV) {
    const beforeSlotCount = getStructuredSlotCount([
      avatarBefore,
      iconBefore,
      badgeBefore,
    ]);
    const afterSlotCount = getStructuredSlotCount([iconAfter, badgeAfter]);

    if (beforeSlotCount > 1) {
      throw new Error(
        'Chip accepts only one before-side slot. Use one of avatarBefore, iconBefore, badgeBefore, or before.',
      );
    }

    if (afterSlotCount > 1) {
      throw new Error(
        'Chip accepts only one after-side slot. Use one of iconAfter, badgeAfter, or after.',
      );
    }

    if (dismissable && afterSlotCount > 0) {
      throw new Error(
        'Chip cannot render after-side content when dismissable is true. The dismiss affordance owns the after slot.',
      );
    }
  }

  const resolvedBefore = resolveBeforeSlot(
    avatarBefore,
    iconBefore,
    badgeBefore,
  );
  const resolvedAfter = resolveAfterSlot(iconAfter, badgeAfter);

  // Determine if there's content before/after for padding adjustments
  const hasBefore = Boolean(resolvedBefore) || isMultiSelected;
  const hasAfter = Boolean(resolvedAfter) || dismissable;

  const classes = chip({
    size,
    before: hasBefore,
    after: hasAfter,
  });

  const renderBeforeSlot = () => {
    if (avatarBefore) {
      return (
        <Avatar
          {...avatarBefore}
          size={avatarSize}
          className={classes.chipAvatar}
        />
      );
    }

    if (iconBefore) {
      return <Icon {...iconBefore} className={classes.chipIcon} />;
    }

    if (badgeBefore) {
      return (
        <Badge
          {...badgeBefore}
          size={badgeSize}
          className={classes.chipBadge}
        />
      );
    }

    return null;
  };

  const renderAfterSlot = () => {
    if (iconAfter) {
      return <Icon {...iconAfter} className={classes.chipIcon} />;
    }

    if (badgeAfter) {
      return (
        <Badge {...badgeAfter} size={badgeSize} className={classes.chipBadge} />
      );
    }

    return null;
  };
  // const dismissIconSize = chipSizeToIconSize[isChipSizeKey(size) ? size : 'md'];

  // Handle click based on chip type
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (dismissable && onDismiss) {
      onDismiss();
    } else if (isSelectable && groupContext) {
      if (groupContext.type === 'single') {
        groupContext.onChange(value);
      } else {
        // Multi-select: toggle value in array
        const currentValues = Array.isArray(groupContext.value)
          ? groupContext.value
          : [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
        groupContext.onChange(newValues);
      }
    } else if (onClick) {
      // Forward the event to the onClick prop
      onClick(e);
    }
  };

  // Handle keyboard navigation for selectable chips
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!isSelectable || !groupContext || !value) return;

    // Single select: arrow keys navigate and select
    if (groupContext.type === 'single') {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        groupContext.focusChip('next', value);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        groupContext.focusChip('prev', value);
      }
    }
    // Space/Enter handled by native button click
  };

  // Build aria-label for dismissable chips
  const childText = typeof children === 'string' ? children : undefined;
  const ariaLabel =
    dismissable && childText ? `${childText}, dismiss` : undefined;

  // Determine role for selectable chips
  const role = isSelectable
    ? groupContext.type === 'single'
      ? 'radio'
      : 'checkbox'
    : undefined;

  // Roving tabindex for single select (only selected or first is tabbable)
  const getTabIndex = () => {
    if (!isSelectable || !groupContext) return undefined;
    if (groupContext.type === 'single') {
      // If this chip is selected, it's tabbable
      if (isSelected) return 0;
      // If nothing is selected and this is the first chip, it's tabbable
      const hasSelection =
        groupContext.value !== undefined && groupContext.value !== '';
      if (!hasSelection && groupContext.chipValues[0] === value) return 0;
      // Otherwise not tabbable
      return -1;
    }
    // Multi-select: all chips are tabbable
    return 0;
  };

  return (
    <Box
      as="button"
      ref={buttonRef}
      className={`${cx(classes.container, className)} group`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={getTabIndex()}
      disabled={disabled}
      aria-label={ariaLabel}
      role={role}
      aria-checked={isSelectable ? isSelected : undefined}
      data-selected={isSelected ? true : undefined}
      data-loading={loading ? true : undefined}
      aria-busy={loading ? true : undefined}
      type="button"
      data-deleted={deleted ? true : undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      aria-invalid={invalid || undefined}
      {...otherProps}
    >
      <Box
        className={classes.innerWrapper}
        // gap={gap}
        opacity={loading ? 0 : 1}
      >
        {isMultiSelected && (
          <Icon name="check" className={classes.chipIcon} aria-hidden />
        )}
        {renderBeforeSlot()}
        {children}
        {dismissable ? (
          <Icon name="x" className={classes.chipIcon} aria-hidden />
        ) : (
          renderAfterSlot()
        )}
      </Box>
      {loading && <Spinner size="xs" centered />}
    </Box>
  );
};
