import { Box, type BoxProps } from '../Box';
import { radio, type RadioVariantProps } from '@styled-system/recipes';
import { Icon } from '../Icon';
import { AriaAttributes, ChangeEventHandler } from 'react';

export type RadioProps = {
  /** Form field name */
  name: string;
  /** Value for this radio option (REQUIRED) */
  value: string;
  /** Controlled checked state (REQUIRED) */
  checked: boolean;
  /** Change handler (REQUIRED) */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /** Unique identifier for the radio */
  id?: string;
  /** Disable the radio */
  disabled?: boolean;
  /** Display error state */
  error?: boolean;
} & Omit<BoxProps, 'checked' | 'onChange' | keyof RadioVariantProps> &
  RadioVariantProps &
  AriaAttributes;

/**
 * Helper type for radio change events
 * @example
 * const handleChange: RadioChangeHandler = (e) => setValue(e.target.value);
 */
export type RadioChangeEvent = React.ChangeEvent<HTMLInputElement>;

/**
 * Helper type for radio change handler functions
 * @example
 * const handleChange: RadioChangeHandler = (e) => setValue(e.target.value);
 */
export type RadioChangeHandler = (e: RadioChangeEvent) => void;

/**
 * Radio is a controlled component.
 * You must pass `checked`, `onChange`, and `value` props.
 *
 * @example
 * const [value, setValue] = useState('option1');
 * <Radio
 *   name="options"
 *   value="option1"
 *   checked={value === 'option1'}
 *   onChange={(e) => setValue(e.target.value)}
 * />
 */

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  error,
  disabled,
  ...props
}) => {
  const { container, input, indicator } = radio({});

  // Determine which icon to render based on state
  const iconName = checked ? 'radio-checked' : 'radio';

  return (
    <Box className={container} {...(error && { 'data-error': true })}>
      <Box
        as="input"
        type="radio"
        className={input}
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...(error && { 'data-error': true })}
        {...props}
      />
      <Icon className={indicator} name={iconName} />
      <Icon className={indicator} name="radio-focus" />
    </Box>
  );
};
