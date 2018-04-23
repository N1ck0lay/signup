import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Input from '../../common/Input'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

import './index.css'


class SecondPage extends Component {
    render() {
        return (
            <Box header="Signup">
                <ProgressBar progress={66} />
                <Body>
                    <form>

                        <div className="second">
                            <div className="center">DATE OF BIRTH</div>
                            <div className="flex-container">
                                <Field
                                    name="dd"
                                    type="number"
                                    placeholder="DD"
                                    component={Input}
                                />

                                <Field
                                    name="mm"
                                    type="date"
                                    placeholder="MM"
                                    component={Input}
                                />

                                <Field
                                    name="yy"
                                    type="number"
                                    placeholder="YYYY"
                                    component={Input}
                                />
                            </div>

                            <div className="center">DATE OF BIRTH</div>
                            <div className="flex-container" style={{ textAlign: 'center', alignItems: 'center' }}>
                                <div style={{ width: '33%', height: 30, border: '1px solid silver'}}>Female</div>
                                <div style={{ width: '33%', height: 30, border: '1px solid silver'}}>Unspecified</div>
                                <div style={{ width: '33%', height: 30, border: '1px solid silver'}}>Male</div>
                                <input type="number" placeholder="DD" min="1" max="31"/>
                            </div>

                        </div>

                    </form>
                </Body>
                <Footer>
                    <Link to='/'>Back</Link>
                    <Link to='/third'>Next</Link>
                </Footer>
            </Box>
        )
    }
}

export default reduxForm({
    form: 'signupForm',
    destroyOnUnmount: false,
})(SecondPage)
