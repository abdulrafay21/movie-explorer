import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

export const MovieDetail = ({ route }) => {
  console.log("checking the data in detail", route.params);
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />

        <View>
          <Text>Detail</Text>
        </View>
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
