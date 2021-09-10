import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
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
  return (
    <View style={styles.container}>
      <Text>Welcome, {user.name}!</Text>

            <CameraPreview photo={capturedImage} />
        
        <Camera
          style={{flex: 1,width:"100%"}}
          ref={(r) => {
            camera = r
          }}
        >
          <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row'
                }}
              >
        <View
        style={{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
        }}
      >
        <View
        style={{
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
        }}
        >
    </View>
    </View>
    </View>
    </Camera>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={__takePicture}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: '#14274e',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Take picture
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
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