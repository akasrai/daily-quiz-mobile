import * as http from './http.api';

export const loginWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};
