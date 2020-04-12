import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './home.style';
import Logo from '~/assets/image/logo';
import GoogleSignIn from '~/auth/screen/google-auth.screen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <GoogleSignIn />
    </View>
  );
};

export default HomeScreen;
