// SearchScreen.js

import React, { useState } from "react";
import { Button, View, StyleSheet, ScrollView } from "react-native";
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

  const goToGenre = (genreName) => {
    navigation.navigate("StoryProfileScreen", { genre: genreName });
  };

  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <ScrollView style={styles.background}>
      <SearchBar
        placeholder="Discover something new"
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
