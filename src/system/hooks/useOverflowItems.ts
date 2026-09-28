import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

/** Identity of one measured item. Keys must be unique and stable across renders. */
export type OverflowItemKey = string | number;

/** Options accepted by {@link useOverflowItems}. */
export type UseOverflowItemsOptions<TKey extends OverflowItemKey> = {
  /** Candidate keys in source order. The returned arrays preserve this order. */
  items: readonly TKey[];
  /** Ref for the element whose content box constrains the visible items. */
  containerRef: RefObject<HTMLElement | null>;
  /**
   * Resolves the measured element for a key. Overflowed elements must stay in
   * the DOM (for example `visibility: hidden; position: absolute`) so their
   * `offsetWidth` remains readable. Keep the function referentially stable.
   */
  getItemElement: (key: TKey) => HTMLElement | null;
  /**
   * Key that must always end up visible, and the anchor that space is
   * allocated around: candidates nearest to it win the available width.
   */
  activeItem?: TKey | null;
  /**
   * Width in CSS pixels held back for the overflow toggle.
   * @default 32
   */
  reserve?: number;
  /**
   * Element whose rendered width is held back for the overflow toggle. When
   * present, its measured width takes precedence over `reserve`.
   */
  reserveRef?: RefObject<HTMLElement | null>;
  /**
   * Enables measurement. When `false`, every item is reported as visible.
   * @default true
   */
  enabled?: boolean;
};

/** Result returned by {@link useOverflowItems}. */
export type UseOverflowItemsResult<TKey extends OverflowItemKey> = {
  /** Items that fit, in source order. */
  visible: TKey[];
  /** Items that do not fit, in source order. */
  overflow: TKey[];
  /** Whether at least one item overflowed. */
  hasOverflow: boolean;
  /** Forces a synchronous remeasure, for content changes no observer reports. */
  measure: () => void;
  /** Makes an item visible, then runs a callback after the DOM updates. */
  ensureVisible: (key: TKey, onVisible?: () => void) => void;
};

const DEFAULT_RESERVE = 32;

const areKeysEqual = <TKey extends OverflowItemKey>(
  a: readonly TKey[],
  b: readonly TKey[],
) => a.length === b.length && a.every((key, index) => key === b[index]);

const syncObservedElements = (
  observer: ResizeObserver | null,
  current: ReadonlySet<Element>,
  desired: Set<Element>,
) => {
  for (const element of current) {
    if (!desired.has(element)) observer?.unobserve(element);
  }
  for (const element of desired) {
    if (!current.has(element)) observer?.observe(element);
  }

  return desired;
};

/**
 * Splits a row of items into the ones that fit and the ones that overflow.
 *
 * Implements the "priority plus" pattern: usable width is the container's
 * client width minus its horizontal padding, with the container's column gap
 * charged between items. A reserve for the overflow toggle is subtracted only
 * once the row is known to overflow, so a row that fits never loses an item to
 * a toggle that is not rendered. Candidates compete for that width ordered by
 * distance from `activeItem`, so the items nearest the active one win. The
 * first candidate that does not fit ends the walk, and everything after it
 * overflows too;
 * later, narrower items are not squeezed in because that reorders the row
 * unpredictably. `activeItem` is always forced back into `visible`.
 *
 * The hook only measures — the caller decides what to render. Overflowed
 * elements must remain in the DOM for `offsetWidth` to stay readable. It
 * remeasures on `ResizeObserver` entries for the container and each item, and
 * on window resize, throttled through `requestAnimationFrame`.
 *
 * @example
 * ```tsx
 * const { visible, overflow } = useOverflowItems({
 *   items: ids,
 *   containerRef,
 *   getItemElement: useCallback((id) => elements.current.get(id) ?? null, []),
 *   activeItem: selectedId,
 * });
 * ```
 */
