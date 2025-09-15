import type { VariantProps } from "class-variance-authority";
import { inputCheckboxIconVariants, inputCheckboxVariants, inputCheckboxWrapperVariants } from "../utils/input-checkbox-variants";
import type React from "react";
import Icon from "./Icon";
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import Skeleton from "./Skeleton";

interface InputCheckboxProps extends
    VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> { 
        loading?: boolean
    }

export default function InputCheckbox({
    size,
    variant,
    disabled,
    className,
    loading,
    ...props
}:InputCheckboxProps) {
    if (loading) {
        return (
            <Skeleton
              rounded="sm"
              className={inputCheckboxVariants({size, variant: "none"})}
            />
        )
    }

    return (
        <label className={inputCheckboxWrapperVariants({className})}>
            <input 
              type="checkbox"
              className={inputCheckboxVariants({ variant, size, disabled})}
              {...props} 
            />
            <Icon 
              svg={CheckIcon}
              className={inputCheckboxIconVariants({size})} 
            />
        </label>
    )
}