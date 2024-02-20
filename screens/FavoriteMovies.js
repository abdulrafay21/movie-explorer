import React from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Movie } from "../components/Movie";
import { useSelector } from "react-redux";

export const FavoriteMovies = ({ navigation }) => {
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={require("../assets/left-arrow.png")} />
          </TouchableOpacity>
          <Text style={styles.moviesTitle}>Favorite Movies</Text>
        </View>
        <FlatList
          data={favoriteMovies}
          renderItem={({ item }) => {
            return <Movie movieData={item} showFavoriteIcon={false} />;
          }}
          keyExtractor={(item, index) => `${item.id}_${index}`}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    position: "relative",
  },
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  moviesTitle: {
    fontSize: 30,
    fontWeight: "800",
  },
  favoriteMoviesIcon: {
    width: 30,
    height: 30,
  },
});
