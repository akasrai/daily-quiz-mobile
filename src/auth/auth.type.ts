export interface User {
  email: string | null;
  uid: string | null;
  name: string | null;
  photo: string | null;
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
  provider: string;
  isAuthenticated: boolean;
  setCurrentAuth: (currentAuth: AuthState) => void;
}

export interface Action {
  payload?: any;
  type: string;
}
