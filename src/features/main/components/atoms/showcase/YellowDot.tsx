import * as React from "react";
import classNameMerge from "../../../../../shared/utils/classNameMerge";

export interface YellowDotProps {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const YellowDot: React.FC<YellowDotProps> = ({ isActive, onClick, className}) => (
  <button
    onClick={onClick}
    className={classNameMerge(`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
      isActive ? "bg-[var(--brand)]" : "bg-gray-300"
    }`,className)}
    aria-label="Navigate image"
  />
);
