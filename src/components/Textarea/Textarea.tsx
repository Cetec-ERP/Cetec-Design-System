import { cx } from '@styled-system/css';
import { textarea, type TextareaVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { useFieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

export type TextareaProps = Omit<BoxProps, keyof TextareaVariantProps> &
  TextareaVariantProps & {
    name: string;
    autoSize?: boolean;
    error?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    id?: string;
  };

export const Textarea = (props: TextareaProps) => {
  const fieldContext = useFieldContext();
  const {
    size: sizeProp,
    error: errorProp,
    invalid: invalidProp,
    autoSize = false,
    id,
    name,
    disabled: disabledProp,
    ...rest
  } = props;
  const size = sizeProp ?? fieldContext?.size;
  const error = errorProp ?? fieldContext?.error;
  const invalid = invalidProp ?? fieldContext?.invalid;
  const disabled = disabledProp ?? fieldContext?.disabled;
  const [className, otherProps] = splitProps(rest);
  return (
    <Box
      as="textarea"
      id={id}
      name={name}
      {...(error && { 'data-error': true })}
      {...(invalid && { 'data-invalid': true, 'aria-invalid': true })}
      disabled={disabled}
      className={cx(textarea({ size, autoSize }), className)}
      {...otherProps}
    />
  );
};
