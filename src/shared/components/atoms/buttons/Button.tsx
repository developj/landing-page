import * as React from "react";
import  classNameMerge  from "../../../../shared/utils/classNameMerge";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "muted";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "h-12 px-5 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--brand)] hover:bg-[var(--brand-600)] active:bg-[var(--brand-700)] text-black",
  secondary:
    "bg-[#fff2c2] hover:bg-[#ffe693] active:bg-[#ffd75a] text-black",
  outline:
    "border border-[var(--brand)] text-[var(--brand)] hover:bg-[color:rgba(255,184,0,0.08)]",
  ghost:
    "text-[var(--text)] hover:bg-black/5",
  muted:    "border border-[var(--muted-outline)] text-[var(--grey-text)] hover:bg-[color:rgba(255,184,0,0.08)]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "lg", isLoading, fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNameMerge(
          "inline-flex cursor-pointer items-center justify-center rounded-[var(--radius)] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant],
          fullWidth && "w-full",
          className
        )}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading ? "Loading…" : children}
      </button>
    );
  }
);
Button.displayName = "Button";
