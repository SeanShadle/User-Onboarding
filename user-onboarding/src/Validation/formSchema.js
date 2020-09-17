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
    role: yup.string()
        .oneOf(['Front-end Dev', 'Back-end Dev', 'Designer', 'Project Manager', 'Scrum Master'], 'Role is required'),
    terms: yup.boolean().oneOf([true], "Please agree to the terms of use"),
    
})