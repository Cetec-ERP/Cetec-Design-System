import { useMemo, useSyncExternalStore } from 'react';

import { breakpoints } from '~/styles/utilities';

/** Key of a Cetec viewport breakpoint token. */
type BreakpointKey = keyof typeof breakpoints;
/** Direction used when comparing a viewport or container size token. */
type QueryDirection = 'min' | 'max';

/**
 * Reports whether the viewport matches a Cetec breakpoint media query.
 *
 * Returns `false` during server rendering. The hook subscribes to browser
 * media-query changes after mounting. Use `min` for the breakpoint and wider,
 * or `max` for the generated maximum-width query.
 *
 * @param breakpoint - Cetec breakpoint token such as `md`.
 * @param direction - Whether to create a minimum- or maximum-width query.
 * @default direction 'min'
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery('lg');
 * ```
 */
export function useMediaQuery(
  breakpoint: BreakpointKey,
  direction: QueryDirection = 'min',
): boolean {
  const query = useMemo(() => {
    const breakpointValue = breakpoints[breakpoint];
    const breakpointNum = Number.parseInt(breakpointValue, 10);

    return direction === 'min'
      ? `(min-width: ${breakpointValue})`
      : `(max-width: ${breakpointNum - 1}px)`;
  }, [breakpoint, direction]);

  const mediaQuery = useMemo(() => {
    if (typeof window === 'undefined') {
      return {
        matches: false,
        addEventListener: () => {},
        removeEventListener: () => {},
      } as unknown as MediaQueryList;
    }
    return window.matchMedia(query);
  }, [query]);

  return useSyncExternalStore(
    (callback) => {
      mediaQuery.addEventListener('change', callback);
      return () => {
        mediaQuery.removeEventListener('change', callback);
      };
    },
    () => mediaQuery.matches,
    () => false,
  );
}
