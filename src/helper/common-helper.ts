import {ApiResponse} from '~/api';

const toString = Object.prototype.toString;

export const isObject = (arg: any): boolean => {
  return toString.call(arg) === '[object Object]';
};

export const withError = (arg: any): ApiResponse => {
  if (isObject(arg)) {
    const {message = '', ...rest} = arg;

    return {
      data: null,
      error: {
        status: true,
        message,
        ...rest,
      },
    };
  }

  return {
    data: null,
    error: {
      status: true,
      message: arg,
    },
  };
};

export const withData = (data: any): ApiResponse => ({
  error: false,
  data,
});

export const serialize = (data: object): string => JSON.stringify(data);

export const parse = (data: string): object => {
  try {
    const parsedData = JSON.parse(data);

    return withData(parsedData);
  } catch (error) {
    return withError(error);
  }
};

export const isEmpty = (value: any) =>
  !value ||
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export const getReadingTime = (content: string) => {
  const wordsPerMinute = 200;

  let textLength = content.split(' ').length;
  if (textLength > 0) {
    return Math.ceil(textLength / wordsPerMinute);
  }

  return 0;
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};
