import { createContext, useContext, type RefObject } from 'react';

import type { ChipVariantProps } from '@styled-system/recipes';

/** Selection model used by {@link ChipGroup}. */
export type ChipGroupType = 'single' | 'multi';
/** Chip recipe size inherited by `Chip` descendants of a group. */
export type ChipGroupSize = ChipVariantProps['size'];

/** Shared selection and keyboard-navigation state for a {@link ChipGroup}. */
export type ChipGroupContextValue = {
  /** The group's single- or multi-select behavior. */
  type: ChipGroupType;
  /** Optional size inherited by child chips. */
  size?: ChipGroupSize;
  /** Current selected value or values. */
  value: string | string[];
  /** Updates the group's selected value or values. */
  onChange: (value: string | string[]) => void;
  /** Optional shared form metadata supplied by the group. */
  name?: string;
  /** Registers a selectable child chip for keyboard navigation. */
  registerChip: (
    value: string,
    ref: RefObject<HTMLButtonElement | null>,
  ) => void;
  /** Removes a child chip from keyboard navigation. */
  unregisterChip: (value: string) => void;
  /** Moves focus to the next or previous registered chip. */
  focusChip: (direction: 'next' | 'prev', currentValue: string) => void;
  /** Registered selectable chip values in DOM registration order. */
  chipValues: string[];
};

export const ChipGroupContext = createContext<ChipGroupContextValue | null>(
  null,
);

/** Returns the nearest `ChipGroup` context, or `null` when a chip is not grouped. */
export const useChipGroup = () => {
  return useContext(ChipGroupContext);
};
