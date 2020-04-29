export interface Option {
  option: string;
  isCorrect: boolean;
}

export interface Options {
  options: Array<Option>;
}

export interface Question {
  id: string;
  point: number;
  isActive: boolean;
  question: string;
}

export interface QuestionOptions {
  question: Question;
  options: Array<Option>;
}

export interface Answers {
  timeOut: boolean;
  setTimeOut: Function;
  options: Array<Option>;
}
