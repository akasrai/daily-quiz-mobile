import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';

import {ApiResponse} from '~/api';
import {styles} from '../quiz.style';
import {QuizPlayer} from '../quiz.type';
import {VALIDATION} from '../quiz.constant';
import {getQuizLeaderBoard} from '~/api/request.api';
import {alert} from '~/component/alert/alert.component';
import {appGradientBG, appStyles} from '~/app/app.style';
import Loader, {PageLoader} from '~/component/loader/spinner.component';
import Hr from '~/component/form/horizontal-line.component';
import GameStatus from '~/quiz/component/game-status.component';
import BackButton from '~/component/navigator/back-button.component';

const GoldMedalist = ({winner}: {winner: QuizPlayer}) => (
  <View style={styles.leadWrapper}>
    <View style={styles.leadOne}>
      <Image
        style={styles.leadOneImage}
        source={{uri: winner.player.photo || ''}}
      />
    </View>
    <Text style={styles.leadName}>
      {' '}
      <Icon style={styles.gold} name="medal" /> {winner.player.name}
    </Text>
    <Text style={styles.leadName}>{winner.point}</Text>
  </View>
);

const SilverMedalist = ({winner}: {winner: QuizPlayer}) => (
  <View style={styles.leadWrapper}>
    <View style={styles.leadTwo}>
      <Image
        style={styles.leadTwoImage}
        source={{uri: winner.player.photo || ''}}
      />
    </View>
    <Text style={styles.leadName}>
      <Icon style={styles.silver} name="medal" /> {winner.player.name}
    </Text>
    <Text style={styles.leadName}>{winner.point}</Text>
  </View>
);

const BronzeMedalist = ({winner}: {winner: QuizPlayer}) => (
  <View style={styles.leadWrapper}>
    <View style={styles.leadThree}>
      <Image
        style={styles.leadThreeImage}
        source={{uri: winner.player.photo || ''}}
      />
    </View>
    <Text style={styles.leadName}>
      <Icon style={styles.bronze} name="medal" /> {winner.player.name}
    </Text>
    <Text style={styles.leadName}>{winner.point}</Text>
  </View>
);

const TopThree = ({winners}: {winners: Array<QuizPlayer>}) => {
  console.log(winners[1]);
  return (
    <View style={styles.lead}>
      <SilverMedalist winner={winners[1]} />
      <GoldMedalist winner={winners[0]} />
      <BronzeMedalist winner={winners[2]} />
    </View>
  );
};

const LeaderboardScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [leaderboard, setLeaderboard] = useState<Array<QuizPlayer>>();

  useEffect(() => {
    if (!leaderboard)
      (async function () {
        const {data, error}: ApiResponse = await getQuizLeaderBoard();

        if (error) {
          return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
        }
        setIsLoading(false);
        setLeaderboard(data.result);
      })();
  });

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
        {leaderboard?.length && <TopThree winners={leaderboard.splice(0, 3)} />}

        <View style={styles.content}>
          <GameStatus />
          <Hr />
          <ScrollView style={styles.pointsTable}>
            {leaderboard?.map((position) => (
              <View style={styles.pointsRow}>
                <View style={styles.profileImageWrapper}>
                  <Image
                    style={styles.profileImage}
                    source={{uri: position.player.photo}}
                  />
                </View>
                <View>
                  <Text style={styles.name}>{position.player.name}</Text>
                </View>
                <View>
                  <Text style={styles.point}>{position.point}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
