import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const data = [
  {
    id: "1",
    username: "john_doe",
    imageUrl: "https://via.placeholder.com/200",
    caption: "Beautiful sunset!",
  },
  {
    id: "2",
    username: "jane_smith",
    imageUrl: "https://via.placeholder.com/200",
    caption: "Exploring the wilderness.",
  },
  // Add more posts here
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postContainer: {
    marginBottom: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  caption: {
    paddingLeft: 10,
  },
});
