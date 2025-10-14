import { formField, type FormFieldVariantProps } from '@styled-system/recipes';
import { Box, type BoxProps } from '../Box';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import React from 'react';

export type FormFieldProps = Omit<BoxProps, keyof FormFieldVariantProps> &
  FormFieldVariantProps & {
    label?: string;
    helpText?: string;
    required?: boolean;
    infoTooltip?: string;
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
    tooltip?: boolean;
    tooltipCaret?: boolean;
    tooltipTitle?: string;
    tooltipDescription?: string;
    children?: React.ReactNode;
  };

export const FormField: React.FC<FormFieldProps> = ({
  layout = 'default',
  label,
  helpText,
  required,
  infoTooltip,
  error,
  errorText,
  disabled,
  tooltip,
  tooltipTitle,
  tooltipDescription,
  tooltipCaret,
  children,
  ...props
}: FormFieldProps) => {
  const { formFieldContainer, contentWrapper, labelWrapper, headLabel } =
    formField({
      layout: layout === 'inline' ? 'inline' : 'default',
    });
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const c = child as React.ReactElement<any>;
      return React.cloneElement(c, {
        error: error ?? c.props.error,
        // disabled: disabled ?? c.props.disabled,
      });
    }
    return child;
  });
  return (
    <Box className={formFieldContainer} {...props} disabled={disabled}>
      <Box className={labelWrapper}>
        <Box className={headLabel}>
          <Text textStyle="body-md">{label} </Text>
          {required && (
            <Text as="span" color="red.50">
              *
            </Text>
          )}
          {tooltip && (
            <Tooltip
              title={tooltipTitle}
              text={`${tooltipDescription}`}
              caret={tooltipCaret}
            >
              <Icon name="info" fill="slate.50" />
            </Tooltip>
          )}
        </Box>
        {layout === 'default' && helpText && (
          <Text as="span" textStyle="body-sm">
            {helpText}
          </Text>
        )}
      </Box>
      <Box className={contentWrapper}>
        {enhancedChildren}
        {layout === 'inline' && <Text textStyle="body-sm">{helpText}</Text>}
        {error && (
          <Text as="span" textStyle={'body-xs'} color="error.default">
            {errorText}
          </Text>
        )}
      </Box>
    </Box>
  );
};
