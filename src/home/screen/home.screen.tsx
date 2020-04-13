import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './home.style';
import Logo from '~/assets/image/logo';
import {AuthContextConsumer} from '~/auth/auth.context';
import GoogleSignIn from '~/auth/screen/google-auth.screen';

const HomeScreen = () => {
  return (
    <AuthContextConsumer>
      {(auth) =>
        auth.isAuthenticated ? (
          <View style={styles.container}>
            <Text>Fuck You</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <Logo />
            <GoogleSignIn />
          </View>
        )
      }
    </AuthContextConsumer>
  );
};

export default HomeScreen;
