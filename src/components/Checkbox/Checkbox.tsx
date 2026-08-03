import { useEffect, useRef, type ChangeEvent } from 'react';

import { cx } from '@styled-system/css';
import { checkbox, type CheckboxVariantProps } from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';

/** Props for {@link Checkbox}, the unlabelled native checkbox primitive. */
export type CheckboxProps = Omit<
  BoxProps,
  'checked' | 'defaultChecked' | 'onChange' | keyof CheckboxVariantProps
> &
  CheckboxVariantProps & {
    /** Form field name submitted when the checkbox is checked. */ name: string;
    /** Controlled checked state. Pair with `onChange`; do not combine with `defaultChecked`. */ checked?: boolean;
    /** Initial uncontrolled checked state; later updates are ignored. */
    /** @default false */
    defaultChecked?: boolean;
    /** Runs for the native input change event; read the next state from `event.target.checked`. */ onChange?: CheckboxChangeHandler;
    /** Native input ID. Use it to associate an external `<label>` with the checkbox. */ id?: string;
    /** Applies error styling, taking precedence over field context. */ error?: boolean;
    /** Marks the native input invalid with `aria-invalid` and takes precedence over field context. */ invalid?: boolean;
    /** Disables interaction and takes precedence over field context. */ disabled?: boolean;
    /** Displays the mixed state and sets the native `indeterminate` property. This does not change `checked`. */ indeterminate?: boolean;
  };

/**
 * Native change event emitted by {@link Checkbox}.
 * @example
 * const handleChange: CheckboxChangeHandler = (e) => setChecked(e.target.checked);
 */
export type CheckboxChangeEvent = ChangeEvent<HTMLInputElement>;

/**
 * Handler for a {@link Checkbox} native change event.
 * @example
 * const handleChange: CheckboxChangeHandler = (e) => setChecked(e.target.checked);
 */
export type CheckboxChangeHandler = (e: CheckboxChangeEvent) => void;

/**
 * A native checkbox control without a visible label.
 *
 * Use {@link CheckboxInput} when the checkbox needs a text label. Supply
 * `checked` with `onChange` for controlled state, or `defaultChecked` for
 * uncontrolled state. The primitive renders an `<input type="checkbox">`, so
 * its `name` participates in native form submission. Associate it with a
 * visible label using `id`; `indeterminate` is a visual mixed state only.
 *
 * @example
 * ```tsx
 * <Checkbox name="notifications" defaultChecked />
 * ```
 *
 * @example
 * ```tsx
 * const [checked, setChecked] = useState(false);
 * <Checkbox name="notifications" checked={checked} onChange={(event) => setChecked(event.target.checked)} />
 * ```
 */

export const Checkbox = (props: CheckboxProps) => {
  const fieldContext = useFieldContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    name,
    checked,
    defaultChecked,
    onChange,
    id,
    indeterminate,
    disabled: disabledProp,
    error: errorProp,
    invalid: invalidProp,
    container,
    input,
    indicator,
    checkBg,
    ...rest
  } = props;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const [className, otherProps] = splitProps(rest);
  const classes = checkbox({
    container,
    input,
    indicator,
    checkBg,
  });

  const isControlled = checked !== undefined;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  return (
    <Box
      className={cx(classes.container, className)}
      {...(error && { 'data-error': true })}
      {...(invalid && { 'data-invalid': true })}
    >
      <Box
        as="input"
        ref={inputRef}
        type="checkbox"
        className={classes.input}
        name={name}
        id={id}
        {...(isControlled
          ? { checked }
          : { defaultChecked: defaultChecked ?? false })}
        onChange={onChange}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : undefined}
        {...(indeterminate && { 'data-indeterminate': true })}
        {...(error && { 'data-error': true })}
        {...(invalid && { 'data-invalid': true, 'aria-invalid': true })}
        {...otherProps}
      />
      <Icon className={classes.checkBg} name="square" aria-hidden />
      <Icon className={classes.indicator} name="checkbox" aria-hidden />
      <Icon className={classes.indicator} name="checkbox-checked" aria-hidden />
      <Icon
        className={classes.indicator}
        name="checkbox-indeterminate"
        aria-hidden
      />
      <Icon className={classes.indicator} name="checkbox-focus" aria-hidden />
    </Box>
  );
};
