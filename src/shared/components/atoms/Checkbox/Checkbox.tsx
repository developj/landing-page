import * as React from "react";
import classNameMerge from "../../../utils/classNameMerge";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      error,
      checked: checkedProp, // if provided → controlled
      defaultChecked, // if provided and checkedProp is undefined → uncontrolled initial
      onChange,
      ...rest
    },
    ref
  ) => {
    const isControlled = checkedProp !== undefined;
    const [internal, setInternal] = React.useState<boolean>(!!defaultChecked);
    const checked = isControlled ? (checkedProp as boolean) : internal;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternal(e.target.checked);
      onChange?.(e);
    };

    return (
      <label className="inline-flex select-none items-start gap-2">
        <span className="relative inline-flex h-5 w-5 items-center justify-center">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className={classNameMerge(
              "peer  inset-0 h-5 w-5 cursor-pointer appearance-none rounded-[6px] border",
              "border-[var(--border)] bg-white",
              "checked:border-[var(--brand)] checked:bg-[var(--brand)] checked:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/40",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...rest}
          />
          {/* check glyph */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            className="absolute top-0.3 cursor-pointer left-0.3 h-4 w-4 transition-opacity opacity-0 text-white peer-checked:opacity-100"
            viewBox="0 0 256 256"
            fill="currentColor"
          >
            <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </span>

        {label && (
          <span className="mt-[1px] text-sm text-[var(--text)]">{label}</span>
        )}
        {error && (
          <span className="ml-2 text-xs text-[var(--danger)]">{error}</span>
        )}
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";
