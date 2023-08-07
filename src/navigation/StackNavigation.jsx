import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screens/auth/LoginPage';
import SignupPage from '../screens/auth/SignupPage';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/dashboard/Home';
import BottomNavigation from './BottaomNavigation';
import SplashScreen from '../screens/auth/SplashScreen';
import DetailsScreen from '../screens/dashboard/DetailsScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="DetailScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
