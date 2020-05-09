import {
  statusCodes,
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React, {useReducer, useMemo, useState} from 'react';

import {ApiResponse} from '~/api';
import {styles} from '~/auth/auth.style';
import * as auth from '~/auth/auth.state';
import {VALIDATION} from '../auth.constant';
import {AuthContext} from '~/auth/auth.context';
import {signOut, signWithGoogle} from '~/api/request.api';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {asyncStorage} from '~/helper/async-storage-helper';
import {alert} from '~/component/alert/alert.component';

const signIn = async (dispatch: Function) => {
  try {
    await GoogleSignin.hasPlayServices();
    const googleSignIn = await GoogleSignin.signIn();
    const {data, error} = await signWithGoogle(googleSignIn.idToken);

    if (error) handleSignInError(error);

    dispatch({
      type: auth.SIGN_IN,
      payload: {user: googleSignIn.user, token: data.token, roles: data.roles},
    });
  } catch (error) {
    return handleSignInError(error);
  }
};

const handleSignInError = (error: any) => {
  switch (error.code) {
    case statusCodes.SIGN_IN_CANCELLED:
      return alert.error(VALIDATION.SIGN_IN_CANCELED);

    case statusCodes.IN_PROGRESS:
      return alert.error(VALIDATION.SIGN_IN_PROGRESS);

    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
      return alert.error(VALIDATION.PLAY_SERVICES_NOT_AVAILABLE);

    default:
      alert.error(VALIDATION.SOMETHING_WENT_WRONG, error.toString());
  }
};

const handleSignOut = async (dispatch: Function, setIsSignedOut: Function) => {
  try {
    // await signOut();
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();

    dispatch({type: auth.SIGN_OUT});
    setIsSignedOut(true);
  } catch (error) {
    return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
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
        onPress={() => handleSignOut(dispatch, setIsSignedOut)}>
        <Icon style={styles.icon} name="log-out" />
      </TouchableHighlight>
    </View>
  );
};

const restoreAuthentication = async (dispatch: Function) => {
  const {data}: ApiResponse = await asyncStorage.get('auth');

  if (data) {
    dispatch({type: auth.RESTORE_AUTH, payload: data});
  }
};

const GoogleSignInButton = () => {
  const {setCurrentAuth} = React.useContext(AuthContext);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  useMemo(() => {
    setCurrentAuth(authState);
  }, [authState]);

  restoreAuthentication(dispatch);

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
