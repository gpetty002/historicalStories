// PersonalScreen.js

import React, { useState } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import StoryList from "../../components/personal/StoryList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StoryCard from "../../components/StoryCard";
import Colors from "../../assets/colors";
import MayanImg from "../../assets/search/images/mayan.jpeg";

const PersonalScreen = ({ route }) => {
  const [userAvatar, setUserAvatar] = useState(
    require("../../assets/personal/squidwardInactive.jpeg")
  );
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    fetchUserData();
  }, [route.params]);

  const fetchUserData = () => {
    if (!userData) {
      if (route.params) {
        setUserData(route.params.route);
      } else {
        setUserData({
          email: "fakeEmail@yahoo.com",
          username: "goofyGoober1",
          dateCreated: Date.now(),
        });
      }
    }
  };

  const formattedDate =
    userData && userData.dateCreated
      ? new Date(userData.dateCreated).toLocaleDateString()
      : new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={userAvatar} style={styles.profilePicture}></Image>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{userData?.username}</Text>
          <Text style={styles.email}>{userData?.email}</Text>
        </View>
      </View>

      <Text style={styles.heading}>Pick up where you left off</Text>
      <StoryCard
        title={"Chimalpahin and the Preservation of Mexica Memory"}
        imageSource={MayanImg}
        style={{ width: "100%", paddingBottom: 10 }}
      ></StoryCard>

      <Text style={styles.heading}>Settings</Text>

      <View style={styles.subSettingsContainer}>
        <View style={styles.settingsCell}>
          <MaterialCommunityIcons name="bookmark-outline" size={24} />
          <Text style={styles.subSettings}>Bookmarked</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} />
        </View>
        <View style={styles.settingsCell}>
          <MaterialCommunityIcons name="plus-circle-outline" size={24} />
          <Text style={styles.subSettings}>Contribute a story</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} />
        </View>
        <View style={styles.settingsCell}>
          <MaterialCommunityIcons name="bell-ring-outline" size={24} />
          <Text style={styles.subSettings}>Notifications</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} />
        </View>
        <View style={styles.settingsCell}>
          <MaterialCommunityIcons name="form-textbox-password" size={24} />
          <Text style={styles.subSettings}>Change password</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} />
        </View>
        <View style={styles.settingsCell}>
          <MaterialCommunityIcons name="logout" size={24} />
          <Text style={styles.subSettings}>Log out</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} />
        </View>
      </View>
      {/* <View style={styles.userInfoContainer}>
        <Image source={userAvatar} style={styles.profilePicture}></Image>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.value}>{userData?.email}</Text>
          <Text style={styles.label}>Date Joined: </Text>
          <Text style={styles.value}>{formattedDate}</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.bookmarkTitle}>Bookmarks</Text>
      <StoryList></StoryList> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 30,
    backgroundColor: Colors.palette1.background,
  },
  profilePicture: {
    width: 87,
    height: 87,
    borderRadius: 50,
  },
  userInfo: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 20,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 30,
  },
  username: {
    color: Colors.palette1.lightBlack,
    fontFamily: "Merriweather-Bold",
    fontSize: 22,
  },
  email: {
    color: Colors.palette1.lightBlack,
    fontSize: 14,
    paddingTop: 3,
    fontFamily: "Merriweather_Sans-Light",
  },
  heading: {
    color: Colors.palette1.lightBlack,
    fontFamily: "Merriweather-Bold",
    fontSize: 16,
    paddingVertical: 10,
  },
  subSettingsContainer: {
    marginHorizontal: 20,
  },
  subSettings: {
    color: Colors.palette1.lightBlack,
    fontFamily: "Merriweather_Sans-Light",
    fontSize: 14,
  },
  settingsCell: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
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
