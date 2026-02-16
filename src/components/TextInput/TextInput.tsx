import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
import { Box, type BoxProps } from '../Box/Box';
import { Icon, type IconNamesList } from '~/components/Icon';
import { textInput, type TextInputVariantProps } from '@styled-system/recipes';

export type TextInputProps = Omit<BoxProps, keyof TextInputVariantProps> &
  Omit<TextInputVariantProps, 'iconBefore' | 'iconAfter'> & {
    name: string;
    id?: string;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    error?: boolean;
    disabled?: boolean;
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
  const {
    name,
    id,
    iconBefore,
    iconAfter,
    error,
    disabled,
    type = 'text',
    size,
    autoSize = false,
    ...rest
  } = props;
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
      {...(error && {
        'data-error': true,
        'aria-invalid': true,
      })}
    >
      {iconBefore && <Icon name={iconBefore} className={classes.icon} />}
      <Box
        as="input"
        id={id}
        name={name}
        type={type}
        {...(error && {
          'data-error': true,
          'aria-invalid': true,
        })}
        {...(disabled && {
          disabled: true,
          'aria-disabled': true,
        })}
        className={cx(classes.input, className)}
        {...otherProps}
      />
      {iconBefore && iconAfter
        ? ''
        : iconAfter && <Icon name={iconAfter} className={classes.icon} />}
    </Box>
  );
};
