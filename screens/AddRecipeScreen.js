import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
  Button,
} from "react-native";

const AddRecipeScreen = ({ route, navigation }) => {
  const { user, newRecipe, ingredients } = route.params;

  /*const [ingredients, setIngredients] = React.useState(
    newRecipe ? [] : [recipeAddition].concat(ingredients)
  );*/
  /*if (
    recipeAddition &&
    Object.keys(recipeAddition).length > 0 &&
    (ingredients.length == 0 ||
      (ingredients.length > 0 && newIngredientNum !== ingredientNum))
  ) {
    setIngredients([recipeAddition].concat(ingredients));
  }*/

  if (ingredients) {
    var ingredientComponentsArr = [];
    for (let i = 0; i < ingredients.length; i++) {
      ingredientComponentsArr.push(
        <View style={styles.recipeContainer} key={i}>
          <Text style={styles.recipeDefaultText}>
            {ingredients[i]["ingredient"]}
          </Text>
          <Text style={styles.recipeDefaultText}>
            {ingredients[i]["servingAmount"]}
          </Text>
          <Text style={styles.recipeDefaultText}>
            {ingredients[i]["calories"] * ingredients[i]["servingAmount"] +
              " Kcals"}
          </Text>
        </View>
      );
    }
  }

  return (
    <ScrollView styles={styles.recipeList}>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeHeaderText}>Ingredients:</Text>
        <Text style={styles.recipeHeaderText}>Servings:</Text>
        <Text style={styles.recipeHeaderText}>Calories:</Text>
      </View>
      {ingredientComponentsArr}
      <View style={styles.defaultButton}>
        <Button
          styles={styles.defaultButton}
          title="Add new ingredient"
          onPress={() => {
            // navigate to barcode scanner screen
            navigation.navigate("Scanner", {
              user: user,
              previousScreen: "AddRecipe",
              ingredients: ingredients ? ingredients : [],
            });
          }}
        />
      </View>
      <View style={styles.defaultButton}>
        <Button
          styles={styles.defaultButton}
          title="Save recipe"
          onPress={() => {
            navigation.navigate("ActionSelection", {
              user: user,
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default AddRecipeScreen;

const styles = StyleSheet.create({
  recipeList: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  recipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  recipeHeaderText: {
    flex: 1,
    fontSize: 18,
    color: "black",
  },
  recipeDefaultText: {
    flex: 1,
    fontSize: 14,
    color: "blue",
  },
  defaultButton: {
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: "center",
    width: "75%",
  },
});
