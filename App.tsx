import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import GoogleSignIn from '~/auth/screen/google-auth.screen';

import {auth} from '~/auth';

const App = () => {
  auth.initGoogleSignIn();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <GoogleSignIn />
      </SafeAreaView>
    </>
  );
};

export default App;
