import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";

const Stories = ({ stories }) => {
  return (
    <FlatList
      data={stories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.storyContainer}>
          <Image
            source={{ uri: item.profilePicture }}
            style={styles.profilePicture}
          />
          <Text style={styles.username}>{item.username}</Text>
        </View>
      )}
    />
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
