import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ApiResponse} from '~/api';
import {Quote} from '../quote.type';
import {styles} from '../quote.style';
import {LogoSm} from '~/assets/image/logo';
import {getRandomQuote} from '~/api/request.api';

const getQuote = async (setQuote: Function) => {
  const {data, error}: ApiResponse = await getRandomQuote();

  if (error) {
    return;
  }

  setQuote(data);
};

const DailyQuote = () => {
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

export default DailyQuote;
