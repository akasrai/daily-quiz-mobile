import AsyncStorage from '@react-native-community/async-storage';
import {parse, serialize, withData} from '~/helper/common-helper';

export const asyncStorage = {
  async get(key: string) {
    const data = (await AsyncStorage.getItem(key)) || '';

    return parse(data);
  },

  set(key: string, value: any) {
    return withData(AsyncStorage.setItem(key, serialize(value)));
  },

  remove(key: string) {
    return AsyncStorage.removeItem(key);
  },
};
