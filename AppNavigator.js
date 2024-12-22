import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen"; // Импортируйте ваш HomeScreen
import RecipeApp from "./RecipeApp"; // Импортируйте ваш RecipeApp

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecipeApp" component={RecipeApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
