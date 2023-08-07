import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {SignupInitialValue, SignupValidationSchema} from './utils';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupPage = () => {
  const navigation = useNavigation();
  const handleSignup = async values => {
    console.log(values);
    try {
      await AsyncStorage.setItem('userSignupData', JSON.stringify(values));
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data:', error);
    }

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signupText}>Sign Up</Text>
      <Formik
        initialValues={SignupInitialValue}
        onSubmit={handleSignup}
        validationSchema={SignupValidationSchema}>
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
                placeholder={'Email'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                touched={touched.email}
                errors={errors.email}
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
              <InputBox
                placeholder={'Confirm Password'}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                touched={touched.confirmPassword}
                errors={errors.confirmPassword}
                secureTextEntry
              />
              <InputBox
                placeholder={'Phone Number'}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                touched={touched.phoneNumber}
                errors={errors.phoneNumber}
                maxLength={10}
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
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginTouchText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  signupText: {
    fontSize: 28,
    marginBottom: 10,
    color: '#ffffff',
    fontWeight: '700',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    color: '#ffffff',
  },
  loginTouchText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
  },
});
