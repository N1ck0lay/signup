import React, { Component } from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

import './index.css'


class ThirdPage extends Component {

    // this component made with new syntax, without "constructor/super"

    valuesToConsole = this.valuesToConsole.bind(this)

    valuesToConsole() {
        const {
            email,
            password,
            dd,
            mm,
            yyyy,
            gender,
            selected_answer
        } = this.props.formValues

        const storeDataString = `${mm}-${dd}-${yyyy}`

        const dateJS = moment(storeDataString).format('X')
        const dateHuman = moment(storeDataString).format('Do-MMM-YYYY')

        const consoleData = {
            user_data: {
                email,
                password,
                date_of_birth_js: dateJS,
                date_of_birth_human: dateHuman,
                gender,
                how_hear_about_us: selected_answer || null
            }
        }

        console.log(JSON.stringify(consoleData))
    }

    render() {

        // we can access redux state in this way, but it's incorrect :)
        // const storeData = store.getState().form.signup

        const { gender } = this.props.formValues

        return (
            <Box header="Thank you!">
                <ProgressBar progress={100} />
                <Body>
                    <div className="circle animated zoomIn">
                        <div className={gender}></div>
                    </div>
                    <button
                        className="dashboard animated swing"
                        onClick={this.valuesToConsole}
                    >
                        Go to Dashboard ➡
                    </button>
                </Body>
                <Footer>
                    <Link to='/second' className="link link-silver animated tada">Back</Link>
                    <div></div>
                </Footer>
            </Box>
        )
    }
}

ThirdPage = reduxForm({
    form: 'signup',
    destroyOnUnmount: false
})(ThirdPage)

const selector = formValueSelector('signup')

ThirdPage = connect(state => ({
    formValues: selector(state, 'email', 'password', 'dd', 'mm', 'yyyy', 'gender', 'selected_answer')
}))(ThirdPage)

export default ThirdPage
