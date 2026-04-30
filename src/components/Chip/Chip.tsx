import {
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
} from 'react';

import { cx } from '@styled-system/css';
import { chip, type ChipVariantProps } from '@styled-system/recipes';

import { Avatar, type AvatarProps } from '~/components/Avatar';
import { Badge, type BadgeProps } from '~/components/Badge';
import { Box, type BoxProps } from '~/components/Box';
import { Icon, type IconNamesList, type IconProps } from '~/components/Icon';
import { Spinner } from '~/components/Spinner';
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
  Omit<
    ChipVariantProps,
    'before' | 'after' | 'beforeKind' | 'afterKind' | 'dismissable'
  > & {
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
    dismissLabel?: string;
    onDismiss?: () => void;
    type?: 'submit' | 'reset' | 'button';
    value?: string;
  };

export const Chip = (props: ChipProps) => {
  const {
    size: sizeProp,
    children,
    loading,
    disabled,
    deleted,
    iconBefore,
    iconAfter,
    avatarBefore,
    badgeBefore,
    badgeAfter,
    dismissable,
    dismissLabel,
    onDismiss,
    value,
    onClick,
    type = 'button',
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);
  const groupContext = useChipGroup();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const size = sizeProp ?? groupContext?.size ?? 'md';

  // Determine if this chip is selectable (has value and is inside ChipGroup)
  const isSelectable = value !== undefined && groupContext !== null;
  const hasPrimaryAction = Boolean(onClick) || isSelectable;

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
    if (dismissable && typeof children !== 'string' && !dismissLabel) {
      throw new Error(
        'Chip requires dismissLabel when dismissable is true and children is not plain text.',
      );
    }
  }

  const resolvedBefore = resolveBeforeSlot(
    avatarBefore,
    iconBefore,
    badgeBefore,
  );
  const resolvedAfter = resolveAfterSlot(iconAfter, badgeAfter);
  const beforeKind = isMultiSelected
    ? 'check'
    : avatarBefore
      ? 'avatar'
      : iconBefore
        ? 'icon'
        : badgeBefore
          ? 'badge'
          : undefined;
  const afterKind = iconAfter ? 'icon' : badgeAfter ? 'badge' : undefined;

  const hasBefore = Boolean(resolvedBefore) || isMultiSelected;
  const hasAfter = Boolean(resolvedAfter) || dismissable;

  const classes = chip({
    size,
    before: hasBefore,
    after: hasAfter,
    beforeKind,
    afterKind,
    dismissable,
  });

  const renderBeforeSlot = () => {
    let slotContent: ReactNode = null;

    if (avatarBefore) {
      slotContent = (
        <Avatar
          {...avatarBefore}
          size={avatarSize}
          className={classes.chipAvatar}
        />
      );
    } else if (iconBefore) {
      slotContent = <Icon {...iconBefore} className={classes.chipIcon} />;
    } else if (badgeBefore) {
      slotContent = (
        <Badge
          {...badgeBefore}
          size={badgeSize}
          className={classes.chipBadge}
        />
      );
    }

    return slotContent ? (
      <Box as="span" className={classes.beforeSlot}>
        {slotContent}
      </Box>
    ) : null;
  };

  const renderAfterSlot = () => {
    let slotContent: ReactNode = null;

    if (iconAfter) {
      slotContent = <Icon {...iconAfter} className={classes.chipIcon} />;
    } else if (badgeAfter) {
      slotContent = (
        <Badge {...badgeAfter} size={badgeSize} className={classes.chipBadge} />
      );
    }

    return slotContent ? (
      <Box as="span" className={classes.afterSlot}>
        {slotContent}
      </Box>
    ) : null;
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
  const bodyClassName = `${classes.body} group`;

  const bodyContent = (
    <Box className={classes.innerWrapper} opacity={loading ? 0 : 1}>
      {isMultiSelected && (
        <Box as="span" className={classes.beforeSlot}>
          <Icon name="check" className={classes.chipIcon} aria-hidden />
        </Box>
      )}
      {renderBeforeSlot()}
      {children}
      {!dismissable && renderAfterSlot()}
    </Box>
  );

  if (dismissable) {
    return (
      <Box
        className={cx(classes.container, className)}
        data-loading={loading ? true : undefined}
        data-deleted={deleted ? true : undefined}
        data-disabled={disabled || undefined}
        {...otherProps}
      >
        {hasPrimaryAction ? (
          <Box
            as="button"
            ref={buttonRef}
            className={bodyClassName}
            onClick={handleBodyClick}
            onKeyDown={handleKeyDown}
            tabIndex={getTabIndex()}
            disabled={disabled || loading}
            role={role}
            aria-checked={isSelectable ? isSelected : undefined}
            aria-busy={loading ? true : undefined}
            data-selected={isSelected ? true : undefined}
            data-loading={loading ? true : undefined}
            data-deleted={deleted ? true : undefined}
            type={type}
          >
            {bodyContent}
          </Box>
        ) : (
          <Box
            as="span"
            className={bodyClassName}
            data-loading={loading ? true : undefined}
            data-deleted={deleted ? true : undefined}
            data-disabled={disabled || undefined}
          >
            {bodyContent}
          </Box>
        )}
        <Box
          as="button"
          type="button"
          className={`${cx(classes.dismissButton)} group`}
          aria-label={resolvedDismissLabel}
          disabled={dismissDisabled}
          data-selected={isSelected ? true : undefined}
          data-loading={loading ? true : undefined}
          data-deleted={deleted ? true : undefined}
          onClick={onDismiss}
        >
          <Icon
            name="x"
            size={chipSizeToIconSize[isChipSizeKey(size) ? size : 'md']}
            className={classes.chipIcon}
            aria-hidden
            opacity={loading ? 0 : 1}
          />
        </Box>
        {loading && <Spinner size="sm" centered />}
      </Box>
    );
  }

  return (
    <Box
      as="button"
      ref={buttonRef}
      className={`${cx(classes.container, classes.body, className)} group`}
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
      {...otherProps}
    >
      {bodyContent}
      {loading && <Spinner size="sm" centered />}
    </Box>
  );
};
