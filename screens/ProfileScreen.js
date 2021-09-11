import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  Button,
} from "react-native";
import React, { PureComponent } from "react";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import CameraPreview from "./CameraPreview";
import { BUILDER_KEYS } from "@babel/types";
/*
export default class ProfileScreen extends PureComponent {  constructor(props) {
  super(props);}
render() {
  return (
    <RNCamera 
      ref={ref => {
        this.camera = ref;
      }}
      captureAudio={false}
      style={{flex: 1}}
      type={RNCamera.Constants.Type.back}
      iosCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }} />
    );
  }}
  */
/*
const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  console.log("user from google", user);
  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Welcome {user.name} !</Text>
    </View>
  );
};
*/

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;

  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [nutritionalData, setNutritionalData] = React.useState([]);
  const [calorieData, setCalorieData] = React.useState(0);
  const [servings, setServings] = React.useState(0);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if(data.length === 13)
    {
      data = data.substring(1);
    }

    alert(
      `Bar code with type ${type} and nutritionalData ${data} has been scanned!`
    );

    fetch(
      "https://api.nal.usda.gov/fdc/v1/foods/search?query=" +
        data +
        "&pageSize=2&api_key=fERduKb1V9qQB5LyYdVhws9z5rq1KGvC9nJ7Ha86"
    )
      .then((response) => response.json())
      // retrieve nutritional data and attempt to set calorie data
      .then((json) => {
        setNutritionalData(json);
        try {
          setCalorieData(json["foods"][0]["foodNutrients"][3]["value"]);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  // api request working
  //https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=fERduKb1V9qQB5LyYdVhws9z5rq1KGvC9nJ7Ha86

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };
  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      // start the camera
      setStartCamera(true);
      <View />;
    } else {
      Alert.alert("Access denied");
    }
  };
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome, {user.name}!</Text>
      <StatusBar style="auto" />
      <Camera
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "transparent",
          flexDirection: "row",
        }}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{ flex: 6, padding: 24 }}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
              {nutritionalData.title}
            </Text>
            <Text
              style={[
                styles.defaultWhiteText,
                { textAlign: "center", paddingBottom: 16 },
              ]}
            >
              Add Serving:
            </Text>
            <Text style={styles.defaultWhiteText}>
              {"Calories per 100 gram serving: " + calorieData}
            </Text>
            <Text style={styles.defaultWhiteText}>
              {"Calories for " + servings + " serving(s): " + (calorieData * servings)}
            </Text>
            {/* <FlatList
              nutritionalData={nutritionalData.articles}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.id + ". " + item.title}</Text>
              )}
            /> */}
          </View>
        )}
      </View>

      <View style={styles.row}>
        <Button
          style={styles.defaultButton}
          title=" - "
          onPress={() => {
            setServings(servings === 0 ? servings : servings - 1);
          }}
        />

        <Text style={styles.defaultText}> {"Servings: " + servings} </Text>

        <Button
          styles={styles.defaultButton}
          title=" + "
          onPress={() => {
            setServings(servings + 1);
          }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  row: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  defaultButton: {
    flex: 3,
    alignSelf: "stretch",
    width: "25%",
  },
  defaultText: {
    fontSize: 26,
    color: "blue",
    alignSelf: "center",
  },
  defaultWhiteText: {
    fontSize: 22,
    color: "white",
    alignSelf: "center",
  },
});
