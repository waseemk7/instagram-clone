import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";

const Stories = ({ stories }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {stories.map((story, index) => (
        <View key={index} style={styles.storyContainer}>
          <Image
            source={{ uri: story.profilePicture }}
            style={styles.profilePicture}
          />
          <Text style={styles.username}>{story.username}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "white",
  },
  storyContainer: {
    marginRight: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  username: {
    marginTop: 5,
  },
});
