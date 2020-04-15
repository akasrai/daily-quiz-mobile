import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../home.style';
import {GoogleSignoutButton} from '~/auth/component/google-auth.component';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FUCK</Text>
      <GoogleSignoutButton />
    </View>
  );
};

export default HomeScreen;
