import React, {useContext, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Image, Text, ScrollView, SafeAreaView} from 'react-native';

import {User} from '~/auth';
import {styles} from '../quiz.style';
import {AuthContext} from '~/auth/auth.context';
import {getGameLeaderboard} from '~/api/firebase.api';
import {appGradientBG, appStyles} from '~/app/app.style';
import Hr from '~/component/form/horizontal-line.component';
import GameStatus from '~/quiz/component/game-status.component';
import BackButton from '~/component/navigator/back-button.component';
import {GameLeaderboard} from '../quiz.type';

const TopThree = ({user}: {user: User}) => {
  return (
    <View style={styles.lead}>
      <View style={styles.leadWrapper}>
        <View style={styles.leadTwo}>
          <Image style={styles.leadTwoImage} source={{uri: user.photo || ''}} />
        </View>
        <Text style={styles.leadName}>
          <Icon style={styles.silver} name="medal" /> {user.name}
        </Text>
        <Text style={styles.leadName}>4500</Text>
      </View>

      <View style={styles.leadWrapper}>
        <View style={styles.leadOne}>
          <Image style={styles.leadOneImage} source={{uri: user.photo || ''}} />
        </View>
        <Text style={styles.leadName}>
          {' '}
          <Icon style={styles.gold} name="medal" /> {user.name}
        </Text>
        <Text style={styles.leadName}>450</Text>
      </View>

      <View style={styles.leadWrapper}>
        <View style={styles.leadThree}>
          <Image
            style={styles.leadThreeImage}
            source={{uri: user.photo || ''}}
          />
        </View>
        <Text style={styles.leadName}>
          {' '}
          <Icon style={styles.bronze} name="medal" /> {user.name}
        </Text>
        <Text style={styles.leadName}>4580</Text>
      </View>
    </View>
  );
};

const LeaderboardScreen = () => {
  const {user} = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState<Array<GameLeaderboard>>();

  useEffect(() => {
    (async function () {
      const gameLeaderboard = await getGameLeaderboard();
      setLeaderboard(gameLeaderboard);
    })();
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <BackButton />
        <View>
          <Text style={styles.title}>Leaderboard</Text>
        </View>
        <TopThree user={user} />

        <View style={styles.content}>
          <GameStatus />
          <Hr />
          <ScrollView style={styles.pointsTable}>
            {leaderboard?.map((position) => (
              <View style={styles.pointsRow}>
                <View style={styles.profileImageWrapper}>
                  <Image
                    style={styles.profileImage}
                    source={{uri: position.user.photo}}
                  />
                </View>
                <View>
                  <Text style={styles.name}>{position.user.fullName}</Text>
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
