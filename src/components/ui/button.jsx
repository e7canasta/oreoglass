import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        surface:
          "border border-white/12 bg-[#252830] text-white hover:bg-[#2d313a] active:bg-[#21242c]",
        "surface-pill":
          "rounded-full border border-white/12 bg-[#252830] text-white hover:bg-[#2d313a] active:bg-[#21242c]",
        glass:
          "border border-white/10 bg-[rgba(19,21,26,0.70)] text-white backdrop-blur-md hover:bg-[rgba(19,21,26,0.78)] active:bg-[rgba(19,21,26,0.64)]",
        "alarm-close":
          "rounded-full border border-white/24 bg-[rgba(34,18,14,0.28)] text-[var(--alarm-text)] hover:bg-[rgba(34,18,14,0.36)]",
        "alarm-primary":
          "border-[1.5px] border-[var(--alarm-btn-primary-border)] bg-[var(--alarm-btn-primary-bg)] text-[var(--alarm-text)] hover:bg-[var(--alarm-btn-primary-bg)]",
        "alarm-secondary":
          "border-[1.5px] border-[var(--alarm-btn-secondary-border)] bg-[var(--alarm-btn-secondary-bg)] text-[var(--alarm-text)] hover:bg-[var(--alarm-btn-secondary-bg)]",
        "alarm-forward":
          "border-[1.5px] border-[var(--alarm-forward-border)] bg-[var(--alarm-forward-bg)] text-[var(--alarm-text)] hover:bg-[var(--alarm-forward-bg)]",
        "overview-critical":
          "border border-[rgba(232,67,10,0.42)] bg-[linear-gradient(145deg,#4a2f33,#3b252a)] text-white shadow-[0_6px_24px_rgba(232,67,10,0.28)]",
        "overview-neutral":
          "bg-[linear-gradient(145deg,#24457d,#1d3969)] text-white shadow-[0_6px_22px_rgba(20,60,160,0.3)]",
        "overview-muted":
          "bg-[linear-gradient(145deg,#304058,#27364c)] text-white shadow-[0_6px_22px_rgba(24,40,70,0.34)]",
        "overview-blank":
          "bg-[linear-gradient(145deg,#283140,#222a37)] text-white shadow-[0_6px_22px_rgba(10,16,28,0.3)]",
        unstyled: "",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        touch: "h-auto min-h-11 px-3 py-2",
        tile: "h-auto w-full p-0",
        inline: "h-auto p-0",
        "icon-touch": "size-11",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        unstyled: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  const Comp = "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
