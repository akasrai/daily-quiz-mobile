export interface User {
  id: string;
  email: string;
  name: string | null;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
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
}

export interface Action {
  payload: any;
  type: string;
}
