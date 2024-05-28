// SearchScreen.js

import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import StoryGenres from "../../assets/search/StoryGenres";
import StoryCard from "../../components/search/StoryCard";
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
    <ScrollView style={styles.background}>
      <SearchBar
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
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    marginTop: 280,
  },
  searchBar: {
    backgroundColor: Colors.searchBar,
    fontFamily: "Helvetica",
  },
  searchBarInput: {
    color: "white",
    backgroundColor: Colors.searchBarInput,
  },
});

export default SearchScreen;
