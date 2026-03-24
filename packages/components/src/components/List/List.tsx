import { useMemo, type ReactNode } from 'react';

import { cx } from '@cetec/styled-system/css';
import { list, type ListVariantProps } from '@cetec/styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

import { type ListDensity, ListProvider } from './listContext';

export type ListProps = Omit<BoxProps, keyof ListVariantProps | 'children'> &
  ListVariantProps & {
    children: ReactNode;
    density?: ListDensity;
    query?: string;
    highlightMatches?: boolean;
  };

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
      <Box {...otherProps} className={cx(list({}), className)}>
        {children}
      </Box>
    </ListProvider>
  );
};
