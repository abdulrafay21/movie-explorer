import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addtoFavorite, removeFavorite } from "../store/movies/moviesSlice";

export const MovieDetail = ({ navigation, route }) => {
  const movieData = route.params.movieData;

  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const checkIsFavorite = () => {
    const index = favoriteMovies.findIndex(
      (movie) => movie.id === movieData.id
    );
    return index !== -1;
  };

  useEffect(() => {
    setIsFavorite(checkIsFavorite());
  }, [favoriteMovies]);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../assets/left-arrow.png")} />
        </TouchableOpacity>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
          }}
          resizeMode="stretch"
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{movieData.title}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  isFavorite
                    ? removeFavorite(movieData.id)
                    : addtoFavorite(movieData)
                )
              }
            >
              {isFavorite ? (
                <Image source={require("../assets/favorite_filled.png")} />
              ) : (
                <Image source={require("../assets/favorite.png")} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.releaseDate}>
            Release Date: {movieData.release_date}
          </Text>
          <Text style={styles.releaseDate}>
            Average Rating: {movieData.vote_average}
          </Text>
          <Text style={styles.releaseDate}>OverView:</Text>
          <Text style={styles.releaseDate}>{movieData.overview}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  wrapper: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 100,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
  titleContainer: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  releaseDate: {
    fontSize: 16,
  },
});
