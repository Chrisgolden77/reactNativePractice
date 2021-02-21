/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {HomeScreen} from './Screens/HomeScreen.js';
import {CountScreen} from './Screens/CountScreen.js';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome!'}}
        />
        <Stack.Screen
          name="Count"
          component={CountScreen}
          options={{title: 'Count'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
