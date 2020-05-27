import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {isEmpty} from '~/helper';

interface ButtonProps {
  value?: any;
  label: string;
  handler: () => void;
}

export const ActionButton = ({value, label, handler}: ButtonProps) => {
  return (
    <TouchableHighlight
      disabled={isEmpty(value) ? true : false}
      style={isEmpty(value) ? styles.disabled : styles.button}
      onPress={() => handler()}>
      <Text style={styles.text}>{label}</Text>
    </TouchableHighlight>
  );
};

export const CloseButton = ({label, handler}: ButtonProps) => {
  return (
    <TouchableHighlight style={styles.cancel} onPress={() => handler()}>
      <Text style={styles.text}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: '#083171',
  },
  cancel: {
    width: 100,
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: '#b91313',
  },
  disabled: {
    width: 100,
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: '#78797a',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
