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

const AddRecipieScreen = ({ route, navigation }) => {
  const { user, newRecipie, recipieAddition } = route.params;

  const [ingredients, setIngredients] = React.useState(
    newRecipie ? [] : [recipieAddition].concat(ingredients)
  );

  if (
    recipieAddition &&
    Object.keys(recipieAddition).length > 0 &&
    (ingredients.length == 0 ||
      (ingredients.length > 0 &&
        ingredients[ingredients.length - 1]["ingredient"] !==
          recipieAddition["ingredient"]))
  ) {
    setIngredients([recipieAddition].concat(ingredients));
  }
  console.log(ingredients);

  var ingredientComponentsArr = [];
  for (let i = 0; i < ingredients.length; i++) {
    ingredientComponentsArr.push(
      <View style={styles.recipieContainer} key={i}>
        <Text style={styles.recipieDefaultText}>
          {ingredients[i]["ingredient"]}
        </Text>
        <Text style={styles.recipieDefaultText}>
          {ingredients[i]["servingAmount"]}
        </Text>
        <Text style={styles.recipieDefaultText}>
          {ingredients[i]["calories"] + " Kcals"}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView styles={styles.recipieList}>
      <View style={styles.recipieContainer}>
        <Text style={styles.recipieHeaderText}>Ingredients:</Text>
        <Text style={styles.recipieHeaderText}>Servings:</Text>
        <Text style={styles.recipieHeaderText}>Calories:</Text>
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

export default AddRecipieScreen;

const styles = StyleSheet.create({
  recipieList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  recipieContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  recipieHeaderText: {
    flex: 1,
    fontSize: 18,
    color: "black",
  },
  recipieDefaultText: {
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
