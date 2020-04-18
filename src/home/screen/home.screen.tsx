import React, {useState, useEffect, useContext} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {styles} from '../home.style';
import GamePlay from '~/quiz/component/gameplay.component';
import {ProfileIcon, ProfileImage} from '~/user/component/profile.component';
import {AuthContext} from '~/auth/auth.context';

const HomeScreen = () => {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImage}>
        <ProfileImage />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <GamePlay />
    </SafeAreaView>
  );
};

export default HomeScreen;
