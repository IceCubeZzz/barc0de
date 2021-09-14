import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
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

const ActionSelectionScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View>
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
        title="View Recipes"
        onPress={() => {
          // navigate to view recipe screen
          navigation.navigate("ViewRecipe", {
            user,
          });
        }}
      />
    </View>
  );
};

export default ActionSelectionScreen;

const styles = StyleSheet.create({
  defaultButton: {
    flex: 3,
    alignSelf: "stretch",
    width: "100%",
  },
});
