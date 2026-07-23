import type {
  CSSProperties,
  HTMLProps,
  ReactNode,
  RefCallback,
  UIEventHandler,
} from 'react';

import { cx } from '@styled-system/css';
import { menu } from '@styled-system/recipes';

import type { MenuDensity } from '~/components/Menu';

import { Box } from '../Box';
import { List, ListItem } from '../List';

import type { AnyAutocompleteValue, AutocompleteOptionData } from './types';

type AutocompleteListboxProps = {
  activeIndex: number | null;
  baseId: string;
  density: MenuDensity;
  floatingProps: Record<string, unknown>;
  floatingRef: RefCallback<HTMLDivElement>;
  floatingStyles: CSSProperties;
  getItemProps: (props: HTMLProps<HTMLElement>) => Record<string, unknown>;
  items: readonly AutocompleteOptionData[];
  listboxClassName: string;
  listboxId: string;
  loading: boolean;
  loadingMore: boolean;
  loadingText: ReactNode;
  multiple: boolean;
  noOptionsText: ReactNode;
  onScroll: UIEventHandler<HTMLDivElement>;
  onSelect: (option: AutocompleteOptionData) => void;
  query: string;
  selectedValues: readonly string[];
  setItemRef: (index: number, node: HTMLElement | null) => void;
  statusClassName: string;
  value: AnyAutocompleteValue;
};

export const AutocompleteListbox = (props: AutocompleteListboxProps) => {
  const {
    activeIndex,
    baseId,
    density,
    floatingProps,
    floatingRef,
    floatingStyles,
    getItemProps,
    items,
    listboxClassName,
    listboxId,
    loading,
    loadingMore,
    loadingText,
    multiple,
    noOptionsText,
    onScroll,
    onSelect,
    query,
    selectedValues,
    setItemRef,
    statusClassName,
    value,
  } = props;
  const menuClasses = menu({ density });
  const showInitialLoading = loading && items.length === 0;
  const showNoOptions = !loading && items.length === 0;

  return (
    <List
      ref={floatingRef}
      id={listboxId}
      role="listbox"
      aria-label="Suggestions"
      aria-multiselectable={multiple || undefined}
      aria-busy={loading || loadingMore || undefined}
      density={density}
      query={query}
      highlightMatches
      className={cx(menuClasses.wrapper, listboxClassName)}
      style={floatingStyles}
      onScroll={onScroll}
      {...floatingProps}
    >
      {items.map((option, index) => {
        const selected = multiple
          ? selectedValues.includes(option.value)
          : value === option.value;

        return (
          <ListItem
            key={`${option.created ? 'create' : 'option'}-${option.value}`}
            id={`${baseId}-option-${index}`}
            ref={(node: HTMLElement | null) => setItemRef(index, node)}
            disabled={option.disabled}
            selected={selected}
            density={density}
            variant={multiple ? 'checkbox' : 'default'}
            label={option.label}
            description={option.description}
            iconBefore={option.iconLeft}
            iconAfter={option.iconRight}
            highlightMatches={!option.created}
            highlightMatchMode="fuzzy"
            tabIndex={-1}
            bg={activeIndex === index ? 'bg.neutral.hovered' : undefined}
            data-active={activeIndex === index || undefined}
            {...getItemProps({
              onMouseDown: (event) => event.preventDefault(),
              onClick: () => {
                if (!option.disabled) {
                  onSelect(option);
                }
              },
            })}
          />
        );
      })}

      {showInitialLoading && (
        <Box className={statusClassName} role="status">
          {loadingText}
        </Box>
      )}

      {showNoOptions && (
        <Box className={statusClassName} role="status">
          {noOptionsText}
        </Box>
      )}

      {loadingMore && (
        <Box className={statusClassName} role="status">
          {loadingText}
        </Box>
      )}
    </List>
  );
};
