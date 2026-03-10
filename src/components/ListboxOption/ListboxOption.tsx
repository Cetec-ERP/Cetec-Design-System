import type { ChangeEventHandler } from 'react';

import type { IconNamesList } from '~/components/Icon';

import { OptionRow, OptionRowContent } from '../OptionRow';

import type { BoxProps } from '../Box';

type SelectionControl = 'none' | 'checkbox' | 'toggle';

export type ListboxOptionProps = Omit<
  BoxProps<'button'>,
  'as' | 'type' | 'children'
> & {
  label: string;
  description?: string;
  iconBefore?: IconNamesList;
  iconAfter?: IconNamesList;
  selected?: boolean;
  disabled?: boolean;
  selectionControl?: SelectionControl;
  controlName?: string;
  query?: string;
  highlightMatches?: boolean;
  onControlChange?: ChangeEventHandler<HTMLInputElement>;
};

export const ListboxOption = ({
  label,
  description,
  iconBefore,
  iconAfter,
  selected = false,
  disabled,
  selectionControl = 'none',
  controlName,
  query = '',
  highlightMatches = false,
  onControlChange,
  ...rest
}: ListboxOptionProps) => {
  return (
    <OptionRow selected={selected} disabled={disabled} {...rest}>
      <OptionRowContent
        label={label}
        description={description}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        selected={selected}
        selectionControl={selectionControl}
        controlName={controlName}
        query={query}
        highlightMatches={highlightMatches}
        onControlChange={onControlChange}
      />
    </OptionRow>
  );
};
