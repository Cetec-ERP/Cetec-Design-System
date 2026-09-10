import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import type {
  KeyboardEvent as ReactKeyboardEvent,
  ReactNode,
  RefObject,
} from 'react';

import { useOverflowItems } from '~/system/hooks/useOverflowItems';
import { useControllableState } from '~/utils/useControllableState';

import {
  TABS_COMPONENT_TYPES,
  getTabsComponentType,
  type TabsChangeEvent,
  type TabsChangeReason,
  type TabsProps,
} from './context/tabsContext';

/** Width in CSS pixels held back in the strip for the overflow toggle. */
const OVERFLOW_TOGGLE_RESERVE = 32;

/** One `Tab` child, described from its props. */
export type TabDescriptor = {
  value: string;
  label: string;
  disabled: boolean;
};

type UseTabsOptions = Pick<
  TabsProps,
  'children' | 'defaultValue' | 'onChange' | 'value'
> & {
  /** Ref for the `tablist` element, used as the measurement container. */
  listRef: RefObject<HTMLElement | null>;
};

/** Flattens a label node to plain text for the overflow menu and tooltips. */
const getNodeText = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return '';
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => getNodeText(child as ReactNode)).join('');
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getNodeText(node.props.children);
  }

  return '';
};

/**
 * Owns tab selection, DOM registration, overflow measurement, and roving
 * keyboard navigation for `Tabs`.
 */
export const useTabs = ({
  children,
  value,
  defaultValue,
  onChange,
  listRef,
}: UseTabsOptions) => {
  const tabs = useMemo<TabDescriptor[]>(() => {
    const descriptors: TabDescriptor[] = [];

    Children.forEach(children, (child) => {
      if (
        !isValidElement(child) ||
        getTabsComponentType(child) !== TABS_COMPONENT_TYPES.tab
      ) {
        return;
      }

      const props = child.props as {
        value?: string;
        children?: ReactNode;
        disabled?: boolean;
      };

      if (typeof props.value !== 'string') return;

      descriptors.push({
        value: props.value,
        label: getNodeText(props.children) || props.value,
        disabled: Boolean(props.disabled),
      });
    });

    return descriptors;
  }, [children]);

  // Keep the key array referentially stable while its contents are unchanged,
  // so overflow measurement does not re-subscribe on every parent render.
  const tabValuesRef = useRef<string[]>([]);
  const tabValues = useMemo(() => {
    const next = tabs.map((tab) => tab.value);
    const previous = tabValuesRef.current;

    if (
      previous.length === next.length &&
      previous.every((item, index) => item === next[index])
    ) {
      return previous;
    }

    tabValuesRef.current = next;
    return next;
  }, [tabs]);

  const firstValue = tabValues[0] ?? '';

  const [storedValue, setStoredValue] = useControllableState<string>({
    value,
    defaultValue: defaultValue ?? firstValue,
  });

  // A conditionally rendered tab can disappear while selected. Fall back to the
  // first remaining tab instead of leaving the selection dangling.
  const selectedValue = tabValues.includes(storedValue)
    ? storedValue
    : firstValue;

  const elementsRef = useRef(new Map<string, HTMLElement>());

  const registerTabElement = useCallback(
    (tabValue: string, element: HTMLElement | null) => {
      if (element) {
        elementsRef.current.set(tabValue, element);
      } else {
        elementsRef.current.delete(tabValue);
      }
    },
    [],
  );

  const getItemElement = useCallback(
    (tabValue: string) => elementsRef.current.get(tabValue) ?? null,
    [],
  );

  const { overflow, hasOverflow } = useOverflowItems({
    items: tabValues,
    containerRef: listRef,
    getItemElement,
    activeItem: selectedValue || null,
    reserve: OVERFLOW_TOGGLE_RESERVE,
  });

  const selectTab = useCallback(
    (event: TabsChangeEvent, nextValue: string, reason: TabsChangeReason) => {
      if (nextValue === selectedValue) return;

      setStoredValue(nextValue);
      onChange?.(event, nextValue, reason);
    },
    [onChange, selectedValue, setStoredValue],
  );

  // A tab reached by the keyboard can still be in overflow at that moment, and
  // a hidden element cannot take focus. Record the intent and focus it once the
  // next measurement has put it back in the strip.
  const pendingFocusRef = useRef<string | null>(null);

  useEffect(() => {
    const pending = pendingFocusRef.current;
    if (pending === null) return;

    const element = elementsRef.current.get(pending);
    if (!element || overflow.includes(pending)) return;

    pendingFocusRef.current = null;
    element.focus();
  }, [overflow, selectedValue]);

  const onTabKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => {
      // Navigation walks every tab in source order, not only the ones that
      // currently fit: selecting an overflowed tab pulls it back into the strip.
      const navigable = tabs
        .filter((tab) => !tab.disabled)
        .map((tab) => tab.value);

      if (navigable.length === 0) return;

      const currentIndex = Math.max(0, navigable.indexOf(selectedValue));
      let nextIndex: number;

      switch (event.key) {
        case 'ArrowRight':
          nextIndex = (currentIndex + 1) % navigable.length;
          break;
        case 'ArrowLeft':
          nextIndex = (currentIndex - 1 + navigable.length) % navigable.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = navigable.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();

      const nextValue = navigable[nextIndex];
      if (nextValue === undefined) return;

      selectTab(event, nextValue, 'clicked-on-tab');

      const element = elementsRef.current.get(nextValue);
      if (element && !overflow.includes(nextValue)) {
        element.focus();
      } else {
        pendingFocusRef.current = nextValue;
      }
    },
    [overflow, selectTab, selectedValue, tabs],
  );

  const overflowTabs = useMemo(
    () =>
      overflow
        .map((item) => tabs.find((tab) => tab.value === item))
        .filter((tab): tab is TabDescriptor => Boolean(tab)),
    [overflow, tabs],
  );

  return {
    hasOverflow,
    onTabKeyDown,
    overflowTabs,
    overflowValues: overflow,
    registerTabElement,
    selectTab,
    selectedValue,
    tabs,
  };
};
