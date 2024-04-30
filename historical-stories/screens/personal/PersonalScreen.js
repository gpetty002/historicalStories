// PersonalScreen.js

import React, { useState } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import StoryList from "../../components/personal/StoryList";
import Colors from "../../assets/colors";

const PersonalScreen = ({ navigation }) => {
  const [userAvatar, setUserAvatar] = useState(
    require("../../assets/personal/squidwardInactive.jpeg")
  );
  const [email, setEmail] = useState("fakeEmail@yahoo.com");
  const [dateJoined, setDateJoined] = useState("Apr 29 2024");

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={userAvatar} style={styles.profilePicture}></Image>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.value}>{email}</Text>
          <Text style={styles.label}>Date Joined: </Text>
          <Text style={styles.value}>{dateJoined}</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.bookmarkTitle}>Bookmarks</Text>
      <StoryList></StoryList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 40,
    marginLeft: 10,
  },
  userInfo: {
    flex: 1,
    marginTop: 25,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  label: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "white",
    marginBottom: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  bookmarkTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 30,
  },
});

export default PersonalScreen;
