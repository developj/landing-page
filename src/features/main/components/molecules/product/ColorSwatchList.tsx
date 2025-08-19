import { Swatch } from "../../atoms/product/Swatch";

export interface Color {
  hex: string;
  out?: boolean;
}

export function ColorSwatchList({
  colors,
  selectedIndex,
  onSelect,
}: {
  colors: Color[];
  selectedIndex?: number;
  onSelect?: (i: number) => void;
}) {
  if (!colors?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {colors.map((c, i) => (
        <Swatch
          key={i}
          hex={c.hex}
          out={c.out}
          selected={i === selectedIndex}
          onClick={() => onSelect?.(i)}
          label={`색상 ${i + 1}`}
        />
      ))}
    </div>
  );
}
