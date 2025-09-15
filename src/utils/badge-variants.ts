import { cva } from "class-variance-authority";

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      primary: "bg-green-light",
      secondary: "bg-pink-light",
      none: "",
    },
    size: {
      sm: "py-0.5 px-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
})

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
      none: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})