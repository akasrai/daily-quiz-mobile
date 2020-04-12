import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './home.style';
import GoogleSignIn from '~/auth/screen/google-auth.screen';

const Welcome = () => {
  return <Text style={styles.welcomeText}>Daily Quiz</Text>;
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <GoogleSignIn />
    </View>
  );
};

export default HomeScreen;
