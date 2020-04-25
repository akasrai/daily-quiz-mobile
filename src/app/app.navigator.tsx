import React, {useContext} from 'react';
import {Animated, Image, Route} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AuthContext,
  Authenticated,
  NonAuthenticated,
} from '~/auth/auth.context';
import {User} from '~/auth';
import QuizScreen from '~/quiz/screen/quiz.screen';
import HomeScreen from '~/home/screen/home.screen';
import SigninScreen from '~/auth/screen/signin.screen';
import ProfileScreen from '~/user/screen/profile.screen';
import LeaderboardScreen from '~/quiz/screen/leaderboard.screen';

const Stack = createStackNavigator();

const forFade = ({current, next}: any) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    titleStyle: {opacity},
    backgroundStyle: {opacity},
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
  };
};

const Tab = createBottomTabNavigator();

export const SigninNavigation = () => (
  <NonAuthenticated>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{
            headerShown: false,
            headerStyleInterpolator: forFade,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </NonAuthenticated>
);

const HomeNavigationStack = () => (
  <Authenticated>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyleInterpolator: forFade,
        }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          headerShown: false,
          headerStyleInterpolator: forFade,
        }}
      />
    </Stack.Navigator>
  </Authenticated>
);

const LeaderboardNavigationStack = () => (
  <Authenticated>
    <Stack.Navigator initialRouteName="Leaderboard">
      <Stack.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          headerShown: false,
          headerStyleInterpolator: forFade,
        }}
      />
    </Stack.Navigator>
  </Authenticated>
);

const ProfileNavigationStack = () => (
  <Authenticated>
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerStyleInterpolator: forFade,
        }}
      />
    </Stack.Navigator>
  </Authenticated>
);

export const ButtonNavigation = () => {
  const {user}: {user: User} = useContext(AuthContext);

  return (
    <Authenticated>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => getTabBarIcons(route, focused, user),
          })}
          tabBarOptions={getTabBarOptions()}>
          <Tab.Screen name="Home" component={HomeNavigationStack} />
          <Tab.Screen
            name="Leaderboard"
            component={LeaderboardNavigationStack}
          />
          <Tab.Screen name="Profile" component={ProfileNavigationStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Authenticated>
  );
};

const getTabBarOptions = () => ({
  showIcon: true,
  showLabel: false,
  inactiveTintColor: '#fff',
  activeTintColor: '#dadada',
  style: {
    height: 50,
    paddingTop: 10,
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

    case 'Profile':
      return (
        <Image
          style={{width: 25, height: 25, borderRadius: 100 / 2}}
          source={{uri: user.photo || ''}}
        />
      );
  }
};
