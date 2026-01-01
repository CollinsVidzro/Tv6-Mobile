// import { Tabs } from 'expo-router';
// import React from 'react';

// import { HapticTab } from '@/components/haptic-tab';
// import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="about"
//         options={{
//           title: 'About Us',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="info.circle.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="contact"
//         options={{
//           title: 'Contact',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="phone.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }


// file: _layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { AnimatedTabBar } from '@/components/animated-tab-bar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
        }}
      />
    </Tabs>
  );
}