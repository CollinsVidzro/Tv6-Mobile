
// file: _layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { TabBar } from '@/components/TabBar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <TabBar {...props} />}
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