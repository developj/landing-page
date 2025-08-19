import * as React from "react";

export interface ShowcaseImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ShowcaseImage: React.FC<ShowcaseImageProps> = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`w-full h-48 object-cover rounded-xl ${className ?? ""}`}
    loading="lazy"
  />
);
