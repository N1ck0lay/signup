import React from 'react'
import { Field } from 'redux-form'

import './index.css'


const toggleClass = (i) => {

    const menu = document.querySelectorAll('.gender');

    for (let cnt = 0; cnt < menu.length; cnt++) {
        menu[cnt].classList.remove('active')
    }

    switch (i) {
        case 0:
            menu[i].classList.add('active')
            break
        case 1:
            menu[i].classList.add('active')
            break
        case 2:
            menu[i].classList.add('active')
            break
        default:
            return
    }

}


const genderError = ({ meta: { touched, error } }) => {
    return touched && error ? <p className="error">{error}</p> : <p>GENDER</p>
}


const Gender = () => {
    return (
        <div>

            <label className="center">
                <Field name="gender" component={genderError} />
            </label>

            <div className="flex-container">
                <label className="gender" onClick={() => toggleClass(0)}>
                    <Field name="gender" component="input" type="radio" value="male" />
                    {' '}
                    Male
                </label>
                <label className="gender" onClick={() => toggleClass(1)}>
                    <Field name="gender" component="input" type="radio" value="female" />
                    {' '}
                    Female
                </label>
                <label className="gender" onClick={() => toggleClass(2)}>
                    <Field name="gender" component="input" type="radio" value="unspecified" />
                    {' '}
                    Unspecified
                </label>
            </div>

        </div>
    )
}


export default Gender
