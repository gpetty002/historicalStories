// FeaturedScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../assets/colors";

const FeaturedScreen = ({ route }) => {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    if (route.params) {
      setUserData(route.params);
    } else {
      setUserData({ username: "goofyGoober1", dateLastRead: Date.now() });
    }
  };

  React.useEffect(() => {
    const username = userData ? userData.username : "undefined";
    console.log(username);
  }, [userData]);

  /*

  this is route.params
  {"route": {"__v": 0, "_id": "6641897de9b16e562c64018a", "bookmarkedStories": [], "dateCreated": "2024-05-13T03:31:09.162Z", "dateLastRead": "2024-05-13T03:31:09.162Z", "email": "lol@gmail.com", "likedGenres": [], "password": "soccer", "username": "dogggggg"}}

  */

  console.log(userData);
  const username = route.params["username"];
  console.log(username); // this prints out undefined even though route.params is something

  const formattedDate =
    userData && userData.dateLastRead
      ? new Date(userData.dateLastRead).toLocaleDateString()
      : new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeHeading}>
          Welcome back, {userData?.username}!
        </Text>
        <Text style={styles.readStats}>You last read on: {formattedDate}</Text>
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
