import {isObject} from '~/helper';

export const RULES = {
  MIN: 'min',
  MAX: 'max',
  TYPE: {
    EMAIL: 'email',
    STRING: 'string',
    NUMBER: 'number',
  },
  REQUIRED: 'required',
};

export const validation = {
  isString(string: string) {
    return /^[a-zA-Z]+(\s[a-zA-z]+)*$/.test(string);
  },

  isNumber(number: string) {
    return /^\d+$/.test(number);
  },

  isEmail(email: string) {
    return /^([\w.\-_]+)?\w+@[\w-_]+(\.[\w]+){1,}$/.test(email);
  },

  isMinLengthValid(string: string, length: number) {
    return string.length > length;
  },

  isMaxLengthValid(string: string, length: number) {
    return string.length < length;
  },
};

const hasType = (obj: any, type: string) => {
  console.log(Object.is(obj['type'], type));
  return Object.is(obj['type'], type);
};

const hasOwnProperty = (key: any, obj: any) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

export const validate = (
  input: any,
  rules: Array<any>,
  setError: (error: string) => void,
  handler: (value: any) => void,
) => {
  handler('');
  const value = input.nativeEvent.text;

  if (rules.length) {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];

      if (isObject(rule)) {
        if (hasOwnProperty(RULES.REQUIRED, rule) && rule.required && !value)
          return setError(rule.errorMessage);

        if (
          hasOwnProperty(RULES.MIN, rule) &&
          !validation.isMinLengthValid(value, rule.min)
        )
          return setError(rule.errorMessage);

        if (
          hasOwnProperty(RULES.MAX, rule) &&
          !validation.isMaxLengthValid(value, rule.max)
        )
          return setError(rule.errorMessage);

        if (
          hasOwnProperty('type', rule) &&
          hasType(rule, RULES.TYPE.STRING) &&
          !validation.isString(value)
        )
          return setError(rule.errorMessage);

        if (
          hasOwnProperty(RULES.TYPE, rule) &&
          hasType(rule, RULES.TYPE.NUMBER) &&
          !validation.isNumber(value)
        )
          return setError(rule.errorMessage);

        if (
          hasOwnProperty('type', rule) &&
          hasType(rule, RULES.TYPE.EMAIL) &&
          !validation.isEmail(value)
        )
          return setError(rule.errorMessage);
      }
    }
  }

  setError('');
  handler(value);
};
