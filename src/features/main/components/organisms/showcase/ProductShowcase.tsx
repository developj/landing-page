import * as React from "react";
import { ShowcaseCard } from "../../molecules/showcase/ShowcaseCard";
import type { ShowcaseProduct } from "../../molecules/showcase/ShowcaseCard";
import { DotsPager } from "./DotsPager";
import { useIsMobile } from "../../../../../shared/hooks/useIsMobile";

export interface ProductShowcaseProps {
  products: ShowcaseProduct[];
  desktopItemsPerPage?: number;
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

//---------- MOBILE----------
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const tickingRef = React.useRef(false);

  React.useEffect(() => {
    if (!isMobile || !trackRef.current) return;
    const child = trackRef.current.children[currentMobileIndex] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [currentMobileIndex, isMobile]);

  const syncIndexFromScroll = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let min = Number.POSITIVE_INFINITY;
    Array.from(track.children).forEach((node, i) => {
      const el = node as HTMLElement;
      const center = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < min) {
        min = dist;
        nearest = i;
      }
    });
    setCurrentMobileIndex(nearest);
  }, []);

  const onTrackScroll: React.UIEventHandler<HTMLDivElement> = () => {
    if (!isMobile) return;
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      syncIndexFromScroll();
      tickingRef.current = false;
    });
  };

  // ---------- DESKTOP ----------
  const desktopPageStarts = React.useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < products.length; i += desktopItemsPerPage) arr.push(i);
    return arr;
  }, [products.length, desktopItemsPerPage]);

  const desktopTrackRef = React.useRef<HTMLDivElement | null>(null);
  const desktopTickingRef = React.useRef(false);

  // Dots -> scroll page into view
  React.useEffect(() => {
    if (isMobile || !desktopTrackRef.current) return;
    const pageIndex = Math.floor(currentDesktopStartIndex / desktopItemsPerPage);
    const pageEl = desktopTrackRef.current.children[pageIndex] as HTMLElement | undefined;
    pageEl?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [currentDesktopStartIndex, desktopItemsPerPage, isMobile]);

  // Scroll -> sync active page for dots
  const syncDesktopIndexFromScroll = React.useCallback(() => {
    const track = desktopTrackRef.current;
    if (!track) return;
    const sl = track.scrollLeft;

    let nearestPageIdx = 0;
    let min = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((node, pageIdx) => {
      const el = node as HTMLElement;
      const dist = Math.abs(el.offsetLeft - sl);
      if (dist < min) {
        min = dist;
        nearestPageIdx = pageIdx;
      }
    });

    const start = desktopPageStarts[nearestPageIdx] ?? 0;
    setCurrentDesktopStartIndex(start);
  }, [desktopPageStarts]);

  const onDesktopScroll: React.UIEventHandler<HTMLDivElement> = () => {
    if (isMobile) return;
    if (desktopTickingRef.current) return;
    desktopTickingRef.current = true;
    requestAnimationFrame(() => {
      syncDesktopIndexFromScroll();
      desktopTickingRef.current = false;
    });
  };

  return (
    <section className="flex flex-col items-center py-12 px-4">
      <h3 className="text-lg w-full font-semibold text-gray-800 pb-6 sm:mb-2 sm:pb-2 md:mb-0 xs:text-center sm:text-start">
        {title}
      </h3>

      <div className="relative w-full max-w-7xl">
        {isMobile ? (
          /* --------- MOBILE--------- */
          <div
            ref={trackRef}
            onScroll={onTrackScroll}
            className={`
              -mx-4 px-4
              flex gap-4 overflow-x-auto
              snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              justify-start items-center
            `}
          >
            {products?.map((p, i) => (
              <div key={p.id} className="snap-center shrink-0 basis-[84%]">
                <ShowcaseCard isActive={i === currentMobileIndex} product={p} />
              </div>
            ))}
          </div>
        ) : (
          /* --------- DESKTOP: horizontal pages, no peeks (FIXED) --------- */
          <div
            ref={desktopTrackRef}
            onScroll={onDesktopScroll}
            className={`
              overflow-x-auto snap-x snap-mandatory
              flex gap-0 flex-nowrap           /* <-- horizontal track */
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            `}
          >
            {desktopPageStarts.map((start) => {
              const end = Math.min(start + desktopItemsPerPage, products.length);
              const pageItems = products.slice(start, end);
              return (
                <div
                  key={start}
                  className="snap-start shrink-0 basis-full"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_2fr] gap-4 items-end">
                    {pageItems.map((product, i) => (
                      <div key={product.id} className="flex justify-center">
                        <ShowcaseCard
                          product={product}
                          isLarge={i === pageItems.length - 1}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
    </section>
  );
};
