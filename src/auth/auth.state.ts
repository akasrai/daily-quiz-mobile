import {updateObject} from '~/helper';
import {Token} from '~/api/token.api';
import {AuthState, Action} from './auth.type';
import {asyncStorage} from '~/helper/async-storage-helper';

const AUTH = 'AUTH';
export const SIGN_OUT = `${AUTH}_SIGN_OUT`;
export const RESTORE_AUTH = 'RESTORE_AUTH';
export const SIGN_IN_ERROR = `${AUTH}_SIGN_IN_ERROR`;
export const SIGN_IN_PENDING = `${AUTH}_SIGN_IN_PENDING`;
export const SIGN_IN_SUCCESS = `${AUTH}_SIGN_IN_SUCCESS`;

export const initialState: AuthState = {
  user: {
    name: '',
    email: '',
    photo: '',
    familyName: '',
    givenName: '',
  },
  token: '',
  roles: [],
  isSigningIn: false,
  provider: 'Google',
  isAuthenticated: false,
  setCurrentAuth: () => null,
};

export const reducer = (
  state: AuthState = initialState,
  action: Action,
): any => {
  switch (action.type) {
    case SIGN_IN_PENDING:
      return updateObject(state, {
        isSigningIn: true,
      });

    case SIGN_IN_SUCCESS:
      asyncStorage.set('auth', action.payload);
      Token.setAccessToken(action.payload.token);

      return updateObject(state, {
        isSigningIn: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        roles: action.payload.roles,
      });

    case SIGN_IN_ERROR:
      return updateObject(state, {
        isSigningIn: false,
      });

    case SIGN_OUT:
      Token.deleteAccessToken();
      asyncStorage.remove('auth');

      return updateObject(state, {
        ...initialState,
      });

    case RESTORE_AUTH:
      Token.setAccessToken(action.payload.token);

      return updateObject(state, {
        isSigningIn: false,
        isAuthenticated: true,
        ...action.payload,
      });

    default:
      return state;
  }
};
