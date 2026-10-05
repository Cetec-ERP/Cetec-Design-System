# I18N: Locale Provider and Built-in Labels

**Author:** Shaun Fox · **Started:** 2026-10-05

## Goal

Let the app translate the design system's built-in text and give the date
components a locale. The design system does not translate anything itself and
does not depend on any translation library.

## Scope for 5.0

The design system uses a locale for two things only:

1. **Built-in labels.** Text that components render or announce, such as
   "Close dialog", "No results found" and "Previous month".
2. **Date components.** Month and weekday names in `Calendar`, from the
   browser's `Intl` formatters.

Out of scope for 5.0:

- Date order, 12- or 24-hour time, and first day of week. These stay as
  component props (`format`, `timeFormat`) and the week still starts on
  Sunday. A separate format setting comes later.
- The `AM` / `PM` values in 12-hour time controls. They belong with the
  hour-cycle format setting.
- Text direction. Components read it from `<html dir>`.

## PR 1: provider and labels

- `LocaleProvider` with `locale` (default `en-US`) and optional `labels`.
- `useLocale()` returns `{ locale, labels }`. It works without a provider.
- `LocaleLabels` holds 60 labels with English defaults
  (`defaultLocaleLabels`). Labels that include a value are functions, such as
  `moreSelected: (count) => string`, so the app can use its own plural rules.
- Providers nest. An inner provider overrides only what it sets.
- A label prop on a component still overrides the provider.
- English output does not change.

## PR 2: Calendar names from Intl

- Month names, month abbreviations, weekday headers and day accessible names
  come from `Intl.DateTimeFormat(locale)`.
- Weekday headers use the `short` form without a trailing period. English
  changes from `SU MO TU` to `SUN MON TUE`, because `Intl` has no two-letter
  form.
- An invalid or unsupported locale falls back to `en-US`.
- All dates are formatted in UTC, so the user's time zone cannot shift a day.
- The week still starts on Sunday.
- Stories for `fr-FR` and `es-ES`. The Docs / Localization page lists what the
  locale changes.

## Not changed

- Developer console warnings.
- `BreakpointIndicator`, a development-only tool.
