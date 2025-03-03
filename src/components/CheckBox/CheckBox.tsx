import { Box, type BoxProps } from "../Box";
import { checkbox, type CheckboxVariantProps } from "@styled-system/recipes";
import { Icon } from "../Icon";

export type CheckBoxProps = Omit<BoxProps, keyof CheckboxVariantProps > & CheckboxVariantProps & 
    {
        checked?: boolean;
        indeterminate?: boolean;
        disabled?: boolean;
        error?: boolean;
    };

export const CheckBox: React.FC<CheckBoxProps> = (
  {
    disabled = false,
    error = false,
    indeterminate = false,
    checked = false,
    ...props
}: CheckBoxProps, 
) => {
    const { container, input, indicator } = checkbox({});
    return (
        <Box as="label" className={container} >
            <Box
                as="input"
                type="checkbox"
                className={input}
                disabled={disabled || indeterminate}
                {...props}
            />
            <Icon className={indicator} name={'checkbox'} />
            <Icon className={indicator} name={'checkbox-checked'} />
            <Icon className={indicator} name={'checkbox-indeterminate'} />
        </Box>
    );
}
