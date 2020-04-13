import {AuthState, Action} from './auth.type';
import {updateObject, createReducer} from '~/helper';

const AUTH = 'AUTH';
const AUTH_SIGN_IN = `${AUTH}_SIGN_IN`;
const AUTH_SIGN_OUT = `${AUTH}_SIGN_OUT`;

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
};

export const authReducer = createReducer(initialState);

authReducer.case(AUTH_SIGN_IN).register((state: AuthState, action: Action) =>
  updateObject(state, {
    isAuthenticated: true,
    user: action.payload.user,
  }),
);

authReducer.case(AUTH_SIGN_OUT).register((state: AuthState) =>
  updateObject(state, {
    ...initialState,
  }),
);
