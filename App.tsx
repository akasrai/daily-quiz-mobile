import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {auth} from '~/auth';
import {useAuth} from '~/auth/auth.hooks';
import NavigationStack from '~/app/app.navigator';
import {AuthContextProvider} from '~/auth/auth.context';

const App = () => {
  const currentAuth = useAuth();

  useEffect(() => {
    auth.initGoogleSignIn();
  });

  return (
    <AuthContextProvider value={currentAuth}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'#02183b'}
      />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
