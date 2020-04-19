import React from 'react';
import {Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '~/home/screen/home.screen';
import SigninScreen from '~/auth/screen/signin.screen';
import ProfileScreen from '~/user/screen/profile.screen';
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

const Tab = createBottomTabNavigator();

const AuthenticatedNavigator = () => (
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

export const NonAuthenticatedNavigator = () => (
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

const AppNavigationStack = () => {
  return (
    <>
      <AuthenticatedNavigator />
    </>
  );
};

export const ButtonNavigation = () => {
  return (
    <Authenticated>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName = '';

              if (route.name === 'Home') {
                iconName = focused ? 'info-circle' : 'info-circle';
              }
              if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog';
              }

              // You can return any component that you like here!
              return <Icon style={{color: '#fff'}} name={iconName} />;
            },
            backgroundColor: 'red',
          })}
          tabBarOptions={{
            activeTintColor: '#dadada',
            inactiveTintColor: '#fff',
            style: {
              paddingBottom: 10,
              paddingTop: 10,
              height: 60,
              borderTopColor: '#011533',
              backgroundColor: '#011533',
            },
          }}>
          <Tab.Screen name="Home" component={AppNavigationStack} />
          <Tab.Screen name="Settings" component={AppNavigationStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Authenticated>
  );
};

export default AppNavigationStack;
