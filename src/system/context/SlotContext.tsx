import { createContext, useContext } from 'react';

export type SlotOwner = 'Button' | 'Chip' | 'TextInput';

export type SlotPlacement = 'before' | 'after';

export type SlotContextValue = {
  owner: SlotOwner;
  placement: SlotPlacement;
  size?: unknown;
  fill?: unknown;
  disabled?: boolean;
  error?: boolean;
  invalid?: boolean;
};

export const SlotContext = createContext<SlotContextValue | null>(null);

export const useSlotContext = () => {
  return useContext(SlotContext);
};
