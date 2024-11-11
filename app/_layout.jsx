import { Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 75,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: "white",
          borderRadius: 25,
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: focused ? "#0891b2" : "gray",
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={28} color="#0891b2" />
            ) : (
              <Entypo name="home" size={28} color="gray" />
            ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: focused ? "#78716c" : "gray",
              }}
            >
              Create
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="pluscircleo" size={28} color="#78716c" />
            ) : (
              <AntDesign name="pluscircleo" size={28} color="gray" />
            ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: focused ? "#059669" : "gray",
              }}
            >
              Explore
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="explore" size={28} color="#059669" />
            ) : (
              <MaterialIcons name="explore" size={28} color="gray" />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: focused ? "#4f46e5" : "gray",
              }}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="user" size={28} color="#4f46e5" />
            ) : (
              <AntDesign name="user" size={28} color="gray" />
            ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
