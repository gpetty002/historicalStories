// InputBox.js

import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const InputBox = ({ value, onChangeText, label, isHidden = false }) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        secureTextEntry={isHidden}
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
    marginTop: 15,
    marginBottom: 5,
    alignContent: "center",
  },
  textBoxes: {
    backgroundColor: "white", // Change input box background color
    borderRadius: 10, // Apply border radius
  },
});

export default InputBox;
