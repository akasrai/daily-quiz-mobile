export interface Option {
  id: number;
  answer: string;
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

export interface Answer {
  answer: number;
  question: string;
}

export interface AnswerResponse {
  correct: boolean;
  correctAnswer: number;
}

export interface Answers {
  timeOut: boolean;
  question: Question;
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
