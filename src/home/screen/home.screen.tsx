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

import {ApiResponse} from '~/api';
import {Quote} from '../home.types';
import {styles} from '../home.style';
import {LogoSm} from '~/assets/image/logo';
import {AuthContext} from '~/auth/auth.context';
import {getRandomQuote} from '~/api/request.api';
import {VALIDATION} from '~/home/home.constant';
import {appGradientBG, appStyles} from '~/app/app.style';
import {alert} from '~/component/alert/alert.component';
import Hr from '~/component/form/horizontal-line.component';
import GameStatus from '~/quiz/component/game-status.component';

const getQuote = async (setQuote: Function) => {
  const {data, error}: ApiResponse = await getRandomQuote();

  if (error) {
    return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
  }

  setQuote(data);
};

const RandomQuote = () => {
  const navigation = useNavigation();
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getQuote(setQuote);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.quoteWrapper}>
      <LogoSm />
      <Text style={styles.quote}>{quote?.quote}</Text>
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
