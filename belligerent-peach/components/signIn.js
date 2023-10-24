import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

import { useState } from 'react';

const SignIn = (props) => {
  return (
    <View>
    <View style={{backgroundColor: '#73beed', height: 198, marginBottom: 100,}}> </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" />

        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.btn}>Sign in </TouchableOpacity>
        <Text style={styles.words}> Forgot Password? </Text>
      </View>
      <View style={styles.mini}>
        <View style={{width: 100, height: 33, borderRadius:15 , borderWidth: 1, borderColor: 'black', marginRight: 20, display: 1, flexDirection: 'row',justifyContent: 'center',}}>
              <Image
        style={styles.Image}
        source={require('../assets/facebook.png')}
      />
          <Text style={styles.text}>Sign in </Text>
        </View>
        <View style={{width: 100, height: 33, borderRadius:15 , borderWidth: 1, borderColor: 'black', display: 1, flexDirection: 'row',justifyContent: 'center',}}>
              <Image
        style={styles.Image}
        source={require('../assets/google.png')}
      />
          <Text style={styles.text}>Sign in </Text>
        </View>
        
      </View>
      <Text style={{marginTop: 20, textAlign: 'center',}}> Don't have account? <Text style={{color: '#243670', fontWeight: 600}}>SignUp</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 289,
    height: 42,
    borderRadius: 20,
    backgroundColor: '#243670',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 34,
  },
  container: {
    borderRadius: 30,
  },
  input: {
    backgroundColor: '#eef0f7',
    color: '#bbbdc4',
    width: 289,
    height: 42,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 400,
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 34,
    paddingLeft: 15,


  },
  words: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    color: '#243670',
    marginBottom: 20,
    marginLeft: 34,
  },
    Image: {
      marginTop: 5,
      marginRight: 5,
  },
  text: {
    marginTop:5,
  },
  mini: {
    display: 1,
    flexDirection: 'row',
    marginLeft: 76,
    marginTop: 30,

  },
});

export default SignIn;
