import { StyleSheet, Text, View, TouchableOpacity, Alert, FlatList } from "react-native";
import React, {PureComponent} from 'react';import {Camera} from 'expo-camera';
import { StatusBar } from "expo-status-bar";
import CameraPreview from "./CameraPreview";
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

const ProfileScreen = ({route, navigation}) => {
  const { user } = route.params;
  console.log("user from google", user);
  const [startCamera,setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  console.log(data);

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  // api request working 
      //https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=fERduKb1V9qQB5LyYdVhws9z5rq1KGvC9nJ7Ha86
    
  const __takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  }
  const __startCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true);
      <View />
    } else {
      Alert.alert('Access denied');
    }
  }
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Welcome, {user.name}!</Text>
      
      <StatusBar style="auto" />
        <Camera
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'transparent',
          flexDirection: 'row'
        }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <React.Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
  );
          }
export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});