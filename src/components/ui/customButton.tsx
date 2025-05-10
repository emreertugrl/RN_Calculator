import React, {memo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton: React.FC<{
  title: string;
  backgroundColor: string;
  handle?: any;
}> = ({title, backgroundColor, handle}) => {
  // console.log('Button Çalıştı', title);
  return (
    <TouchableOpacity
      onPress={handle}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 50,
  },
  title: {fontSize: 30, color: 'white'},
});

export default memo(CustomButton);
