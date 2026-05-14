import { createContext, useContext } from 'react';

export type SlotOwner = 'Button' | 'Chip' | 'TextInput';

export type SlotPlacement = 'before' | 'after';

export type SlotContextValue = {
  owner: SlotOwner;
  placement: SlotPlacement;
  size?: string | Record<string, string>;
  fill?: string | Record<string, string>;
  disabled?: boolean;
  error?: boolean;
  invalid?: boolean;
};

export const SlotContext = createContext<SlotContextValue | null>(null);

export const useSlotContext = () => {
  return useContext(SlotContext);
};
