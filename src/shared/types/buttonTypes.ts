import type { StyleProps } from "./types";

export interface BasicButtonProps extends StyleProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  title?: string;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}