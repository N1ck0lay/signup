import React from 'react'
import PropTypes from 'prop-types'

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


Input.propTypes = {
    meta: PropTypes.any,
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string
}


export default Input
