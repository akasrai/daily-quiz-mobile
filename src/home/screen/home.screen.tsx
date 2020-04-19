import React, {useState, useEffect, useContext} from 'react';
import {View, Text, SafeAreaView, TouchableHighlight} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import {styles} from '../home.style';
import GamePlay from '~/quiz/component/gameplay.component';
import {ProfileIcon, ProfileImage} from '~/user/component/profile.component';
import {AuthContext} from '~/auth/auth.context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileImage}>
          <ProfileImage />
          <Text style={styles.name}>{user.name}</Text>
        </View>
        <GamePlay />

        <View style={styles.playBtnWrapper}>
          <Text style={styles.note}>New Question Published</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.playBtn}>
              <Icon style={styles.icon} name="play" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
