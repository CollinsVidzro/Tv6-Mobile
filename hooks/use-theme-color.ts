// hooks/use-theme-color.ts
/**
 * Theme color hook for light mode only
 */
import { Colors } from '@/constants/theme';

export function useThemeColor(
  colorName: keyof typeof Colors
) {
  // Always use light theme colors
  return Colors[colorName];
}