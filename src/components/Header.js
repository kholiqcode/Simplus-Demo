import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Gap from './Gap';

const Header = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
      {/* <ICBack height={24} width={24} /> */}
      <Icon name="chevron-left" size={24} color="#0061a8" />
      <Gap width={5} />
      <Text style={styles.textBack}>Back</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textBack: {
    color: '#0061a8',
    fontSize: 16,
    fontWeight: '600',
  },
});
