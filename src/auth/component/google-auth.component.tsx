import {
  statusCodes,
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {Alert, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React, {useReducer, useMemo, useState} from 'react';
import firebaseAuth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import * as auth from '~/auth/auth.state';
import {styles} from '~/auth/auth.style';
import {createUser} from '~/api/firebase.api';
import {AuthContext} from '~/auth/auth.context';
import {GoogleCredential, User} from '~/auth/auth.type';
import {TouchableHighlight} from 'react-native-gesture-handler';

const getCredentials = (idToken: string | null): GoogleCredential => {
  return firebaseAuth.GoogleAuthProvider.credential(idToken);
};

const signIn = async (dispatch: Function) => {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken}: {idToken: string | null} = await GoogleSignin.signIn();
    const googleCredential: GoogleCredential = getCredentials(idToken);

    firebaseAuth()
      .signInWithCredential(googleCredential)
      .then(({user}: {user: FirebaseAuthTypes.User}) => {
        createUser(user);
        dispatch({type: auth.SIGN_IN, payload: {user: getUserData(user)}});
      });
  } catch (error) {
    return handleSignInError(error);
  }
};

const getUserData = (user: FirebaseAuthTypes.User): User => ({
  uid: user.uid,
  email: user.email,
  photo: user.photoURL,
  name: user.displayName,
});

const handleSignInError = (error: any) => {
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
    <View style={styles.signOutButtonWrapper}>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#02183b"
        style={styles.signOutButton}
        onPress={() => signOut(dispatch, setIsSignedOut)}>
        <Icon style={styles.icon} name="log-out" />
      </TouchableHighlight>
    </View>
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
