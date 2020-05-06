import {useContext} from 'react';

import * as http from './http.api';
import {AuthContext} from '~/auth/auth.context';

export const signWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};

export const signOut = () => {
  return http.get(`/auth/signout`);
};

export const refreshAccessToken = () => {
  return http.post(`/auth/token`, {
    referenceToken: 'useContext(AuthContext).token,',
  });
};
