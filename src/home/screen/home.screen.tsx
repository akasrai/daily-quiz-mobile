import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';

import {styles} from '../home.style';
import {LogoSm} from '~/assets/image/logo';
import {AuthContext} from '~/auth/auth.context';
import {appGradientBG, appStyles} from '~/app/app.style';
import GamePlay from '~/quiz/component/gameplay.component';
import Hr from '~/component/form/horizontal-line.component';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <View style={styles.quoteWrapper}>
          <LogoSm />
          <Text style={styles.quote}>This fucking cool Quotes.</Text>
        </View>
        <View style={styles.content}>
          <GamePlay />
          <Hr />
          <ScrollView></ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
