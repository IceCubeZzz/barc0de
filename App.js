import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ActionSelectionScreen from "./screens/ActionSelectionScreen";
import ViewRecipeScreen from "./screens/ViewRecipeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import { SafeAreaView } from "react-native";
import CameraPreview from "./screens/CameraPreview";

//React Navigation Setup
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="ActionSelection"
          component={ActionSelectionScreen}
        />
        <Stack.Screen name="ViewRecipe" component={ViewRecipeScreen} />
        <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
