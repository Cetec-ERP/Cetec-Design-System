import { Box, type BoxProps } from "../Box";
import {switchbox, type SwitchboxVariantProps} from "@styled-system/recipes";
import { Icon } from "../Icon";
import { splitProps } from "~/utils/splitProps";
import { cx } from "@styled-system/css";


export type SwitchBoxProps = Omit<BoxProps, keyof SwitchboxVariantProps > & SwitchboxVariantProps &
{
    error?: boolean,
    disabled?: boolean,
};

export const Switch: React.FC<SwitchBoxProps> = (
    {
        variant,
        ...props
    }: SwitchBoxProps,
) => {
    const [ className, otherProps] =splitProps(props);
    return(
        <Box
            as="input"
            type="checkbox"
            className={cx(switchbox({ variant }), className)}
            {...otherProps}
            >
                
            </Box>
    )
}