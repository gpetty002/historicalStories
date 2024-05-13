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
    if (!route.params) {
      setUserData({ username: "goofyGoober1", dateLastRead: Date.now() });
    }
    console.log(route.params);

    fetch(`http://localhost:8000/userData`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get user data");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log("Error getting data on featured screen", error);
      });
  };

  const formattedDate = new Date(userData.dateLastRead).toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeHeading}>
          Welcome back, {userData && userData.username}!
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
