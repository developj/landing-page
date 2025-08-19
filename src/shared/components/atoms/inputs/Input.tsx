import * as React from "react";
import classNameMerge from "../../../../shared/utils/classNameMerge";

type InputSize = "sm" | "md" | "lg" | "xl";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  success?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  /** UI size variant (not the HTML size attr) */
  size?: InputSize;
  /** If you still need the native HTML size attr, use this */
  htmlSize?: number;
}

const sizeStyles: Record<
  InputSize,
  {
    input: string;
    rightPad: string;
    leftPadExtra: string;
    iconBtn: string;
    label: string;
  }
> = {
  sm: {
    input: "px-3 py-2 text-sm",
    rightPad: "pr-9",
    leftPadExtra: "pl-2",
    iconBtn: "p-1.5",
    label: "text-sm mt-2",
  },
  md: {
    input: "px-3 py-3 text-[15px]",
    rightPad: "pr-10",
    leftPadExtra: "pl-2",
    iconBtn: "p-2",
    label: "text-sm mt-3",
  },
  lg: {
    input: "px-4 py-3.5 text-base",
    rightPad: "pr-11",
    leftPadExtra: "pl-2.5",
    iconBtn: "p-2.5",
    label: "text-base mt-4",
  },
  xl: {
    input: "px-5 py-4 text-lg",
    rightPad: "pr-12",
    leftPadExtra: "pl-3",
    iconBtn: "p-3",
    label: "text-lg mt-4",
  },
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      name,
      success,
      className,
      type = "text",
      rightIcon,
      leftIcon,
      size = "sm",
      htmlSize,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    const isPassword = type === "password";
    const currentType = isPassword && show ? "text" : type;
    const s = sizeStyles[size];

    return (
      <div className="w-full md:flex  md:gap-3">
        {label && (
          <label
            className={classNameMerge(
              "mb-1 min-w-20 md:flex-none xs:block xs:w-full font-medium text-[var(--text)]",
              s.label
            )}
          >
            {label}
          </label>
        )}
        <div className="flex-1">
          <div
            className={classNameMerge(
              "relative flex items-center rounded-[var(--radius)] transition-colors bg-[var(--input-bg-default)]",
              "focus-within:border-[var(--brand)]",
              error &&
                "border border-[var(--danger)] bg-[var(--input-bg-error)] text-[var(--text)]",
              success &&
                !error &&
                "border border-[var(--success)]  text-[var(--text)]",
              !error &&
                !success &&
                "borrder border-[var(--border)]  text-[var(--text)]"
            )}
          >
            {leftIcon && (
              <span className="pl-3 text-[var(--muted)]">{leftIcon}</span>
            )}

            <input
              name={name}
              ref={ref}
              type={currentType}
              size={htmlSize} // <- native HTML width-in-chars, optional
              className={classNameMerge(
                "w-full outline-none bg-transparent placeholder:text-[var(--muted)]",
                // ✅ thick, filled password dots
                props.value?"[&[type=password]]:[-webkit-text-security:disc] [&[type=password]]:font-black [&[type=password]]:tracking-normal":"",
                s.input,
                leftIcon && s.leftPadExtra,
                rightIcon || isPassword ? s.rightPad : "pr-3",
                className
              )}
              {...props}
            />
            <span className="absolute right-2 inline-flex items-center">
              {isPassword ? (
                <span
                  onClick={() => setShow((v) => !v)}
                  className={classNameMerge(
                    "rounded text-[var(--muted) cursor-pointer",
                    s.iconBtn
                  )}
                  aria-label={show ? "Hide password" : "Show password"}
                  title={show ? "Hide password" : "Show password"}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {show ? (
                      <>
                        <path d="M2 2l20 20" />
                        <path d="M10.58 10.58a2 2 0 102.84 2.84" />
                        <path d="M16.24 16.24A10.94 10.94 0 0112 18c-5 0-9-4.5-10-6 1.02-1.53 3.63-4.47 7.24-5.64" />
                        <path d="M9.88 5.09A10.94 10.94 0 0112 6c5 0 9 4.5 10 6-.46.69-1.2 1.6-2.2 2.5" />
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                </span>
              ) : (
                rightIcon
              )}
            </span>
          </div>
          {error ? (
            <p className="mt-1 text-xs text-[var(--danger)]">{error}</p>
          ) : hint ? (
            <p className="mt-1 text-xs text-[var(--muted)]">{hint}</p>
          ) : null}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";
