import { useCallback } from 'react';

import { cx } from '@styled-system/css';
import { tabs as tabsRecipe } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Badge } from '../Badge';
import { Box, type BoxProps } from '../Box';
import { Tooltip } from '../Tooltip';

import {
  TABS_COMPONENT_TYPES,
  tabsComponentTypeKey,
  useTabsContext,
  type TabProps,
} from './context/tabsContext';

/** Static class for a tab that overflowed: hidden, but still measurable. */
const overflowedTabClass = tabsRecipe({ overflowed: true }).tab;

/**
 * Selects one panel inside a {@link Tabs} strip.
 *
 * Renders a `button` with `role="tab"`. Only the selected tab is in the tab
 * order; Arrow, Home, and End move between the others. A tab that does not fit
 * the strip stays mounted but hidden so it can still be measured, and it is
 * offered in the overflow menu instead. The menu row is plain text, so give
 * `label` when `children` are not plain text.
 *
 * @example
 * ```tsx
 * <Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">
 *   Materials
 * </Tab>
 * ```
 */
export const Tab = (props: TabProps) => {
  const {
    value,
    children,
    // Read by `Tabs` off this element's props for the overflow menu. It is
    // pulled out here so it never reaches the DOM as a stray attribute.
    label: _label,
    badge,
    badgeTooltip,
    disabled = false,
    ...rest
  } = props;

  const {
    classes,
    getPanelId,
    getTabId,
    onTabKeyDown,
    overflowValues,
    registerTabElement,
    selectTab,
    selectedValue,
  } = useTabsContext();

  const isSelected = selectedValue === value;
  const isOverflowed = overflowValues.includes(value);
  const [className, otherProps] = splitProps(rest);

  const setElement = useCallback(
    (element: HTMLButtonElement | null) => {
      registerTabElement(value, element);
    },
    [registerTabElement, value],
  );

  const tabClassName = isOverflowed ? overflowedTabClass : classes.tab;

  const hasBadge = typeof badge === 'number' && badge !== 0;
  const badgeElement = hasBadge ? (
    <Box className={classes.badge}>
      {badgeTooltip ? (
        <Tooltip text={badgeTooltip}>
          <Badge count={badge} />
        </Tooltip>
      ) : (
        <Badge count={badge} />
      )}
    </Box>
  ) : null;

  return (
    <Box
      {...({
        as: 'button',
        type: 'button',
      } satisfies BoxProps<'button'>)}
      ref={setElement}
      id={getTabId(value)}
      role="tab"
      aria-selected={isSelected}
      aria-controls={getPanelId(value)}
      aria-hidden={isOverflowed || undefined}
      disabled={disabled}
      tabIndex={isSelected && !isOverflowed ? 0 : -1}
      className={cx(tabClassName, className)}
      onClick={(event) => {
        if (disabled) return;
        selectTab(event, value, 'clicked-on-tab');
      }}
      onKeyDown={onTabKeyDown}
      {...otherProps}
    >
      {children}
      {badgeElement}
    </Box>
  );
};

(Tab as unknown as { [tabsComponentTypeKey]: string })[tabsComponentTypeKey] =
  TABS_COMPONENT_TYPES.tab;
