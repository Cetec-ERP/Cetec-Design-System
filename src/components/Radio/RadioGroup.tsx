import { type ReactNode, useCallback, useMemo, useState } from 'react';

import { dsComponent } from '~/utils/dsComponent';

import { Box, type BoxProps } from '../Box';

import { RadioGroupContext } from './RadioGroupContext';

/** Props for {@link RadioGroup}, which coordinates descendant {@link RadioInput} controls. */
export type RadioGroupProps = Omit<BoxProps, 'children' | 'role'> & {
  /** Shared native name for descendant grouped radios. */ name: string;
  /** Controlled selected value. Pair with `onChange`; use `null` for no selection. */ value?:
    | string
    | null;
  /** Initial uncontrolled selected value; later updates are ignored. */
  /** @default null */
  defaultValue?: string | null;
  /** Runs with the selected child `value` after a grouped radio changes. */ onChange?: (
    value: string,
  ) => void;
  /** Grouped `RadioInput` children. */ children: ReactNode;
  /** Accessible name applied as `aria-label`. Use when no separate visible group label is available. */ label?: string;
  /** Group ID. When supplied, descendants should provide an element with `${id}-label` as the visible group label. */ id?: string;
  /** Disables descendant grouped radios unless a child explicitly supplies `disabled`. */ disabled?: boolean;
};

/**
 * Coordinates a mutually exclusive set of {@link RadioInput} controls.
 *
 * It renders a `radiogroup` and shares its name, selected value, and disabled
 * state through context. Each grouped `RadioInput` needs a `value`; its native
 * radio behavior provides arrow-key navigation. Use `value` with `onChange` for
 * controlled state or `defaultValue` for uncontrolled state, never both.
 *
 * @example
 * ```tsx
 * <RadioGroup name="size" defaultValue="medium" label="Size">
 *   <RadioInput value="small">Small</RadioInput>
 *   <RadioInput value="medium">Medium</RadioInput>
 * </RadioGroup>
 * ```
 */
export const RadioGroup = (props: RadioGroupProps) => {
  const {
    name,
    value,
    defaultValue = null,
    onChange,
    children,
    label,
    id,
    disabled,
    ...rest
  } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<string | null>(
    defaultValue,
  );
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : uncontrolledValue;

  const setSelectedValue = useCallback(
    (nextValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }

      onChange?.(nextValue);
    },
    [isControlled, onChange],
  );
  const contextValue = useMemo(
    () => ({
      name,
      value: selectedValue,
      setValue: setSelectedValue,
      disabled,
    }),
    [disabled, name, selectedValue, setSelectedValue],
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <Box
        {...dsComponent('RadioGroup')}
        role="radiogroup"
        aria-label={label}
        aria-labelledby={id ? `${id}-label` : undefined}
        id={id}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </Box>
    </RadioGroupContext.Provider>
  );
};
