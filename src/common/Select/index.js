import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { selectOptions } from '../../helpers/variables'

import './index.css'


const SelectElement = ({ input }) => {
    return (
        <div className="select">
            <select {...input}>
                <option></option>
                {selectOptions.map(value => <option value={value} key={value}>
                    {value}
                </option>
                )}
            </select>
        </div>
    )
}


SelectElement.propTypes = {
    input: PropTypes.object
}


const Select = () => {
    return (
        <div className="select">
            <p className="center">WHERE DID YOU HEAR ABOUT IS?</p>
            <Field name="selected_answer" component={SelectElement} />
        </div>
    )
}


export default Select
