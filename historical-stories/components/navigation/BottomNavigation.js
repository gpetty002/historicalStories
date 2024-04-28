// BottomNav.js

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FeaturedScreen from "../../screens/featured/FeaturedScreen";
import SearchScreen from "../../screens/search/SearchScreen";
import PersonalScreen from "../../screens/personal/PersonalScreen";

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
    <Tab.Navigator screenOptions={{ tabBarPosition: "bottom" }}>
      <Tab.Screen
        name="Featured"
        component={FeaturedStack}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="star" color="black" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="card-search" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Personal"
        component={PersonalStack}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="account" color="black" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   bottomNav: {
//     justifyContent: "center",
//     color: "black",
//   },
// });

export default BottomNavigation;
