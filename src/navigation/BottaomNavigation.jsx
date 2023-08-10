import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/dashboard/Home';
import Profile from '../screens/dashboard/Profile';
import Favorite from '../screens/dashboard/Favorite';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#000000'},
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'blue' : '#ffffff'}}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'blue' : '#ffffff'}}>Favorite</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'blue' : '#ffffff'}}>Profile</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
