import { Box } from "../Box";
import type { SystemStyleObject } from '@styled-system/types';
import { useEffect, useRef } from "react";
import { checkbox, type CheckboxVariantProps } from "@styled-system/recipes";
import { Icon } from "../Icon";


type CheckBoxProps = CheckboxVariantProps &
    Omit<React.ComponentProps<typeof Box>, 'as'> & {
        indeterminate?: boolean;
        checked: boolean;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
        disabled?: boolean;
        error?: boolean;
    } & SystemStyleObject;

export function CheckBox({
    indeterminate = false,
    checked = false,
    onChange = () => { },
    disabled = false,
    error = false,
    ...props
}: CheckBoxProps) {
    const checkBoxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!checkBoxRef.current) return;
        checkBoxRef.current.indeterminate = indeterminate;
    }, [indeterminate])

    const effectiveChecked: boolean = !indeterminate && !disabled && !error ? checked : false;

    const { container, input, indicator} = checkbox({ checked: effectiveChecked, indeterminate, error, disabled });

    return (
        <Box as="label" className={container}>
            <Box
                as="input"
                type="checkbox"
                ref={checkBoxRef}
                className={input}
                checked={checked}
                onChange={onChange}
                {...props}
            />
            <Box as="div" className={indicator}>
                {(checked || indeterminate) && (
                    <Icon name={indeterminate ? 'minus' : 'check'} size={14} />
                )}
            </Box>
        </Box>
    );

}