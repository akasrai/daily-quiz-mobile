import {GoogleSignin} from '@react-native-community/google-signin';

import env from '../../env';

export const auth = {
  initGoogleSignIn: function () {
    GoogleSignin.configure({
      webClientId: env.google.WEB_CLIENT_ID,
      offlineAccess: false,
    });
  },
};
