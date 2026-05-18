import type { BoxProps } from '../Box';
import type { IconNamesList } from '../Icon';

export type OptionProps = Omit<BoxProps, 'children'> & {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
};

export const Option = (_props: OptionProps) => {
  return null;
};

(
  Option as typeof Option & {
    __autocompleteComponentType?: string;
  }
).__autocompleteComponentType = 'Option';
