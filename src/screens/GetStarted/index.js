import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { IMGLogo, IMGWoman } from '../../assets';
import { Button } from '../../components';

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTop}>
        <View style={{ flex: 1 }}>
          <Image source={IMGLogo} style={styles.logo} />
          <Text>The Leading Salesforce Quote-to-Cash Partner</Text>
        </View>
        <Image source={IMGWoman} style={styles.ilustration} />
      </View>
      <View style={styles.sectionBottom}>
        <Button text="Owner" onPress={() => navigation.navigate('Login')} />
        <View style={{ marginTop: 15 }} />
        <Button text="Employee" type="white" />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    paddingVertical: 50,
  },
  sectionTop: {
    flex: 1,
    alignItems: 'center',
  },
  sectionBottom: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  logo: {
    width: Dimensions.get('screen').width * 0.8,
    height: 40,
    resizeMode: 'contain',
  },
  ilustration: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});
