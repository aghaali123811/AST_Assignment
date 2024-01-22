import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Colors from './src/common/Colors';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.Orange} />
      <Navigation />
    </>
  );
};

export default App;
