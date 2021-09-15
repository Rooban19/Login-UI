import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');
const Login = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.welcomText}>Welcome !</Text>
      <View style={styles.inputContainers}>
        <View style={styles.input}>
          <Ionicons name='person' size={18} color='black' />
          <TextInput
            placeholder='Enter your mail id'
            style={{ marginLeft: 15 }}
          />
        </View>
        <View style={styles.input}>
          <AntDesign name='unlock' size={18} color='black' />
          <TextInput
            placeholder='Enter your password'
            secureTextEntry={true}
            style={{ marginLeft: 15 }}
          />
        </View>
        <Text style={{ marginTop: 5, textAlign: 'right', marginRight: 15 }}>
          Forgot Password ?
        </Text>
        <TouchableOpacity style={styles.login}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 1,
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    padding: 5,
  },
  welcomText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputContainers: {
    // backgroundColor: 'grey',
    height: height / 3,
    marginTop: 25,
    padding: 5,
  },
  input: {
    backgroundColor: 'white',
    height: '25%',
    paddingLeft: 15,
    elevation: 5,
    marginTop: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  login: {
    backgroundColor: '#0542a3',
    alignSelf: 'center',
    marginTop: 15,
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 10,
    marginTop: 30,
  },
});
