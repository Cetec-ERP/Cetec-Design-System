import { breadcurmbs, BreadcurmbsVariantProps } from "@styled-system/recipes";
import { Box, type BoxProps } from "../Box";
import { splitProps } from "~/utils/splitProps";
import { cx } from "@styled-system/css";
import { Text } from "../Text";
import { Link } from "../Link";
import React from "react";

export type BreadcurmbsProps = Omit<BoxProps, keyof BreadcurmbsVariantProps> & 
BreadcurmbsVariantProps & {
    items: {label: string, href?:string} []
}

export const Breadcurmbs: React.FC<BreadcurmbsProps> = ({
    items,
    ...props
}:BreadcurmbsProps) => {
    const [className, otherProps] = splitProps(props);

    return(
        <Text as="ul" className={cx(breadcurmbs({}), className)} {...otherProps}>
                {items?.map((item, index)=>(
                    <Text as="li" key={index}>
                        {item.href ? <Link family={'mono'} size={'14'} href={item.href}>{item.label}</Link> : <Text weight={"bold"} family={'mono'} size={'14'}>{item.label}</Text>}
                        {index < items?.length - 1 && <Text as="span" family={'mono'} size={'14'}>/</Text>}
                    </Text>
                ))}
        </Text>
    )
}