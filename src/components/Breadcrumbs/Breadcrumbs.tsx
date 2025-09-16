import { breadcrumbs, BreadcrumbsVariantProps } from "@styled-system/recipes";
import { Box, type BoxProps } from "../Box";
import { splitProps } from "~/utils/splitProps";
import { cx } from "@styled-system/css";
import { Text } from "../Text";
import { Link } from "../Link";
import React from "react";

export type BreadcrumbsProps = Omit<BoxProps, keyof BreadcrumbsVariantProps> & 
BreadcrumbsVariantProps & {
    items: {id: string, label: string, href?:string} []
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    ...props
}:BreadcrumbsProps) => {
    const [className, otherProps] = splitProps(props);

    return(
        <Text as="ul" className={cx(breadcrumbs({}), className)} {...otherProps}>
                {items?.map((item, index)=>(
                    <Text as="li" key={item.id}>
                        {item.href ? <Link family={'mono'} size={'14'} href={item.href}>{item.label}</Link> : <Text weight={"bold"} family={'mono'} size={'14'}>{item.label}</Text>}
                        {index < items?.length - 1 && <Text as="span" family={'mono'} size={'14'}>/</Text>}
                    </Text>
                ))}
        </Text>
    )
}