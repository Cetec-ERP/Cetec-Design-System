import type { ReactNode } from 'react';

export type SegmentValue = number | string | null;

export type SegmentedInputValueMap = Record<string, SegmentValue>;

export type SeparatorGap = 'none' | 'tight' | 'normal' | 'loose';

export type SeparatorConfig = {
  content?: ReactNode;
  gap?: SeparatorGap;
};

export type SegmentItem = {
  type: 'segment';
  id: string;
  label: string;
  placeholder: string;
  value: SegmentValue;
  disabled?: boolean;
} & (
  | {
      kind: 'numeric';
      min: number;
      max: number;
      digits: number;
      step?: number;
      format?: (value: number) => string;
      clampValue?: (value: number, values: SegmentedInputValueMap) => number;
    }
  | {
      kind: 'choice';
      choices: readonly string[];
      inputKeys?: Record<string, string>;
    }
);

export type SeparatorItem = {
  type: 'separator';
  id: string;
  content: ReactNode;
  gap?: SeparatorGap;
};

export type SegmentedInputItem = SegmentItem | SeparatorItem;

export type SegmentedInputChange = {
  values: SegmentedInputValueMap;
  changedSegmentId: string;
};
