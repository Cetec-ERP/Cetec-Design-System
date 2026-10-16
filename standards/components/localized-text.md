# Localized Text

Components must not hard-code English text. The app translates built-in text
through `LocaleProvider`, so a string that skips the provider cannot be
translated.

## Hard Standards

1. Text that a component renders or announces comes from `useLocale().labels`.
   This includes visible text, `aria-label`, `altText`, tooltips, placeholders,
   and live-region announcements.
2. Each new string gets a key in the `LocaleLabels` interface and an English
   default in `defaultLocaleLabels` (`src/system/context/locale-labels.ts`).
   Put the key in the group for its component, and give it a one-line JSDoc
   that names the component.
3. A string that includes a value is a function, such as
   `showAllLines: (count) => \`Show all ${count} lines\``. Do not build the
   sentence in the component. Word order and plurals change between languages.
4. A component that has a label prop keeps it. Use the provider label as the
   prop default, so the prop still overrides the provider:
   `copyLabel = labels.copyCode`.
5. A new function key gets a sample value in `functionLabels` in
   `src/storybook/docs/localization.mdx`, so the Localization page can show it.
6. Text that the app passes in, such as `title` or `label`, is the app's job.
   Do not add a key for it.

## Guidance

- JSDoc examples and story content can use English. The rule covers text
  that the component itself supplies.
- Story tests that find elements by name use the English default. They still
  pass without a provider.
- Add a story in `LocaleProvider.stories.tsx` when a component gets its first
  keys. It proves the component reads the provider.
