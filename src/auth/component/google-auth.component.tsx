import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useReducer,
} from 'react';
import {
  statusCodes,
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {ApiResponse} from '~/api';
import {styles} from '~/auth/auth.style';
import * as auth from '~/auth/auth.state';
import {VALIDATION} from '../auth.constant';
import {AuthContext} from '~/auth/auth.context';
import {alert} from '~/component/alert/alert.component';
import {signOut, signWithGoogle} from '~/api/request.api';
import Loader from '~/component/loader/spinner.component';
import {asyncStorage} from '~/helper/async-storage-helper';
import {TouchableHighlight} from 'react-native-gesture-handler';

const signIn = async (dispatch: Function) => {
  dispatch({type: auth.SIGN_IN_PENDING});

  try {
    await GoogleSignin.hasPlayServices();
    const googleSignIn = await GoogleSignin.signIn();
    const {data, error} = await signWithGoogle(googleSignIn.idToken);

    if (error) {
      dispatch({type: auth.SIGN_IN_ERROR});
      return handleSignInError(VALIDATION.ERROR_IN_SIGNIN);
    }

    dispatch({
      type: auth.SIGN_IN_SUCCESS,
      payload: {user: googleSignIn.user, token: data.token, roles: data.roles},
    });
  } catch (error) {
    dispatch({type: auth.SIGN_IN_ERROR});

    return handleSignInError(error);
  }
};

const handleSignInError = (error: any) => {
  console.log(error.code);
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
    signOut();
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
  dispatch({type: auth.SIGN_IN_PENDING});
  const {data}: ApiResponse = await asyncStorage.get('auth');

  if (data) {
    return dispatch({type: auth.RESTORE_AUTH, payload: data});
  }

  dispatch({type: auth.SIGN_IN_ERROR});
};

const GoogleSignInButton = () => {
  const [checkAuth, setCheckAuth] = useState<boolean>(true);
  const {setCurrentAuth, isSigningIn} = useContext(AuthContext);
  const [authState, dispatch] = useReducer(auth.reducer, auth.initialState);

  useEffect(() => {
    setCurrentAuth(authState);

    if (checkAuth) {
      setCheckAuth(false);
      restoreAuthentication(dispatch);
    }
  }, [authState]);

  if (isSigningIn) {
    return <Loader />;
  }

  return (
    <GoogleSigninButton
      onPress={() => signIn(dispatch)}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      style={{width: 255, height: 50, marginTop: 20}}
    />
  );
};

export default GoogleSignInButton;
