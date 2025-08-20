import { BadgePill } from "../../atoms/product/BadgePill";
import { Price } from "../../atoms/product/Price";

export function PriceRow({
  badge,
  price,
  onBadgeClick,
}: {
  badge?: string;
  price: number;
  onBadgeClick?: () => void; // ← new
}) {
  return (
    <div className="mt-3 flex items-center">
      {badge ? (
        <span
          className="mr-2 cursor-pointer"
          onClick={onBadgeClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onBadgeClick?.()}
          aria-label="Add to cart"
        >
          <BadgePill>{badge}</BadgePill>
        </span>
      ) : (
        <span />
      )}
      <Price value={price} />
    </div>
  );
}
