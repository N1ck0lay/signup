import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
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

        const storeData = store.getState().form.reactApp === undefined ?
        {} : store.getState().form.reactApp.values


        let dateString = moment(`${storeData.yyyy}-${storeData.mm}-${storeData.dd}`)
        let isValideDate = moment(dateString).isValid();

        console.log('isValideDate', isValideDate)


        // const date_of_birth2 = moment(`${storeData.dd}/${storeData.mm}/${storeData.yyyy}`).format('X')
        
        let a = moment(`${storeData.mm}/${storeData.dd}/${storeData.yyyy}`)

        // console.log('a', a)

        a.format()

        // console.log('a.format', a)
        let date_of_birth2 = a.isValid()
        
        let tempData
        if (date_of_birth2) {
            tempData = a.format('X')
        } else {
            tempData = "Invalid date"
        }
        
        // console.log('date_of_birth2', date_of_birth2)
        const finish = {
            user_data: {
                email: storeData.email,
                password: storeData.password,
                date_of_birth: tempData,
                gender: storeData.gender,
                how_hear_about_us: storeData.selected_answer || null
            }
        }


        // const finish = {
        //     user_data: {
        //         email: storeData.email,
        //         password: storeData.password,
        //         date_of_birth: `${storeData.dd}/${storeData.mm}/${storeData.yyyy}`,
        //         gender: storeData.gender,
        //         how_hear_about_us: storeData.selected_answer || null
        //     }
        // }


        let gender = storeData.gender

        console.log('storeData', storeData)
        return (
            <Box header="Thank you!">
                <ProgressBar progress={100} />
                <Body>
                    <div className="circle animated zoomIn">
                        <div className={gender}></div>
                    </div>
                    <button
                        className="dashboard animated swing"
                        onClick={() => console.log(JSON.stringify(finish))}
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

export default reduxForm({
    form: 'reactApp',
    destroyOnUnmount: false
})(ThirdPage)
