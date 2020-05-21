import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';

import {appGradientBG, appStyles} from '~/app/app.style';

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#4776c0" />
  </View>
);

export const PageLoader = () => (
  <SafeAreaView style={styles.container}>
    <LinearGradient colors={appGradientBG} style={appStyles.container}>
      <Loader />
    </LinearGradient>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  horizontal: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Loader;
