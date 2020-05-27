import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FIcon from 'react-native-vector-icons/FontAwesome5';

import {validate} from './validation.component';

interface InputProps {
  rules?: Array<any>;
  placeholder?: string;
  handler: (prop: any) => void;
}

export const TextArea = ({
  handler,
  placeholder = '',
  rules = [],
}: InputProps) => {
  const [error, setError] = useState<string>('');

  return (
    <View>
      <TextInput
        multiline={true}
        numberOfLines={4}
        keyboardType="default"
        placeholder={placeholder}
        disableFullscreenUI={true}
        style={error === '' ? styles.default : styles.invalid}
        onEndEditing={(input) => validate(input, rules, setError, handler)}
      />
      {error !== '' && (
        <Text style={styles.error}>
          <FIcon style={styles.ficon} name="exclamation-circle" /> {error}
        </Text>
      )}
    </View>
  );
};

export const Input = ({handler, placeholder = '', rules = []}: InputProps) => {
  const [error, setError] = useState<string>('');

  return (
    <View>
      <TextInput
        keyboardType="default"
        disableFullscreenUI={true}
        placeholder={placeholder}
        style={error === '' ? styles.default : styles.invalid}
        onEndEditing={(input) => validate(input, rules, setError, handler)}
      />
      {error !== '' && (
        <Text style={styles.error}>
          <FIcon style={styles.ficon} name="error-outline" /> {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#eee',
    marginTop: 5,
    marginBottom: 5,
  },
  invalid: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
    marginTop: 5,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 0,
    marginBottom: 10,
  },
  ficon: {
    color: 'red',
    fontSize: 10,
    position: 'absolute',
    top: 50,
  },
});
