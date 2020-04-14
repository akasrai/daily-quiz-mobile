import React from 'react';
import {View, Text} from 'react-native';

import Logo from '~/assets/image/logo';
import {styles} from '~/auth/screen/auth.style';
import GoogleSignIn from '~/auth/screen/google-auth.screen';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <GoogleSignIn />
    </View>
  );
};

export default SigninScreen;
