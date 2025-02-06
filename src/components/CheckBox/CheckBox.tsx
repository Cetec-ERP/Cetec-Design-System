import { Box } from "../Box";
import type { SystemStyleObject } from '@styled-system/types';
import { checkbox, type CheckboxVariantProps } from '@styled-system/recipes';

type CheckBoxProps = CheckboxVariantProps &
    Omit<React.ComponentProps<typeof Box>, 'as'> & {
        variant?: string;
    } & SystemStyleObject;

export function CheckBox({
    variant = 'default',
}: CheckBoxProps) {
    return (
        <Box>
          <Box as="input" type="checkbox" />
          <Box className={checkbox({ variant })} />
        </Box>
    );
}