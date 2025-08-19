import { Card } from "../../../../../shared/components/molecules/Cards/Card";
import { ImageGallery } from "../../molecules/product/ImageGallery";
import { ColorSwatchList } from "../../molecules/product/ColorSwatchList";
import { TitleBlock } from "../../molecules/product/TitleBlock";
import { PriceRow } from "../../molecules/product/PriceRow";

export type ProductColor = { hex: string; out?: boolean };

export interface ProductCardProps {
  id: string;
  title: string;
  subtitle?: string;
  images: string[];
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
  colors = [],
  selectedColorIndex,
  href,
  imageIndex,
  defaultImageIndex = 0,
  onImageIndexChange,
  onColorSelect,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden p-4">
      <ImageGallery
        images={images}
        index={imageIndex}
        defaultIndex={defaultImageIndex}
        onChange={onImageIndexChange}
        href={href ?? `#${id}`}
        title={title}
      />

      <ColorSwatchList
        colors={colors}
        selectedIndex={selectedColorIndex}
        onSelect={onColorSelect}
      />

      <TitleBlock href={href ?? `#${id}`} title={title} subtitle={subtitle} />

      <PriceRow badge={badge} price={price} />
    </Card>
  );
}
