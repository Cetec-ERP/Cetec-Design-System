import { Box, type BoxProps } from '~/components/Box';
import { textarea, type TextareaVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type TextareaProps = Omit<BoxProps, keyof TextareaVariantProps > & TextareaVariantProps & {
  autoSize?: boolean,
  error?: boolean,
  disabled?:boolean,
}

export const Textarea: React.FC<TextareaProps> = (
    {
      size,
      error,
      autoSize= false,
      ...props
    }: TextareaProps,
) => {

  const [ className, otherProps ] = splitProps(props);
  return (
      <Box
        as="textarea"
        data-error={error ? '' : undefined}
        className={cx(
          textarea({ size, autoSize }),
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
