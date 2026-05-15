import { createContext, useContext } from 'react';

import type { ConditionalValue } from '@styled-system/types';

export type SlotOwner = 'Button' | 'Chip' | 'TextInput';

export type SlotPlacement = 'before' | 'after';

export type SlotContextValue = {
  owner: SlotOwner;
  placement: SlotPlacement;
  size?: ConditionalValue<string>;
  fill?: ConditionalValue<string>;
  disabled?: boolean;
  error?: boolean;
  invalid?: boolean;
};

export const SlotContext = createContext<SlotContextValue | null>(null);

export const useSlotContext = () => {
  return useContext(SlotContext);
};
