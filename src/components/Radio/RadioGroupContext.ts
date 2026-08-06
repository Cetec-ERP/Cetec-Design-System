import { createContext, useContext } from 'react';

/** Shared state supplied by {@link RadioGroup} to its descendant {@link RadioInput} controls. */
export type RadioGroupContextValue = {
  /** Shared native radio-group name. */
  name: string;
  /** Currently selected grouped radio value, or `null` when no option is selected. */
  value: string | null;
  /** Requests selection of a grouped radio value and invokes the group's `onChange` callback. */
  setValue: (value: string) => void;
  /** Whether the group disables descendants that do not explicitly set `disabled`. */
  disabled?: boolean;
};

/** Internal context used by {@link RadioGroup} and {@link RadioInput}. Prefer composing those components directly. */
export const RadioGroupContext = createContext<RadioGroupContextValue | null>(
  null,
);

/** Returns the nearest {@link RadioGroup} state, or `null` when no group is present. */
export const useRadioGroup = () => {
  return useContext(RadioGroupContext);
};
