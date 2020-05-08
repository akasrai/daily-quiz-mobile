import {Alert} from 'react-native';

export const alert = {
  error: function (message: string, error: string = '') {
    Alert.alert(message, error);
  },
};
