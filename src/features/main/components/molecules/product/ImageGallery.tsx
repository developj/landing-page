import * as React from "react";
import { AspectImage } from "../../atoms/product/AspectImage";
import { Dot } from "../../atoms/product/Dot";

export interface ImageGalleryProps {
  images: { url: string; dotColor: string }[];
  index?: number; // controlled
  defaultIndex?: number; // uncontrolled initial
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

  // Access the 'url' property from the selected image object
  const selectedImage = images[idx];
  const src = selectedImage ? selectedImage.url : images[0]?.url ?? "";

  return (
    <>
      <a href={href ?? "#"} aria-label={title} className="block">
        <AspectImage src={src} alt={`${title} - ${idx + 1}`} />
      </a>

      <div className="mt-2 flex justify-between flex-wrap" role="tablist" aria-label="상품 이미지 선택">
        {images.map((image, i) => (
          <Dot
            className="w-5 h-5 xs:w-2 xs:h-2 cursor-pointer"
            key={i}
            active={i === idx}
            onClick={() => setIdx(i)}
            label={`이미지 ${i + 1}`}
            hex={image?.dotColor || "#fff" } 
          />
        ))}
      </div>
    </>
  );
}