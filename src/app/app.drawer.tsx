import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '~/home/screen/home.screen';
import LeaderboardScreen from '~/quiz/screen/leaderboard.screen';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
