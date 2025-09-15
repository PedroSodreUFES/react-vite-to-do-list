import type { VariantProps } from "class-variance-authority";
import { containerVariants } from "../utils/container-variants";
import React from "react";

interface ContainerProps extends VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
        as?: keyof React.JSX.IntrinsicElements
    }

export default function Container({
    as = "div",
    children,
    className,
    ...props
}: ContainerProps) {
    return React.createElement(
        as,
        {
            className: containerVariants({size: "md", className}),
            ...props
        },
        children
    )
}