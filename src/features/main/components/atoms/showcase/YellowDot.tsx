import * as React from "react";

export interface YellowDotProps {
  isActive?: boolean;
  onClick?: () => void;
}

export const YellowDot: React.FC<YellowDotProps> = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
      isActive ? "bg-[var(--brand)]" : "bg-gray-300"
    }`}
    aria-label="Navigate image"
  />
);
