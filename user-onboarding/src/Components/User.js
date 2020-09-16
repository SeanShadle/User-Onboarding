import React from 'react'

export default function Friend({details}){
    if (!details){
        return <h3>Fetching user details...</h3>
    }

    return (
        <div className='friend container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms of Service: {details.terms}</p>
        </div>
    )
}