import { cx } from '@styled-system/css';
import { textInput, type TextInputVariantProps } from '@styled-system/recipes';

import { Icon, type IconNamesList } from '~/components/Icon';
import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';

export type TextInputProps = Omit<BoxProps, keyof TextInputVariantProps> &
  Omit<TextInputVariantProps, 'iconBefore' | 'iconAfter'> & {
    name: string;
    id?: string;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    error?: boolean;
    disabled?: boolean;
    valid?: boolean;
    invalid?: boolean;
    type?:
      | 'text'
      | 'number'
      | 'email'
      | 'password'
      | 'search'
      | 'tel'
      | 'url'
      | 'date'
      | 'time'
      | 'datetime-local'
      | 'month'
      | 'week';
  };

export const TextInput = (props: TextInputProps) => {
  const fieldContext = useFieldContext();
  const {
    name,
    id,
    iconBefore,
    iconAfter,
    error: errorProp,
    disabled: disabledProp,
    valid,
    invalid: invalidProp,
    type = 'text',
    size: sizeProp,
    autoSize = false,
    autoComplete = 'off',
    ...rest
  } = props;
  const size = sizeProp ?? fieldContext?.size;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const classes = textInput({
    size,
    iconBefore: Boolean(iconBefore),
    iconAfter: Boolean(iconAfter),
    autoSize,
  });
  const [className, otherProps] = splitProps(rest);
  return (
    <Box
      className={cx(classes.container, className)}
      aria-disabled={disabled}
      data-disabled={disabled || undefined}
      data-error={error}
      data-invalid={invalid}
      data-valid={valid}
      aria-invalid={invalid || undefined}
    >
      {iconBefore && <Icon name={iconBefore} className={classes.icon} />}
      <Box
        as="input"
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        data-error={error}
        data-valid={valid}
        data-invalid={invalid}
        aria-invalid={invalid || undefined}
        className={cx(
          classes.input,
          iconBefore && classes.inputIconBefore,
          iconAfter && classes.inputIconAfter,
          className,
        )}
        autoComplete={autoComplete}
        {...otherProps}
      />
      {iconBefore && iconAfter
        ? ''
        : iconAfter && <Icon name={iconAfter} className={classes.icon} />}
    </Box>
  );
};
