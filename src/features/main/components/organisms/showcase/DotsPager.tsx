import * as React from "react";
import { YellowDot } from "../../atoms/showcase/YellowDot";
import classNameMerge from "../../../../../shared/utils/classNameMerge";

export interface DotsPagerProps {
  totalItems: number;
  currentIndex: number;
  onDotClick: (targetIndex: number) => void;
  isDesktopMode: boolean;
  desktopItemsPerPage: number;
  className?: string;
}

export const DotsPager: React.FC<DotsPagerProps> = ({
  totalItems,
  currentIndex,
  onDotClick,
  isDesktopMode,
  desktopItemsPerPage,
  className,
}) => {
  const numDots = isDesktopMode
    ? Math.ceil(totalItems / desktopItemsPerPage)
    : totalItems;

  const getTargetIndex = (dotNum: number) =>
    isDesktopMode ? dotNum * desktopItemsPerPage : dotNum;

  const isActive = (i: number) =>
    isDesktopMode
      ? Math.floor(currentIndex / desktopItemsPerPage) === i
      : currentIndex === i;

  return (
    <div className="flex justify-center mt-6">
      <div className="w-56 cursor-pointer text-center">{Array.from({ length: numDots }).map((_, i) => (
        <YellowDot className={classNameMerge("m-0 h-[2px] md:w-24 rounded-none cursor-pointer", isActive(i) && "h-[5px] m-0",className)}  key={i} isActive={isActive(i)} onClick={() => onDotClick(getTargetIndex(i))} />
      ))}
      </div>
    </div>
  );
};
