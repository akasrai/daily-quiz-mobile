import React from 'react';
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
};

const AuthContext = React.createContext<AuthState>(initialState);

export const AuthContextProvider = AuthContext.Provider;

export const AuthContextConsumer = AuthContext.Consumer;

export const reducer = createReducer(initialState);

reducer.case(SIGN_IN).register((state: AuthState, action: Action) =>
  updateObject(state, {
    isAuthenticated: true,
    user: action.payload.user,
  }),
);

reducer.case(SIGN_OUT).register((state: AuthState) =>
  updateObject(state, {
    ...initialState,
  }),
);
