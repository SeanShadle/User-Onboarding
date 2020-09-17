import React from 'react'

export default function User({details}){
    if (!details){
        return <h3>Fetching user details...</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.first_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms of Service: {details.terms}</p>
        </div>
    )
}