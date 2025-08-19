import classNameMerge from "../../../../../shared/utils/classNameMerge";

export interface SwatchProps {
  hex: string;
  selected?: boolean;
  out?: boolean;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function Swatch({ hex, out, onClick, className, label }: SwatchProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={out}
      className={classNameMerge(
        "relative inline-flex h-[20px] xs:h-[11px] w-[20px] xs:w-[11px] items-center justify-center rounded-full",
        out && "opacity-40 cursor-not-allowed",
        className
      )}
      title={hex}
    >
      <span
        className="block h-3.5 w-3.5 rounded-full border border-black/20"
        style={{ backgroundColor: hex }}
      />
      {/* <span
        className={classNameMerge(
          "pointer-events-none absolute inset-[-3px] rounded-full border",
          selected ? "border-black/70" : "border-transparent"
        )}
      /> */}
    </button>
  );
}
