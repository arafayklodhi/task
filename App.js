import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen/Index';
import LoginScreen from './src/screens/LoginScreen/Index';
import MainScreen from './src/screens/MainScreen/Index';
import StripScreen from './src/screens/StripScreen/Index';
import { StripeProvider } from '@stripe/stripe-react-native';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <StripeProvider publishableKey='pk_test_51L7aN8JSVwl1DvbQPI2Yq8GNEPabwVComCNuch4owPKqFsKJ0wNplkAbVMYCONriCpLKhn64H5AM7mVMSMlMqSJN009NRCj53b'>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="StripScreen" component={StripScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}



export default App;
