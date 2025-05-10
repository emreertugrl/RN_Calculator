import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {height} from '../../utils/constants';

const Switch = ({switchType, handleChange}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleChange(1)}
        style={[
          styles.button,
          {backgroundColor: switchType == 1 ? '#339dff' : '#cbe1ff'},
        ]}>
        <Text
          style={[styles.title, {color: switchType == 0 ? 'black' : 'white'}]}>
          Calculator
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleChange(0)}
        style={[
          styles.button,
          {backgroundColor: switchType == 0 ? '#339dff' : '#cbe1ff'},
        ]}>
        <Text
          style={[styles.title, {color: switchType == 1 ? 'black' : 'white'}]}>
          Converter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cbe1ff',
    height: height / 18,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Switch;
