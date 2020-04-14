import React, {ReactNode} from 'react';

import {AuthState} from '~/auth/auth.type';
import {initialState} from '~/auth/auth.state';

const DEFAULT_VALUE = {
  ...initialState,
  setAuth: () => {},
};

export const AuthContext = React.createContext<AuthState>(DEFAULT_VALUE);
export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

export const Authenticated = ({children}: {children: ReactNode}) => {
  return (
    <AuthContextConsumer>
      {(auth) => auth.isAuthenticated && <>{children}</>}
    </AuthContextConsumer>
  );
};

export const NonAuthenticated = ({children}: {children: ReactNode}) => {
  return (
    <AuthContextConsumer>
      {(auth) => !auth.isAuthenticated && <>{children}</>}
    </AuthContextConsumer>
  );
};
