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
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCwxSYqxLs-8jyEDN4-8Kp30lWMOIGrMos",
  authDomain: "barc0de-909b1.firebaseapp.com",
  projectId: "barc0de-909b1",
  storageBucket: "barc0de-909b1.appspot.com",
  messagingSenderId: "831456892862",
  appId: "1:831456892862:web:58b724a71b245c835c8bef",
  measurementId: "G-G9H28Y9WTH",
};
firebase.initializeApp(firebaseConfig);

const ActionSelectionScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.defaultButton}>
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
      </View>
      <View style={styles.defaultButton}>
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
    </View>
  );
};

export default ActionSelectionScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  defaultButton: {
    width: "75%",
  },
});
