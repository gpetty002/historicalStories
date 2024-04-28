// NavigationScreen.js

import React from "react";
import { View, Text } from "react-native";
import BottomNavigation from "../components/navigation/BottomNavigation";
import Colors from "../assets/colors";

const NavigationScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <BottomNavigation></BottomNavigation>
    </View>
  );
};

export default NavigationScreen;
