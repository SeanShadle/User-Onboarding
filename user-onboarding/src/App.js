import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './Components/Form'
import User from './Components/User'
import schema from './Validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
  role: '',
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
  role: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUser] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

const postNewUser = newUser => {
  axios.post("https://reqres.in/api/users", newUser)
  .then(res => {
    setUser([...users, res.data])
    setFormValues(initialFormValues)
  })
  .catch(err => {
    debugger
    console.log(err)
  })
}

const validate = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ""
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
}

const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const newUser = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    password: formValues.password,
    terms: formValues.terms,
    role: formValues.role
  }
  postNewUser(newUser)
}


useEffect(() => {
  schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formValues])



  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}
