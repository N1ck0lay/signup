import React from 'react'
import { Field } from 'redux-form'

import Input from '../Input'

const Login = () => {
    return (
        <div>

            <Field
                name="email"
                label="email"
                type="email"
                component={Input}
            />

            <Field
                name="password"
                label="password"
                type="password"
                component={Input}
            />

            <Field
                name="password2"
                label="confirm password"
                type="password"
                component={Input}
            />
            
        </div>
    )
}


export default Login
