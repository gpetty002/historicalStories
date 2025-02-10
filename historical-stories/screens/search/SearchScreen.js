// SearchScreen.js

import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import StoryGenres from "../../assets/search/StoryGenres";
// import StoryCard from "../../components/search/StoryCard";
import StoryCard from "../../components/StoryCard";
import Colors from "../../assets/colors";

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const goToGenre = (genre) => {
    // Get story from backend

    fetch(`http://localhost:8000/stories/random`, {
      method: "POST",
      body: JSON.stringify({ genre }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send random story response");
        }
        return response.json();
      })
      .then((data) => {
        navigation.navigate("StoryProfileScreen", { route: data });
      })
      .catch((error) => {
        console.log("Error getting data through SearchScreen", error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <SearchBar
          placeholder="Search"
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarInput}
          placeholderTextColor={Colors.palette1.grey}
          searchIcon={
            <MaterialCommunityIcons
              name="magnify"
              color={Colors.palette1.lightBlack}
              size={24}
            ></MaterialCommunityIcons>
          }
          platform="ios"
        ></SearchBar>
        <Text style={styles.heading}>Explore</Text>

        {Object.values(StoryGenres).map((genre, index) => (
          <View key={index}>
            <Text style={styles.genreHeadings}>{genre.name}</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.rowContainer}
            >
              <StoryCard
                title={"The Fear of Quecholcohuatl"}
                imageSource={genre.pathname}
                style={styles.storyCard}
              ></StoryCard>
              <StoryCard
                title={"Chimalpahin and the Preservation of Mexica Memory"}
              ></StoryCard>
            </ScrollView>
          </View>
        ))}
        {/* <SearchBar
        placeholder="Tell me a story about an African kingdom before colonization..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
        placeholderTextColor="white"
        inputStyle={{ color: "white" }}
        searchIcon={
          <MaterialCommunityIcons
            name="magnify"
            color="white"
            size={24}
          ></MaterialCommunityIcons>
        }
        platform="ios"
      ></SearchBar>
      {Object.values(StoryGenres).map((genre, index) => (
        <StoryCard
          key={index}
          genre={genre.name}
          color={genre.color}
          imageSource={genre.pathname}
          onPress={() => goToGenre(genre.name)}
        ></StoryCard>
      ))} */}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.palette1.background,
    paddingTop: 100,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  searchBar: {
    backgroundColor: "transparent",
    fontFamily: "Merriweather_Sans",
  },
  searchBarInput: {
    color: Colors.palette1.lightBlack,
    backgroundColor: Colors.palette1.white,
    borderRadius: 30,
    borderColor: "#d6d6d6",
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  heading: {
    color: Colors.palette1.lightBlack,
    fontFamily: "Merriweather-Bold",
    fontSize: 18,
    paddingTop: 15,
  },
  genreHeadings: {
    color: Colors.palette1.lightBlack,
    fontFamily: "Merriweather",
    fontSize: 14,
    paddingVertical: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  storyCard: {
    width: 250,
    marginRight: 10,
  },
});

export default SearchScreen;
