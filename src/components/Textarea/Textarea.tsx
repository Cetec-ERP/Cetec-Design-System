import { Box, type BoxProps } from '~/components/Box';
import { Text, type TextProps } from '~/components/Text';
import { Label, type LabelProps } from '~/components/Label';
import { textarea, type TextareaVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type TextareaProps = Omit<BoxProps, keyof TextProps | keyof TextareaVariantProps | keyof LabelProps> & TextareaVariantProps & TextProps & LabelProps & {
  variant?: 'autoGrow' | 'stacked' | 'internalLabel';
  label?: string;
  children?: string | React.ReactNode;
}

export const Textarea: React.FC<TextareaProps> = (
    {
      variant,
      label,
      children,
      ...props
    }: TextareaProps,
) => {

  const [ className, otherProps ] = splitProps(props);
  return (
    <Label>
      <Text as='span'>{label}</Text>
      <Box
        as="textarea"
        id={props.id}
        htmlFor={props.id || ''}
        className={cx(
          textarea({ variant }),
          className as string,
        )}
        onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
          const target = e.currentTarget;
          const parent = target.parentNode as HTMLElement;
          parent.dataset.value = target.value || '';
        }}
        {...otherProps}
      >
        <Text>{children}</Text>
      </Box>
    </Label>
  );
};

Textarea.displayName = 'Textarea';
