import {Platform, StatusBar, View} from 'react-native';
import Calculation from './src/screens/calculation';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <Calculation />
    </View>
  );
}
