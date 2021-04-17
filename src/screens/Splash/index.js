import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IMGLogo } from '../../assets';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'GetStarted' }] });
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={IMGLogo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
  },
});
