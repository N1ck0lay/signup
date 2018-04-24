import React from 'react'

import './index.css'


const Input = ({ input, meta, label, type }) => {
    return (
        <div className="input">
            <label className={meta.error && meta.touched && !meta.active ? 'error' : ''}>
                {
                    meta.error &&
                    meta.touched &&
                    !meta.active ? meta.error : label
                }
            </label>
            <input
                {...input}
                type={type}
            />
        </div>
    )
}

export default Input
