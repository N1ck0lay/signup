import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import './index.css'


const genderError = ({ meta: { touched, error } }) => {
    return touched && error ? <p className="error">{error}</p> : <p>GENDER</p>
}


genderError.propTypes = {
    meta: PropTypes.any
}


const Gender = () => {
    return (
        <div className="gender-container">

            <label className="center">
                <Field name="gender" component={genderError} />
            </label>

            <div className="flex-container">
                <Field name="gender" component="input" type="radio" value="male" id="1" />
                <label className="gender-label" htmlFor="1">Male</label>

                <Field name="gender" component="input" type="radio" value="female" id="2" />
                <label className="gender-label" htmlFor="2">Female</label>

                <Field name="gender" component="input" type="radio" value="unspecified" id="3" />
                <label className="gender-label" htmlFor="3">Unspecified</label>
            </div>

        </div>
    )
}


export default Gender
