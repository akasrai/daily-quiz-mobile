import * as http from './http.api';
import {asyncStorage} from '~/helper/async-storage-helper';
import {ApiResponse} from './api.type';

export const signWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};

export const signOut = () => {
  return http.get(`/auth/signout`);
};

export const refreshAccessToken = () => {
  return asyncStorage.get('auth').then(({data}: ApiResponse) =>
    http.post(`/auth/token`, {
      referenceToken: data.token,
    }),
  );
};
