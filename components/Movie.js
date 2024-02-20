import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export const Movie = ({ title, releaseDate, poster }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: poster,
        }}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.releaseDate}>Release Date: {releaseDate}</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../assets/favorite.png")} />
        </TouchableOpacity>
      </View>
    </View>
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
