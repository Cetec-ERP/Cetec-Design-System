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

const getHighlightParts = (value: string, query: string): HighlightPart[] => {
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regExp = new RegExp(`(${safeQuery})`, 'ig');
  const parts = value.split(regExp).filter((part) => part.length > 0);
  const normalizedQuery = query.toLowerCase();

  return parts.map((part) => ({
    text: part,
    match: part.toLowerCase() === normalizedQuery,
  }));
};

export type HighlightTextProps = Omit<
  BoxProps,
  keyof HighlightTextVariantProps
> &
  HighlightTextVariantProps & {
    value: string;
    query: string;
    enabled?: boolean;
  };

export const HighlightText = (props: HighlightTextProps) => {
  const { value, query, enabled = true, ...rest } = props;

  const [className, otherProps] = splitProps(rest);

  if (!enabled || !query.trim()) {
    return <>{value}</>;
  }

  const parts = getHighlightParts(value, query);
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
