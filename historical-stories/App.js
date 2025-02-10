import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import NavigationScreen from "./screens/NavigationScreen";
import React from "react";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const App = () => {
  const originalWarn = console.warn;
  console.warn = (message, ...args) => {
    if (message.includes("defaultProps")) {
      return;
    }
    originalWarn(message, ...args);
  };

  const [fontsLoaded] = useFonts({
    Merriweather: require("./assets/fonts/Merriweather/Merriweather-Regular.ttf"),
    Merriweather_Bold: require("./assets/fonts/Merriweather/Merriweather-Bold.ttf"),
    Merriweather_Sans: require("./assets/fonts/Merriweather_Sans/static/MerriweatherSans-Regular.ttf"),
    Merriweather_Sans_Bold: require("./assets/fonts/Merriweather_Sans/static/MerriweatherSans-Bold.ttf"),
    Merriweather_Sans_Light: require("./assets/fonts/Merriweather_Sans/static/MerriweatherSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="NavigationScreen"
            component={NavigationScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
              gestureDirection: "horizontal",
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
