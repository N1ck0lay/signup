import React from 'react'
import PropTypes from 'prop-types'

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

InputDate.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    min: PropTypes.node,
    max: PropTypes.node
}


export default InputDate
