import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import React from "react";

const TabLayout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",     
          tabBarIcon: ({ color }: { color: string }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }: { color: string }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;