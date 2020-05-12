export interface User {
  name: string | null;
  photo: string | null;
  email: string | null;
  givenName: string | null;
  familyName: string | null;
}

export interface GoogleSigninResponse {
  user: User;
  idToken: string | null;
}

export interface GoogleCredential {
  token: string;
  secret: string;
  providerId: string;
}

export interface AuthState {
  user: User;
  token: string;
  provider: string;
  roles: Array<string>;
  isSigningIn: boolean;
  isAuthenticated: boolean;
  setCurrentAuth: (currentAuth: AuthState) => void;
}

export interface Action {
  payload?: any;
  type: string;
}
