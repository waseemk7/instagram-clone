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
    userImage: "https://static.bandainamcoent.eu/high/one-piece/one-piece-world-seeker/00-page-setup/opws_game-thumbnail.jpg",
    imageUrl: "https://static.bandainamcoent.eu/high/one-piece/one-piece-world-seeker/00-page-setup/opws_game-thumbnail.jpg",
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
  {
    id: "3",
    username: "daneryss",
    userImage: "https://www.comingsoon.net/wp-content/uploads/sites/3/2022/06/emilia-clarke-daenerys-targaryen-game-of-thrones-hbo.jpg",
    imageUrl: "https://www.comingsoon.net/wp-content/uploads/sites/3/2022/06/emilia-clarke-daenerys-targaryen-game-of-thrones-hbo.jpg",
    caption: "Exploring the city streets.",
    likes: 125,
    comments: 9,
    timestamp: "1 hour ago",
  },
  {
    id: "4",
    username: "john_snow",
    userImage: "https://m.media-amazon.com/images/S/pv-target-images/14685fc6f333fcf660ae6d4f90879da67a08e5fb5b2130d9838243031c2f819a.jpg",
    imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/14685fc6f333fcf660ae6d4f90879da67a08e5fb5b2130d9838243031c2f819a.jpg",
    caption: "Family time at the beach!",
    likes: 320,
    comments: 25,
    timestamp: "3 hours ago",
  },
  {
    id: "5",
    username: "arya_stark",
    userImage: "https://media.glamour.com/photos/5cc1cf99191392126ec28524/master/w_2560%2Cc_limit/cc842df289370076e6d1b85bd0013a5818cb233544ac816c652c222c06fd212f.jpg",
    imageUrl: "https://media.glamour.com/photos/5cc1cf99191392126ec28524/master/w_2560%2Cc_limit/cc842df289370076e6d1b85bd0013a5818cb233544ac816c652c222c06fd212f.jpg",
    caption: "Nature's beauty!",
    likes: 150,
    comments: 8,
    timestamp: "5 hours ago",
  },
  {
    id: "6",
    username: "david_lee",
    userImage: "https://images.immediate.co.uk/production/volatile/sites/3/2019/02/1-2-ac324ad.jpg?quality=90&resize=980,654",
    imageUrl: "https://images.immediate.co.uk/production/volatile/sites/3/2019/02/1-2-ac324ad.jpg?quality=90&resize=980,654",
    caption: "Adventures in the mountains.",
    likes: 280,
    comments: 20,
    timestamp: "6 hours ago",
  },
  {
    id: "7",
    username: "lisa_turner",
    userImage: "https://cdn.mos.cms.futurecdn.net/pfHf629ukRhrCyJpiwLjYi-1200-80.jpg",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/pfHf629ukRhrCyJpiwLjYi-1200-80.jpg",
    caption: "Sunrise by the lake.",
    likes: 198,
    comments: 15,
    timestamp: "7 hours ago",
  },
  {
    id: "8",
    username: "peter_wang",
    userImage: "https://assetsio.reedpopcdn.com/319879966_1219712415559369_2430883062931850206_n.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    imageUrl: "https://assetsio.reedpopcdn.com/319879966_1219712415559369_2430883062931850206_n.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    caption: "Delicious street food!",
    likes: 275,
    comments: 22,
    timestamp: "8 hours ago",
  },
  {
    id: "9",
    username: "olivia_harris",
    userImage: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/06/Henry-Cavill-Superman.png?w=1024",
    imageUrl: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/06/Henry-Cavill-Superman.png?w=1024",
    caption: "Biking through the forest.",
    likes: 210,
    comments: 13,
    timestamp: "9 hours ago",
  },
  {
    id: "10",
    username: "michael_smith",
    userImage: "https://i.pinimg.com/originals/0d/49/a5/0d49a5e0005448e481accfe714415082.jpg",
    imageUrl: "https://i.pinimg.com/originals/0d/49/a5/0d49a5e0005448e481accfe714415082.jpg",
    caption: "A day at the amusement park!",
    likes: 325,
    comments: 28,
    timestamp: "10 hours ago",
  },
  // You can add more posts if needed
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
