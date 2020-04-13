import React, {ReactNode} from 'react';

import {AuthState} from '~/auth/auth.type';
import {initialState} from '~/auth/auth.state';
import {SIGN_IN, SIGN_OUT} from '~/auth/auth.state';

const DEFAULT_VALUE = {
  ...initialState,
  setAuth: () => {},
};

export const AuthContext = React.createContext<AuthState>(DEFAULT_VALUE);
export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

// export const Authenticated = ({children}: {children: ReactNode}) => {
//   console.log('fuck you');
//   return (
//     <AuthContextConsumer>
//       {(auth) => !auth.isAuthenticated && <>{children}</>}
//     </AuthContextConsumer>
//   );
// };
