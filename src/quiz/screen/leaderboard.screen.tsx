import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {
  SeasonWinners,
  SeasonLeaderBoard,
} from '../component/leaderboard.component';
import {ApiResponse} from '~/api';
import {styles} from '../quiz.style';
import {LeaderBoard} from '../quiz.type';
import {getQuizLeaderBoard} from '~/api/request.api';
import {alert} from '~/component/alert/alert.component';
import {VALIDATION, RESULT_TYPE} from '../quiz.constant';
import {appStyles, appGradientBG} from '~/app/app.style';
import {PageLoader} from '~/component/loader/spinner.component';
import BackButton from '~/component/navigator/back-button.component';

const getLeaderBoard = async (
  setIsLoading: Function,
  setLeaderboard: Function,
) => {
  const {data, error}: ApiResponse = await getQuizLeaderBoard();
  console.log(data, error);
  if (error) {
    return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
  }

  setIsLoading(false);
  setLeaderboard(data);
};

const LeaderboardScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [leaderboard, setLeaderboard] = useState<LeaderBoard>({
    type: '',
    results: [],
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getLeaderBoard(setIsLoading, setLeaderboard);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <BackButton />
        <View>
          <Text style={styles.title}>Leaderboard</Text>
        </View>
        {RESULT_TYPE.SEASON_WINNERS === leaderboard.type && (
          <SeasonWinners plays={leaderboard.results} />
        )}

        {RESULT_TYPE.SEASON_LEADER_BOARD === leaderboard.type && (
          <SeasonLeaderBoard plays={leaderboard.results} />
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
