import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {auth} from '~/auth';
import {useAuth} from '~/auth/auth.hooks';
import {AuthContextProvider} from '~/auth/auth.context';
import {SigninNavigation, ButtonNavigation} from '~/app/app.navigator';

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
      <SigninNavigation />
      <ButtonNavigation />
    </AuthContextProvider>
  );
};

export default App;
