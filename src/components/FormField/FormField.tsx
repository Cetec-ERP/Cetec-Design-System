import type { ReactNode, ReactElement } from 'react';
import { Children, isValidElement, cloneElement } from 'react';

import { cx } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';
import { formField, type FormFieldVariantProps } from '@styled-system/recipes';

import type { numericSizes } from '~/styles/primitives';
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
    errorText?: string;
    disabled?: boolean;
    tooltipTitle?: string;
    tooltipText?: string;
    size?: FormFieldVariantProps['size'];
    layout?: FormFieldVariantProps['layout'];
    gap?: keyof typeof numericSizes;
  };

type FormFieldChildProps = {
  error?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  size?: FormFieldVariantProps['size'];
};

export const Required = () => {
  return <Text color="text.danger">*</Text>;
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
    errorText,
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

  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const c = child as ReactElement<FormFieldChildProps>;
      return cloneElement(c, {
        error: error ?? c.props.error,
        invalid: invalid ?? c.props.invalid,
        disabled: disabled ?? c.props.disabled,
        size: size ?? c.props.size,
      });
    }
    return child;
  });

  return (
    <Box
      className={`${cx(classes.container, className)} group`}
      aria-disabled={disabled}
      data-disabled={disabled || undefined}
      data-error={error || undefined}
      data-invalid={invalid || undefined}
      data-size={size}
      {...otherProps}
    >
      <Flex className={classes.labelWrapper}>
        <Label htmlFor={labelFor}>
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
        <Box className={classes.inputs} gap={gap || '8'}>
          {enhancedChildren}
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
      {(error || invalid) && (
        <Text
          textStyle="body.xs"
          lineHeight="tight"
          color="text.danger"
          gridColumn="2 / 3"
        >
          {errorText}
        </Text>
      )}
    </Box>
  );
};
