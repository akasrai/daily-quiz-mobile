import {updateObject} from '~/helper';
import {AuthState, Action} from './auth.type';
import {asyncStorage} from '~/helper/async-storage-helper';

const AUTH = 'AUTH';
export const SIGN_IN = `${AUTH}_SIGN_IN`;
export const SIGN_OUT = `${AUTH}_SIGN_OUT`;

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
  provider: 'Google',
  isAuthenticated: false,
  setCurrentAuth: () => null,
};

export const reducer = (
  state: AuthState = initialState,
  action: Action,
): any => {
  switch (action.type) {
    case SIGN_IN:
      asyncStorage.set('auth', action.payload);

      return updateObject(state, {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        roles: action.payload.roles,
      });

    case SIGN_OUT:
      return updateObject(state, {
        ...initialState,
      });

    default:
      return state;
  }
};
