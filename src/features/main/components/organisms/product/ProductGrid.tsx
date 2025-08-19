import { ProductCard, type ProductCardProps } from "./ProductCard";
import classNameMerge from "../../../../../shared/utils/classNameMerge";

type Cols = { base?: number; sm?: number; md?: number; lg?: number; xl?: number };

export interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: ProductCardProps[];
  // change column counts per breakpoint
  cols?: Cols;
  className?: string;           // outer wrapper
  gridClassName?: string;       // grid div
  onColorChange?: (id: string, index: number) => void;
  onImageIndexChange?: (id: string, index: number) => void;
}

const toGridCols = (c?: Cols) => {
  const cols = { base: 2, sm: 2, md: 3, lg: 4, xl: 5, ...c };
  // map to tailwind classes
  return classNameMerge(
    `grid-cols-${cols.base}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`
  );
};

/** Responsive product grid with centered section title */
export default function ProductGrid({
  title,
  subtitle,
  products,
  cols,
  className,
  gridClassName,
  onColorChange,
  onImageIndexChange,
}: ProductGridProps) {
  return (
    <section className={classNameMerge("mx-auto w-full max-w-7xl px-4 py-10", className)}>
      {(title || subtitle) && (
        <header className="mb-8 text-center">
          {title && (
            <h2 className="text-lg font-extrabold tracking-tight text-[var(--text)] md:text-xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-[var(--muted)]">{subtitle}</p>
          )}
          {/* small yellow underline like in your mock */}
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--brand)]" />
        </header>
      )}

      <div
        className={classNameMerge(
          "grid gap-6",
          toGridCols(cols),
          gridClassName
        )}
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            onColorSelect={(idx) => onColorChange?.(p.id, idx)}
            onImageIndexChange={(idx) => onImageIndexChange?.(p.id, idx)}
          />
        ))}
      </div>
    </section>
  );
}
