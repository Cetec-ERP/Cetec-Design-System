import { createContext, useContext } from 'react';

import type { ListItemVariantProps } from '@styled-system/recipes';

import { type IconNamesList } from '../Icon';
/** Responsive density value shared by List primitives. */
export type ListDensity = ListItemVariantProps['density'];

/** Values inherited by descendants of a {@link ListProvider}. */
export type ListContextValue = {
  /** Resolved list spacing density. */
  density: ListDensity;
  /** Search text for default list-item content. */
  query: string;
  /** Whether default list-item text should mark query matches. */
  highlightMatches: boolean;
  /** Reserved list-item variant metadata for custom list composition. */
  variant?: ListItemVariantProps['variant'];
  /** Reserved leading icon metadata for custom list composition. */
  iconBefore?: IconNamesList;
  /** Reserved trailing icon metadata for custom list composition. */
  iconAfter?: IconNamesList;
};

/** Default context used when a list primitive has no parent {@link List}. */
const defaultListContextValue: ListContextValue = {
  density: 'compact',
  query: '',
  highlightMatches: false,
  variant: 'default',
  iconBefore: undefined,
  iconAfter: undefined,
};

/** Internal context backing {@link ListProvider}; prefer {@link List}. */
const ListContext = createContext<ListContextValue>(defaultListContextValue);

/**
 * Provides list configuration to descendant list primitives. Prefer
 * {@link List}, which creates this provider automatically.
 */
export const ListProvider = ListContext.Provider;

/**
 * Returns configuration from the nearest {@link ListProvider}, or compact,
 * empty-query, no-highlighting defaults when no provider is present.
 */
export const useListContext = () => useContext(ListContext);
