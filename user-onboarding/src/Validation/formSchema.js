import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string()
        .required('Username is required')
        .min(5, 'Username must be atleast 5 characters long'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be atleast 6 characters long'),
    terms: yup.boolean(),
})