import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, WeeklyCalendar, PathMaps} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WeeklyCalendar" component={WeeklyCalendar} />
        <Stack.Screen name="PathMaps" component={PathMaps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
