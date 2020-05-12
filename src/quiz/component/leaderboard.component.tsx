import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Image, Text, ScrollView} from 'react-native';

import {styles} from '../quiz.style';
import {QuizPlayer} from '../quiz.type';
import Hr from '~/component/form/horizontal-line.component';
import GameStatus from '~/quiz/component/current-player-stats.component';

export const GoldMedalist = ({winner}: {winner: QuizPlayer}) => (
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
    <Icon style={styles.gold} name="medal" />
    <Text style={styles.leadName}>{winner?.player?.name}</Text>
    <Text style={styles.point}>{winner?.point}</Text>
  </View>
);

export const SilverMedalist = ({winner}: {winner: QuizPlayer}) => (
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
    <Icon style={styles.silver} name="medal" />
    <Text style={styles.leadName}>{winner?.player?.name}</Text>
    <Text style={styles.point}>{winner?.point}</Text>
  </View>
);

export const BronzeMedalist = ({winner}: {winner: QuizPlayer}) => (
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
    <Icon style={styles.bronze} name="medal" />
    <Text style={styles.leadName}>{winner?.player?.name}</Text>
    <Text style={styles.point}>{winner?.point}</Text>
  </View>
);

export const TopThree = ({winners}: {winners: Array<QuizPlayer>}) => (
  <View style={styles.lead}>
    <SilverMedalist winner={winners[1]} />
    <GoldMedalist winner={winners[0]} />
    <BronzeMedalist winner={winners[2]} />
  </View>
);

const getMedalColor = (key: number) =>
  key === 0 ? styles.gold : key === 1 ? styles.silver : styles.bronze;

export const SeasonWinners = ({plays}: {plays: Array<QuizPlayer>}) => (
  <>
    <Text style={styles.congratsText}>This Season Winners !!!</Text>
    <View style={styles.winners}>
      {plays.map((winner, key) => (
        <View key={key} style={styles.winner}>
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
            <Icon style={getMedalColor(key)} name="medal" />
          </View>
          <WinnerStats pos={key + 1} winner={winner} />
        </View>
      ))}
    </View>
  </>
);

const WinnerStats = ({pos, winner}: {pos: number; winner: QuizPlayer}) => (
  <View style={styles.congrats}>
    <Text style={styles.winnerName}>{winner?.player?.name}</Text>
    <View style={styles.stats}>
      <View>
        <Text style={styles.winnerPoints}>{pos}</Text>
        <Text style={styles.statText}>
          <Icon style={styles.posIcon} name="award" /> Position
        </Text>
      </View>
      <View>
        <Text style={styles.winnerPoints}>{winner?.point} </Text>
        <Text style={styles.statText}>
          <Icon style={styles.pointIcon} name="check-circle" /> Points
        </Text>
      </View>
      <View>
        <Text style={styles.winnerPoints}>{winner?.gamePlayed} </Text>
        <Text style={styles.statText}>
          <Icon style={styles.gameIcon} name="dice-d6" /> Gameplay
        </Text>
      </View>
    </View>
  </View>
);

export const SeasonLeaderBoard = ({plays}: {plays: Array<QuizPlayer>}) => (
  <>
    {plays?.length > 3 && <TopThree winners={plays.splice(0, 3)} />}

    <View style={styles.content}>
      <GameStatus />
      <Hr />
      <ScrollView style={styles.pointsTable}>
        {plays?.map((position, key) => (
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
              <Text style={styles.pointDark}>{position?.point}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </>
);
