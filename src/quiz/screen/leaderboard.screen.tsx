import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';

import {ApiResponse} from '~/api';
import {styles} from '../quiz.style';
import {QuizPlayer, LeaderBoard} from '../quiz.type';
import {VALIDATION, RESULT_TYPE} from '../quiz.constant';
import {getQuizLeaderBoard} from '~/api/request.api';
import {alert} from '~/component/alert/alert.component';
import {appGradientBG, appStyles} from '~/app/app.style';
import Hr from '~/component/form/horizontal-line.component';
import {PageLoader} from '~/component/loader/spinner.component';
import GameStatus from '~/quiz/component/current-player-stats.component';
import BackButton from '~/component/navigator/back-button.component';

const GoldMedalist = ({winner}: {winner: QuizPlayer}) => (
  <View style={styles.leadWrapper}>
    <View style={styles.leadOne}>
      <Image
        style={styles.leadOneImage}
        source={
          winner?.player?.photo
            ? {uri: winner?.player?.photo}
            : require('../../assets/image/dp.png')
        }
      />
    </View>
    <Text style={styles.leadName}>
      <Icon style={styles.gold} name="medal" />{' '}
      {winner?.player?.name.split(' ')[0]}
    </Text>
    <Text style={styles.leadName}>{winner?.point}</Text>
  </View>
);

const SilverMedalist = ({winner}: {winner: QuizPlayer}) => (
  <View style={styles.leadWrapper}>
    <View style={styles.leadTwo}>
      <Image
        style={styles.leadTwoImage}
        source={
          winner?.player?.photo
            ? {uri: winner?.player?.photo}
            : require('../../assets/image/dp.png')
        }
      />
    </View>
    <Text style={styles.leadName}>
      <Icon style={styles.silver} name="medal" />{' '}
      {winner?.player?.name.split(' ')[0]}
    </Text>
    <Text style={styles.leadName}>{winner?.point}</Text>
  </View>
);

const BronzeMedalist = ({winner}: {winner: QuizPlayer}) => (
  <View style={styles.leadWrapper}>
    <View style={styles.leadThree}>
      <Image
        style={styles.leadThreeImage}
        source={
          winner?.player?.photo
            ? {uri: winner?.player?.photo}
            : require('../../assets/image/dp.png')
        }
      />
    </View>
    <Text style={styles.leadName}>
      <Icon style={styles.bronze} name="medal" />{' '}
      {winner?.player?.name.split(' ')[0]}
    </Text>
    <Text style={styles.leadName}>{winner?.point}</Text>
  </View>
);

const TopThree = ({winners}: {winners: Array<QuizPlayer>}) => {
  return (
    <View style={styles.lead}>
      <SilverMedalist winner={winners[1]} />
      <GoldMedalist winner={winners[0]} />
      <BronzeMedalist winner={winners[2]} />
    </View>
  );
};

const SeasonWinners = ({leaderboard}: {leaderboard: Array<QuizPlayer>}) => {
  return <TopThree winners={leaderboard} />;
};

const SeasonLeaderBoard = ({leaderboard}: {leaderboard: Array<QuizPlayer>}) => {
  return (
    <>
      {leaderboard?.length > 3 && (
        <TopThree winners={leaderboard.splice(0, 3)} />
      )}

      <View style={styles.content}>
        <GameStatus />
        <Hr />
        <ScrollView style={styles.pointsTable}>
          {leaderboard?.map((position, key) => (
            <View key={key} style={styles.pointsRow}>
              <View style={styles.profileImageWrapper}>
                <Image
                  style={styles.profileImage}
                  source={
                    position?.player?.photo
                      ? {uri: position?.player?.photo}
                      : require('../../assets/image/dp.png')
                  }
                />
              </View>
              <View>
                <Text style={styles.name}>{position?.player?.name}</Text>
              </View>
              <View>
                <Text style={styles.point}>{position?.point}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const getLeaderBoard = async (
  setIsLoading: Function,
  setLeaderboard: Function,
) => {
  const {data, error}: ApiResponse = await getQuizLeaderBoard();

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
          <SeasonWinners leaderboard={leaderboard.results} />
        )}

        {RESULT_TYPE.SEASON_LEADER_BOARD === leaderboard.type && (
          <SeasonLeaderBoard leaderboard={leaderboard.results} />
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
