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
  const [userExists, setUserExists] = React.useState(false);

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
        switch (response.status) {
          case 400:
            setUserExists(true);
            break;
          case 500:
            setSignupFail(true);
            break;
          default:
            break;
        }
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
        {userExists && (
          <Text style={styles.failMessage}>
            User exists! Login or try a different email!
          </Text>
        )}
        {signupFail && (
          <Text style={styles.failMessage}>Could not connect to server!</Text>
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
  failMessage: {
    color: "#f22e4b",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignupScreen;
