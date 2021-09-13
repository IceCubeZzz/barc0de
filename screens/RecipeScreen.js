import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  Button,
} from "react-native";

const RecipeScreen = ({ route, navigation }) => {
  const { user } = route.params;

  //todo: retrieve recipes from firebase and store in 'x'
  //format should be:
  /*x: {
      {
        ingredients: [something, somethingElse],
        servings: [1, 2],
        calories: [100, 200]
      }
      {
        ingredients: [something],
        servings: [1],
        calories: [100]
      }
    }*/
  var recipeData; //= Object.keys(x).map(key => ({[key]: x[key]}));;

  var recipes = [];
  // add each recipe to screen
  for (let i = 0; i < recipeData.length; i++) {
    recipes.push(
      recipe(
        recipeData[i]["ingredients"],
        recipeData[i]["servingAmount"],
        recipeData[i]["calories"]
      )
    );
  }

  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View style={styles.recipesList}>{recipes}</View>
      <Button
        style={styles.defaultButton}
        title="Add New Recipe"
        onPress={() => {
          // navigate to add recipe screen
          navigation.navigate("AddRecipe", {
            user,
            newRecipe: true,
            recipeAddition: null,
          });
        }}
      />
      <Button
        style={styles.defaultButton}
        title="Add Food Log"
        onPress={() => {
          // navigate to add recipe screen
          navigation.navigate("AddRecipe", {
            user,
            newRecipe: true,
            recipeAddition: null,
          });
        }}
      />
    </View>
  );
};

const recipe = ({ ingredients, servings, totalCalories }) => {
  recipeRow = [];

  for (let i = 0; i < ingredients.length; i++) {
    recipeRow.push(
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeDefaultText}>{ingredients[i]}</Text>
        <Text style={styles.recipeDefaultText}>{servings[i]}</Text>
        <Text style={styles.recipeDefaultText}>{totalCalories[i]}</Text>
      </View>
    );
  }
  return (
    <View key={i} style={styles.recipeList}>
      {recipeRow}
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  recipesList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  recipeList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  recipeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  recipeDefaultText: {
    flex: 1,
    fontSize: 20,
    color: "blue",
  },
  defaultButton: {
    flex: 3,
    alignSelf: "stretch",
    width: "100%",
  },
});