export const useOverflowItems = <TKey extends OverflowItemKey>({
  items,
  containerRef,
  getItemElement,
  activeItem = null,
  reserve = DEFAULT_RESERVE,
  reserveRef,
  enabled = true,
}: UseOverflowItemsOptions<TKey>): UseOverflowItemsResult<TKey> => {
  const [visible, setVisible] = useState<TKey[]>(() => [...items]);
  const [overflow, setOverflow] = useState<TKey[]>([]);
  const [forcedItem, setForcedItem] = useState<TKey | null>(null);
  const frameRef = useRef<number | null>(null);
  const itemsRef = useRef<readonly TKey[]>(items);
  const activeItemRef = useRef<TKey | null>(activeItem);
  const forcedItemRef = useRef<TKey | null>(forcedItem);
  const reserveValueRef = useRef(reserve);
  const reserveElementRef = useRef<HTMLElement | null>(null);
  const enabledRef = useRef(enabled);
  const observerRef = useRef<ResizeObserver | null>(null);
  const observedElementsRef = useRef(new Set<Element>());
  const pendingVisibilityRef = useRef<{
    key: TKey;
    onVisible?: () => void;
  } | null>(null);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const currentItems = itemsRef.current;

    if (!enabledRef.current || !container) {
      setVisible((current) =>
        areKeysEqual(current, currentItems) ? current : [...currentItems],
      );
      setOverflow((current) => (current.length === 0 ? current : []));
      return;
    }

    const styles = globalThis.getComputedStyle(container);
    const paddingInline =
      Number.parseFloat(styles.paddingLeft || '0') +
      Number.parseFloat(styles.paddingRight || '0');
    const gap = Number.parseFloat(styles.columnGap || '0') || 0;
    const fullWidth = container.clientWidth - paddingInline;

    const widths = currentItems.map(
      (key) => getItemElement(key)?.offsetWidth ?? Number.POSITIVE_INFINITY,
    );

    const priorityItem = forcedItemRef.current ?? activeItemRef.current;
    const activeIndex =
      priorityItem === null ? -1 : currentItems.indexOf(priorityItem);
    const anchor = activeIndex === -1 ? 0 : activeIndex;

    // Nearest the active item wins the space; source order only breaks ties.
    const byDistanceFromActive = currentItems
      .map((_key, index) => index)
      .sort((a, b) => {
        const distance = Math.abs(a - anchor) - Math.abs(b - anchor);
        return distance === 0 ? a - b : distance;
      });

    // Each kept item after the first also costs one column gap.
    const fit = (forcedIndex: number | null, usable: number) => {
      const kept = new Set<number>();
      let used = 0;

      if (forcedIndex !== null) {
        kept.add(forcedIndex);
        used += widths[forcedIndex] ?? 0;
      }

      for (const index of byDistanceFromActive) {
        if (kept.has(index)) continue;

        const width = (widths[index] ?? 0) + (kept.size > 0 ? gap : 0);
        // Once one candidate does not fit, everything after it overflows too.
        if (used + width > usable) break;

        used += width;
        kept.add(index);
      }

      return kept;
    };

    // Try the full width first: the toggle only exists once something
    // overflows, so reserving its space up front would hide an item that fits.
    let kept = fit(null, fullWidth);

    if (kept.size < currentItems.length) {
      // Something overflows, so the toggle renders: hold back its measured
      // width. It is positioned outside the row, so it does not consume a gap.
      const reservedWidth =
        reserveElementRef.current?.offsetWidth ?? reserveValueRef.current;
      const usable = fullWidth - reservedWidth;
      kept = fit(null, usable);

      // The active item must always end up visible.
      if (activeIndex !== -1 && !kept.has(activeIndex)) {
        kept = fit(activeIndex, usable);
      }
    }

    const nextVisible: TKey[] = [];
    const nextOverflow: TKey[] = [];

    currentItems.forEach((key, index) => {
      if (kept.has(index)) {
        nextVisible.push(key);
      } else {
        nextOverflow.push(key);
      }
    });

    setVisible((current) =>
      areKeysEqual(current, nextVisible) ? current : nextVisible,
    );
    setOverflow((current) =>
      areKeysEqual(current, nextOverflow) ? current : nextOverflow,
    );
  }, [containerRef, getItemElement]);

  const ensureVisible = useCallback(
    (key: TKey, onVisible?: () => void) => {
      if (!itemsRef.current.includes(key)) return;

      if (!overflow.includes(key)) {
        onVisible?.();
        return;
      }

      pendingVisibilityRef.current = { key, onVisible };
      setForcedItem(key);
    },
    [overflow],
  );

  useLayoutEffect(() => {
    const schedule = () => {
      if (frameRef.current !== null) {
        globalThis.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = globalThis.requestAnimationFrame(() => {
        frameRef.current = null;
        measure();
      });
    };

    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(schedule);
    observerRef.current = observer;

    globalThis.addEventListener('resize', schedule);

    return () => {
      observer?.disconnect();
      observerRef.current = null;
      observedElementsRef.current.clear();
      globalThis.removeEventListener('resize', schedule);

      if (frameRef.current !== null) {
        globalThis.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [measure]);

  useLayoutEffect(() => {
    if (!areKeysEqual(itemsRef.current, items)) {
      itemsRef.current = [...items];
    }
    activeItemRef.current = activeItem;
    forcedItemRef.current = forcedItem;
    reserveValueRef.current = reserve;
    reserveElementRef.current = reserveRef?.current ?? null;
    enabledRef.current = enabled;

    const desiredElements = new Set<Element>();
    const container = containerRef.current;

    if (enabled && container) {
      desiredElements.add(container);
      if (reserveElementRef.current) {
        desiredElements.add(reserveElementRef.current);
      }
      for (const key of itemsRef.current) {
        const element = getItemElement(key);
        if (element) desiredElements.add(element);
      }
    }

    observedElementsRef.current = syncObservedElements(
      observerRef.current,
      observedElementsRef.current,
      desiredElements,
    );

    measure();
  }, [
    activeItem,
    containerRef,
    enabled,
    forcedItem,
    getItemElement,
    items,
    measure,
    reserve,
    reserveRef,
  ]);

  useLayoutEffect(() => {
    const pending = pendingVisibilityRef.current;
    if (!pending) return;

    if (!itemsRef.current.includes(pending.key)) {
      pendingVisibilityRef.current = null;
      setForcedItem(null);
      return;
    }

    if (overflow.includes(pending.key)) return;

    pendingVisibilityRef.current = null;
    pending.onVisible?.();
    setForcedItem(null);
  }, [overflow]);

  return {
    visible,
    overflow,
    hasOverflow: overflow.length > 0,
    measure,
    ensureVisible,
  };
};
