import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
// import Input from '../../common/Input'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

// import './index.css'

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'email is required'
    }

    if (!values.password) {
        errors.password = 'password is required'
    }

    if (!values.password2) {
        errors.password2 = 'password2 is required'
    }
    return errors
}

const customInput = ({ input, meta, label }) => {
    return (
        <div>
            <label>{label}</label>
            <br />
            <input {...input} />
            {meta.error && <span>{meta.error}</span> }
        </div>
    )
}


class FirstPage extends Component {
    render() {

        // const customInput = ({ input, meta }) => {
        //     return (
        //         <div>
        //             <label htmlFor="">email</label>
        //             <input {...input} />
        //         </div>
        //     )
        // }

        return (
            <Box header="Signup">
                <ProgressBar progress={33} />
                <Body>
                    <form>
                        {/* <div>
                            <label htmlFor="">email</label>
                            <Field name="email" component="input" />
                        </div> */}


                        <Field name="email" label="email" component={customInput} />

                        <Field name="password" label="password" component={customInput} />

                        <Field name="password2" label="conf password" component={customInput} />

                        {/* <div>
                            <label htmlFor="">confirm password</label>
                            <Field name="password2" component="input" type="password" />
                        </div> */}

                        <button onClick={(e) => e.preventDefault()}>OKAY</button>
                    </form>

                    {/* <form>
                        <Input label="email" name="email" />
                        <Input label="password" name="password" />
                        <Input label="confirm password" name="password2" />
                    </form> */}

                </Body>
                <Footer>
                    <div></div>
                    <Link to='/second'>Next</Link>
                </Footer>
            </Box>
        )
    }
}

export default reduxForm({
    form: 'signupForm',
    destroyOnUnmount: false,
    validate
})(FirstPage)
