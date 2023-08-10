import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import {LoginInitialValue, LoginValidationSchema} from './utils';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';

const LoginPage = () => {
  const [data, setData] = useState();
  const navigation = useNavigation();

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

  const handleLogin = async value => {
    console.log(value);
    if (value.username === data.username && value.password === data.password) {
      try {
        await AsyncStorage.setItem('isLoggedin', JSON.stringify(value));
        console.log('Data saved successfully.');
      } catch (error) {
        console.error('Error saving data:', error);
      }

      navigation.navigate('Dashboard');
    } else if (
      value.username !== data.username &&
      value.password !== data.password
    ) {
      Alert.alert('Enter Valid Username and Password');
    } else if (
      value.username === data.username &&
      value.password !== data.password
    ) {
      Alert.alert('Enter Valid Password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <Formik
        initialValues={LoginInitialValue}
        onSubmit={handleLogin}
        validationSchema={LoginValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => {
          return (
            <View>
              <InputBox
                placeholder={'Username'}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                touched={touched.username}
                errors={errors.username}
              />
              <InputBox
                placeholder={'Password'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                touched={touched.password}
                errors={errors.password}
                secureTextEntry
              />
              <CustomButton
                buttonTitle={'Sign up'}
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </View>
          );
        }}
      </Formik>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupTouchText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  loginText: {
    fontSize: 28,
    marginBottom: 10,
    color: '#ffffff',
    fontWeight: '700',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
    color: '#ffffff',
  },
  signupTouchText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
  },
});
