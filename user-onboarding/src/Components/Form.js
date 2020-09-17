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
                <h4>General information</h4>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                    <div>{errors.role}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <label>Username:
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>

                <label>Email:
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="email"
                    />
                </label>

                <label>Password:
                    <input
                        id='password'
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                    />
                </label>

                <label>Role:
                    <select
                        id='role'
                        value={values.role}
                        onChange={onChange}
                        name='role'
                    >
                        <option value=''>-Select an option-</option>
                        <option value='Front-end Dev'>Front-end Developer</option>
                        <option value='Back-end Dev'>Back-end Developer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Project Manager'>Project Manager</option>
                        <option value='Scrum Master'>Scrum Master</option>
                    </select>
                </label>

                <label>Terms of Service
                    <input 
                        id='terms'
                        value={values.terms}
                        onChange={onChange}
                        name='terms'
                        type='checkbox'
                        checked={values.terms}
                    />
                </label>
                <button disabled={disabled}>submit</button>
            </div>
        </form>

    )
}