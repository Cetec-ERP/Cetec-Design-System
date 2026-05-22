import { useCallback, useState } from 'react';

export type UseControllableStateProps<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
};

export const useControllableState = <T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;

  const setValue = useCallback(
    (nextValue: T | ((currentValue: T) => T)) => {
      const resolvedValue =
        typeof nextValue === 'function'
          ? (nextValue as (currentValue: T) => T)(currentValue)
          : nextValue;

      if (!isControlled) {
        setUncontrolledValue(resolvedValue);
      }

      onChange?.(resolvedValue);
    },
    [currentValue, isControlled, onChange],
  );

  return [currentValue, setValue, isControlled] as const;
};
