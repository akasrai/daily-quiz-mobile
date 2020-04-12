import React from 'react';
import {Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  statusCodes,
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    console.log('fuck');
    const user = await GoogleSignin.signIn();
    console.log(user);
    const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);

    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
    switch (error.code) {
      case statusCodes.SIGN_IN_CANCELLED:
        // sign in was cancelled
        return Alert.alert('cancelled');

      case statusCodes.IN_PROGRESS:
        // operation (eg. sign in) already in progress
        return Alert.alert('in progress');

      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        // android only
        return Alert.alert('play services not available or outdated');

      default:
        Alert.alert('Something went wrong', error.toString());
    }
  }
};

const GoogleSignIn = () => {
  return (
    <GoogleSigninButton
      style={{width: 255, height: 50, marginTop: 20}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={signIn}
    />
  );
};

export default GoogleSignIn;
