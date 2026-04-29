import { type ChangeEvent } from 'react';

import { cx } from '@styled-system/css';
import { checkbox, type CheckboxVariantProps } from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Icon } from '../Icon';

export type CheckboxProps = Omit<
  BoxProps,
  'checked' | 'onChange' | keyof CheckboxVariantProps
> &
  CheckboxVariantProps & {
    name: string;
    checked: boolean;
    onChange: CheckboxChangeHandler;
    id?: string;
    error?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
  };

/**
 * Helper type for checkbox change events
 * @example
 * const handleChange: CheckboxChangeHandler = (e) => setChecked(e.target.checked);
 */
export type CheckboxChangeEvent = ChangeEvent<HTMLInputElement>;

/**
 * Helper type for checkbox change handler functions
 * @example
 * const handleChange: CheckboxChangeHandler = (e) => setChecked(e.target.checked);
 */
export type CheckboxChangeHandler = (e: CheckboxChangeEvent) => void;

/**
 * Checkbox is a controlled component.
 * You must pass `checked` and `onChange` props.
 *
 * @example
 * const [checked, setChecked] = useState(false);
 * <Checkbox
 *   checked={checked}
 *   onChange={(e) => setChecked(e.target.checked)}
 * />
 */

export const Checkbox = (props: CheckboxProps) => {
  const fieldContext = useFieldContext();
  const {
    name,
    checked,
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

  // Determine which icon to render based on state
  const iconName = indeterminate
    ? 'checkbox-indeterminate'
    : checked
      ? 'checkbox-checked'
      : 'checkbox';

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
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...(indeterminate && { 'data-indeterminate': true })}
        {...(error && { 'data-error': true })}
        {...(invalid && { 'data-invalid': true, 'aria-invalid': true })}
        {...otherProps}
      />
      <Icon className={classes.checkBg} name="square" />
      <Icon className={classes.indicator} name={iconName} />
      <Icon className={classes.indicator} name="checkbox-focus" />
    </Box>
  );
};
