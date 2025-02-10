// StatsCard.js

import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";
import Colors from "../../assets/colors";

const StatsCard = ({ title, number, numberColor, style }) => {
  return (
    <TouchableOpacity>
      <Card
        containerStyle={[
          style,
          {
            backgroundColor: Colors.palette1.white,
            alignItems: "center",
            borderRadius: 15,
          },
        ]}
      >
        <Text style={[styles.numberText, { color: numberColor }]}>
          {" "}
          {number}{" "}
        </Text>
        <Text style={styles.subHeading}>{title}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  numberText: {
    fontFamily: "Merriweather_Sans_Bold",
    fontSize: 22,
    alignSelf: "center",
  },
  subHeading: {
    color: Colors.palette1.lightBlack,
    fontFamily: "Merriweather_Sans_Bold",
    fontSize: 14,
    alignSelf: "center",
  },
});

export default StatsCard;
