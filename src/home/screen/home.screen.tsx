import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useContext, useEffect, useState} from 'react';

import {Quote} from '../home.types';
import {styles} from '../home.style';
import {getRandomInt} from '~/helper';
import {LogoSm} from '~/assets/image/logo';
import {getQuotes} from '~/api/firebase.api';
import {AuthContext} from '~/auth/auth.context';
import {appGradientBG, appStyles} from '~/app/app.style';
import GameStatus from '~/quiz/component/game-status.component';
import Hr from '~/component/form/horizontal-line.component';

const RandomQuote = () => {
  const [quote, setQuote] = useState<String>('');

  useEffect(() => {
    if (!quote)
      getQuotes().then((quotes: Array<Quote>) => {
        setQuote(quotes[getRandomInt(0, quotes.length)].quote);
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
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <RandomQuote />
        <View style={styles.content}>
          <GameStatus />
          <Hr />
          <ScrollView>
            <Text style={styles.title}>Nothing to show here :(</Text>
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor="#02183b"
              onPress={() => navigation.navigate('Quiz')}>
              <Icon style={{fontSize: 30}} name="chevron-left"></Icon>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
