import * as React from "react";
import { ShowcaseText } from "../../atoms/showcase/ShowcaseText";
import classNameMerge from "../../../../../shared/utils/classNameMerge";

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
  isMobile?: boolean; // used to adjust styles for mobile view
}

export const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  product,
  isLarge,
  isMobile,
}) => {
  const imageSrc =
    product.image || "https://placehold.co/300x400/F0F0F0/000000?text=No+Image";

  return (
    <div
      className={[
        "flex flex-col items-center bg-cover bg-center bg-no-repeat",
        isLarge 
          ? "lg:h-[504px] w-full sm:h-[380px] md:mr-0 md:ml-0 md:rounded-tl-none md:rounded-bl-none rounded-br-[5rem] "
          : "h-[380px] w-full",
          isMobile && "rounded-br-[5rem]"
      ].join(" ")}
      style={{ backgroundImage: `url('${imageSrc}')` }} 
    >
      <div
        className={classNameMerge(
          "flex flex-col justify-end h-full w-full p-4 px-2 bg-gradient-to-b from-transparent via-transparent via-60% to-[var(--panel-base)] to-80%",
          (isLarge || isMobile) && "md:rounded-br-[5rem] rounded-br-[5rem]",
          !isLarge && "justify-between items-start"
        )}
      >
        <ShowcaseText
          text={product.title}
          className={classNameMerge(
            "font-semibold text-sm  text-[var(--text)]",
            isLarge && "text-center"
          )}
        />
        {product.description && (
          <ShowcaseText
            text={product.description}
            className={classNameMerge(
              "text-[var(--text)] text-sm",
              isLarge && "text-center"
            )}
          />
        )}
      </div>
    </div>
  );
};
