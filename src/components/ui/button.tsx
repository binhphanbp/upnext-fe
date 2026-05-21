import {
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:bg-teal-800 focus-visible:outline-primary",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-subtle focus-visible:outline-primary",
  ghost: "text-foreground hover:bg-surface-subtle focus-visible:outline-primary",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function buttonVariants({
  className,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function Button({
  asChild,
  children,
  className,
  size,
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  if (asChild) {
    if (!isValidElement<{ className?: string }>(children)) {
      return null;
    }

    return cloneElement(children as ReactElement<{ className?: string }>, {
      className: cn(
        buttonVariants({ className, size, variant }),
        children.props.className,
      ),
    });
  }

  return (
    <button
      {...props}
      className={buttonVariants({ className, size, variant })}
      type={type}
    />
  );
}
