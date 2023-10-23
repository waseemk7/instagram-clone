import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Post from "./Post";

const FeedPosts = ({ feedPosts }) => {
  const [likedPosts, setLikedPosts] = useState([]);

  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={feedPosts}
        keyExtractor={(item) => `post_${item.id}`}
        renderItem={({ item }) => (
          <Post
            post={item}
            isLiked={likedPosts.includes(item.id)}
            onLikeToggle={toggleLike}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default FeedPosts;
