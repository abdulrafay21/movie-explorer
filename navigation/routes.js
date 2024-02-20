import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATION_ROUTES } from "./navigationRoutes";
import { MoviesList } from "../screens/MoviesList";
import { MovieDetail } from "../screens/MovieDetail";
import { FavoriteMovies } from "../screens/FavoriteMovies";

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={NAVIGATION_ROUTES.MOVIES_LIST}
      >
        <Stack.Screen
          name={NAVIGATION_ROUTES.MOVIES_LIST}
          component={MoviesList}
        />
        <Stack.Screen
          name={NAVIGATION_ROUTES.MOVIE_DETAIL}
          component={MovieDetail}
        />
        <Stack.Screen
          name={NAVIGATION_ROUTES.FAVORITE_MOVIES}
          component={FavoriteMovies}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
