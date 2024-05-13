// SignupScreen.js

import React from "react";
import Colors from "../../assets/colors";
import { Button, View, Text, StyleSheet } from "react-native";
import InputBox from "../../components/auth/InputBox";
import AnimatedCircles from "../../components/auth/AnimatedCircles";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signupFail, setSignupFail] = React.useState(false);

  const handleSignup = (username, email, password) => {
    // Confirm signup with database

    fetch(`http://localhost:8000/signup`, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send response for sign up");
        }
        return response.json();
      })
      .then((data) => {
        console.log("User created ", data);
        navigation.navigate("NavigationScreen", { userData: data });
      })
      .catch((error) => {
        console.log("Error creating user on frontend", error);
        setSignupFail(true);
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <AnimatedCircles></AnimatedCircles>
        <Text style={styles.title}>Welcome to Historical Stories</Text>
        <InputBox
          value={username}
          onChangeText={setUsername}
          label={"Username"}
        ></InputBox>
        <InputBox
          value={email}
          onChangeText={setEmail}
          label={"Email"}
        ></InputBox>
        <InputBox
          value={password}
          onChangeText={setPassword}
          label={"Password"}
          isHidden={true}
        ></InputBox>
        <Button
          title="Sign up"
          color={Colors.text}
          onPress={() => handleSignup(username, email, password)}
        ></Button>
        {signupFail && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Try signing in again!
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
