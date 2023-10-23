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

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.storyContainer}>
        <Stories stories={stories} />
      </View>
      <FeedPosts />
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
