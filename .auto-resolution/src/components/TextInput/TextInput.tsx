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
      as="input"
      id={id}
      name={name}
      aria-label={name}
      aria-invalid={error || undefined}
      aria-describedby={ariaDescribedBy}
      {...(error && { 'data-error': true })}
      className={cx(textinput({ size, autoSize }), className)}
      {...otherProps}
    />
  );
};
