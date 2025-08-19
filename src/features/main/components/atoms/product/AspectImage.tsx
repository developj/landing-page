import classNameMerge from "../../../../../shared/utils/classNameMerge";

export interface AspectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function AspectImage({ src, alt, className }: AspectImageProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={classNameMerge(
            "mx-auto aspect-[3/4] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]",
            className
          )}
          loading="lazy"
        />
      ) : (
        <div className="mx-auto grid aspect-[3/4] w-full place-items-center text-sm text-gray-400">
          No Image
        </div>
      )}
    </div>
  );
}
