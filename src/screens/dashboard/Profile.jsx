import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [data, setData] = useState('');

  useFocusEffect(
    useCallback(() => {
      getSignupData()
    }, []),
  );

    const getSignupData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userSignupData');
        if (jsonValue !== null) {
          const signupData = JSON.parse(jsonValue);
          console.log('Signup Data:', signupData);
          setData(signupData);
        } else {
          console.log('No signup data found.');
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedin');
      console.log('Logged out successfully.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error removing login status and user data:', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 20,
        justifyContent: 'center',
      }}>
      <Text style={styles.profileTextBlock}>Profile</Text>
      <Text style={styles.textBlock}>Username : {data?.username}</Text>
      <Text style={styles.textBlock}>Username : {data?.email}</Text>
      <Text style={styles.textBlock}>Username : {data?.phoneNumber}</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.textBlock}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textBlock: {
    color: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    height: 35,
    marginTop: 15,
    fontSize: 18,
  },
  profileTextBlock: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 26,
    marginBottom: 25,
    textAlign: 'center',
  },
});
