import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const GamePlay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.value}>1</Text>
        <Text style={styles.label}>
          <Icon style={styles.posIcon} name="award" /> Position
        </Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.value}>500</Text>
        <Text style={styles.label}>
          <Icon style={styles.pointIcon} name="check-circle" /> Points
        </Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.value}>5</Text>
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

export default GamePlay;
