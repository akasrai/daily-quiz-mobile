import React, {useContext} from 'react';
import {Image, Route} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {
  HomeNavigationStack,
  ProfileNavigationStack,
  LeaderboardNavigationStack,
} from './app.stack-navigator';
import {User} from '~/auth';
import {AuthContext, Authenticated} from '~/auth/auth.context';

const getTabBarOptions = () => ({
  showIcon: true,
  showLabel: false,
  inactiveTintColor: '#fff',
  activeTintColor: '#dadada',
  style: {
    height: 50,
    paddingBottom: 10,
    borderTopColor: '#011533',
    backgroundColor: '#011533',
  },
});

const getTabBarIcons = (route: Route, focused: boolean, user: User) => {
  let fontColor = focused ? '#fff' : '#a5a5a5';
  switch (route.name) {
    case 'Home':
      return <MIcon style={{color: fontColor, fontSize: 25}} name="home" />;

    case 'Leaderboard':
      return <FIcon style={{color: fontColor, fontSize: 18}} name="trophy" />;

    case 'More':
      return (
        <MIcon style={{color: fontColor, fontSize: 25}} name="more-horiz" />
      );

    case 'Profile':
      return (
        <Image
          style={{width: 25, height: 25, borderRadius: 100 / 2}}
          source={
            user.photo ? {uri: user.photo} : require('~/assets/image/dp.png')
          }
        />
      );
  }
};

const Tab = createMaterialTopTabNavigator();

const AppTabNavigation = () => {
  const {user}: {user: User} = useContext(AuthContext);

  return (
    <Authenticated>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => getTabBarIcons(route, focused, user),
        })}
        tabBarOptions={getTabBarOptions()}>
        <Tab.Screen name="Home" component={HomeNavigationStack} />
        <Tab.Screen name="Leaderboard" component={LeaderboardNavigationStack} />
        <Tab.Screen name="Profile" component={ProfileNavigationStack} />
      </Tab.Navigator>
    </Authenticated>
  );
};

export default AppTabNavigation;
