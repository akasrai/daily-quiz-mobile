import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {LinearGradient, Text, Defs, Stop, TSpan} from 'react-native-svg';

const Logo = () => (
  <View
    style={[
      StyleSheet.absoluteFill,
      {flex: 1, alignItems: 'center', justifyContent: 'center'},
    ]}>
    <Svg viewBox="0 0 280 300" height="200" width="200">
      <Defs>
        <LinearGradient
          id="rainbow"
          x1="0"
          x2="0"
          y1="0"
          y2="100%"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FF5B99" offset="0%" />
          <Stop stopColor="#FF5447" offset="20%" />
          <Stop stopColor="#FF7B21" offset="50%" />
          <Stop stopColor="#EAFC37" offset="50%" />
          <Stop stopColor="#4FCB6B" offset="30%" />
          <Stop stopColor="#51F7FE" offset="60%" />
        </LinearGradient>
      </Defs>
      <Text fill="url(#rainbow)">
        <TSpan fontFamily="KaushanScript-Regular" fontSize="60" x="0" y="72">
          Daily Quiz
        </TSpan>
      </Text>
    </Svg>
  </View>
);

export default Logo;
