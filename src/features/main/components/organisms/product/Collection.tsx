
import ProductGrid from "./ProductGrid";
import type { ProductCardProps } from "./ProductCard";

const products: ProductCardProps[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `jacket-${i + 1}`,
  title: "상품명이 노출 됩니다.상품명이 노출 됩니...",
  subtitle: "{브랜드명} 그룹코드-색상명",
  images: [
    "/images/jacket-olive-1.png",
    "/images/jacket-olive-2.png",
    "/images/jacket-olive-3.png",
  ],
  price: 123000,
  badge: "창고명 6자",
  colors: [
    { hex: "#74541b" },
    { hex: "#2f3b22" },
    { hex: "#3b3b3b" },
    { hex: "#c5c5c5" },
    { hex: "#ffffff" },
  ],
  selectedColorIndex: 1,
}));

export default function Collection() {
  return (
    <>
      <ProductGrid
        title="상품전명이 타이틀이 들어갑니다."
        subtitle="부제(선택) 설명은 짧게 핵심으로 들어갑니다."
        products={products}
        cols={{ base: 2, md: 3, lg: 4, xl: 5 }} // tweak if desired
        onColorChange={(id, idx) => console.log("color", id, idx)}
        onImageIndexChange={(id, idx) => console.log("image", id, idx)}
      />
    </>
  );
}
