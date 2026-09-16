import { useMemo, type ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { list, type ListVariantProps } from '@styled-system/recipes';

import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

import { ListProvider } from './listContext';

import type { ListDensity } from './listContext';

/**
 * Props for {@link List}. Its values are provided to nested list primitives
 * through list context.
 */
export type ListProps = Omit<BoxProps, keyof ListVariantProps | 'children'> &
  ListVariantProps & {
    /** List items and optional {@link ListItemGroup} sections. */
    children: ReactNode;
    /**
     * Shared spacing density for descendants that do not set their own density.
     * Responsive recipe values are supported.
     *
     * @default 'compact'
     */
    density?: ListDensity;
    /**
     * Search text inherited by descendants that do not provide their own
     * `query`. It is used only when highlighting is enabled.
     *
     * @default ''
     */
    query?: string;
    /**
     * Enables highlighting of inherited `query` matches in default
     * `ListItem` labels and descriptions. Child items can override it.
     *
     * @default false
     */
    highlightMatches?: boolean;
  };

/**
 * Lays out related {@link ListItem} controls and shares density and search
 * highlighting settings with its descendants.
 *
 * The component renders a `div` and does not assign an ARIA role. When its
 * children are interactive options, provide the appropriate role and label
 * (for example, `role="listbox"` and `aria-label`).
 *
 * @example
 * ```tsx
 * <List role="listbox" aria-label="Account settings">
 *   <ListItem label="Profile" />
 * </List>
 * ```
 */
export const List = (props: ListProps) => {
  const {
    children,
    density = 'compact',
    query = '',
    highlightMatches = false,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const value = useMemo(
    () => ({
      density,
      query,
      highlightMatches,
    }),
    [density, query, highlightMatches],
  );

  return (
    <ListProvider value={value}>
      <Box
        {...dsComponent('List')}
        {...otherProps}
        className={cx(list({ density }), className)}
      >
        {children}
      </Box>
    </ListProvider>
  );
};
