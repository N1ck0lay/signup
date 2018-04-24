import React from 'react'
import { Field } from 'redux-form'

import InputDate from '../InputDate'


const date = new Date();
const currentYear = date.getFullYear();


const BirthDate = () => {
    return (
        <div>
            <p className="center">DATE OF BIRTH</p>
            <div className="flex-container">
                <Field
                    name="dd"
                    type="number"
                    min="1"
                    max="31"
                    placeholder="DD"
                    component={InputDate}
                />

                <Field
                    name="mm"
                    type="number"
                    min="1"
                    max="12"
                    placeholder="MM"
                    component={InputDate}
                />

                <Field
                    name="yyyy"
                    type="number"
                    min="1900"
                    max={currentYear}
                    placeholder="YYYY"
                    component={InputDate}
                />
            </div>
        </div>
    )
}

export default BirthDate
