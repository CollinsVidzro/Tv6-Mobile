// file: components/animated-tab-bar.tsx
import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native'; // Import HugeiconsIcon
import {
  Call02Icon,
  Home01Icon,
  InformationCircleIcon,
} from '@hugeicons/core-free-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ThemedText } from '@/components/themed-text';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 3;

export function AnimatedTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const translateValue = useRef(new Animated.Value(0)).current;

  const tabIcons = [
    { id: 'home', icon: Home01Icon },
    { id: 'about', icon: InformationCircleIcon },
    { id: 'contact', icon: Call02Icon },
  ];

  useEffect(() => {
    // Animate the indicator
    Animated.spring(translateValue, {
      toValue: state.index * TAB_WIDTH,
      useNativeDriver: true,
      tension: 150,
      friction: 20,
    }).start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index]);

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
              {iconItem && (
                <HugeiconsIcon
                  icon={iconItem.icon}
                  size={28}
                  color={isFocused ? '#0a7ea4' : '#888'}
                />
              )}
              
              {/* Bounce animation for active tab */}
              {isFocused && (
                <Animated.View style={[
                  styles.activeDot,
                  {
                    transform: [{
                      scale: translateValue.interpolate({
                        inputRange: [
                          (index - 1) * TAB_WIDTH,
                          index * TAB_WIDTH,
                          (index + 1) * TAB_WIDTH
                        ],
                        outputRange: [0, 1, 0],
                        extrapolate: 'clamp'
                      })
                    }]
                  }
                ]} />
              )}
            </View>

            <ThemedText style={[
              styles.label,
              { color: isFocused ? '#0a7ea4' : '#888' }
            ]}>
              {label}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    left: TAB_WIDTH * 0.1,
    width: TAB_WIDTH * 0.8,
    height: 3,
    backgroundColor: '#0a7ea4',
    borderRadius: 3,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  activeDot: {
    position: 'absolute',
    bottom: -8,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#0a7ea4',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
});