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
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';
import { useControllableState } from '~/utils/useControllableState';

import {
  ChipGroupContext,
  type ChipGroupSize,
  type ChipGroupType,
} from './ChipGroupContext';

type ChipGroupWrapProps = Pick<
  WrapProps,
  'align' | 'columnGap' | 'gap' | 'justify' | 'rowGap'
>;

type ChipGroupOwnProps = {
  /** Required selection model. `'single'` uses radio semantics; `'multi'` uses checkbox semantics. */
  type: ChipGroupType;
  /** Controlled selected value. Use a string for `'single'` or a string array for `'multi'`, with `onChange` to accept updates. */
  value?: string | string[];
  /**
   * Initial selected value for an uncontrolled group. It is used only on first render.
   * @default '' for `'single'`; [] for `'multi'`
   */
  defaultValue?: string | string[];
  /** Called with the next selection when a child chip is activated. */
  onChange?: (value: string | string[]) => void;
  /** `Chip` children. Chips require a unique `value` to participate in selection. */
  children: ReactNode;
  /** Size inherited by child chips unless a child supplies its own size. */
  size?: ChipGroupSize;
  /** Accessible name applied to the group container. */
  label?: string;
  /** Container identifier. When supplied, the container references `${id}-label`, which consumers must render themselves. */
  id?: string;
  /** Shared form metadata exposed to child-chip context; it does not create native form inputs. */
  name?: string;
};

/** Props for {@link ChipGroup}, which coordinates selectable child chips. */
export type ChipGroupProps = Omit<
  BoxProps,
  keyof ChipGroupWrapProps | keyof ChipGroupOwnProps | 'role'
> &
  ChipGroupWrapProps &
  ChipGroupOwnProps;

const isChipGroupSize = (
  size: unknown,
): size is Extract<ChipGroupSize, string> =>
  size === 'sm' || size === 'md' || size === 'lg';

/**
 * Coordinates the selection and keyboard behavior of child {@link Chip} values.
 *
 * Use `value` with `onChange` for controlled selection, or `defaultValue` for
 * initialization only. In a single-select group, arrow keys move focus and
 * select the newly focused chip. Label the group with `label` when it needs an
 * accessible name.
 *
 * @example
 * ```tsx
 * <ChipGroup type="single" defaultValue="all" label="Status">
 *   <Chip value="all">All</Chip>
 *   <Chip value="open">Open</Chip>
 * </ChipGroup>
 * ```
 */
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

  const chipRefs = useRef<Map<
    string,
    RefObject<HTMLButtonElement | null>
  > | null>(null);
  if (chipRefs.current === null) {
    chipRefs.current = new Map();
  }
  const currentChipRefs = chipRefs.current;
  const [selectedValue, setSelectedValue] = useControllableState({
    value,
    defaultValue: defaultValue ?? (type === 'single' ? '' : ([] as string[])),
    onChange,
  });
  const [chipValues, setChipValues] = useState<string[]>([]);

  const registerChip = useCallback(
    (chipValue: string, ref: RefObject<HTMLButtonElement | null>) => {
      currentChipRefs.set(chipValue, ref);
      setChipValues((currentValues) =>
        currentValues.includes(chipValue)
          ? currentValues
          : [...currentValues, chipValue],
      );
    },
    [currentChipRefs],
  );

  const unregisterChip = useCallback(
    (chipValue: string) => {
      currentChipRefs.delete(chipValue);
      setChipValues((currentValues) =>
        currentValues.filter((currentValue) => currentValue !== chipValue),
      );
    },
    [currentChipRefs],
  );

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
        const nextRef = currentChipRefs.get(nextValue);
        nextRef?.current?.focus();

        if (type === 'single') {
          setSelectedValue(nextValue);
        }
      }
    },
    [chipValues, currentChipRefs, setSelectedValue, type],
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
        {...dsComponent('ChipGroup')}
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
