import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Input from '../../common/Input'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

import validate from '../../helpers/validate'

import './index.css'


class FirstPage extends Component {
    render() {

        const { handleSubmit, invalid } = this.props
        
        return (
            <Box header="Signup">
                <ProgressBar progress={invalid ? 0 : 33} />
                <Body>
                    <div className="first">
                        <form onSubmit={handleSubmit}>
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
                        </form>
                    </div>
                </Body>
                <Footer>
                    <div></div>
                    <Link to='/second' className="link">Next &rarr;</Link>
                    {/* {invalid ? '' : <Link to='/second' className="link">Next &rarr;</Link>} */}
                </Footer>
            </Box>
        )
    }
}

export default reduxForm({
    form: 'reactApp',
    destroyOnUnmount: false,
    validate
})(FirstPage)
