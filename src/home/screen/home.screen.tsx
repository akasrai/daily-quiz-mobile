import React from 'react';
import {View} from 'react-native';

import {styles} from './home.style';
import Logo from '~/assets/image/logo';
import GoogleSignInScreen from '~/auth/screen/google-auth.screen';
import {AuthContextConsumer} from '~/auth/auth.state';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <GoogleSignInScreen />
    </View>
  );
};

export default HomeScreen;
