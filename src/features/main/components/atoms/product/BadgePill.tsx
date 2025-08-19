import * as React from "react";
import classNameMerge from "../../../../../shared/utils/classNameMerge";

export function BadgePill({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={classNameMerge(
        "rounded-lg border border-[var(--brand-light)] bg-[var(--brand-very-light)]",
        "px-2.5 py-1 text-xs font-semibold text-[var(--tag-brown)]",
        className
      )}
    >
      {children}
    </span>
  );
}
