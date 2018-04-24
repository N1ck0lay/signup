import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

import { store } from '../../index'

import './index.css'


class ThirdPage extends Component {
    render() {

        const storeData = store.getState().form.reactApp === undefined ? 
        {} : store.getState().form.reactApp.values


        const finish = {
            user_data: {
                email: storeData.email,
                password: storeData.password,
                date_of_birth: 'date',
                gender: storeData.gender,
                how_hear_about_us: storeData.selected_answer || null
            }
        }


        const showResult = () => {
            console.log(JSON.stringify(finish))
        }


        let gender = storeData.gender

        console.log('storeData', storeData)
        return (
            <Box header="Thank you!">
                <ProgressBar progress={100} />
                <Body>
                    <div className="circle">
                        <div className={gender}></div>
                    </div>
                    <button className="dashboard" onClick={showResult}>Go to Dashboard ➡</button>
                </Body>
                <Footer>
                    <Link to='/second' className="link link-silver">Back</Link>
                    <div></div>
                </Footer>
            </Box>
        )
    }
}

export default reduxForm({
    form: 'reactApp',
    destroyOnUnmount: false
})(ThirdPage)
