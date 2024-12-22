import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B0C4DE",
      }}
    >
      <Text>Приложение для рецептов</Text>
      <Button
        title="Перейти к рецептам"
        onPress={() => navigation.navigate("RecipeApp")} // Переход на RecipeApp
      />
    </View>
  );
};

export default HomeScreen;
