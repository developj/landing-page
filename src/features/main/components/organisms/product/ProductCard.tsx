import { Card } from "../../../../../shared/components/molecules/Cards/Card";
import { ImageGallery } from "../../molecules/product/ImageGallery";
import { TitleBlock } from "../../molecules/product/TitleBlock";
import { PriceRow } from "../../molecules/product/PriceRow";
import { useCart } from "../../../../../shared/hooks/useCart";

export type ProductColor = { hex: string; out?: boolean };

export interface ProductCardProps {
  id: string;
  title: string;
  subtitle?: string;
  images: { url: string; dotColor: string }[];
  price: number;
  badge?: string;
  colors?: ProductColor[];
  selectedColorIndex?: number;
  href?: string;
  imageIndex?: number;              // controlled
  defaultImageIndex?: number;       // uncontrolled
  onImageIndexChange?: (i: number) => void;
  onColorSelect?: (index: number) => void;
}

export function ProductCard({
  id,
  title,
  subtitle,
  images,
  price,
  badge,
  href,
  imageIndex,
  defaultImageIndex = 0,
  onImageIndexChange,
}: ProductCardProps) {
  const { add } = useCart();

  // which image is currently shown (if gallery is controlled)
  const activeIdx =
    typeof imageIndex === "number" ? imageIndex : defaultImageIndex;
  const imageUrl = images?.[activeIdx]?.url ?? images?.[0]?.url ?? null;

  const handleAddToCart = () => {
    add(
      {
        id,
        title,
        price,
        image: imageUrl,
      },
      1
    );
  };

  return (
    <Card className="p-2 sm:p-2 md:p-2 shadow-none ring-0 ring-white xs:flex xs:flex-col xs:items-center">
      <ImageGallery
        images={images}
        index={imageIndex}
        defaultIndex={defaultImageIndex}
        onChange={onImageIndexChange}
        href={href ?? `#${id}`}
        title={title}
      />

      <TitleBlock href={href ?? `#${id}`} title={title} subtitle={subtitle} />

      <PriceRow badge={badge} price={price} onBadgeClick={handleAddToCart} />
    </Card>
  );
}
