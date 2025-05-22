import { splitProps } from '~/utils/splitProps';
import {Box, type BoxProps} from '../Box/Box';
import {textinput, type TextinputVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';


export type TextInputProps = Omit<BoxProps, keyof TextinputVariantProps> & TextinputVariantProps &{
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

export const TextInput: React.FC<TextInputProps> = (
    {
        size,
        ...props
    }: TextInputProps
) => {

    const [ className, otherProps] = splitProps(props);
    return(
        <Box
        as="input"
        className={cx(
            textinput({size}),
            className
        )}
        {...otherProps}
        />
    )

}