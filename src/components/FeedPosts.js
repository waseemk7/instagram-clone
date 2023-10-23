import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // You'll need to import the Feather icons library

const data = [
  {
    id: "1",
    username: "john_doe",
    userImage: "https://www.freepnglogos.com/uploads/one-piece-logo-9.jpg",
    imageUrl: "https://www.freepnglogos.com/uploads/one-piece-logo-9.jpg",
    caption: "Beautiful sunset!",
    likes: 235,
    comments: 18,
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    username: "jane_smith",
    userImage:
      "https://static.bandainamcoent.eu/high/one-piece/one-piece-world-seeker/00-page-setup/opws_game-thumbnail.jpg",
    imageUrl:
      "https://static.bandainamcoent.eu/high/one-piece/one-piece-world-seeker/00-page-setup/opws_game-thumbnail.jpg",
    caption: "Exploring the wilderness.",
    likes: 187,
    comments: 12,
    timestamp: "4 hours ago",
  },
  // Add more posts here
];

const FeedPosts = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: item.userImage }}
                style={styles.userImage}
              />
              <Text style={styles.username}>{item.username}</Text>
            </View>
            <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
            <View style={styles.postDetails}>
              <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.icons}>
                  <Feather name="heart" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                  <Feather name="message-circle" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                  <Feather name="send" size={28} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={styles.likes}>{item.likes} likes</Text>
              <Text style={styles.caption}>{item.caption}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FeedPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postDetails: {
    paddingHorizontal: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  icons: {
    paddingRight: 15,
  },
  likes: {
    fontWeight: "bold",
  },
  caption: {
    marginBottom: 5,
  },
  timestamp: {
    color: "gray",
  },
});
