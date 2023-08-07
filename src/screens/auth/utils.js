import * as yup from 'yup';

export const LoginInitialValue = {
  username: '',
  password: '',
};

export const LoginValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit',
    ),
});

export const SignupInitialValue = {
  username: '',
  password: '',
  email: '',
  confirmPassword: '',
  phoneNumber: '',
};

export const SignupValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Invalid email address',
    ),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit',
    ),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(/^[0-9- ]*$/, 'Invalid phone number'),
});
