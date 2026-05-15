import type { BoxProps } from '../Box';
import type { IconNamesList } from '../Icon';

export type SelectOptionProps = Omit<BoxProps, 'children'> & {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
};

export const SelectOption = (_props: SelectOptionProps) => {
  return null;
};
