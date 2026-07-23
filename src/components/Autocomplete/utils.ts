import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

import type { OptionProps } from './Option';
import type { AnyAutocompleteValue, AutocompleteOptionData } from './types';

const optionComponentTypeKey = '__autocompleteComponentType' as const;

export const normalizeAutocompleteText = (value: string) =>
  value.trim().toLowerCase();

export const getAutocompleteSearchText = (option: AutocompleteOptionData) => {
  return [option.label, option.description].filter(Boolean).join(' ').trim();
};

export const isAutocompleteExactMatch = (
  option: AutocompleteOptionData,
  query: string,
) => {
  const normalizedQuery = normalizeAutocompleteText(query);

  if (!normalizedQuery) {
    return false;
  }

  return (
    normalizeAutocompleteText(option.value) === normalizedQuery ||
    normalizeAutocompleteText(option.label) === normalizedQuery
  );
};

export const isAutocompleteFuzzyMatch = (text: string, query: string) => {
  const normalizedQuery = normalizeAutocompleteText(query);

  if (!normalizedQuery) {
    return true;
  }

  const normalizedText = normalizeAutocompleteText(text);

  if (normalizedText.includes(normalizedQuery)) {
    return true;
  }

  let textIndex = 0;

  for (
    let queryIndex = 0;
    queryIndex < normalizedQuery.length;
    queryIndex += 1
  ) {
    const queryCharacter = normalizedQuery[queryIndex];
    let matched = false;

    while (textIndex < normalizedText.length) {
      if (normalizedText[textIndex] === queryCharacter) {
        matched = true;
        textIndex += 1;
        break;
      }

      textIndex += 1;
    }

    if (!matched) {
      return false;
    }
  }

  return true;
};

export const isAutocompleteOptionElement = (
  child: ReactNode,
): child is ReactElement<OptionProps> => {
  return (
    isValidElement(child) &&
    typeof child.type === 'function' &&
    (child.type as { [optionComponentTypeKey]?: string })[
      optionComponentTypeKey
    ] === 'Option'
  );
};

export const normalizeAutocompleteOptions = (children: ReactNode) => {
  return Children.toArray(children).reduce<AutocompleteOptionData[]>(
    (options, child) => {
      if (isAutocompleteOptionElement(child)) {
        options.push({
          value: child.props.value,
          label: child.props.label,
          disabled: child.props.disabled,
          description: child.props.description,
          iconLeft: child.props.iconLeft,
          iconRight: child.props.iconRight,
          created: false,
        });
      }

      return options;
    },
    [],
  );
};

export const mergeAutocompleteOptions = (
  ...optionGroups: readonly (readonly AutocompleteOptionData[])[]
) => {
  const optionByValue = new Map<string, AutocompleteOptionData>();

  optionGroups.forEach((options) => {
    options.forEach((option) => {
      if (!optionByValue.has(option.value)) {
        optionByValue.set(option.value, option);
      }
    });
  });

  return Array.from(optionByValue.values());
};

export const getAutocompleteValueArray = (
  value: AnyAutocompleteValue,
  multiple: boolean,
) => {
  if (multiple) {
    return Array.isArray(value) ? value : value ? [value] : [];
  }

  return typeof value === 'string' ? [value] : [];
};

export const getFirstEnabledOptionIndex = (
  options: readonly AutocompleteOptionData[],
) => options.findIndex((option) => !option.disabled);

export const getNextEnabledOptionIndex = (
  options: readonly AutocompleteOptionData[],
  fromIndex: number | null,
  direction: 1 | -1,
) => {
  if (!options.length) {
    return null;
  }

  let index =
    fromIndex === null ? (direction === 1 ? -1 : options.length) : fromIndex;

  for (let step = 0; step < options.length; step += 1) {
    index = (index + direction + options.length) % options.length;
    const candidate = options[index];

    if (candidate && !candidate.disabled) {
      return index;
    }
  }

  return null;
};
