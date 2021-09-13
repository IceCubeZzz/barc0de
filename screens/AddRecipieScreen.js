import React from "react";
import { StyleSheet, View, Button } from "react-native";

const AddRecipieScreen = ({ route, navigation }) => {
  const { user, newRecipie, recipieAddition } = route.params;

  const [ingredients, setIngredients] = React.useState(
    newRecipie ? [] : [{ ingredients, recipieAddition }]
  );

  /*if (newRecipie === true) {
    setIngredients([]);
  } else {
    setIngredients([{ ingredients }, recipieAddition]);
  }*/

  var ingredientComponentsArr = [];
  for (let i = 0; i < ingredients.length; i++) {
    ingredientComponentsArr.push(
      <View>
        <Text styles={styles.recipieDefaultText}>
          {recipieData[i]["ingredient"]}
        </Text>
        <Text styles={styles.recipieDefaultText}>
          {recipieData[i]["servings"]}
        </Text>
        <Text styles={styles.recipieDefaultText}>
          {recipieData[i]["calories"]}
        </Text>
      </View>
    );
  }

  return (
    <View styles={styles.recipieList}>
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
    </View>
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
