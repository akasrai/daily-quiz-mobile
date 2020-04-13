import React, {useReducer, useEffect, useMemo} from 'react';
import {Alert} from 'react-native';
import firebaseAuth from '@react-native-firebase/auth';
import {
  statusCodes,
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

import * as auth from '~/auth/auth.state';
import {AuthContext, AuthContextProvider} from '~/auth/auth.context';
import {
  Action,
  AuthState,
  GoogleCredential,
  GoogleSigninResponse,
} from '~/auth/auth.type';
import {Text} from 'react-native-svg';

const signIn = async (setAuthState: Function) => {
  try {
    await GoogleSignin.hasPlayServices();

    const {user, idToken}: GoogleSigninResponse = await GoogleSignin.signIn();
    const googleCredential: GoogleCredential = firebaseAuth.GoogleAuthProvider.credential(
      idToken,
    );

    firebaseAuth().signInWithCredential(googleCredential);
    setAuthState({type: auth.SIGN_IN, payload: {user}});
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

export const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    //states
  } catch (error) {
    //states
  }
};

const GoogleSignInScreen = () => {
  const {setCurrentAuth} = React.useContext(AuthContext);
  const [authState, setAuthState] = useReducer(auth.reducer, auth.initialState);

  useMemo(() => {
    setCurrentAuth(authState);
  }, [authState]);

  return (
    <GoogleSigninButton
      style={{width: 255, height: 50, marginTop: 20}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={() => signIn(setAuthState)}
    />
  );
};

export default GoogleSignInScreen;
