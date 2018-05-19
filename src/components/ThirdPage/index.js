import React, { Component } from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

import { store } from '../../redux/reducers'

import moment from 'moment';

import './index.css'


class ThirdPage extends Component {
    render() {

        const storeData = store.getState().form.signup === undefined ?
            {} : store.getState().form.signup.values


        const storeDataString = `${storeData.mm}/${storeData.dd}/${storeData.yyyy}`

        const dateJS = moment(storeDataString).format('X')
        const dateHuman = moment(storeDataString).format('Do MMM YYYY')


        const finish = {
            user_data: {
                email: storeData.email,
                password: storeData.password,
                date_of_birth_js: dateJS,
                date_of_birth_human: dateHuman,
                gender: storeData.gender,
                how_hear_about_us: storeData.selected_answer || null
            }
        }


        let gender = storeData.gender

        const toConsole = () => console.log(JSON.stringify(finish))

        // console.log('storeData', storeData)
        console.log('email', this.props.email)
        return (
            <Box header="Thank you!">
                <ProgressBar progress={100} />
                <Body>
                    <div className="circle animated zoomIn">
                        <div className={gender}></div>
                    </div>
                    <button
                        className="dashboard animated swing"
                        onClick={toConsole}
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

// export default reduxForm({
//     form: 'signup',
//     destroyOnUnmount: false
// })(ThirdPage)

ThirdPage = reduxForm({
    form: 'signup',
    destroyOnUnmount: false
})(ThirdPage)

const selector = formValueSelector('signup')

ThirdPage = connect(state => {
    const email = selector(state, 'email')

    return {
        email
    }
})(ThirdPage)

export default ThirdPage
