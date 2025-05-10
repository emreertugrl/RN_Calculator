import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {inputValues, width} from '../../utils/constants';
import InputButton from '../../components/calculation/inputButton';
import Response from './../../components/calculation/response';
import Switch from '../../components/calculation/switch';

const Calculation: React.FC = () => {
  const [inputValue, setInputValue] = useState(0);
  const [switchType, setSwitchType] = useState(0);
  const [calculate, setCalculate] = useState(0);
  const handleChangeSwitch = value => {
    setSwitchType(value);
  };
  let nextValue = 0;
  useEffect(() => {
    nextValue = calculate;
  }, [inputValue]);

  console.log('değer', calculate);
  const handleChangeValue = useCallback(value => {
    setInputValue(value);
  }, []);
  const handleCalculate = value => {
    console.log('işlem', value);
    console.log('son değer', nextValue);
  };

  return (
    <View style={styles.container}>
      <Switch switchType={switchType} handleChange={handleChangeSwitch} />
      <View
        style={{
          flex: 2,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 20,
          marginVertical: 10,
        }}>
        <Response inputValue={inputValue} />
      </View>
      <View
        style={{
          flex: 3,
          padding: 20,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            width: width - 20,
            height: 1,
            backgroundColor: 'gray',
            alignSelf: 'center',
          }}
        />
        <FlatList
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
          }}
          numColumns={4}
          data={inputValues}
          renderItem={({item}) => (
            <InputButton item={item} handleOnClick={handleChangeValue} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 70,
  },
});

export default Calculation;
