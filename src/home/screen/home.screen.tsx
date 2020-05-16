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

import {styles} from '../home.style';
import {AuthContext} from '~/auth/auth.context';
import {VALIDATION} from '~/home/home.constant';
import {getQuizPlayPermission} from '~/api/request.api';
import {alert} from '~/component/alert/alert.component';
import {appGradientBG, appStyles} from '~/app/app.style';
import Loader from '~/component/loader/spinner.component';
import Hr from '~/component/form/horizontal-line.component';
import MoreMenu from '~/component/navigator/more-menu.component';
import DailyQuote from '~/quote/component/daily-quote.component';
import GameStatus from '~/quiz/component/current-player-stats.component';
import {AddQuoteFloatingBtn} from '~/quote/component/add-quote.component';

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
        <DailyQuote />
        <AddQuoteFloatingBtn />
        {/* <MoreMenu /> */}

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
