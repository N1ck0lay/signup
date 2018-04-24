import React from 'react'

import './index.css'


const InputDate = ({ meta: { error, touched, active }, input, type, placeholder, min, max }) => {
    return (
        <div className="input">
            <input
                {...input}
                type={type}
                placeholder={placeholder}
                min={min}
                max={max}
                required
            />
            <label className={error && touched && !active ? 'error lower-label' : ''}>
                {
                    error &&
                    touched &&
                    !active ? error : ''
                }
            </label>
        </div>
    )
}

export default InputDate
