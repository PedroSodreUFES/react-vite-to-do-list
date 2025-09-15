import React from "react";
import { buttonVariants, buttonIconVariants, buttonTextVariants } from "../utils/button-variants";
import type { VariantProps } from "class-variance-authority";
import Text from "./Text";
import Icon from "./Icon";
import SpinnerIcon from "../assets/icons/spinner.svg?react"

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]
    handling?: boolean
}

export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    icon,
    handling,
    ...props
}: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({variant, size, disabled, className, handling})}>
            {
                icon && 
                <Icon 
                  svg={handling ? SpinnerIcon : icon}
                  animate={handling}
                  className={buttonIconVariants({variant, size})} 
                />
            }
            <Text variant="body-md-bold" className={buttonTextVariants({variant})}>
                {children}
            </Text>
        </button>
    )
}