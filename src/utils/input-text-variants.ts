import { cva } from "class-variance-authority";

export const inputTextVariants = cva(`
        border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none
    `, {
        variants: {
            size: {
                md: "pb-2 px-2",
            },
            disabled: {
                true: "pointer-events-none",
            },
        },
        defaultVariants: {
            size: "md",
            disabled: false,
        },
    })