import { splitProps } from '~/utils/splitProps';
import {Box, type BoxProps} from '../Box/Box';
import {textinput, type TextinputVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';


export type TextInputProps = Omit<BoxProps, keyof TextinputVariantProps> & TextinputVariantProps &{
    disabled?: boolean,
    error?: boolean,
}

export const TextInput: React.FC<TextInputProps> = (
    {
        size,
        error,
        autoSize = false,
        ...props
    }: TextInputProps
) => {

    const [ className, otherProps] = splitProps(props);
    return(
        <Box
        as="input"
        {...error && { 'data-error': true }}
        className={cx(
            textinput({size, autoSize}),
            className
        )}
        {...otherProps}
        />
    )

}