import { type ReactNode, useContext, useMemo } from 'react';

import { LocaleContext } from './locale-context';

import type { LocaleLabels } from './locale-labels';

/** Props for {@link LocaleProvider}. */
export interface LocaleProviderProps {
  /**
   * BCP 47 locale tag, such as `en-US` or `fr-FR`, for `Intl` formatting in
   * date components. Defaults to the parent provider's locale, then `en-US`.
   */
  locale?: string;
  /**
   * Translated built-in labels. An entry left out keeps the parent provider's
   * value, then the English default.
   */
  labels?: Partial<LocaleLabels>;
  /** Content that reads the locale and labels. */
  children: ReactNode;
}

/**
 * Provides the locale and built-in labels to design-system components.
 *
 * The design system does not translate text. The app passes its own
 * translations through `labels`. A label prop on a component overrides the
 * provider. Text direction comes from `<html dir>`, not from this provider.
 * Providers can nest; an inner provider overrides only what it sets.
 *
 * @example
 * ```tsx
 * <LocaleProvider
 *   locale="fr-FR"
 *   labels={{ closeDialog: t('ds.closeDialog'), noResults: t('ds.noResults') }}
 * >
 *   <App />
 * </LocaleProvider>
 * ```
 */
export function LocaleProvider({
  locale,
  labels,
  children,
}: LocaleProviderProps) {
  const parent = useContext(LocaleContext);
  const contextValue = useMemo(
    () => ({
      locale: locale ?? parent.locale,
      labels: labels ? { ...parent.labels, ...labels } : parent.labels,
    }),
    [locale, labels, parent],
  );

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
}
