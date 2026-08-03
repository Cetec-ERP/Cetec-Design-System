import type { IconNamesList } from '../Icon';

export type AutocompleteValue<Multiple extends boolean = false> =
  Multiple extends true
    ? string[]
    : Multiple extends false
      ? string | null
      : string | string[] | null;

export type AnyAutocompleteValue = string | string[] | null;

export type AutocompleteChangeReason =
  | 'select-option'
  | 'remove-option'
  | 'clear'
  | 'create-option';

export type AutocompleteInputChangeReason = 'input' | 'selection' | 'clear';

export type AutocompleteOpenChangeReason =
  | 'input'
  | 'focus'
  | 'keyboard'
  | 'selection'
  | 'escape'
  | 'outside-press';

export type AutocompleteOptionData = {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  iconLeft?: IconNamesList;
  iconRight?: IconNamesList;
  created?: boolean;
};

export type AutocompleteStateProps<Multiple extends boolean = false> = {
  value?: AutocompleteValue<Multiple>;
  defaultValue?: AutocompleteValue<Multiple>;
  onValueChange?: (
    value: AutocompleteValue<Multiple>,
    reason: AutocompleteChangeReason,
  ) => void;
  inputValue?: string;
  defaultInputValue?: string;
  onInputValueChange?: (
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean, reason: AutocompleteOpenChangeReason) => void;
  multiple?: Multiple;
  selectedOptionLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
};

export type AutocompleteSelectionIntent = Pick<
  AutocompleteOptionData,
  'value' | 'label' | 'disabled'
>;
