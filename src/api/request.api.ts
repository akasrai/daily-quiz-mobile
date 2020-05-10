import {Token} from './token.api';
import * as http from './http.api';
import {Answer} from '~/quiz/quiz.type';

export const signWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};

export const signOut = () => {
  return http.get(`/auth/signout`);
};

export const refreshAccessToken = () => {
  return http.post(`/auth/token`, {
    referenceToken: Token.getAccessToken(),
  });
};

export const getLatestQuestion = () => {
  return http.get(`/quiz`);
};

export const submitAnswer = (answer: Answer) => {
  return http.post(`/quiz/answer`, answer);
};

export const getQuizLeaderBoard = () => {
  return http.get(`/quiz/leaderboard`);
};

export const getRandomQuote = () => {
  return http.get(`/quote`);
};

export const getPlayerCurrentStats = () => {
  return http.get(`/quiz/current/stats`);
};

export const getQuizPlayPermission = () => {
  return http.get(`/quiz/permission`);
};
