import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ApiResponse} from '~/api';
import {CurrentStatus} from '../quiz.type';
import {VALIDATION} from '../quiz.constant';
import {useNavigation} from '@react-navigation/native';
import {getPlayerCurrentStats} from '~/api/request.api';
import {alert} from '~/component/alert/alert.component';

const getCurrentStats = async (setCurrentStatus: Function) => {
  const {data, error}: ApiResponse = await getPlayerCurrentStats();

  if (error) {
    return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
  }

  setCurrentStatus(data);
};

const GameStatus = () => {
  const defaultStatus = {
    point: 0,
    position: 0,
    gamePlayed: 0,
  };
  const navigation = useNavigation();
  const [currentStatus, setCurrentStatus] = useState<CurrentStatus>(
    defaultStatus,
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCurrentStats(setCurrentStatus);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.value}>{currentStatus?.position}</Text>
        <Text style={styles.label}>
          <Icon style={styles.posIcon} name="award" /> Position
        </Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.value}>{currentStatus?.point}</Text>
        <Text style={styles.label}>
          <Icon style={styles.pointIcon} name="check-circle" /> Points
        </Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.value}>{currentStatus?.gamePlayed}</Text>
        <Text style={styles.label}>
          <Icon style={styles.gameIcon} name="dice-d6" /> Gameplay
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    borderRadius: 100 / 30,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentBox: {
    height: 50,
  },
  pointIcon: {
    fontSize: 10,
    color: 'green',
  },
  posIcon: {
    fontSize: 10,
    color: 'red',
  },
  gameIcon: {
    fontSize: 10,
    color: 'orange',
  },
  label: {
    fontSize: 12,
    color: '#02183b',
    textAlign: 'center',
  },
  value: {
    fontSize: 18,
    color: '#02183b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GameStatus;
