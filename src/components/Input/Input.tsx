import { Text, type TextProps } from '~/components/Text';
import { Box, type BoxProps } from '~/components/Box';
import { Label } from '~/components/Label';
import { input, type InputVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type InputProps = Omit<BoxProps, keyof InputVariantProps | keyof TextProps> & TextProps & InputVariantProps & {
  label?: string;
  variant?: 'stacked' | 'internalLabel';
  children?: string | React.ReactNode;
};

export const Input: React.FC<InputProps> = (
  { 
    label, 
    variant,
    children,
    ...props 
  }: InputProps,
) => {

  const [ className, otherProps ] = splitProps(props);
  return (
    <Label>
      <Text as='span'>{label}</Text>
      <Box
        as="input"
        className={cx(
          input({ variant }),
          className as string,
        )}
        htmlFor={props.id || ''}
        {...otherProps}
      >
        <Text>{children}</Text>
      </Box>
    </Label>
  );
};

