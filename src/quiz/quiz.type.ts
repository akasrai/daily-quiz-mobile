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
  timeTaken: number;
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

export interface CurrentStatus {
  point: number;
  position: number;
  gamePlayed: number;
}

export interface QuizPlayer {
  point: number;
  gamePlayed: number;
  player: {
    photo: string;
    name: string;
  };
}
