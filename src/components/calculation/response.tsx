import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Response: React.FC = ({inputValue}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: '600'}}>
        {inputValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default memo(Response);
