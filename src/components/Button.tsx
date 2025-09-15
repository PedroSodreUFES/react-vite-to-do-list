import React from "react";
import { buttonVariants, buttonIconVariants, buttonTextVariants } from "../utils/button-variants";
import type { VariantProps } from "class-variance-authority";
import Text from "./Text";
import Icon from "./Icon";

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]
}

export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    icon: IconComponent,
    ...props
}: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({variant, size, disabled, className})}>
            {
                IconComponent && <Icon svg={IconComponent} className={buttonIconVariants({variant, size})} />
            }
            <Text variant="body-md-bold" className={buttonTextVariants({variant})}>
                {children}
            </Text>
        </button>
    )
}