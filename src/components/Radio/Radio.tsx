import {Box, type BoxProps} from "../Box";
import {ReactNode} from 'react';
import { radio, type RadioVariantProps } from '@styled-system/recipes';
import { Icon } from "../Icon";
import { Label } from "../Label";

export type RadioProps = Omit<BoxProps, keyof RadioVariantProps > &  RadioVariantProps &
{
    error?: boolean;
    disabled?: boolean;
    children?: Omit<ReactNode, keyof HTMLInputElement> | string;
};

export const Radio: React.FC<RadioProps> = (
    {
        error = false,
        disabled= false,
        children,
        ...props
    }:RadioProps,
)=>{
    const { container, input, indicator} = radio({});
    return(
        <Label className={container}>
            <Box
            as="input"
            type="radio"
            className={input}
            {...props}
            />
            <Icon className={indicator} name={'radio'} />
            <Icon className={indicator} name={'radio-checked'} />
            {children}
        </Label>

    )
}