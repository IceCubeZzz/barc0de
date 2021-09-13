import React from "react";
import { StyleSheet, View, Button } from "react-native";

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
        recipieData[i]["servings"],
        recipieData[i]["calories"]
      )
    );
  }

  return (
    <View
      styles={{
        flexDirection: "column",
      }}
    >
      <View styles={styles.recipiesList}>{recipies}</View>
      <Button
        styles={styles.defaultButton}
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
      <View styles={styles.recipieContainer}>
        <Text styles={styles.recipieDefaultText}>{ingredients[i]}</Text>
        <Text styles={styles.recipieDefaultText}>{servings[i]}</Text>
        <Text styles={styles.recipieDefaultText}>{totalCalories[i]}</Text>
      </View>
    );
  }
  return (
    <View key={i} styles={styles.recipieList}>
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
    flex: 1,
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
