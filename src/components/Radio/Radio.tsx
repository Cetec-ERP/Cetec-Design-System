import { Box, type BoxProps } from '../Box';
import { radio, type RadioVariantProps } from '@styled-system/recipes';
import { Icon } from '../Icon';
import { Label } from '../Label';

export type RadioProps = Omit<BoxProps, keyof RadioVariantProps> &
  RadioVariantProps & {
    disabled?: boolean;
    error?: boolean;
  };

export const Radio: React.FC<RadioProps> = ({ error, ...props }) => {
  const { container, input, indicator } = radio({});
  return (
    <Label className={container}>
      <Box
        as="input"
        type="radio"
        className={input}
        {...props}
        {...(error && { 'data-error': true })}
      />
      <Icon className={indicator} name={'radio'} />
      <Icon className={indicator} name={'radio-checked'} />
      <Icon className={indicator} name={'radio-focus'} />
    </Label>
  );
};
