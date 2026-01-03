// components/themed-view.tsx
import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  backgroundColor?: string; // Single background color prop
};

export function ThemedView({ 
  style, 
  backgroundColor: customBackgroundColor, // Renamed
  ...otherProps 
}: ThemedViewProps) {
  // Use custom background color if provided, otherwise use theme background
  const themeBackgroundColor = useThemeColor('background');
  const backgroundColor = customBackgroundColor || themeBackgroundColor;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}