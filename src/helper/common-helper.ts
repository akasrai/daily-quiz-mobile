import {ApiResponse} from '~/api';

const toString = Object.prototype.toString;

/**
 * Checks if argument is Object.
 *
 * @param {Any} arg
 * @returns {Boolean}
 */
export const isObject = (arg: any): boolean => {
  return toString.call(arg) === '[object Object]';
};

/**
 * Wrap arguments with error.
 *
 * @param {Any} arg
 * @returns {Object}
 */
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

/**
 * Wrap data with error status.
 *
 * @param {Any} data
 * @returns {Object}
 */
export const withData = (data: any): ApiResponse => ({
  error: false,
  data,
});

/**
 * Serialize the data.
 *
 * @param {Object} data
 * @returns {String}
 */
export const serialize = (data: object): string => JSON.stringify(data);

/**
 * Parse string data.
 *
 * @param {String} data
 * @returns {Object}
 */
export const parse = (data: string): object => {
  try {
    const parsedData = JSON.parse(data);

    return withData(parsedData);
  } catch (error) {
    return withError(error);
  }
};

/**
 * Checks is given value is empty.
 *
 * @param {Any} value
 */
export const isEmpty = (value: any) =>
  !value ||
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

/**
 * Calculates reading time for content.
 *
 * @param content {string}
 */
export const getReadingTime = (content: string) => {
  const wordsPerMinute = 200;

  let textLength = content.split(' ').length;
  if (textLength > 0) {
    return Math.ceil(textLength / wordsPerMinute);
  }

  return 0;
};
