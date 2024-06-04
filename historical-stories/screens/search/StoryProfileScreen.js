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
        title: "Inca Empire",
        content:
          "The Inca empire was the largest ancient civilization in pre-Columbia America. Arising from the Andean highlands of Peru sometime in the early 13th century, the Incas established their capital in the city of Cusco located in modern-day Peru. The official language of the ancient Incas was Quechua, however, over seven hundren local dialects were speoken.",
        genre: "Action",
        period: "13th century",
        culturalFocus: "Incas",
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
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Cultural Focus: </Text>
            <Text style={styles.value}>{storyData.culturalFocus}</Text>
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
        <Icon name="share" color="white" onPress={() => shareStory()}></Icon>
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
    paddingRight: 10,
    paddingLeft: 5,
    paddingBottom: 30,
  },
  storyImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  storyTitle: {
    fontSize: 20,
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
    marginRight: 72,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
