// LoginScreen.js

import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import InputBox from "../../components/auth/InputBox";
import Colors from "../../assets/colors";

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
        navigation.navigate("NavigationScreen", { route: data });
      })
      .catch((error) => {
        console.log("Error getting data through login screen", error);
        setLoginFail(true);
      });
  };

  const handleForgotPassword = () => {};

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Rooted</Text>
        <View style={styles.signinContainer}>
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
          <TouchableOpacity
            style={styles.signinBtn}
            onPress={() => handleLogin(email, password)}
          >
            <Text style={styles.signinText}>Log In</Text>
          </TouchableOpacity>

          <Text
            style={styles.forgotPasswordBtn}
            onPress={() => handleForgotPassword()}
          >
            Forgot password?
          </Text>

          {loginFail && (
            <Text style={styles.failMessage}>
              Sorry, your password was incorrect. Please double-check your
              password
            </Text>
          )}
        </View>
        <View style={styles.footer}>
          <Text style={styles.signupText}>
            Don't have an account?{" "}
            <Text
              style={styles.signupBtnText}
              onPress={() => navigation.navigate("SignupScreen")}
            >
              Sign up!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.palette1.accent,
  },
  container: {
    marginTop: 280,
  },
  signinContainer: {
    marginHorizontal: 20,
    alignItems: "center",
    width: "100%",
    maxWidth: 350,
  },
  title: {
    fontSize: 50,
    color: Colors.palette2.primary,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
  },
  signinBtn: {
    backgroundColor: Colors.palette1.teritiary,
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
  },
  signinText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  forgotPasswordBtn: {
    marginVertical: 10,
    alignSelf: "flex-start",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  failMessage: {
    color: "#f22e4b",
    textAlign: "center",
    fontSize: 13,
  },
  footer: {
    marginTop: 160,
  },
  signupText: {
    fontSize: 16,
    color: Colors.palette1.teritiary,
    textAlign: "center",
  },
  signupBtnText: {
    fontSize: 16,
    color: Colors.palette2.primary,
    fontWeight: "bold",
  },
});

export default LoginScreen;
