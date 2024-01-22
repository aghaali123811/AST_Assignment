import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import MapScreen from '../screens/MapScreen/MapScreen';

const MainStack = createStackNavigator();

const Navigation = props => {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'SignIn'}>
          <MainStack.Screen name="SignIn" component={SignInScreen} />
          <MainStack.Screen name="Maps" component={MapScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
