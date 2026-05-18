import type { ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';
import { formField, type FormFieldVariantProps } from '@styled-system/recipes';
import type { SpacingToken } from '@styled-system/tokens';

import { FieldContext } from '~/system/context/FieldContext';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';

export type FormFieldProps = Omit<
  BoxProps,
  keyof FormFieldVariantProps | 'gap'
> &
  FormFieldVariantProps & {
    label: string;
    labelFor: string;
    children: ReactNode;
    helpText?: string;
    required?: boolean;
    error?: boolean;
    invalid?: boolean;
    success?: boolean;
    errorText?: string;
    successText?: string;
    disabled?: boolean;
    tooltipTitle?: string;
    tooltipText?: string;
    size?: FormFieldVariantProps['size'];
    layout?: FormFieldVariantProps['layout'];
    gap?: SpacingToken;
  };

export const Required = () => {
  return (
    <Text color="text.danger" fontSize="inherit" lineHeight="tight">
      *
    </Text>
  );
};

export const FormField = (props: FormFieldProps) => {
  const {
    layout = 'default',
    label,
    labelFor,
    children,
    helpText,
    required,
    error,
    invalid,
    success,
    errorText,
    successText,
    disabled,
    tooltipTitle,
    tooltipText,
    size,
    gap,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  // container, inputs, labelWrapper, headLabel
  const classes = formField({
    layout: layout === 'inline' ? 'inline' : 'default',
    size,
  });

  return (
    <Box
      className={`${cx(classes.container, className)} group`}
      aria-disabled={disabled}
      data-disabled={disabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      data-success={success || undefined}
      data-size={size}
      {...otherProps}
    >
      <Flex className={classes.labelWrapper}>
        <Label htmlFor={labelFor} id={`${labelFor}-label`}>
          {label} {required && <Required />}
        </Label>

        {tooltipText && (
          <Tooltip
            {...(tooltipTitle && { title: tooltipTitle })}
            text={tooltipText}
          >
            <Icon name="info" fill="icon.decorative.subtle" size="20" />
          </Tooltip>
        )}
      </Flex>

      {layout === 'default' && helpText && (
        <Text textStyle="body.xs" lineHeight="tight" color="text.subtlest">
          {helpText}
        </Text>
      )}

      <FieldContext.Provider value={{ size, error, invalid, disabled }}>
        <Box className={classes.inputs} gap={gap}>
          {children}
        </Box>
      </FieldContext.Provider>
      {layout === 'inline' && helpText && (
        <Text
          textStyle="body.xs"
          lineHeight="tight"
          color="text.subtlest"
          gridColumn="2 / 3"
        >
          {helpText}
        </Text>
      )}
      {(error || invalid || success) && (
        <Text
          textStyle="body.xs"
          lineHeight="tight"
          color={success ? `text.success` : `text.danger`}
          gridColumn="2 / 3"
        >
          {success ? successText : errorText}
        </Text>
      )}
    </Box>
  );
};
