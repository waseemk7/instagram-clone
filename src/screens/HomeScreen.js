import { View, StyleSheet } from "react-native";
import Stories from "../components/Stories";
import FeedPosts from "../components/FeedPosts";

const stories = [
  {
    profilePicture: "https://www.freepnglogos.com/uploads/one-piece-logo-9.jpg",
    username: "user1",
  },
  {
    profilePicture:
      "https://static.bandainamcoent.eu/high/one-piece/one-piece-world-seeker/00-page-setup/opws_game-thumbnail.jpg",
    username: "user2",
  },
  // Add more story objects here
];

const feedPosts = [
  {
    id: "1",
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
  {
    id: "2",
    username: "john_doe",
    userImage: "https://www.freepnglogos.com/uploads/one-piece-logo-9.jpg",
    imageUrl: "https://www.freepnglogos.com/uploads/one-piece-logo-9.jpg",
    caption: "Beautiful sunset!",
    likes: 235,
    comments: 18,
    timestamp: "2 hours ago",
  },
  // Add more posts here
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.storyContainer}>
        <Stories stories={stories} />
      </View>
      <FeedPosts feedPosts={feedPosts} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  storyContainer: {
    height: 100,
  },
});
