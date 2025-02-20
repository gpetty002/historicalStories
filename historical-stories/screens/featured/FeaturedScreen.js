// FeaturedScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
// import StoryCard from "../../components/search/StoryCard";
import StoryCard from "../../components/StoryCard";
import StatsCard from "../../components/featured/StatsCard";
import Colors from "../../assets/colors";
import MayanImg from "../../assets/search/images/mayan.jpeg";
import MysteryImg from "../../assets/search/images/mystery.jpeg";
import RomanceImg from "../../assets/search/images/romance.jpeg";

const FeaturedScreen = ({ route, navigation }) => {
  const [userData, setUserData] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(true);
  const [generated, setGenerated] = useState(false);
  const [routeData, setRouteData] = useState(null);

  React.useEffect(() => {
    fetchUserData();
  }, [route.params]);

  const fetchUserData = () => {
    if (!userData) {
      if (route.params) {
        setUserData(route.params.route);
      } else {
        setUserData({ username: "goofyGoober1", dateLastRead: Date.now() });
      }
    }
  };

  const goToStoryOfTheDay = () => {
    // get story of the day, specify that it should be a story relevant to the day
    if (!generated) {
      fetch(`http://localhost:8000/stories/today`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to send today in history response");
          }
          return response.json();
        })
        .then((data) => {
          navigation.navigate("StoryProfileScreen", { route: data });
          setGenerated(true);
          setRouteData(data);
        })
        .catch((error) => {
          console.log("Error getting data through FeaturedScreen", error);
        });
    } else {
      navigation.navigate("StoryProfileScreen", { route: routeData });
    }
  };

  const formattedDate =
    userData && userData.dateLastRead
      ? new Date(userData.dateLastRead).toLocaleDateString()
      : new Date().toLocaleDateString();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.welcomeHeading}>
        Welcome back, {userData?.username}
      </Text>
      <View style={styles.statsContainer}>
        <View style={styles.statsRowContainer}>
          <StatsCard
            title={"stories read"}
            number={12}
            numberColor={Colors.palette1.red}
          ></StatsCard>
          <StatsCard
            title={"day streak"}
            number={6}
            numberColor={Colors.palette1.green}
          ></StatsCard>
          <StatsCard
            title={"hours spent"}
            number={4}
            numberColor={Colors.palette1.yellow}
          ></StatsCard>
        </View>
        <StatsCard
          title={"historical eras explored"}
          number={3}
          numberColor={Colors.palette1.blue}
          style={styles.erasExploredCard}
        ></StatsCard>
      </View>

      <Text style={styles.headings}>Today in History</Text>
      <View>
        <StoryCard
          title={"Chimalpahin and the Preservation of Mexica Memory"}
          imageSource={MayanImg}
          style={styles.fullWidthStoryCard}
        ></StoryCard>
      </View>

      <Text style={styles.headings}>For you</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.forYouRowContainer}
      >
        <StoryCard
          title={
            "The Sacred Seed: The Origins of Chocolate in Ancient Mesoamerican Civilizations"
          }
          imageSource={MysteryImg}
          style={styles.storyCard}
        ></StoryCard>
        <StoryCard
          title={"The Rise of Itzcoatl"}
          imageSource={RomanceImg}
          style={styles.storyCard}
        ></StoryCard>
      </ScrollView>
      {/* <View style={styles.welcomeContainer}>
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
            setModalVisible(modalVisible);
          }}
        >
          <View style={styles.modalCentered}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Story of the Day!</Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Icon name="close" color="white"></Icon>
              </Pressable>
              <Pressable
                style={styles.storyButton}
                onPress={() => {
                  goToStoryOfTheDay();
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.buttonText}>Discover</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.welcomeHeading}>
          Welcome back, {userData?.username}!
        </Text>
        <Text style={styles.readStats}>You last read on: {formattedDate}</Text>
        <Text style={styles.readStats}>
          Put analytical chart here for future
        </Text>
        <View style={styles.divider}></View>
        <Text style={styles.headings}>Stories Based on Your Readings</Text>
        <View style={styles.divider}></View>
        <Text style={styles.headings}>Your Daily Historical Dosage</Text>
        <StoryCard
          genre={"Today in History"}
          onPress={goToStoryOfTheDay}
          color={Colors.active}
          imageSource={MayanImg}
        ></StoryCard>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalCentered: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.searchBar,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    color: Colors.text,
    textAlign: "center",
    paddingTop: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  closeButton: {
    paddingLeft: 10,
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 15,
    marginRight: 15,
  },
  storyButton: {
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    elevation: 2,
    backgroundColor: Colors.active,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flexGrow: 1,
    backgroundColor: Colors.palette1.background,
    color: Colors.palette1.greyBlue,
    paddingTop: 100,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  statsRowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  erasExploredCard: {
    width: "100%",
    alignSelf: "center",
  },
  fullWidthStoryCard: {
    width: "100%",
  },
  forYouRowContainer: {
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
  welcomeContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcomeHeading: {
    color: Colors.palette1.lightBlack,
    fontSize: 30,
    fontFamily: "Merriweather-Bold",
  },
  readStats: {
    color: Colors.palette1.lightBlack,
    fontSize: 16,
    fontFamily: "Merriweather",
    fontWeight: "bold",
    marginTop: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  headings: {
    color: Colors.palette1.lightBlack,
    fontSize: 18,
    fontFamily: "Merriweather",
    fontWeight: "bold",
    paddingVertical: 10,
  },
});

export default FeaturedScreen;
