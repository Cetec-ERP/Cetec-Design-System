import { cx } from '@styled-system/css';

import {
  highlightText,
  type HighlightTextVariantProps,
} from '~/styled-system/recipes';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

type HighlightPart = {
  text: string;
  match: boolean;
};

type HighlightMatchMode = 'substring' | 'fuzzy';

const normalizeQuery = (query: string) => query.trim().toLowerCase();

const getSubstringHighlightParts = (
  value: string,
  query: string,
): HighlightPart[] => {
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regExp = new RegExp(`(${safeQuery})`, 'ig');
  const parts = value.split(regExp).filter((part) => part.length > 0);
  const normalizedQuery = query.toLowerCase();

  return parts.map((part) => ({
    text: part,
    match: part.toLowerCase() === normalizedQuery,
  }));
};

const getFuzzyHighlightParts = (
  value: string,
  query: string,
): HighlightPart[] => {
  const normalizedQuery = normalizeQuery(query);
  const normalizedValue = value.toLowerCase();
  const substringIndex = normalizedValue.indexOf(normalizedQuery);

  if (substringIndex >= 0) {
    return [
      { text: value.slice(0, substringIndex), match: false },
      {
        text: value.slice(
          substringIndex,
          substringIndex + normalizedQuery.length,
        ),
        match: true,
      },
      {
        text: value.slice(substringIndex + normalizedQuery.length),
        match: false,
      },
    ].filter((part) => part.text.length > 0);
  }

  const matchedIndices: number[] = [];
  let textIndex = 0;

  for (
    let queryIndex = 0;
    queryIndex < normalizedQuery.length;
    queryIndex += 1
  ) {
    const queryChar = normalizedQuery[queryIndex];
    let matched = false;

    while (textIndex < normalizedValue.length) {
      if (normalizedValue[textIndex] === queryChar) {
        matchedIndices.push(textIndex);
        textIndex += 1;
        matched = true;
        break;
      }

      textIndex += 1;
    }

    if (!matched) {
      return [{ text: value, match: false }];
    }
  }

  if (matchedIndices.length === 0) {
    return [{ text: value, match: false }];
  }

  const parts: HighlightPart[] = [];
  let cursor = 0;

  matchedIndices.forEach((index) => {
    if (index > cursor) {
      parts.push({
        text: value.slice(cursor, index),
        match: false,
      });
    }

    parts.push({
      text: value.slice(index, index + 1),
      match: true,
    });
    cursor = index + 1;
  });

  if (cursor < value.length) {
    parts.push({
      text: value.slice(cursor),
      match: false,
    });
  }

  return parts.filter((part) => part.text.length > 0);
};

const getHighlightParts = (
  value: string,
  query: string,
  matchMode: HighlightMatchMode,
): HighlightPart[] => {
  if (!query.trim()) {
    return [{ text: value, match: false }];
  }

  if (matchMode === 'fuzzy') {
    return getFuzzyHighlightParts(value, query);
  }

  return getSubstringHighlightParts(value, query);
};

export type HighlightTextProps = Omit<
  BoxProps,
  keyof HighlightTextVariantProps
> &
  HighlightTextVariantProps & {
    value: string;
    query: string;
    enabled?: boolean;
    matchMode?: HighlightMatchMode;
  };

export const HighlightText = (props: HighlightTextProps) => {
  const {
    value,
    query,
    enabled = true,
    matchMode = 'substring',
    ...rest
  } = props;

  const [className, otherProps] = splitProps(rest);

  if (!enabled || !query.trim()) {
    return <>{value}</>;
  }

  const parts = getHighlightParts(value, query, matchMode);
  let runningOffset = 0;

  return (
    <>
      {parts.map((part) => {
        const key = `${part.text}-${runningOffset}`;
        runningOffset += part.text.length;

        if (!part.match) {
          return <span key={key}>{part.text}</span>;
        }

        return (
          <Box
            as="mark"
            key={key}
            className={cx(highlightText(), className)}
            {...otherProps}
          >
            {part.text}
          </Box>
        );
      })}
    </>
  );
};
