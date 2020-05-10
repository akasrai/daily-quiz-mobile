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
import {VALIDATION} from '~/home/home.constant';
import {alert} from '~/component/alert/alert.component';
import {appGradientBG, appStyles} from '~/app/app.style';
import Loader from '~/component/loader/spinner.component';
import Hr from '~/component/form/horizontal-line.component';
import GameStatus from '~/quiz/component/current-player-stats.component';
import {getRandomQuote, getQuizPlayPermission} from '~/api/request.api';

const getQuote = async (setQuote: Function) => {
  const {data, error}: ApiResponse = await getRandomQuote();

  if (error) {
    return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
  }

  setQuote(data);
};

const getQuizPermission = async (
  setPermission: Function,
  setCheckingPem: Function,
) => {
  const {data, error} = await getQuizPlayPermission();

  if (error) {
    return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
  }

  setPermission(data);
  setCheckingPem(false);
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

const PlayQuiz = () => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);
  const [isEligible, setPermission] = useState<boolean>(false);
  const [isCheckingPem, setCheckingPem] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCheckingPem(true);
      getQuizPermission(setPermission, setCheckingPem);
    });

    return unsubscribe;
  }, [isEligible]);

  return (
    <View style={styles.playBtnWrapper}>
      {isCheckingPem ? (
        <View style={styles.gameNotice}>
          <Loader />
        </View>
      ) : isEligible ? (
        <>
          <Text style={styles.gameNotice}>
            Hey {user.givenName}, here's a new question for you.
          </Text>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#fff"
            onPress={() => navigation.navigate('Quiz')}>
            <Icon style={styles.playBtn} name="play-circle-filled"></Icon>
          </TouchableHighlight>
        </>
      ) : (
        <Text style={styles.gameNotice}>
          Question is not yet published. Please, come back later.
        </Text>
      )}
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <RandomQuote />
        <View style={styles.content}>
          <GameStatus />
          <Hr />
          <ScrollView>
            <PlayQuiz />
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
