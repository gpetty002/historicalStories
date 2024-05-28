// NavigationScreen.js

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FeaturedScreen from "./featured/FeaturedScreen";
import SearchScreen from "./search/SearchScreen";
import PersonalScreen from "./personal/PersonalScreen";
import StoryProfileScreen from "./search/StoryProfileScreen";
import Colors from "../assets/colors";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FeaturedStack = ({ route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="FeaturedScreen"
      component={FeaturedScreen}
      options={{ headerShown: false }}
      initialParams={route.params}
    />
  </Stack.Navigator>
);

const SearchStack = ({ route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      options={{ headerShown: false }}
      component={SearchScreen}
      initialParams={route.params}
    />
    <Stack.Screen
      name="StoryProfileScreen"
      options={{ headerShown: false }}
      component={StoryProfileScreen}
      initialParams={route.params}
    />
  </Stack.Navigator>
);

const PersonalStack = ({ route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="PersonalScreen"
      options={{ headerShown: false }}
      component={PersonalScreen}
      initialParams={route.params}
    />
  </Stack.Navigator>
);

const NavigationScreen = ({ route }) => {
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
        initialParams={route.params}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="star" color="white" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        initialParams={route.params}
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
        initialParams={route.params}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="account" color="white" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationScreen;
