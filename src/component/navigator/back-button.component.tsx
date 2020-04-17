import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styles.goBackButton}
      onPress={() => navigation.goBack()}>
      <Icon style={styles.icon} name="chevron-left"></Icon>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  goBackButton: {
    width: 40,
    height: 40,
    padding: 6,
    zIndex: 888,
    marginTop: 18,
    marginLeft: 12,
    position: 'absolute',
    borderRadius: 100 / 2,
    backgroundColor: 'transparent',
  },
  icon: {
    color: '#fff',
    fontSize: 25,
  },
});

export default BackButton;
