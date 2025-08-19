import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to conditionally join Tailwind classes.
 * - Uses clsx for conditional logic
 * - Uses tailwind-merge to resolve conflicts
 */
export function classNameMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
