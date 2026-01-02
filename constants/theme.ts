/**
 * Theme configuration for the app
 */

import { Platform } from 'react-native';

const tintColorLight = '#246fb5';

export const Colors = {
  text: '#11181C',
  background: '#fff',
  tint: tintColorLight,
  icon: '#687076',
  tabIconDefault: '#687076',
  tabIconSelected: tintColorLight,
};


// Using Outfit as the primary font family
export const Fonts = Platform.select({
  ios: {
    sans: 'Outfit',
    serif: 'Outfit',
    rounded: 'Outfit',
    mono: 'SFMono-Regular',
  },
  android: {
    sans: 'Outfit',
    serif: 'Outfit',
    rounded: 'Outfit',
    mono: 'monospace',
  },
  default: {
    sans: 'Outfit',
    serif: 'Outfit',
    rounded: 'Outfit',
    mono: 'monospace',
  },
  web: {
    sans: "Outfit, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Outfit, Georgia, 'Times New Roman', serif",
    rounded: "Outfit, 'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// Font weights for easy reference
export const FontWeights = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

