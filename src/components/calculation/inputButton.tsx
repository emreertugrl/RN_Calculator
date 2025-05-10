import React, {memo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {width} from '../../utils/constants';
import {InputButtonPropsTypes} from '../../modals/ui/inputButton';

const InputButton: React.FC<InputButtonPropsTypes> = ({
  item,
  handleOnClick,
}) => {
  console.log('value');
  return (
    <TouchableOpacity
      onPress={() => handleOnClick(item.value)}
      style={styles.container}>
      <Text style={{color: 'white', fontSize: 28}}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 4 - 10,
    height: width / 4 - 10,
    backgroundColor: '#339dff',
    padding: 10,
    margin: 3,
    borderRadius: 5,
  },
});

export default memo(InputButton);
