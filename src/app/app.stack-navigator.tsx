import React from 'react';
import {Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppDrawer from './app.drawer';
import QuizScreen from '~/quiz/screen/quiz.screen';
import SigninScreen from '~/auth/screen/signin.screen';
import ProfileScreen from '~/user/screen/profile.screen';
import AppTabNavigation from '~/app/app.tab-navigator';
import LeaderboardScreen from '~/quiz/screen/leaderboard.screen';
import {Authenticated, NonAuthenticated} from '~/auth/auth.context';

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

const Stack = createStackNavigator();

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

export const HomeNavigationStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={AppDrawer}
      options={{
        headerShown: false,
        headerStyleInterpolator: forFade,
      }}
    />
  </Stack.Navigator>
);

export const LeaderboardNavigationStack = () => (
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
);

export const ProfileNavigationStack = () => (
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

const AppNavigationStack = () => (
  <Authenticated>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppTab">
        <Stack.Screen
          name="AppTab"
          component={AppTabNavigation}
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
    </NavigationContainer>
  </Authenticated>
);

export default AppNavigationStack;
