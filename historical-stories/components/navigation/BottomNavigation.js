// BottomNav.js

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FeaturedScreen from "../../screens/featured/FeaturedScreen";
import SearchScreen from "../../screens/search/SearchScreen";
import PersonalScreen from "../../screens/personal/PersonalScreen";
import { color } from "react-native-elements/dist/helpers";
import Colors from "../../assets/colors";
import StoryProfileScreen from "../../screens/search/StoryProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FeaturedStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FeaturedScreen"
      component={FeaturedScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      options={{ headerShown: false }}
      component={SearchScreen}
    />
    <Stack.Screen
      name="StoryProfileScreen"
      options={{ headerShown: false }}
      component={StoryProfileScreen}
    />
  </Stack.Navigator>
);

const PersonalStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PersonalScreen"
      options={{ headerShown: false }}
      component={PersonalScreen}
    />
  </Stack.Navigator>
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPosition: "bottom",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: Colors.background,
        },
        tabBarStyle: { backgroundColor: Colors.background },
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Featured"
        component={FeaturedStack}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="star" color="white" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="card-search"
              color="white"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Personal"
        component={PersonalStack}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="account" color="white" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
