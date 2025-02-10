// StoryCard.js

import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import Colors from "../assets/colors";

const truncateText = (text, characterLimit) => {
  if (text.length > characterLimit) {
    return text.substring(0, characterLimit - 3) + "...";
  }
  return text;
};

const StoryCard = ({ title, imageSource, style, charLimit = 33 }) => {
  return (
    <TouchableOpacity style={[styles.touchable, style]}>
      <Card containerStyle={[styles.cardContainer, style]}>
        <Card.Image style={styles.cardImage} source={imageSource}></Card.Image>
        <Text style={styles.cardText}> {truncateText(title, charLimit)} </Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: 250,
  },
  cardContainer: {
    backgroundColor: Colors.palette1.white,
    borderRadius: 15,
    overflow: "hidden", // Ensures child elements respect the borderRadius
    padding: 0, // Removes default padding from Card
    paddingBottom: 10,
    margin: 0,
    width: "100%",
  },
  cardImage: {
    resizeMode: "cover",
  },
  cardText: {
    fontFamily: "Merriweather_Sans",
    color: Colors.palette1.lightBlack,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default StoryCard;
