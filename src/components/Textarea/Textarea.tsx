import { Box, type BoxProps } from '~/components/Box';
import { textarea, type TextareaVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type TextareaProps = Omit<BoxProps, keyof TextareaVariantProps > & TextareaVariantProps & {
  error?: boolean,
  disabled?:boolean,
}

export const Textarea: React.FC<TextareaProps> = (
    {
      size,
      error,
      ...props
    }: TextareaProps,
) => {

  const [ className, otherProps ] = splitProps(props);
  return (
      <Box
        as="textarea"
        className={cx(
          textarea({ size }),
          className,
        )}
        // onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
        //   const target = e.currentTarget;
        //   const parent = target.parentNode as HTMLElement;
        //   parent.dataset.value = target.value || '';
        // }}
        {...otherProps}
      >
      </Box>
  );
};

Textarea.displayName = 'Textarea';
