// LoginScreen.js

import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import InputBox from "../../components/auth/InputBox";
import Colors from "../../assets/colors";
import AnimatedCircles from "../../components/auth/AnimatedCircles";

const LoginScreen = ({ navigation }) => {
  const [email] = React.useState("");
  const [password] = React.useState("");
  const handleLogin = (email, password) => {
    // Confirm login with database

    navigation.navigate("NavigationScreen");
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <AnimatedCircles></AnimatedCircles>
        <Text style={styles.title}>Historical Stories</Text>
        <InputBox inputChange={email} label={"Email"}></InputBox>
        <InputBox inputChange={password} label={"Password"}></InputBox>
        <Button
          title="New to Historical Stories? Sign up"
          onPress={() => navigation.navigate("SignupScreen")}
          color={Colors.text}
        />
        <Button
          title="Login"
          color={Colors.text}
          onPress={handleLogin}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.login,
  },
  container: {
    marginTop: 280,
  },
  title: {
    fontSize: 50,
    color: "white",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginScreen;
