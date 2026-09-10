import { Children, useId, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { tabs as tabsRecipe } from '@styled-system/recipes';

import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Menu, MenuItem } from '../Menu';

import {
  TABS_COMPONENT_TYPES,
  TabsProvider,
  getTabsComponentType,
  type TabsClasses,
  type TabsContextValue,
  type TabsProps,
} from './context/tabsContext';
import { useTabs } from './useTabs';

/**
 * Groups related content into a single view with one panel visible at a time.
 *
 * Compose it from `Tab` and `TabPanel` children; the first `Tab` is selected by
 * default. Selection is uncontrolled with `defaultValue` or controlled with
 * `value` plus `onChange`. Tabs that do not fit the available width move into
 * an overflow menu at the end of the strip, and the selected tab always stays
 * visible. Every panel stays mounted and hidden unless `unmountInactive` is
 * set, so read `useTabPanelActive()` to pause work in a hidden panel.
 *
 * The strip renders a `tablist` with roving tabindex and Arrow, Home, and End
 * navigation. Supply `aria-label` or `aria-labelledby` so it is announced.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="work" aria-label="Order sections">
 *   <Tab value="work">Work</Tab>
 *   <Tab value="materials" badge={3}>Materials</Tab>
 *   <TabPanel value="work">Work content</TabPanel>
 *   <TabPanel value="materials">Materials content</TabPanel>
 * </Tabs>
 * ```
 */
export const Tabs = (props: TabsProps) => {
  const {
    children,
    value,
    defaultValue,
    onChange,
    unmountInactive = false,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    ...rest
  } = props;

  const [className, otherProps] = splitProps(rest);
  const listRef = useRef<HTMLDivElement>(null);
  const baseId = useId();
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);

  const {
    hasOverflow,
    onTabKeyDown,
    overflowTabs,
    overflowValues,
    registerTabElement,
    selectTab,
    selectedValue,
  } = useTabs({ children, value, defaultValue, onChange, listRef });

  const classes = useMemo(() => tabsRecipe() as TabsClasses, []);

  // `Tab` children belong in the strip; everything else (panels and any
  // consumer markup) renders below it.
  const [tabChildren, restChildren] = useMemo(() => {
    const strip: ReactNode[] = [];
    const below: ReactNode[] = [];

    Children.forEach(children, (child) => {
      if (getTabsComponentType(child) === TABS_COMPONENT_TYPES.tab) {
        strip.push(child);
      } else {
        below.push(child);
      }
    });

    return [strip, below] as const;
  }, [children]);

  const contextValue = useMemo<TabsContextValue>(
    () => ({
      classes,
      getPanelId: (tabValue: string) => `${baseId}-panel-${tabValue}`,
      getTabId: (tabValue: string) => `${baseId}-tab-${tabValue}`,
      onTabKeyDown,
      overflowValues,
      registerTabElement,
      selectTab,
      selectedValue,
      unmountInactive,
    }),
    [
      baseId,
      classes,
      onTabKeyDown,
      overflowValues,
      registerTabElement,
      selectTab,
      selectedValue,
      unmountInactive,
    ],
  );

  return (
    <TabsProvider value={contextValue}>
      <Box
        {...dsComponent('Tabs')}
        className={cx(classes.root, className)}
        {...otherProps}
      >
        <Box
          ref={listRef}
          role="tablist"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-orientation="horizontal"
          className={classes.list}
        >
          {tabChildren}
          {hasOverflow && (
            <Box className={classes.overflow}>
              <Menu
                open={isOverflowOpen}
                onOpenChange={setIsOverflowOpen}
                placement="bottom-end"
                className={classes.menu}
                trigger={
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label="More tabs"
                    aria-haspopup="menu"
                  >
                    <Icon
                      name={isOverflowOpen ? 'caret-up' : 'caret-down'}
                      aria-hidden
                    />
                  </Button>
                }
              >
                {overflowTabs.map((tab) => (
                  <MenuItem
                    key={tab.value}
                    label={tab.label}
                    disabled={tab.disabled}
                    selected={tab.value === selectedValue}
                    onClick={(event) => {
                      selectTab(event, tab.value, 'selected-from-overflow');
                      setIsOverflowOpen(false);
                    }}
                  />
                ))}
              </Menu>
            </Box>
          )}
        </Box>
        {restChildren}
      </Box>
    </TabsProvider>
  );
};
