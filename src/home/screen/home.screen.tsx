import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

import {styles} from '../home.style';
import {getRandomInt} from '~/helper';
import {LogoSm} from '~/assets/image/logo';
import {getQuotes} from '~/api/firebase.api';
import {AuthContext} from '~/auth/auth.context';
import {appGradientBG, appStyles} from '~/app/app.style';
import GamePlay from '~/quiz/component/gameplay.component';
import Hr from '~/component/form/horizontal-line.component';

const Quote = () => {
  const [quote, setQuote] = useState<String>();

  useEffect(() => {
    getQuotes().then((snapshot) => {
      const quotes: Array<String> = [];
      snapshot.forEach((doc) => quotes.push(doc.data().quote));
      setQuote(quotes[getRandomInt(0, quotes.length)]);
    });
  });

  return (
    <View style={styles.quoteWrapper}>
      <LogoSm />
      <Text style={styles.quote}>{quote}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <Quote />
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
