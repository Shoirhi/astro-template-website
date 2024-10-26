import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isCurrentPath = (
  currentPath: string,
  targetPath: string,
  match?: boolean
) => {
  if (match) {
    return currentPath === targetPath;
  } else {
    return (
      currentPath === targetPath ||
      (targetPath !== "/" && currentPath.startsWith(targetPath))
    );
  }
};
