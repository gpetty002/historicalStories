// InputBox.js

import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const InputBox = ({ emailChange, passwordChange }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => {
          setEmail(email);
          emailChange(email);
        }}
        theme={{
          colors: {
            primary: "blue",
            background: "transparent",
            placeholder: "gray",
            text: "black",
            error: "red",
          },
        }}
        style={styles.textBoxes}
      ></TextInput>
      <TextInput
        label="Password"
        value={password}
        onChangeText={(password) => {
          setPassword(password);
          passwordChange(password);
        }}
        theme={{
          colors: {
            primary: "blue",
            background: "transparent",
            placeholder: "gray",
            text: "black",
            error: "red",
          },
        }}
        style={styles.textBoxes}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 10,
    alignContent: "center",
  },
  textBoxes: {
    backgroundColor: "white", // Change input box background color
    borderRadius: 10, // Apply border radius
    marginTop: 10, // Apply margin
  },
});

export default InputBox;
