import React from 'react';
import {View, SafeAreaView} from 'react-native';

import Logo from '~/assets/image/logo';
import {styles} from '~/auth/auth.style';
import GoogleSignIn from '~/auth/component/google-auth.component';

const SigninScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo />
        <GoogleSignIn />
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;
