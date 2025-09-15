import React from "react"
import { type VariantProps } from "class-variance-authority"
import { textVariants } from "../utils/text-variants"

interface TextProps extends VariantProps<typeof textVariants> {
    className?: string
    as?: keyof React.JSX.IntrinsicElements
    children: React.ReactNode
}

export default function Text({ as = "span", variant, className, children, ...props }: TextProps) {
    return React.createElement(
        as,
        {
            className: textVariants({variant, className}),
            ...props
        },
        children
    )
}