import React, { useEffect, useRef } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import { Movie } from "../components/Movie";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../store/movies/moviesSlice";

export const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
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
});
