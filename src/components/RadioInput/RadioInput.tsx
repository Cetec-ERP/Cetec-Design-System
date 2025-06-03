import { RadioVariantProps } from '@styled-system/recipes';
import { Label } from '../Label';
import { Radio } from '../Radio/Radio';
import { Text } from '../Text';


export type RadioProps = RadioVariantProps & {
    disabled?: boolean;
    error?: boolean;
    children?: React.ReactNode;
};

export const RadioInput: React.FC<RadioProps> = ({ children }) => {
    return(
        <Label>
            <Radio>
                <Text>
                    {children}
                </Text>
            </Radio>
        </Label>
    )
}