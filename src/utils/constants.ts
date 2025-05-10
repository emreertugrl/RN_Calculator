import {Dimensions} from 'react-native';

const inputValues = [
  {id: '1', title: '7', value: 7},
  {id: '2', title: '8', value: 8},
  {id: '3', title: '9', value: 9},
  {id: '4', title: '/', value: '/'},
  {id: '5', title: '4', value: 4},
  {id: '6', title: '5', value: 5},
  {id: '7', title: '6', value: 6},
  {id: '8', title: '*', value: '*'},
  {id: '9', title: '1', value: 1},
  {id: '10', title: '2', value: 2},
  {id: '11', title: '3', value: 3},
  {id: '12', title: '-', value: '-'},
  {id: '13', title: '0', value: 0},
  {id: '14', title: '.', value: '.'},
  {id: '15', title: '=', value: '='},
  {id: '16', title: '+', value: '+'},
];

const {width, height} = Dimensions.get('window');
export {height, inputValues, width};
