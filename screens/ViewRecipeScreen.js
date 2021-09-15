import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

const ViewRecipeScreen = ({ route, navigation }) => {
  const { user } = route.params;

  const [recipeComponents, setRecipeComponents] = React.useState(null);

  var recipeData = [];
  var recipes = [];
  try {
    const dbh = firebase.firestore();
    dbh
      .collection("users")
      .doc(user.id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          recipeData = doc.data().ingredients;
          // add each recipe to screen
          for (let i = 0; i < Object.keys(recipeData).length; i++) {
            recipes.push(recipe(recipeData[i], i));
          }

          if (recipeComponents == null) {
            setRecipeComponents(recipes);
          }
        } else {
          // do nothing
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  } catch (error) {
    Alert.alert("there is something wrong", error.message);
  }

  return (
    <ScrollView
      style={{
        flexDirection: "column",
      }}
    >
      <View style={styles.recipesList}>{recipeComponents}</View>
    </ScrollView>
  );
};

const recipe = (ingredients, num) => {
  var recipeRow = [];

  for (var i = 0; i < ingredients.length; i++) {
    recipeRow.push(
      <View key={i} style={styles.recipeContainer}>
        <Text style={styles.recipeIngredientText}>
          {ingredients[i]["ingredient"]}
        </Text>
        <Text style={styles.recipeDefaultText}>
          {ingredients[i]["servingAmount"]}
        </Text>
        <Text style={styles.recipeDefaultText}>
          {ingredients[i]["calories"]}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.recipeList}>
      <Text style={styles.recipeNumberText}>{"Recipe Number: " + num}</Text>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeHeaderText}>Ingredients:</Text>
        <Text style={styles.recipeHeaderText}>Servings:</Text>
        <Text style={styles.recipeHeaderText}>Calories:</Text>
      </View>
      {recipeRow}
      <View style={styles.recipeSeperator}></View>
    </View>
  );
};

export default ViewRecipeScreen;

const styles = StyleSheet.create({
  recipesList: {
    width: "100%",
    height: "100%",
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
  recipeNumberText: {
    flex: 0.2,
    fontSize: 30,
    color: "black",
  },
  recipeSeperator: {
    backgroundColor: "#000",
    height: 10,
    flex: 3,
  },
  recipeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recipeIngredientText: {
    flex: 2,
    fontSize: 16,
    color: "blue",
  },
  recipeDefaultText: {
    flex: 1,
    fontSize: 16,
    color: "blue",
  },
  defaultButton: {
    alignSelf: "stretch",
    width: "100%",
  },
});
