import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const IS_TAURI = process.env.NEXT_PUBLIC_DESKTOP_BUILD === 'tauri';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
