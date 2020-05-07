import {User} from '~/auth';

export interface Option {
  id: number;
  answer: string;
}

export interface Options {
  options: Array<Option>;
}

export interface Question {
  id: string;
  point: number;
  category: string;
  question: string;
}

export interface QuestionOptions {
  question: Question;
  options: Array<Option>;
}

export interface Answers {
  point: number;
  timeOut: boolean;
  setTimeOut: Function;
  options: Array<Option>;
}

export interface GamePlay {
  point: number;
  gamePlayed: number;
}

export interface GameLeaderboard {
  point: number;
  gamePlayed: number;
  user: {
    photo: string;
    fullName: string;
  };
}
