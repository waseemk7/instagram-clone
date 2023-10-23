import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons"; // You'll need to import the Feather icons library

const FeedPosts = ({ feedPosts }) => {
  const [likedPosts, setLikedPosts] = useState([]);
  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      // Post is already liked, remove it from likedPosts array
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      // Post is not liked, add it to likedPosts array
      setLikedPosts([...likedPosts, postId]);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={feedPosts}
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
                <TouchableOpacity
                  onPress={() => toggleLike(item.id)}
                  style={styles.icons}
                >
                  <AntDesign
                    name={likedPosts.includes(item.id) ? "heart" : "hearto"} // Toggle heart icon based on like state
                    size={28}
                    color={likedPosts.includes(item.id) ? "red" : "black"} // Toggle icon color based on like state
                  />
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
    // flex: 1,
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
