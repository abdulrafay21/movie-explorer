import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NAVIGATION_ROUTES } from "../navigation/navigationRoutes";

export const Movie = ({ movieData }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(NAVIGATION_ROUTES.MOVIE_DETAIL, { movieData })
      }
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
        }}
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{movieData.title}</Text>
          <Text style={styles.releaseDate}>
            Release Date: {movieData.releaseDate}
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../assets/favorite.png")} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#81c7f0",
    paddingBottom: 20,
    gap: 20,
    marginTop: 20,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  releaseDate: {
    fontSize: 16,
  },
  titleContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});
