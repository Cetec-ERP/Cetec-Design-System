import { useEffect, useRef, type ChangeEvent } from 'react';

import { cx } from '@styled-system/css';
import { checkbox, type CheckboxVariantProps } from '@styled-system/recipes';

import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Icon } from '../Icon';

export type CheckboxProps = Omit<
  BoxProps,
  'checked' | 'defaultChecked' | 'onChange' | keyof CheckboxVariantProps
> &
  CheckboxVariantProps & {
    name: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: CheckboxChangeHandler;
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
 * Checkbox supports both controlled and uncontrolled usage.
 *
 * @example
 * <Checkbox defaultChecked />
 *
 * @example
 * const [checked, setChecked] = useState(false);
 * <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
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
