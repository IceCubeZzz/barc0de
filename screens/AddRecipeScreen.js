import React from "react";
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

const AddrecipeScreen = ({ route, navigation }) => {
  const { user, newrecipe, recipeAddition } = route.params;

  const [ingredients, setIngredients] = React.useState(
    newrecipe ? [] : [recipeAddition].concat(ingredients)
  );

  if (
    recipeAddition &&
    Object.keys(recipeAddition).length > 0 &&
    (ingredients.length == 0 ||
      (ingredients.length > 0 &&
        ingredients[ingredients.length - 1]["ingredient"] !==
          recipeAddition["ingredient"]))
  ) {
    setIngredients([recipeAddition].concat(ingredients));
  }
  console.log(ingredients);

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
          {ingredients[i]["calories"] + " Kcals"}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView styles={styles.recipeList}>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeHeaderText}>Ingredients:</Text>
        <Text style={styles.recipeHeaderText}>Servings:</Text>
        <Text style={styles.recipeHeaderText}>Calories:</Text>
      </View>
      {ingredientComponentsArr}
      <Button
        styles={styles.defaultButton}
        title="Add new ingredient"
        onPress={() => {
          // navigate to barcode scanner screen
          navigation.navigate("Profile", {
            user,
          });
        }}
      />
    </ScrollView>
  );
};

export default AddrecipeScreen;

const styles = StyleSheet.create({
  recipeList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
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
    flex: 3,
    alignSelf: "stretch",
    width: "100%",
  },
});
