// StoryList.js

import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import Colors from "../../assets/colors";
import { color } from "react-native-elements/dist/helpers";

const StoryList = ({ userEmail }) => {
  // get saved stories with userEmail from database here
  // Simulate saved stories until then

  const dummyList = [
    {
      title: "Creation of Maya",
      dateSaved: "Apr 20 2024",
    },
    {
      title: "Inca Empire",
      dateSaved: "Apr 20 2024",
    },
  ];

  const removeBookmark = () => {
    // remove this bookmark from list
  };

  const goToStory = () => {
    // route to the story
  };

  return (
    <ScrollView>
      {dummyList.map((story, index) => (
        <ListItem containerStyle={styles.container} key={index} bottomDivider>
          <Icon
            name="bookmark"
            onPress={() => removeBookmark}
            color="red"
          ></Icon>
          <ListItem.Content>
            <ListItem.Title onPress={() => goToStory} style={styles.storyTitle}>
              {story.title}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.storySubtitle}>
              {story.dateSaved}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  storyTitle: {
    color: "white",
  },
  storySubtitle: {
    color: "gray",
  },
});

export default StoryList;
