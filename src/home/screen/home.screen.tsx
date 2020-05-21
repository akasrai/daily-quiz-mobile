import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import React, {useContext, useEffect, useState} from 'react';

import {styles} from '../home.style';
import {AuthContext} from '~/auth/auth.context';
import {VALIDATION} from '~/home/home.constant';
import {getQuizPlayPermission, getRandomQuote} from '~/api/request.api';
import {alert} from '~/component/alert/alert.component';
import {appGradientBG, appStyles} from '~/app/app.style';
import Loader from '~/component/loader/spinner.component';
import Hr from '~/component/form/horizontal-line.component';
import MoreMenu from '~/component/navigator/more-menu.component';
import DailyQuote from '~/quote/component/daily-quote.component';
import GameStatus from '~/quiz/component/current-player-stats.component';
import {AddQuoteFloatingBtn} from '~/quote/component/add-quote.component';
import {Quote} from '~/quote/quote.type';
import {ApiResponse} from '~/api';

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
            A new question has been published
          </Text>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#fff"
            onPress={() => navigation.navigate('Quiz')}>
            <MIcon style={styles.playBtn} name="play-circle-filled"></MIcon>
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
  const [quote, setQuote] = React.useState<Quote>();
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    getRandomQuote().then(({data}: ApiResponse) => {
      setQuote(data);
      setIsRefreshing(false);
    });
  }, [isRefreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <AddQuoteFloatingBtn />
        {/* <MoreMenu /> */}
        <ScrollView
          style={styles.contentWrapper}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }>
          <DailyQuote refreshedQuote={quote} />

          <View style={styles.content}>
            <GameStatus />
            <Hr />
            <ScrollView>
              <DailyQuizInfo />
              <PlayQuiz />
            </ScrollView>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const DailyQuizInfo = () => {
  return (
    <View style={styles.quizInfo}>
      <Text style={styles.season}>Season 1</Text>
      <Text style={styles.seasonTitle}>Winner Winner Chicken Dinner</Text>

      <View style={appStyles.row}>
        <View style={styles.rowItem}>
          <FIcon style={styles.play} name="dice-d6" />
          <Text style={styles.rowItemLabel}>Play</Text>
        </View>

        <View style={styles.rowItem}>
          <FIcon style={styles.win} name="trophy" />
          <Text style={styles.rowItemLabel}>Win</Text>
        </View>

        <View style={styles.rowItem}>
          <FIcon style={styles.host} name="bullhorn" />
          <Text style={styles.rowItemLabel}>Host</Text>
        </View>
      </View>
      <Text style={styles.note}>
        The top three player will win the attractive prizes and get chance to
        host the next season of Daily Quiz.
      </Text>
    </View>
  );
};

export default HomeScreen;
