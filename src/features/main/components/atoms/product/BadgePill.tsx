import * as React from "react";
import classNameMerge from "../../../../../shared/utils/classNameMerge";

export function BadgePill({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={classNameMerge(
        "rounded-full border border-[var(--brand)] bg-[color:rgba(255,184,0,0.1)]",
        "px-2.5 py-1 text-xs font-semibold text-[var(--text)]",
        className
      )}
    >
      {children}
    </span>
  );
}
