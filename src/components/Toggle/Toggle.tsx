import { type ChangeEvent } from 'react';

import { cx } from '@styled-system/css';
import { toggle, type ToggleVariantProps } from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';

/** Props for {@link Toggle}, the unlabelled native checkbox styled as a switch. */
export type ToggleProps = Omit<
  BoxProps,
  'checked' | 'defaultChecked' | 'onChange' | keyof ToggleVariantProps
> &
  ToggleVariantProps & {
    /** Form field name submitted when the toggle is on. */ name: string;
    /** Controlled on/off state. Pair with `onChange`; do not combine with `defaultChecked`. */ checked?: boolean;
    /** Initial uncontrolled on/off state; later updates are ignored. */
    /** @default false */
    defaultChecked?: boolean;
    /** Runs for the native checkbox change event; read the next state from `event.target.checked`. */ onChange?: ToggleChangeHandler;
    /** Native input ID used by an external label. */ id?: string;
    /** Applies error styling, overriding field context. */ error?: boolean;
    /** Marks the native checkbox invalid with `aria-invalid`, overriding field context. */ invalid?: boolean;
    /** Disables interaction, overriding field context. */ disabled?: boolean;
  };

/**
 * Native change event emitted by {@link Toggle}.
 * @example
 * const handleChange: ToggleChangeHandler = (e) => setChecked(e.target.checked);
 */
export type ToggleChangeEvent = ChangeEvent<HTMLInputElement>;

/**
 * Handler for a {@link Toggle} native change event.
 * @example
 * const handleChange: ToggleChangeHandler = (e) => setChecked(e.target.checked);
 */
export type ToggleChangeHandler = (e: ToggleChangeEvent) => void;

/**
 * A native checkbox styled as an on/off toggle, without a visible label.
 *
 * Use {@link ToggleInput} when a visible label is needed. `Toggle` renders an
 * `<input type="checkbox">`, not an ARIA `switch`; use `checked` with
 * `onChange` for controlled state or `defaultChecked` for uncontrolled state.
 * Provide `id` and an associated label so the control has an accessible name.
 *
 * @example
 * ```tsx
 * <Toggle name="marketing" defaultChecked />
 * ```
 *
 * @example
 * ```tsx
 * const [checked, setChecked] = useState(false);
 * <Toggle name="marketing" checked={checked} onChange={(event) => setChecked(event.target.checked)} />
 * ```
 */

export const Toggle = (props: ToggleProps) => {
  const fieldContext = useFieldContext();
  const {
    name,
    checked,
    defaultChecked,
    onChange,
    id,
    error: errorProp,
    invalid: invalidProp,
    disabled: disabledProp,
    container,
    input,
    indicator,
    ...rest
  } = props;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const [className, otherProps] = splitProps(rest);
  const classes = toggle({
    container,
    input,
    indicator,
  });
  const isControlled = checked !== undefined;

  return (
    <Box
      className={cx(classes.container, className)}
      {...(error && { 'data-error': true })}
      {...(invalid && { 'data-invalid': true })}
    >
      <Box
        as="input"
        type="checkbox"
        className={classes.input}
        name={name}
        id={id}
        {...(isControlled
          ? { checked }
          : { defaultChecked: defaultChecked ?? false })}
        onChange={onChange}
        disabled={disabled}
        {...(error && { 'data-error': true })}
        {...(invalid && { 'data-invalid': true, 'aria-invalid': true })}
        {...otherProps}
      />
      <Icon className={classes.indicator} name="circle" aria-hidden />
      <Icon className={classes.indicator} name="circle-check" aria-hidden />
    </Box>
  );
};
