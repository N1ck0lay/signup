import React from 'react'

import './index.css'


const Input = ({ meta: { error, touched, active }, input, label, type }) => {
    return (
        <div className="input">
            <label className={error && touched && !active ? 'error' : ''}>
                {error && touched && !active ? error : label}
            </label>
            <input {...input} type={type} />
        </div>
    )
}

export default Input
