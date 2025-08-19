import * as React from "react";

export interface ShowcaseTextProps {
  text: React.ReactNode;
  className?: string;
}

export const ShowcaseText: React.FC<ShowcaseTextProps> = ({ text, className }) => (
  <p className={`px-2 py-1 ${className ?? ""}`}>{text}</p>
);
