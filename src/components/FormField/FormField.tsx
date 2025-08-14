import { formField, type FormFieldVariantProps } from '@styled-system/recipes';
import { Box, type BoxProps } from '../Box';
import { Text } from '../Text';

export type FormFieldProps = Omit<BoxProps, keyof FormFieldVariantProps> &
  FormFieldVariantProps & {
    label?: string;
    helpText?: string;
    required?: boolean;
    infoTooltip?: string;
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
    children?: React.ReactNode;
  };

export const FormField: React.FC<FormFieldProps> = ({
  layout,
  label,
  helpText,
  required,
  infoTooltip,
  error,
  errorText,
  disabled,
  children,
  ...props
}: FormFieldProps) => {
  
  const { formFeildContainer, contentWrapper, labelWrapper } = formField({
    layout: layout
  });
  return (
    <Box className={formFeildContainer} {...props}>
      <Box className={labelWrapper}>
        <Text textStyle="body-md">
          {label}{' '}
          {required && (
            <Text as="span" color="red.50">
              *
            </Text>
          )}
        </Text>
        {layout === "default" && helpText && (
          <Text as="span" textStyle="body-sm">
            {helpText}
          </Text>
        )}
      </Box>
      <Box className={contentWrapper}>
        {children}
        {layout == 'inline' && (
          <Text textStyle="body-sm">
            {helpText}
          </Text>
        )}
        {error && (
          <Text as="span" textStyle={'body-xs'} color="error.default">
            {errorText}
          </Text>
        )}
      </Box>
    </Box>
  );
};
