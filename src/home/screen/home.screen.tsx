import React, {useState, useEffect, useContext} from 'react';
import {View, Text, SafeAreaView, TouchableHighlight} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import {styles} from '../home.style';
import GamePlay from '~/quiz/component/gameplay.component';
import {ProfileIcon, ProfileImage} from '~/user/component/profile.component';
import {AuthContext} from '~/auth/auth.context';
import Hr from '~/component/form/horizontal-line.component';
import {LogoSm} from '~/assets/image/logo';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#02183b', '#032862', '#fff', '#fff', '#fff']}
        style={{flex: 1}}>
        <ScrollView>
          <View style={styles.quoteWrapper}>
            <View style={styles.logo}>
              <LogoSm />
            </View>
            <Text style={styles.quote}>This fucking cool Quotes.</Text>
          </View>

          <View style={styles.content}>
            <GamePlay />
            <Hr />
            <Text>This is fucking view</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
