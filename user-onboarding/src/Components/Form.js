import React from 'react'

export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>New User</h2>
                <button disabled={disabled}>submit</button>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General information</h4>
                <label>Username
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>

                <label>Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="email"
                    />
                </label>

                <label>Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                    />
                </label>

                <label>Terms of Service
                    <input 
                        value={values.terms}
                        onChange={onChange}
                        name='terms'
                        type='radio'
                    />
                </label>
            </div>
        </form>

    )
}