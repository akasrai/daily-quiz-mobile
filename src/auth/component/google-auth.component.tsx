import {Alert, Button} from 'react-native';
import {
  statusCodes,
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import firebaseAuth from '@react-native-firebase/auth';
import React, {useReducer, useMemo, useState} from 'react';

import * as auth from '~/auth/auth.state';
import {AuthContext} from '~/auth/auth.context';
import {GoogleCredential, GoogleSigninResponse} from '~/auth/auth.type';

const signIn = async (dispatch: Function) => {
  try {
    await GoogleSignin.hasPlayServices();

    const {user, idToken}: GoogleSigninResponse = await GoogleSignin.signIn();
    const googleCredential: GoogleCredential = firebaseAuth.GoogleAuthProvider.credential(
      idToken,
    );

    firebaseAuth().signInWithCredential(googleCredential);
    dispatch({type: auth.SIGN_IN, payload: {user}});
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

const signOut = async (dispatch: Function, setIsSignedOut: Function) => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();

    dispatch({type: auth.SIGN_OUT});
    setIsSignedOut(true);
  } catch (error) {
    return Alert.alert('Something went wrong');
  }
};

export const GoogleSignoutButton = () => {
  const [isSignedOut, setIsSignedOut] = useState(false);
  const {setCurrentAuth} = React.useContext(AuthContext);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  useMemo(() => {
    if (isSignedOut) {
      setCurrentAuth(authState);
    }
  }, [isSignedOut]);

  return (
    <Button
      title="Sign Out"
      onPress={() => signOut(dispatch, setIsSignedOut)}
    />
  );
};

const GoogleSignInButton = () => {
  const {setCurrentAuth} = React.useContext(AuthContext);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  useMemo(() => {
    setCurrentAuth(authState);
  }, [authState]);

  return (
    <GoogleSigninButton
      style={{width: 255, height: 50, marginTop: 20}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={() => signIn(dispatch)}
    />
  );
};

export default GoogleSignInButton;
