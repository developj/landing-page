import classNameMerge from "../../../../../shared/utils/classNameMerge";

export interface DotProps {
  active?: boolean;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function Dot({ active, onClick, className, label }: DotProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-selected={!!active}
      onClick={onClick}
      className={classNameMerge(
        "h-3 w-3 rounded-full bg-[var(--brand)] transition",
        active ? "ring-2 ring-black/70 scale-110" : "opacity-70 hover:opacity-100",
        className
      )}
    />
  );
}
