import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-emerald-200 border-2 border-b-4 active:border-b-2 hover:bg-emerald-100 text-emerald-500",
        primary: "bg-emerald-200 text-emerald-500 hover:bg-emerald-400/90 hover:text-emerald-50 border-emerald-500 border-b-4 active:border-b-0",
        primaryOutline: "bg-transparent text-emerald-500 hover:bg-emerald-100 hover:text-emerald-500 border-emerald-500 border-b-4 active:border-b-0",
        destructive: "bg-red-200 text-rose-500 hover:bg-rose-400/90 hover:text-white border-rose-500 border-b-4 active:border-b-0",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
