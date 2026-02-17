import { type ChangeEventHandler, ChangeEvent } from 'react';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
import { Box, type BoxProps } from '../Box';
import { toggle, type ToggleVariantProps } from '@styled-system/recipes';
import { Icon } from '../Icon';

export type ToggleProps = Omit<
  BoxProps,
  'checked' | 'onChange' | keyof ToggleVariantProps
> &
  ToggleVariantProps & {
    name: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    id?: string;
    disabled?: boolean;
    error?: boolean;
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
  const { name, id, checked, onChange, error, disabled, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  const classes = toggle({});
  return (
    <Box
      className={cx(classes.container, className)}
      disabled={disabled}
      data-error={error}
    >
      <Box
        as="input"
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        className={classes.input}
        data-error={error}
        disabled={disabled}
        {...otherProps}
      />
      <Icon name={'circle'} className={classes.indicator} />
      <Icon name={'circle-check'} className={classes.indicator} />
    </Box>
  );
};
