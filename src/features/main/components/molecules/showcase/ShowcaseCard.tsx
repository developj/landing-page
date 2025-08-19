import * as React from "react";
import { ShowcaseImage } from "../../atoms/showcase/ShowcaseImage";
import { ShowcaseText } from "../../atoms/showcase/ShowcaseText";

export interface ShowcaseProduct {
  id: number | string;
  title: string;
  description?: string;
  image?: string;
}

export interface ShowcaseCardProps {
  product: ShowcaseProduct;
  /** Make the rightmost card larger on desktop */
  isLarge?: boolean;
}

export const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ product, isLarge }) => {
  const imageSrc =
    product.image || "https://placehold.co/300x400/F0F0F0/000000?text=No+Image";

  return (
    <div
      className={[
        "flex flex-col bg-[var(--panel-base)]  items-center",
        isLarge
          ? "lg:h-[504px] w-full sm:h-[380px] md:mr-0 md:ml-0 md:rounded-tl-none md:rounded-bl-none md:rounded-br-[5rem]"
          : "h-[380px] w-full",
      ].join(" ")}
    >
      <ShowcaseImage
        src={imageSrc}
        alt={product.title}
        className={isLarge ? "h-64 md:h-80 w-full" : "h-48 w-full"}
      />
      <ShowcaseText text={product.title} className="font-semibold text-lg mt-4 bg-[var(--panel-base)" />
      {product.description && (
        <ShowcaseText text={product.description} className="text-gray-600 text-sm bg-[var(--panel-base)" />
      )}
    </div>
  );
};
