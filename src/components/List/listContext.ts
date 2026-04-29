import { createContext, useContext } from 'react';

import type { ListItemVariantProps } from '@styled-system/recipes';

import { type IconNamesList } from '../Icon';
export type ListDensity = ListItemVariantProps['density'];

export type ListContextValue = {
  density: ListDensity;
  query: string;
  highlightMatches: boolean;
  variant?: ListItemVariantProps['variant'];
  iconBefore?: IconNamesList;
  iconAfter?: IconNamesList;
};

const defaultListContextValue: ListContextValue = {
  density: 'compact',
  query: '',
  highlightMatches: false,
  variant: 'default',
  iconBefore: undefined,
  iconAfter: undefined,
};

const ListContext = createContext<ListContextValue>(defaultListContextValue);

export const ListProvider = ListContext.Provider;

export const useListContext = () => useContext(ListContext);
