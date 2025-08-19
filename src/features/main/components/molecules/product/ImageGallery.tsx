import * as React from "react";
import { AspectImage } from "../../atoms/product/AspectImage";
import { Dot } from "../../atoms/product/Dot";

export interface ImageGalleryProps {
  images: string[];
  index?: number;                 // controlled
  defaultIndex?: number;          // uncontrolled initial
  onChange?: (i: number) => void;
  href?: string;
  title: string;
}

export function ImageGallery({
  images,
  index,
  defaultIndex = 0,
  onChange,
  href,
  title,
}: ImageGalleryProps) {
  const controlled = index !== undefined;
  const [local, setLocal] = React.useState(defaultIndex);
  const idx = controlled ? (index as number) : local;

  const setIdx = (i: number) => {
    const safe = images.length ? Math.max(0, Math.min(images.length - 1, i)) : 0;
    if (!controlled) setLocal(safe);
    onChange?.(safe);
  };

  const src = images[idx] ?? images[0] ?? "";

  return (
    <>
      <a href={href ?? "#"} aria-label={title} className="block">
        <AspectImage src={src} alt={`${title} - ${idx + 1}`} />
      </a>

      <div className="mt-2 flex flex-wrap gap-1.5" role="tablist" aria-label="상품 이미지 선택">
        {images.map((_, i) => (
          <Dot key={i} active={i === idx} onClick={() => setIdx(i)} label={`이미지 ${i + 1}`} />
        ))}
      </div>
    </>
  );
}
