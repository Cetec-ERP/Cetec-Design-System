import { Box, type BoxProps } from '../Box';
import { radio, type RadioVariantProps } from '@styled-system/recipes';
import { Icon } from '../Icon';
import { Label } from '../Label';

export type RadioProps = Omit<BoxProps, keyof RadioVariantProps> &
  RadioVariantProps;

export const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  const { container, input, indicator } = radio({});
  return (
    <Label className={container}>
      <Box as="input" type="radio" className={input} {...props} />
      <Icon className={indicator} name={'radio'} />
      <Icon className={indicator} name={'radio-checked'} />
    </Label>
  );
};
