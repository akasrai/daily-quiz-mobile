import React from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  statusCodes,
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

import {GoogleCredential, GoogleSigninResponse} from '../auth.type';

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const {user, idToken}: GoogleSigninResponse = await GoogleSignin.signIn();
    const googleCredential: GoogleCredential = auth.GoogleAuthProvider.credential(
      idToken,
    );

    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    switch (error.code) {
      case statusCodes.SIGN_IN_CANCELLED:
        return Alert.alert('cancelled');

      case statusCodes.IN_PROGRESS:
        return Alert.alert('signin in progress');

      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        return Alert.alert('play services not available or outdated');

      default:
        Alert.alert('Something went wrong', error.toString());
    }
  }
};

const GoogleSignInScreen = () => {
  return (
    <GoogleSigninButton
      style={{width: 255, height: 50, marginTop: 20}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={signIn}
    />
  );
};

export default GoogleSignInScreen;
