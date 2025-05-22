import { Box, type BoxProps } from "../Box";
import {switchbox, type SwitchboxVariantProps} from "@styled-system/recipes";
import { Icon } from "../Icon";
import { Label } from "../Label";


export type SwitchBoxProps = Omit<BoxProps, keyof SwitchboxVariantProps > & SwitchboxVariantProps &
{
    error?: boolean,
    disabled?: boolean,
};

export const Switch: React.FC<SwitchBoxProps> = (
    {
        variant,
        error,
        ...props
    }: SwitchBoxProps,
) => {
    const { container, input, indicator} = switchbox({});
    return(
        <Label className={container}>
            <Box
                as="input"
                type="checkbox"
                className={input}
                {...props}
                {...(error && { 'data-error': true})}
                />
                <Icon name={'circle'} className={indicator} />
                <Icon name={'circle-check'} className={indicator} />
        </Label>
    )
}