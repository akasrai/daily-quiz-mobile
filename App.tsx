import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {auth} from '~/auth';
import NavigationStack from '~/app/screen/navigator.screen';

const App = () => {
  auth.initGoogleSignIn();

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'#02183b'}
      />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </>
  );
};

export default App;
