import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { WebView } from "react-native-webview";

const data = [
  {
    id: "1",
    videoUrl: "https://www.youtube.com/embed/SAdHQx3koDg",
  },
  // Add more items as needed
];

const ProfileScreen = () => {
  const renderVideoItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <WebView source={{ uri: item.videoUrl }} style={styles.video} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderVideoItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    width: 300,
    height: 200,
    marginVertical: 10,
  },
  video: {
    flex: 1,
  },
});

export default ProfileScreen;
