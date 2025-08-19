import * as React from "react";
import { ShowcaseCard } from "../../molecules/showcase/ShowcaseCard";
import type { ShowcaseProduct } from "../../molecules/showcase/ShowcaseCard";
import { DotsPager } from "./DotsPager";
import { useIsMobile } from "../../../../../shared/hooks/useIsMobile";

export interface ProductShowcaseProps {
  products: ShowcaseProduct[];
  desktopItemsPerPage?: number; // default 4
  title?: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  desktopItemsPerPage = 4,
  title = "스타일과 실용성을 모두 담은 시즌 셀렉션",
}) => {
  const isMobile = useIsMobile(860);

  const [currentMobileIndex, setCurrentMobileIndex] = React.useState(0);
  const [currentDesktopStartIndex, setCurrentDesktopStartIndex] = React.useState(0);

  const handleMobileDotClick = (index: number) => setCurrentMobileIndex(index);
  const handleDesktopDotClick = (startIndex: number) => setCurrentDesktopStartIndex(startIndex);

  const displayed = isMobile
    ? [products[currentMobileIndex]]
    : products.slice(currentDesktopStartIndex, currentDesktopStartIndex + desktopItemsPerPage);

  return (
    <section className="flex flex-col items-center py-10 px-4">
      <h3 className="text-lg w-full font-semibold text-gray-800 pb-6 sm:mb-2 sm:pb-2 md:mb-0 xs:text-center sm:text-start">{title}</h3>

      <div className="relative w-full max-w-7xl">
        {isMobile ? (
          <div className="flex justify-center">
            {displayed[0] && <ShowcaseCard isMobile={true} product={displayed[0]} />}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_2fr] gap-4 items-end">
            {displayed.map((product, i) => (
              <div key={product.id} className="flex justify-center">
                <ShowcaseCard product={product} isLarge={i === desktopItemsPerPage - 1} />
              </div>
            ))}
          </div>
        )}
      </div>

      <DotsPager
        totalItems={products.length}
        currentIndex={isMobile ? currentMobileIndex : currentDesktopStartIndex}
        onDotClick={isMobile ? handleMobileDotClick : handleDesktopDotClick}
        isDesktopMode={!isMobile}
        desktopItemsPerPage={desktopItemsPerPage}
      />
      {/* <div className="w-24 h-1 bg-[var(--brand)] rounded-full mt-8" /> */}
    </section>
  );
};
