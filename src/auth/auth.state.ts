import {AuthState, Action} from './auth.type';
import {updateObject, createReducer} from '~/helper';

const AUTH = 'AUTH';
export const SIGN_IN = `${AUTH}_SIGN_IN`;
export const SIGN_OUT = `${AUTH}_SIGN_OUT`;

export const initialState: AuthState = {
  user: {
    id: '',
    name: '',
    email: '',
    photo: '',
    familyName: '',
    givenName: '',
  },
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
      return updateObject(state, {
        isAuthenticated: true,
        user: action.payload.user,
      });

    case SIGN_OUT:
      return updateObject(state, {
        ...initialState,
      });

    default:
      return state;
  }
};
