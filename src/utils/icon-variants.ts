import { cva } from "class-variance-authority";

export const iconVariants = cva("", {
    variants: {
        animate: {
            true: "animate-spin",
            false: ""
        }
    },
    defaultVariants: {
        animate: false
    }
})