import React from 'react'

import './index.css'


const InputDate = ({ input, meta, type, placeholder, min, max }) => {
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
            <label className={meta.error && meta.touched && !meta.active ? 'error lower-label' : ''}>
                {
                    meta.error &&
                    meta.touched &&
                    !meta.active ? meta.error : ''
                }
            </label>
        </div>
    )
}

export default InputDate
