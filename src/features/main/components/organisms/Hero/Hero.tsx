// src/components/hero/HeroSwipe.tsx
import * as React from "react";
import { DotsPager } from "../showcase/DotsPager";

type Align = "left" | "center" | "right";

export type HeroSlide = {
  image: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  alt?: string;
  align?: Align;
};

export interface HeroSwipeProps {
  slides: HeroSlide[];
  className?: string; // e.g. "h-[76vh] md:h-[84vh]"
  vignette?: boolean;
}

export default function HeroSwipe({
  slides,
  className = "h-[72vh] md:h-[80vh]",
  vignette = true,
}: HeroSwipeProps) {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = React.useState(0);
  const ticking = React.useRef(false);

  // dot click -> scroll to slide
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const el = track.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [index]);

  // keep dots in sync with manual swipe/scroll
  const syncFromScroll = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const sl = track.scrollLeft;
    let nearest = 0;
    let min = Number.POSITIVE_INFINITY;
    Array.from(track.children).forEach((node, i) => {
      const el = node as HTMLElement;
      const dist = Math.abs(el.offsetLeft - sl);
      if (dist < min) {
        min = dist;
        nearest = i;
      }
    });
    setIndex(nearest);
  }, []);

  const onScroll: React.UIEventHandler<HTMLDivElement> = () => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      syncFromScroll();
      ticking.current = false;
    });
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight") setIndex((i) => Math.min(slides.length - 1, i + 1));
    if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
  };

  const alignTo = (a?: Align) =>
    a === "left" ? "items-start text-left" : a === "right" ? "items-end text-right" : "items-center text-center";

  return (
    <section className={`relative w-full overflow-hidden ${className}`} onKeyDown={onKeyDown} tabIndex={0}>
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="h-full w-full flex flex-nowrap gap-0 overflow-x-auto snap-x snap-mandatory
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <article key={i} className="relative shrink-0 basis-full h-full w-full snap-start">
            <img
              src={s.image}
              alt={s.alt ?? (typeof s.title === "string" ? s.title : `Slide ${i + 1}`)}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            {vignette && (
              <>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
              </>
            )}
            {(s.title || s.subtitle) && (
              <div className="absolute inset-0 grid px-6 md:px-12 place-items-center">
                <div className={`flex flex-col gap-3 md:gap-4 ${alignTo(s.align ?? "right")} translate-y-[-6%] md:translate-y-[-2%]`}>
                  {s.title && (
                    <h2 className="text-white font-extrabold leading-tight text-2xl sm:text-3xl md:text-5xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                      {s.title}
                    </h2>
                  )}
                  {s.subtitle && (
                    <p className="text-white font-extrabold leading-tight text-xl sm:text-2xl md:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                      {s.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Use your DotsPager as the bottom overlay bar */}
      <div className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <div className="pointer-events-auto">
          <DotsPager
            className="md:w-12"
            totalItems={slides.length}
            currentIndex={index}
            onDotClick={(i) => setIndex(i)}
            isDesktopMode={false}           // bars represent each slide (no grouping)
            desktopItemsPerPage={1}         // required prop but unused in mobile-style mode
          />
        </div>
      </div>
    </section>
  );
}
