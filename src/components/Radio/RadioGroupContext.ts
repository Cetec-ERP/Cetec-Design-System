import { createContext, useContext } from 'react';

export type RadioGroupContextValue = {
  name: string;
  value: string | null;
  setValue: (value: string) => void;
  disabled?: boolean;
};

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(
  null,
);

export const useRadioGroup = () => {
  return useContext(RadioGroupContext);
};
