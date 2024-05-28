// StoryProfileScreen.js

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../assets/colors";

const StoryProfileScreen = ({ route }) => {
  const [storyData, setStoryData] = React.useState(null);

  useEffect(() => {
    if (route.params && route.params.route) {
      setStoryData(route.params.route);
    } else {
      setStoryData({
        title: "The Prince and the Pauper",
        content:
          "Once upon a time, in the bustling kingdom of Eldoria, there lived two boys who couldn't have come from more different worlds.The first was Prince Alexander, heir to the throne of Eldoria. He was raised within the towering walls of the royal palace, surrounded by opulence and luxury. From a young age, he was groomed to rule with wisdom and grace, his every whim attended to by a retinue of servants.The second was Thomas, a humble pauper who eked out a living on the streets of the kingdom's bustling capital. Born into poverty, Thomas knew the harsh realities of life all too well. He survived by his wits, relying on his quick feet and silver tongue to navigate the crowded alleys and marketplaces.Despite their vastly different circumstances, fate would soon intertwine their destinies in a way neither could have imagined. One fateful day, Prince Alexander grew weary of the confines of the palace walls. Yearning to experience life beyond his gilded cage, he disguised himself as a commoner and ventured out into the streets of the capital. It was there that he crossed paths with Thomas, who, mistaking the prince for a fellow street urchin, took him under his wing. Together, they roamed the city streets, their adventures taking them to places both wondrous and perilous.",
        genre: "Friendship",
        period: "unknown",
        culturalFocus: "British",
      });
    }
  }, [route.params]);

  const [storyImage, setStoryImage] = useState(
    require("../../assets/search/images/spongebobAI.jpeg")
  );

  const addBookmark = () => {
    // add bookmark to list
  };

  const shareStory = () => {
    // share story
  };

  if (!storyData) {
    return null; // Or a loading indicator
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.storyContainer}>
        <Image source={storyImage} style={styles.storyImage}></Image>
        <View style={styles.infoContainer}>
          <Text style={styles.storyTitle}>{storyData.title}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Era: </Text>
            <Text style={styles.value}>{storyData.period}</Text>
            <Text style={styles.label}>Cultural Focus: </Text>
            <Text style={styles.value}>{storyData.cultural_focus}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Genre: </Text>
            <Text style={styles.value}>{storyData.genre}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.storyText}>{storyData.content}</Text>

      <View style={styles.storyIcons}>
        <Text style={styles.shareText}>Share or save!</Text>
        <Icon
          name="bookmark-outline"
          color="white"
          onPress={() => addBookmark}
        ></Icon>
        <Icon name="share" color="white" onPress={() => shareStory}></Icon>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  storyContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 30,
  },
  storyImage: {
    width: 120,
    height: 120,
  },
  storyTitle: {
    fontSize: 21,
    color: "white",
    fontWeight: "bold",
  },
  storyEra: {
    fontSize: 18,
    color: "white",
    fontFamily: "Helvetica",
  },
  storyGenre: {
    fontSize: 16,
    color: "gray",
    fontFamily: "Helvetica",
  },
  storyText: {
    fontSize: 18,
    fontFamily: "Helvetica",
    color: "white",
    textAlign: "justify",
  },
  label: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    fontFamily: "Helvetica",
  },
  value: {
    fontSize: 16,
    color: "white",
    fontFamily: "Helvetica",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  storyIconContainer: {
    flex: 1,
  },
  storyIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 10,
    marginTop: 20,
    marginBottom: 50,
  },
  shareText: {
    marginRight: 10,
    color: "white",
    fontSize: 14,
    fontFamily: "Helvetica",
  },
});

export default StoryProfileScreen;
