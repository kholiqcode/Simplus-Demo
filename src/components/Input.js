import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({
  label,
  keyboardType,
  hidePassword,
  rightIcon,
  onPress,
  value,
  onChangeText,
  forwardedRef,
}) => {
  const IconInput = () => {
    if (hidePassword) return <Icon name="eye" size={24} color="black" />;
    if (!hidePassword) return <Icon name="eye-slash" size={24} color="black" />;
  };
  return (
    <View style={styles.inputForm}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput
        ref={forwardedRef}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={hidePassword}
        keyboardType={keyboardType}
        style={styles.input}
      />
      {rightIcon && (
        <TouchableOpacity style={styles.iconWrapper} onPress={onPress}>
          <IconInput />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textLabel: {
    color: '#798777',
    marginEnd: 10,
    width: '20%',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    width: '78%',
    color: 'black',
  },
  inputForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
