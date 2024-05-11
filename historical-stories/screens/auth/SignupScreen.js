// SignupScreen.js

import React from "react";
import Colors from "../../assets/colors";
import { Button, View, Text, StyleSheet } from "react-native";
import InputBox from "../../components/auth/InputBox";
import AnimatedCircles from "../../components/auth/AnimatedCircles";

const SignupScreen = ({ navigation }) => {
  const [username] = React.useState("");
  const [email] = React.useState("");
  const [password] = React.useState("");

  const handleSignup = (email, password) => {
    // Confirm signup with database

    navigation.navigate("NavigationScreen");
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <AnimatedCircles></AnimatedCircles>
        <Text style={styles.title}>Welcome to Historical Stories</Text>
        <InputBox inputChange={username} label={"Username"}></InputBox>
        <InputBox inputChange={email} label={"Email"}></InputBox>
        <InputBox inputChange={password} label={"Password"}></InputBox>
        <Button
          title="Sign up"
          color={Colors.text}
          onPress={handleSignup}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.login,
    color: Colors.text,
  },
  container: {
    marginTop: 290,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
  },
  subheading: {
    fontSize: 15,
    color: "white",
    marginTop: 20,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignupScreen;
