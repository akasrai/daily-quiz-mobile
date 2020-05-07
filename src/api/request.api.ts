import {token} from './token.api';
import * as http from './http.api';

export const signWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};

export const signOut = () => {
  return http.get(`/auth/signout`);
};

export const refreshAccessToken = () => {
  return http.post(`/auth/token`, {
    referenceToken: token.getAccessToken(),
  });
};

export const getLatestQuestion = () => {
  return http.get(`/quiz`);
};
