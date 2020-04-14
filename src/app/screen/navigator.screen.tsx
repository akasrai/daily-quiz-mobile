import React from 'react';
import {Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '~/home/screen/home.screen';
import SigninScreen from '~/auth/screen/signin.screen';
import {Authenticated, NonAuthenticated} from '~/auth/auth.context';

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

const AuthenticatedNavigator = () => (
  <Authenticated>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyleInterpolator: forFade,
        }}
      />
    </Stack.Navigator>
  </Authenticated>
);

const NonAuthenticatedNavigator = () => (
  <NonAuthenticated>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SigninScreen}
        options={{
          headerShown: false,
          headerStyleInterpolator: forFade,
        }}
      />
    </Stack.Navigator>
  </NonAuthenticated>
);

const NavigationStack = () => (
  <>
    <NonAuthenticatedNavigator />
    <AuthenticatedNavigator />
  </>
);

export default NavigationStack;
