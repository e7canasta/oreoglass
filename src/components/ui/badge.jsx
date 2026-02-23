import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
        critical:
          "[background:var(--rm-badge-critical-bg)] [color:var(--rm-badge-critical-text)] [box-shadow:var(--rm-badge-critical-shadow)]",
        "critical-muted":
          "[background:var(--rm-badge-critical-muted-bg)] [color:var(--rm-badge-critical-muted-text)] [box-shadow:var(--rm-badge-critical-muted-shadow)]",
        warning:
          "[background:var(--rm-badge-warning-bg)] [color:var(--rm-badge-warning-text)] [box-shadow:var(--rm-badge-warning-shadow)]",
        success:
          "border [border-color:var(--rm-badge-success-border)] [background:var(--rm-badge-success-bg)] [color:var(--rm-badge-success-text)]",
        dashed:
          "border-[1.5px] border-dashed [border-color:var(--rm-badge-dashed-border)] bg-transparent [color:var(--rm-badge-dashed-text)] shadow-none",
        unstyled: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  ...props
}) {
  const Comp = "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props} />
  );
}

export { Badge, badgeVariants }
