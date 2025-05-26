import { Box, type BoxProps } from "../Box";
import {switchbox, type SwitchboxVariantProps} from "@styled-system/recipes";
import { Icon } from "../Icon";
import { Label } from "../Label";
import React from "react";


export type SwitchBoxProps = Omit<BoxProps, keyof SwitchboxVariantProps > & SwitchboxVariantProps &
{
    error?: boolean,
    disabled?: boolean,
};

export const Switch: React.FC<SwitchBoxProps> = (
    {
        error,
        ...props
    }: SwitchBoxProps,
) => {
    const [checked, setChecked] = React.useState(false)
    const { container, input, indicator} = switchbox({});
    return(
        <Label className={container} 
        data-checked={checked ? true : undefined}
        data-disabled={props.disabled}
        {...(error && {'data-error' : true})}
        >
            <Box
                as="input"
                type="checkbox"
                className={input}
                onChange={(e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setChecked(e.target.checked)}
                {...props}
                />
                <Icon name={'circle'} className={indicator} />
                <Icon name={'circle-check'} className={indicator} />
        </Label>
    )
}