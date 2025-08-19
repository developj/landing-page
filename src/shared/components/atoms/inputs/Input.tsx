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
    iconSize: number;
    label: string;
  }
> = {
  sm: {
    input: "px-3 py-2 text-sm",
    rightPad: "pr-9",
    leftPadExtra: "pl-2",
    iconBtn: "p-1.5",
    iconSize: 16,
    label: "text-sm mt-2",
  },
  md: {
    input: "px-3 py-3 text-[15px]",
    rightPad: "pr-10",
    leftPadExtra: "pl-2",
    iconBtn: "p-2",
    iconSize: 18,
    label: "text-sm mt-3",
  },
  lg: {
    input: "px-4 py-3.5 text-base",
    rightPad: "pr-11",
    leftPadExtra: "pl-2.5",
    iconBtn: "p-2.5",
    iconSize: 20,
    label: "text-base mt-4",
  },
  xl: {
    input: "px-5 py-4 text-lg",
    rightPad: "pr-12",
    leftPadExtra: "pl-3",
    iconBtn: "p-3",
    iconSize: 22,
    label: "text-lg mt-4",
  },
};

/* --- Icons from your SVGs, made color-inherit --- */
const EyeIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
  </svg>
);

const EyeSlashIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z" />
  </svg>
);
/* --- end icons --- */

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
      <div className="w-full md:flex md:gap-3">
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
              success && !error && "border border-[var(--success)] text-[var(--text)]",
              !error && !success && "border border-[var(--border)] text-[var(--text)]"
            )}
          >
            {leftIcon && <span className="pl-3 text-[var(--muted)]">{leftIcon}</span>}

            <input
              name={name}
              ref={ref}
              type={currentType}
              size={htmlSize}
              className={classNameMerge(
                "w-full outline-none bg-transparent placeholder:text-[var(--placeholder-text)]",
                // filled password dots
                props.value
                  ? "[&[type=password]]:[-webkit-text-security:disc] [&[type=password]]:font-black [&[type=password]]:tracking-normal"
                  : "",
                s.input,
                leftIcon && s.leftPadExtra,
                rightIcon || isPassword ? s.rightPad : "pr-3",
                className
              )}
              {...props}
            />

            <span className="absolute right-2 inline-flex items-center">
              {isPassword ? (
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  aria-pressed={show}
                  aria-label={show ? "Hide password" : "Show password"}
                  title={show ? "Hide password" : "Show password"}
                  className={classNameMerge(
                    "rounded text-[var(--text)] cursor-pointer hover:bg-black/5 focus:outline-none",
                    s.iconBtn
                  )}
                >
                  {show ? (
                    <EyeSlashIcon size={s.iconSize} />
                  ) : (
                    <EyeIcon size={s.iconSize} />
                  )}
                </button>
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
