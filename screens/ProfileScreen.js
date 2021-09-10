import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, {PureComponent} from 'react';import {Camera} from 'expo-camera';
import { StatusBar } from "expo-status-bar";
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
  const [startCamera,setStartCamera] = React.useState(false)
  try {
    const {status, user} = Camera.requestPermissionsAsync({
    
  });
  if (setStartCamera === true)
  {
    setStartCamera(true);
  } 
}catch(error) {
    Alert.alert('Access denied');
  }

  const __startCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    if (setStartCamera === true) {
      // start the camera
      setStartCamera(true);
    } else {
      Alert.alert('Access denied');
    }
  }
  return (
    <View style={styles.container}>
      <Text>Welcome, {user.name}!</Text>
        <Camera
          style={{flex: 1,width:"100%"}}
          ref={(r) => {
            camera = r
          }}
        ></Camera>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={__startCamera}
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