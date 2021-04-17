import React, { createRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { login } from '../../services';
import { showMessage } from '../../utils';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = createRef();
  const passwordRef = createRef();
  const _validateEmail = (email = '') => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const _loginHandler = async () => {
    if (email === '') {
      showMessage('Email harus diisi!', 'error');
      return emailRef.current.focus();
    }
    if (password === '') {
      showMessage('Password harus diisi!', 'error');
      return passwordRef.current.focus();
    }
    if (!_validateEmail(email)) {
      showMessage('Email tidak valid!', 'error');
      return emailRef.current.focus();
    }
    try {
      const res = await login({ email, password });
      if (res) {
        showMessage('Berhasil Login');
      }
    } catch (error) {
      showMessage('Login Gagal!', 'error');
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <Gap height={30} />
      <View style={styles.sectionIntro}>
        <Text style={styles.textWelcome}>Just Returned</Text>
        <Text style={styles.textWelcome2}>Welcome back business owner</Text>
      </View>
      <View style={styles.sectionForm}>
        <Input
          forwardedRef={emailRef}
          label="Email"
          // keyboardType="phone-pad"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          forwardedRef={passwordRef}
          label="Password"
          rightIcon
          hidePassword={hidePassword}
          onPress={() => setHidePassword(!hidePassword)}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Gap height={20} />
        <Text style={styles.btnForgot}>Forgot your password?</Text>
      </View>
      <View style={styles.sectionButton}>
        <Button text="Sign In" onPress={() => _loginHandler()} />
        <View style={{ marginTop: 15 }} />
        <View style={styles.btnSignUpWrapper}>
          <Text style={styles.txtSignUpAsk}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.btnForgot}>Sign up here </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  sectionIntro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#696969',
  },
  textWelcome2: {
    fontSize: 16,
    color: '#808080',
  },
  inputForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionForm: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textLabel: {
    color: '#798777',
    marginEnd: 10,
    width: '20%',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    width: '78%',
  },
  btnForgot: {
    alignSelf: 'center',
    color: '#0061a8',
  },
  sectionButton: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  txtSignUpAsk: {
    color: 'black',
  },
  btnSignUpWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
