// LoginScreen.js

import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import InputBox from "../../components/auth/InputBox";
import Colors from "../../assets/colors";
import AnimatedCircles from "../../components/auth/AnimatedCircles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginFail, setLoginFail] = React.useState(false);

  const handleLogin = (email, password) => {
    // Confirm login with database

    fetch(`http://localhost:8000/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send response in login");
        }
        return response.json();
      })
      .then((data) => {
        navigation.navigate("NavigationScreen", { userData: data });
      })
      .catch((error) => {
        console.log("Error getting data through login screen", error);
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <AnimatedCircles></AnimatedCircles>
        <Text style={styles.title}>Historical Stories</Text>
        <InputBox
          value={email}
          onChangeText={setEmail}
          label={"Email"}
        ></InputBox>
        <InputBox
          value={password}
          onChangeText={setPassword}
          isHidden={true}
          label={"Password"}
        ></InputBox>
        <Button
          title="New to Historical Stories? Sign up"
          onPress={() => navigation.navigate("SignupScreen")}
          color={Colors.text}
        />
        <Button
          title="Login"
          color={Colors.text}
          onPress={() => handleLogin(email, password)}
        ></Button>
        {loginFail && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Try logging in again!
          </Text>
        )}
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
