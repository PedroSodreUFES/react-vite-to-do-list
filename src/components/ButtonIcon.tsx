import type { VariantProps } from "class-variance-authority";
import Icon from "./Icon";
import type React from "react";
import { buttonIconIconVariants, buttonIconVariants } from "../utils/button-icon-variants"
import Skeleton from "./Skeleton";
import SpinnerIcon from "../assets/icons/spinner.svg?react"

interface ButtonIconProps extends
    VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
    icon: React.ComponentProps<typeof Icon>["svg"]
    loading?: boolean
    handling?: boolean
}

export default function ButtonIcon({
    variant,
    size,
    disabled,
    className,
    icon,
    loading,
    handling,
    ...props
}: ButtonIconProps) {
    if (loading) {
        return (
            <Skeleton
                rounded="sm"
                className={buttonIconVariants({
                    variant: "none",
                    size,
                    className
                })}
            />
        )
    }
    return (
        <button className={buttonIconVariants({
            variant,
            size,
            disabled,
            className,
            handling,
        })}
            {...props}
        >
            <Icon 
              svg={handling ? SpinnerIcon : icon} 
              animate={handling}
              className={buttonIconIconVariants({ variant, size })}
            />
        </button>
    )
}