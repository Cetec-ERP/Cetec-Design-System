import { Text, type TextProps } from '../Text';
import { label, type LabelVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type LabelProps = Omit<TextProps, keyof LabelVariantProps> & LabelVariantProps & {
  htmlFor?: string;
  children: string | React.ReactNode;
}

export const Label: React.FC<LabelProps> = (
  { 
    htmlFor, 
    children, 
    ...props 
  }: LabelProps,
) => {
  const [ className, otherProps ] = splitProps(props);
  return (
    <Text 
      as="label" 
      htmlFor={htmlFor} 
      className={cx(
        label({}),
        className as string,
      )} 
      {...otherProps}
    >
      {children}
    </Text>
  );
};
