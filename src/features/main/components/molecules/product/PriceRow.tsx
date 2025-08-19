import { BadgePill } from "../../atoms/product/BadgePill";
import { Price } from "../../atoms/product/Price";

export function PriceRow({ badge, price }: { badge?: string; price: number }) {
  return (
    <div className="mt-3 flex items-center justify-between">
      {badge ? <BadgePill>{badge}</BadgePill> : <span />}
      <Price value={price} />
    </div>
  );
}
