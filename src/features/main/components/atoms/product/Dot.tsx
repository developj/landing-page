import classNameMerge from "../../../../../shared/utils/classNameMerge";

export interface DotProps {
  active?: boolean;
  onClick?: () => void;
  className?: string;
  label?: string;
  hex?: string; // optional, used for color indication
}

export function Dot({ active, onClick, className, label, hex }: DotProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-selected={!!active}
      style={hex ? { backgroundColor: hex  } : undefined}
      onClick={onClick}
      className={classNameMerge(
        "h-3 w-3 rounded-full bg-[var(--brand)] transition",
        active ? "ring-1 ring-black/70" : "opacity-70 hover:opacity-100",
        hex === "#ffffff"?"ring-1 ring-black/70" : "",
        className
      )}
    />
  );
}
