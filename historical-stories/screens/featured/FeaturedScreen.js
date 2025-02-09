// FeaturedScreen.js

import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import StoryCard from "../../components/search/StoryCard";
import Colors from "../../assets/colors";
import MayanImg from "../../assets/search/images/mayan.jpeg";

const FeaturedScreen = ({ route, navigation }) => {
  const [userData, setUserData] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(true);
  const [generated, setGenerated] = useState(false);
  const [routeData, setRouteData] = useState(null);

  React.useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    if (route.params) {
      setUserData(route.params.route);
    } else {
      setUserData({ username: "goofyGoober1", dateLastRead: Date.now() });
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
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
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
      </View>
    </View>
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
    flex: 1,
    backgroundColor: Colors.palette1.background,
    color: Colors.palette1.primary,
  },
  welcomeContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcomeHeading: {
    color: Colors.palette1.teritiary,
    fontSize: 25,
    fontFamily: "Merriweather",
    fontWeight: "bold",
  },
  readStats: {
    color: Colors.palette1.teritiary,
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
    color: Colors.palette1.teritiary,
    fontSize: 21,
    fontFamily: "Merriweather",
    fontWeight: "bold",
  },
});

export default FeaturedScreen;
