import React from 'react';
import {View} from 'react-native';

import Logo from '~/assets/image/logo';
import {styles} from '~/auth/auth.style';
import GoogleSignIn from '~/auth/component/google-auth.component';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <GoogleSignIn />
    </View>
  );
};

export default SigninScreen;
