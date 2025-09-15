import { cva } from "class-variance-authority";

export const buttonIconVariants = cva(`
        inline-flex items-center justify-center cursor-pointer transition group
    `, {
    variants: {
        variant: {
            primary: "bg-green-base hover:bg-green-dark",
            secondary: "bg-gray-200 hover:bg-pink-base",
            tertiary: "bg-transparent hover:bg-gray-200",
            none: ""
        },
        size: {
            sm: "w-6 h-6 p-1 rounded",
        },
        disabled: {
            true: "opacity-50 pointer-events-none",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
        disabled: false
    }
})

export const buttonIconIconVariants = cva("transition", {
    variants: {
        variant: {
            none: "",
            primary: "fill-white",
            secondary: "fill-pink-base group-hover:fill-white",
            tertiary: "fill-gray-300 group-hover:fill-gray-400",
        },
        size: {
            sm: "w-4 h-4",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
    },
})