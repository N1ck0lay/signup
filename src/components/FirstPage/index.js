import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Input from '../../common/Input'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

import './index.css'

const validate = values => {
    const errors = {}
    const mailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if (!values.email) {
        errors.email = 'email is required'
    } else if (!values.email.match(mailRegEx)) {
        errors.email = 'invalid email'
    }


    if (!values.password) {
        errors.password = 'password is required'
    } else if (values.password.length < 6) {
        errors.password = 'password must be 6 chars or more'
    }


    if (!values.password2) {
        errors.password2 = 'confirm password'
    } else if (values.password !== values.password2) {
        errors.password2 = `passwords doesn't match`
    }

    return errors
}


class FirstPage extends Component {
    render() {
        return (
            <Box header="Signup">
                <ProgressBar progress={33} />
                <Body>
                    <div className="first">



                        <form onSubmit={this.props.handleSubmit}>

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



                            <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                                <Link to='/second'>Next</Link>
                            </button>
                            <button type="submit" disabled={this.props.pristine || this.props.submitting}>OKAY</button>
                        </form>


                    </div>
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
