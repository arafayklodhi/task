import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen/Index';
import LoginScreen from './src/screens/LoginScreen/Index';
import MainScreen from './src/screens/MainScreen/Index';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
