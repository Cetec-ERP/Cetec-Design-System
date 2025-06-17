import { Box, type BoxProps } from '../Box';
import { Label } from '../Label';
import { checkbox, type CheckboxVariantProps } from '@styled-system/recipes';
import { Icon } from '../Icon';

export type CheckBoxProps = Omit<BoxProps, keyof CheckboxVariantProps> &
  CheckboxVariantProps & {
    indeterminate?: boolean;
    disabled?: boolean;
    error?: boolean;
  };

export const CheckBox: React.FC<CheckBoxProps> = ({
  indeterminate,
  error,
  ...props
}) => {
  const { container, input, indicator } = checkbox({});

  return (
    <Label className={container}>
      <Box
        as="input"
        type="checkbox"
        className={input}
        {...props}
        {...(indeterminate && { 'data-indeterminate': true })}
        {...(error && { 'data-error': true })}
      />
      <Icon className={indicator} name={'checkbox'} />
      <Icon className={indicator} name={'checkbox-checked'} />
      <Icon className={indicator} name={'checkbox-indeterminate'} />
      <Icon className={indicator} name={'checkbox-focus'} />
    </Label>
  );
};
