import React from 'react'
import { Field } from 'redux-form';

import './index.css'


const selectOptions = ['From Google', 'From Facebook', 'From Alians :-)'];

const SelectElement = ({ input }) => (
    <div className="select">
        <select {...input}>
            <option></option>
            {selectOptions.map(value => <option value={value} key={value}>
                {value}
            </option>
            )}
        </select>
    </div>
);


const Select = () => {
    return (
        <div className="select">
            <p className="center">WHERE DID YOU HEAR ABOUT IS?</p>
            <Field name="selected_answer" component={SelectElement} />
        </div>
    )
}


export default Select
