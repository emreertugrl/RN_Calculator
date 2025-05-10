import React, {useCallback, useMemo, useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import CustomButton from '../../components/ui/customButton';
import Count from '../../components/ui/count';

const Memorization: React.FC = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [count, setCount] = useState(0);
  const calculation = (a: number, b: number): any => {
    console.log('calculation çalıştı');
    return a + b;
  };
  const handleChangeCount = useCallback(() => {
    console.log('handleChangeCount çalıştı');
    setCount(prev => prev + 1);
  }, []);

  const total: number = useMemo(() => calculation(a, b), [a, b]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <Count count={a} title="A: " />
        <Count count={b} title="B: " />
        <Count count={total} title="Count: " />
      </View>
      <View style={{flex: 1}}>
        <Count count={count} title="Handle Change: " />
      </View>
      <View style={{flex: 1, width: '100%'}}>
        <CustomButton
          title="A Arttır"
          backgroundColor="green"
          handle={() => setA(a + 1)}
        />
        <CustomButton
          title="B Arttır"
          backgroundColor="red"
          handle={() => setB(b + 1)}
        />
        <CustomButton
          title="Handle Change"
          backgroundColor="blue"
          handle={handleChangeCount}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
});

export default Memorization;
