import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const GameLoader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#4776c0" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default GameLoader;
