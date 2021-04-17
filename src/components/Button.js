import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text, type = 'blue' }) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'blue' ? '#0061a8' : '#FFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d8e3e7',
    paddingVertical: 10,
  }),
  text: (type) => ({
    textAlign: 'center',
    color: type === 'blue' ? '#FFFF' : '#0061a8',
  }),
});
