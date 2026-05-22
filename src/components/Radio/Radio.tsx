import { type ChangeEvent } from 'react';

import { cx } from '@styled-system/css';
import { radio, type RadioVariantProps } from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Icon } from '../Icon';

export type RadioProps = Omit<
  BoxProps,
  'checked' | 'defaultChecked' | 'onChange' | keyof RadioVariantProps
> &
  RadioVariantProps & {
    name?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: RadioChangeHandler;
    id?: string;
    error?: boolean;
    invalid?: boolean;
    disabled?: boolean;
  };

/**
 * Helper type for radio change events
 * @example
 * const handleChange: RadioChangeHandler = (e) => setChecked(e.target.checked);
 */
export type RadioChangeEvent = ChangeEvent<HTMLInputElement>;

/**
 * Helper type for radio change handler functions
 * @example
 * const handleChange: RadioChangeHandler = (e) => setChecked(e.target.checked);
 */
export type RadioChangeHandler = (e: RadioChangeEvent) => void;

/**
 * Radio supports both controlled and uncontrolled usage.
 *
 * @example
 * <Radio defaultChecked />
 *
 * @example
 * const [checked, setChecked] = useState(false);
 * <Radio checked={checked} onChange={(e) => setChecked(e.target.checked)} />
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
