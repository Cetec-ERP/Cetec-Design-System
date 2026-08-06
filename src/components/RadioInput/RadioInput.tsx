import { useId, type ReactNode } from 'react';

import { cx } from '@styled-system/css';
import {
  radioInput,
  type RadioInputVariantProps,
} from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Label } from '../Label/Label';
import { Radio } from '../Radio/Radio';
import { useRadioGroup } from '../Radio/RadioGroupContext';

import type { BoxProps } from '../Box/Box';
import type { RadioChangeHandler } from '../Radio/Radio';

/** Props for {@link RadioInput}, a labelled radio that can join a {@link RadioGroup}. */
export type RadioInputProps = Omit<BoxProps, keyof RadioInputVariantProps> &
  RadioInputVariantProps & {
    /** Native group name when the input is not inside a `RadioGroup`; group context takes precedence. */ name?: string;
    /** Value reported to the nearest `RadioGroup`; required for the input to participate in that group. */ value?: string;
    /** Controlled state for standalone use. Group context takes precedence when `value` is supplied. */ checked?: boolean;
    /** Initial standalone selected state; ignored for grouped radios and after mount. */
    /** @default false */
    defaultChecked?: boolean;
    /** Runs after group selection is requested and for standalone native changes. The group `onChange` receives the selected value. */ onChange?: RadioChangeHandler;
    /** Input ID. A stable ID is generated when omitted and associated with the wrapper label. */ id?: string;
    /** Applies error styling, overriding field context. */ error?: boolean;
    /** Marks the radio invalid, overriding field context. */ invalid?: boolean;
    /** Visible label content. */ children?: string | ReactNode;
    /** Disables the radio, overriding group and field context. */ disabled?: boolean;
  };

/**
 * A labelled radio option.
 *
 * Place it in {@link RadioGroup} with a unique `value` to receive shared
 * selection state, its name, and group-disabled state. Outside a group it acts
 * like a labelled {@link Radio}; supply `name` to form a native radio group.
 * Explicit `disabled` wins over group and field context.
 *
 * @example
 * ```tsx
 * <RadioGroup name="plan" defaultValue="standard" label="Plan">
 *   <RadioInput value="standard">Standard</RadioInput>
 * </RadioGroup>
 * ```
 */
export const RadioInput = (props: RadioInputProps) => {
  const fieldContext = useFieldContext();
  const {
    name,
    value,
    checked,
    defaultChecked,
    onChange,
    id,
    children,
    error: errorProp,
    invalid: invalidProp,
    disabled: disabledProp,
    ...rest
  } = props;
  const radioGroup = useRadioGroup();
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const disabled =
    disabledProp ?? radioGroup?.disabled ?? fieldContext?.disabled;
  const [className, otherProps] = splitProps(rest);
  const generatedId = useId();
  const resolvedId = id ?? generatedId;
  const resolvedName = radioGroup?.name ?? name;
  const isGrouped = Boolean(radioGroup && value !== undefined);
  const resolvedChecked =
    isGrouped && radioGroup ? radioGroup.value === value : checked;

  const handleChange: RadioChangeHandler | undefined = (event) => {
    if (isGrouped && value !== undefined && radioGroup) {
      radioGroup.setValue(value);
    }

    onChange?.(event);
  };

  return (
    <Label
      className={cx(radioInput(), className)}
      htmlFor={resolvedId}
      disabled={disabled}
      {...otherProps}
    >
      <Radio
        name={resolvedName}
        checked={resolvedChecked}
        defaultChecked={!isGrouped ? defaultChecked : undefined}
        onChange={handleChange}
        id={resolvedId}
        error={error}
        invalid={invalid}
        disabled={disabled}
      />
      {children}
    </Label>
  );
};
