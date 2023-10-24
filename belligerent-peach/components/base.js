import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

import { useState } from 'react';

const Base = (props) => {
  return (
    <View>
      <View style={styles.base}>
        <Text style={{ fontSize: 40, fontWeight: 900 }}>Hello</Text>
        <Text>Lorem Ipsum is simply dummy </Text>
      </View>
      <View style={{backgroundColor: '#73beed', height: 382, borderRadius: 30}}>
        <TouchableOpacity style={styles.btn}>Sign in </TouchableOpacity>
        <TouchableOpacity style={styles.btn1}>Sign out </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    width: 209,
    height: 83,
    marginTop: 87,
    marginLeft: 20,
    marginBottom: 200,
  },
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
    marginTop: 100,
    marginLeft: 34, 
  },
    btn1: {
    width: 289,
    height: 42,
    borderRadius: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#243670',
    fontSize: 20,
    fontWeight: 600,
    justifyContent: 'center',
    marginLeft: 34,   
  }
});

export default Base;
