import { type ChangeEvent } from 'react';

import { cx } from '@styled-system/css';
import { radio, type RadioVariantProps } from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';

/** Props for {@link Radio}, the unlabelled native radio primitive. */
export type RadioProps = Omit<
  BoxProps,
  'checked' | 'defaultChecked' | 'onChange' | keyof RadioVariantProps
> &
  RadioVariantProps & {
    /** Native radio group name. Radios with the same name are mutually exclusive. */ name?: string;
    /** Controlled selected state. Pair with `onChange`; do not combine with `defaultChecked`. */ checked?: boolean;
    /** Initial selected state for uncontrolled use; later updates are ignored. */
    /** @default false */
    defaultChecked?: boolean;
    /** Runs for the native input change event when this radio becomes selected. */ onChange?: RadioChangeHandler;
    /** Native input ID used by an external label. */ id?: string;
    /** Applies error styling, overriding field context. */ error?: boolean;
    /** Marks the native input invalid with `aria-invalid`, overriding field context. */ invalid?: boolean;
    /** Disables interaction, overriding field context. */ disabled?: boolean;
  };

/**
 * Native change event emitted by {@link Radio}.
 * @example
 * const handleChange: RadioChangeHandler = (e) => setChecked(e.target.checked);
 */
export type RadioChangeEvent = ChangeEvent<HTMLInputElement>;

/**
 * Handler for a {@link Radio} native change event.
 * @example
 * const handleChange: RadioChangeHandler = (e) => setChecked(e.target.checked);
 */
export type RadioChangeHandler = (e: RadioChangeEvent) => void;

/**
 * A native radio control without a visible label.
 *
 * Prefer {@link RadioInput} inside {@link RadioGroup} for a labelled,
 * keyboard-navigable choice group. For standalone use, group radios by `name`
 * and associate each with a label using `id`. Use `checked` with `onChange` for
 * controlled state, or `defaultChecked` only for uncontrolled state.
 *
 * @example
 * ```tsx
 * <Radio name="shipping" defaultChecked />
 * ```
 *
 * @example
 * ```tsx
 * const [checked, setChecked] = useState(false);
 * <Radio name="shipping" checked={checked} onChange={(event) => setChecked(event.target.checked)} />
 * ```
 */
export const Radio = (props: RadioProps) => {
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
    radioBg,
    ...rest
  } = props;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const [className, otherProps] = splitProps(rest);
  const classes = radio({
    container,
    input,
    indicator,
    radioBg,
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
        type="radio"
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
      <Icon className={classes.radioBg} name="circle" aria-hidden />
      <Icon className={classes.indicator} name="radio" aria-hidden />
      <Icon className={classes.indicator} name="radio-checked" aria-hidden />
      <Icon className={classes.indicator} name="radio-focus" aria-hidden />
    </Box>
  );
};
