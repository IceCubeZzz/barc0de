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

const RecipieScreen = ({ route, navigation }) => {
  const { user } = route.params;

  //todo: retrieve recipies from firebase and store in 'x'
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
  var recipieData; //= Object.keys(x).map(key => ({[key]: x[key]}));;

  var recipies = [];
  // add each recipie to screen
  for (let i = 0; i < recipieData.length; i++) {
    recipies.push(
      Recipie(
        recipieData[i]["ingredients"],
        recipieData[i]["servingAmount"],
        recipieData[i]["calories"]
      )
    );
  }

  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View style={styles.recipiesList}>{recipies}</View>
      <Button
        style={styles.defaultButton}
        title="Add new recipie"
        onPress={() => {
          // navigate to add recipie screen
          navigation.navigate("AddRecipie", {
            user,
            newRecipie: true,
            recipieAddition: null,
          });
        }}
      />
    </View>
  );
};

const Recipie = ({ ingredients, servings, totalCalories }) => {
  recipieRow = [];

  for (let i = 0; i < ingredients.length; i++) {
    recipieRow.push(
      <View style={styles.recipieContainer}>
        <Text style={styles.recipieDefaultText}>{ingredients[i]}</Text>
        <Text style={styles.recipieDefaultText}>{servings[i]}</Text>
        <Text style={styles.recipieDefaultText}>{totalCalories[i]}</Text>
      </View>
    );
  }
  return (
    <View key={i} style={styles.recipieList}>
      {recipieRow}
    </View>
  );
};

export default RecipieScreen;

const styles = StyleSheet.create({
  recipiesList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  recipieList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  recipieContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  recipieDefaultText: {
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
