// NavigationScreen.js

import React from "react";
import { View } from "react-native";
import BottomNavigation from "../components/navigation/BottomNavigation";

const NavigationScreen = ({ route }) => {
  const { userData } = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <BottomNavigation route={userData}></BottomNavigation>
    </View>
  );
};

export default NavigationScreen;
