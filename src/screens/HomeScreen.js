import { View, StyleSheet } from "react-native";
import Stories from "../components/Stories";
import FeedPosts from "../components/FeedPosts";

const stories = [
  {
    profilePicture: "https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png",
    username: "Charizard",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqTduwZBqPKYqTGt8Sb3JaFnT1whonNaTRUnY2jqF9Hq10WD7X64qacszgKIiIwdNI38&usqp=CAU",
    username: "Snowlarx",
  },
  {
    profilePicture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    username: "Eve",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSipjkbk6U2OkxrxDiinR7KwS2A9lnfZ8H23A&usqp=CAU",
    username: "Xtron",
  },
  {
    profilePicture: "https://media.cnn.com/api/v1/images/stellar/prod/210226040722-01-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill",
    username: "Bulbosar",
  },
  {
    profilePicture: "https://media.gamestop.com/i/gamestop/20004417?$pdp$",
    username: "Meve",
  },
  {
    profilePicture: "https://sportshub.cbsistatic.com/i/2022/06/01/ab41c5cd-2a39-4529-bf81-0be3a65c44c7/pokemon-sv-lechonk-key-art.png?auto=webp&width=2250&height=2250&crop=1:1,smart",
    username: "Poggy",
  },
  {
    profilePicture: "https://urpgstatic.com/images/pokemon-home.png",
    username: "Allegator",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26wdY8ZLUaZhssZEITxgnaZ_8SuJd-h7OtI_SxjdnewsuAE1r52GA5ugP40Ol-rAQTdU&usqp=CAU",
    username: "ThunderBird",
  },
  {
    profilePicture: "https://legends.pokemon.com/assets/pokemon/pokemon_kleavor.png",
    username: "Abra",
  }
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
