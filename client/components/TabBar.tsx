
// components/TabBar.tsx
import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Animated, Platform } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import {
  Home01Icon,
  InformationCircleIcon,
  Call02Icon,
} from '@hugeicons/core-free-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const { width } = Dimensions.get('window');
const TAB_COUNT = 3;
const TAB_WIDTH = width / TAB_COUNT;

// Icon mapping for each tab - using Hugeicons
const tabIcons = [
  { id: 'index', icon: Home01Icon },
  { id: 'about', icon: InformationCircleIcon },
  { id: 'contact', icon: Call02Icon },
];

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const translateValue = useRef(new Animated.Value(0)).current;
  const scaleValues = useRef(
    state.routes.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    // Animate the indicator
    Animated.spring(translateValue, {
      toValue: state.index * TAB_WIDTH,
      useNativeDriver: true,
      tension: 150,
      friction: 20,
    }).start();

    // Animate the circular background for each tab
    state.routes.forEach((_, index) => {
      Animated.spring(scaleValues[index], {
        toValue: state.index === index ? 1 : 0,
        useNativeDriver: true,
        tension: 150,
        friction: 20,
      }).start();
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index, translateValue, scaleValues]);

  return (
    <View style={styles.container}>
      {/* Animated Background Indicator */}
      <Animated.View style={[
        styles.indicator,
        {
          transform: [{ translateX: translateValue }],
        }
      ]} />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconItem = tabIcons.find(icon => icon.id === route.name.toLowerCase());

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              {/* Circular background for active tab */}
              <Animated.View
                style={[
                  styles.circularBackground,
                  {
                    transform: [
                      {
                        scale: scaleValues[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.8, 1],
                        })
                      }
                    ],
                    opacity: scaleValues[index],
                  }
                ]}
              />
              
              {iconItem && (
                <HugeiconsIcon
                  icon={iconItem.icon}
                  size={24} // Slightly smaller icon
                  color={isFocused ? '#ffffff' : '#737373'}
                />
              )}
            </View>

            {/* Label with animation - closer to the icon */}
            <Animated.Text
              style={[
                styles.label,
                { 
                  color: isFocused ? '#0d3061' : '#737373',
                  opacity: translateValue.interpolate({
                    inputRange: [
                      (index - 1) * TAB_WIDTH,
                      index * TAB_WIDTH,
                      (index + 1) * TAB_WIDTH
                    ],
                    outputRange: [0.6, 1, 0.6],
                    extrapolate: 'clamp'
                  })
                }
              ]}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 85 : 70, // Smaller on Android
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10, // Less bottom padding on Android
    paddingTop: 6, // Add some top padding
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    left: TAB_WIDTH * 0.15,
    width: TAB_WIDTH * 0.7,
    height: 3,
    backgroundColor: '#0d3061',
    borderRadius: 3,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4, // Reduced padding
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2, // Reduced from 6 to bring label closer
    width: 48, // Smaller container
    height: 48, // Smaller container
  },
  circularBackground: {
    position: 'absolute',
    width: 40, // Smaller background
    height: 40, // Smaller background
    borderRadius: 20,
    backgroundColor: '#0d3061',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10, // Smaller font size
    fontWeight: '600',
    marginTop: 2, // Reduced from 4 to bring closer to icon
  },
});