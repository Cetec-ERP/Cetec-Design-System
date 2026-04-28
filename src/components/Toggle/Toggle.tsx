import { type ChangeEvent } from 'react';

import { cx } from '@styled-system/css';
import { toggle, type ToggleVariantProps } from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Icon } from '../Icon';

export type ToggleProps = Omit<
  BoxProps,
  'checked' | 'onChange' | keyof ToggleVariantProps
> &
  ToggleVariantProps & {
    name: string;
    checked: boolean;
    onChange: ToggleChangeHandler;
    id?: string;
    error?: boolean;
    invalid?: boolean;
    disabled?: boolean;
  };

/**
 * Helper type for toggle change events
 * @example
 * const handleChange: ToggleChangeHandler = (e) => setChecked(e.target.checked);
 */
export type ToggleChangeEvent = ChangeEvent<HTMLInputElement>;

/**
 * Helper type for toggle change handler functions
 * @example
 * const handleChange: ToggleChangeHandler = (e) => setChecked(e.target.checked);
 */
export type ToggleChangeHandler = (e: ToggleChangeEvent) => void;

/**
 * Toggle is a controlled component.
 * You must pass `checked` and `onChange` props.
 *
 * @example
 * const [checked, setChecked] = useState(false);
 * <Toggle
 *   checked={checked}
 *   onChange={(e) => setChecked(e.target.checked)}
 * />
 */

export const Toggle = (props: ToggleProps) => {
  const fieldContext = useFieldContext();
  const {
    name,
    checked,
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

  // Determine which icon to render based on state
  const iconName = checked ? 'circle-check' : 'circle';

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
        {...(error && { 'data-error': true })}
        {...(invalid && { 'data-invalid': true, 'aria-invalid': true })}
        {...otherProps}
      />
      <Icon className={classes.indicator} name={iconName} />
    </Box>
  );
};
