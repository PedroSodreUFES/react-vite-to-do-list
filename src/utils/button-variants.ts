import { cva } from "class-variance-authority";

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer transition rounded-lg group gap-2
    `, {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-pink-light",
        },
        size: {
            md: "h-14 py-4 px-5",
        },
        disabled: {
            true: "opacity-50 pointer-events-none",
        },
        handling: {
            true: "pointer-events-none",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
        handling: false,
    }
})

export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-pink-base",
        },
        size: {
            md: "w-5 h-5",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
})

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-gray-400",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
})