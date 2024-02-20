import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Movie } from "../components/Movie";

export const MoviesList = () => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />

        <Movie
          title={"Reincarnation"}
          releaseDate={"02-28-2020"}
          poster={
            "https://media.istockphoto.com/id/1447002291/photo/cloudscapes.jpg?s=1024x1024&w=is&k=20&c=N2lQik_NbPJ6i-GWogqUH52lVx5z9_ulD2fhOgJHnv4="
          }
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
