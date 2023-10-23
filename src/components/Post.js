import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const Post = ({ post, isLiked, onLikeToggle }) => {
  const { id, userImage, imageUrl, username, likes, caption, timestamp } = post;

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: userImage }} style={styles.userImage} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.postImage} />
      <View style={styles.postDetails}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => onLikeToggle(id)} style={styles.icons}>
            <AntDesign
              name={isLiked ? "heart" : "hearto"}
              size={28}
              color={isLiked ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Feather name="message-circle" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Feather name="send" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.likes}>{likes} likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Post;
