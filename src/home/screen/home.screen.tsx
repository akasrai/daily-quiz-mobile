import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';

import {styles} from '../home.style';
import {LogoSm} from '~/assets/image/logo';
import {getQuotes} from '~/api/firebase.api';
import {AuthContext} from '~/auth/auth.context';
import {appGradientBG, appStyles} from '~/app/app.style';
import GamePlay from '~/quiz/component/gameplay.component';
import Hr from '~/component/form/horizontal-line.component';
import {getRandomInt} from '~/helper';

const Quote = () => {
  const [quote, setQuote] = useState<String>();

  useEffect(() => {
    (async function getQuote() {
      getQuotes().then((snapshot) => {
        const quotes: Array<String> = [];

        snapshot.forEach((doc) => quotes.push(doc.data().quote));
        setQuote(quotes[getRandomInt(0, quotes.length)]);
      });
    })();
  }, [quote]);

  return (
    <View style={styles.quoteWrapper}>
      <LogoSm />
      <Text style={styles.quote}>{quote}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
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
