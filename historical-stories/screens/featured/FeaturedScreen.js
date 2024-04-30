// FeaturedScreen.js

import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Colors from "../../assets/colors";

const FeaturedScreen = ({ navigation }) => {
  const [username, setUsername] = useState("goofyGoober1");
  const [lastRead, setLastRead] = useState("Mar 20 2024");

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeHeading}>Welcome back, {username}!</Text>
        <Text style={styles.readStats}>You last read on: {lastRead} </Text>
        <Text style={styles.readStats}>
          Put analytical chart here for future
        </Text>
        <View style={styles.divider}></View>
        <Text style={styles.headings}>Stories Based on Your Readings</Text>
        <View style={styles.divider}></View>
        <Text style={styles.headings}>Your Daily Historical Dosage</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  welcomeContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcomeHeading: {
    color: "white",
    fontSize: 25,
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
  readStats: {
    color: "white",
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginTop: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  headings: {
    color: "white",
    fontSize: 21,
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
});

export default FeaturedScreen;
