import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | logging in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `966274348459-okjusgja2f7lgnran8a5nts61q3e0bh0.apps.googleusercontent.com`,
        androidClientId: `966274348459-s7log3sj7l286o5vcfc5ka1cotbf4hvj.apps.googleusercontent.com`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("ActionSelection", {
          user: user,
        });
        /*navigation.navigate("AddRecipe", {
          user: user,
          newRecipe: true,
          recipeAddition: null,
        });*/
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Google" onPress={signInAsync} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
