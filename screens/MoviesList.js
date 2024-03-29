import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Movie } from "../components/Movie";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../store/movies/moviesSlice";
import { NAVIGATION_ROUTES } from "../navigation/navigationRoutes";

export const MoviesList = ({ navigation }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
        <View style={styles.headerContainer}>
          <Text style={styles.moviesTitle}>Movies</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NAVIGATION_ROUTES.FAVORITE_MOVIES)
            }
          >
            <Image
              style={styles.favoriteMoviesIcon}
              source={require("../assets/bookmark.png")}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={movies}
          renderItem={({ item }) => {
            return <Movie movieData={item} />;
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
    justifyContent: "space-between",
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
