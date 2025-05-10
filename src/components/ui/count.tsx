import React, {memo} from 'react';
import {Text, StyleSheet} from 'react-native';

// create a component
const Count: React.FC<{count: any; title: string}> = ({count, title}) => {
  console.log('Count çalıştı', title);
  return (
    <Text style={styles.container}>
      {title}
      {count}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {textAlign: 'center', fontSize: 40},
});

export default memo(Count);
