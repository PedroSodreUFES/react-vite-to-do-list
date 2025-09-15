import { cx, type VariantProps } from "class-variance-authority";
import Text from "./Text";
import { badgeSkeletonVariants, badgeTextVariants, badgeVariants } from "../utils/badge-variants";
import Skeleton from "./Skeleton";

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> { 
    loading?: boolean
}

export default function Badge({
    variant,
    size,
    className,
    children,
    loading,
    ...props
}: BadgeProps) {
    if(loading) {
        return <Skeleton
            rounded="full"
            className={cx(
                badgeVariants({variant: "none"}),
                badgeSkeletonVariants({size}),
                className
            )}
        />
    }

    return (
        <div className={badgeVariants({variant, size, className})} {...props}>
            <Text className={badgeTextVariants({variant})} variant="body-sm-bold">
                {children}
            </Text>
        </div>
    )
}