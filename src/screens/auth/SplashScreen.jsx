import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getLoginData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('isLoggedin');
        if (jsonValue !== null) {
          const loginData = JSON.parse(jsonValue);
          console.log('Signup Data:', loginData);
          setIsLoggedIn(true);
        } else {
          console.log('No login data found.');
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
    getLoginData();
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (!isLoggedIn) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Dashboard');
      }
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [isLoggedIn, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movie App</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  text: {fontSize: 32, fontWeight: '700', color: '#ffffff'},
});
