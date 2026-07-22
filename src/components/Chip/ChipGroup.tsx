import {
  type ReactNode,
  useRef,
  useCallback,
  useMemo,
  useState,
  type RefObject,
} from 'react';

import { cx } from '@styled-system/css';
import { Wrap, type WrapProps } from '@styled-system/jsx';

import { type BoxProps } from '~/components/Box';
import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';
import { useControllableState } from '~/utils/useControllableState';

import {
  ChipGroupContext,
  type ChipGroupSize,
  type ChipGroupType,
} from './ChipGroupContext';

export type ChipGroupProps = Omit<WrapProps, 'role'> &
  Omit<BoxProps, keyof WrapProps> & {
    type: ChipGroupType;
    value?: string | string[];
    defaultValue?: string | string[];
    onChange?: (value: string | string[]) => void;
    children: ReactNode;
    size?: ChipGroupSize;
    label?: string;
    id?: string;
    name?: string;
  };

const isChipGroupSize = (
  size: unknown,
): size is Extract<ChipGroupSize, string> =>
  size === 'sm' || size === 'md' || size === 'lg';

export const ChipGroup = (props: ChipGroupProps) => {
  const fieldContext = useFieldContext();
  const {
    type,
    value,
    defaultValue,
    onChange,
    children,
    size: sizeProp,
    label,
    id,
    name,
    gap = '4',
    className,
    ...rest
  } = props;
  const fieldSize = fieldContext?.size;
  const size = sizeProp ?? (isChipGroupSize(fieldSize) ? fieldSize : undefined);
  const [stylesClassName, otherProps] = splitProps(rest);
  const role = type === 'single' ? 'radiogroup' : 'group';

  const chipRefs = useRef<Map<string, RefObject<HTMLButtonElement | null>>>(
    new Map(),
  );
  const [selectedValue, setSelectedValue] = useControllableState({
    value,
    defaultValue: defaultValue ?? (type === 'single' ? '' : ([] as string[])),
    onChange,
  });
  const [chipValues, setChipValues] = useState<string[]>([]);

  const registerChip = useCallback(
    (chipValue: string, ref: RefObject<HTMLButtonElement | null>) => {
      chipRefs.current.set(chipValue, ref);
      setChipValues((currentValues) =>
        currentValues.includes(chipValue)
          ? currentValues
          : [...currentValues, chipValue],
      );
    },
    [],
  );

  const unregisterChip = useCallback((chipValue: string) => {
    chipRefs.current.delete(chipValue);
    setChipValues((currentValues) =>
      currentValues.filter((currentValue) => currentValue !== chipValue),
    );
  }, []);

  const focusChip = useCallback(
    (direction: 'next' | 'prev', currentValue: string) => {
      const currentIndex = chipValues.indexOf(currentValue);
      if (currentIndex === -1) return;

      let nextIndex: number;
      if (direction === 'next') {
        nextIndex =
          currentIndex === chipValues.length - 1 ? 0 : currentIndex + 1;
      } else {
        nextIndex =
          currentIndex === 0 ? chipValues.length - 1 : currentIndex - 1;
      }

      const nextValue = chipValues[nextIndex];
      if (nextValue) {
        const nextRef = chipRefs.current.get(nextValue);
        nextRef?.current?.focus();

        if (type === 'single') {
          setSelectedValue(nextValue);
        }
      }
    },
    [chipValues, setSelectedValue, type],
  );

  const contextValue = useMemo(
    () => ({
      type,
      size,
      value: selectedValue,
      onChange: setSelectedValue,
      name,
      registerChip,
      unregisterChip,
      focusChip,
      chipValues,
    }),
    [
      chipValues,
      focusChip,
      name,
      selectedValue,
      setSelectedValue,
      registerChip,
      size,
      type,
      unregisterChip,
    ],
  );

  return (
    <ChipGroupContext.Provider value={contextValue}>
      <Wrap
        className={cx(stylesClassName, className)}
        role={role}
        aria-label={label}
        aria-labelledby={id ? `${id}-label` : undefined}
        id={id}
        gap={gap}
        {...otherProps}
      >
        {children}
      </Wrap>
    </ChipGroupContext.Provider>
  );
};
