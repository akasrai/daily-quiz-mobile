import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const MoreMenu = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="#02183b"
      style={styles.moreMenu}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Icon style={styles.icon} name="more-horizontal"></Icon>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  moreMenu: {
    width: 40,
    height: 40,
    padding: 10,
    zIndex: 8888,
    right: 20,
    bottom: 20,
    position: 'absolute',
    borderRadius: 100 / 2,
    backgroundColor: '#02183b',
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
});

export default MoreMenu;
