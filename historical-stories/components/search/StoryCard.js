// StoryCard.js

import React from "react";
import { Button, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import Colors from "../../assets/colors";

const StoryCard = ({ genre, imageSource, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        containerStyle={{ margin: 25, backgroundColor: color, borderWidth: 0 }}
      >
        <Card.Title style={{ color: Colors.text }}> {genre} </Card.Title>
        <Card.Image source={imageSource}></Card.Image>
      </Card>
    </TouchableOpacity>
  );
};

export default StoryCard;
