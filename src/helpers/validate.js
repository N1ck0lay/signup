import moment from 'moment'

import { currentYear, mailRegExp } from './variables'


const validate = values => {
    const errors = {}
    const dateFormat = `${values.dd}-${values.mm}-${values.yyyy}`


    const userDateInput = new Date(dateFormat)
    let isAdult = moment().diff(userDateInput, 'years', false)
    // console.log('isAdult', isAdult)


    let dateString = moment(dateFormat, 'DD-MM-YYYY')
    let isValideDate = moment(dateString).isValid()
    // console.log('isValideDate', isValideDate)


    // first page validation
    if (!values.email) {
        errors.email = 'email is required'
    } else if (!values.email.match(mailRegExp)) {
        errors.email = 'invalid email'
    }


    if (!values.password) {
        errors.password = 'password is required (min 6 chars)'
    } else if (values.password.length < 6) {
        errors.password = 'password must be 6 chars or more'
    }


    if (!values.password2) {
        errors.password2 = 'confirm password'
    } else if (values.password !== values.password2) {
        errors.password2 = "passwords doesn't match"
    }




    // second page validation
    if (!values.dd) {
        errors.dd = 'required'
    } else if (values.dd < 1 || values.dd > 31) {
        errors.dd = 'must be between 1 and 31'
    }


    if (!values.mm) {
        errors.mm = 'required'
    } else if (values.mm < 1 || values.mm > 12) {
        errors.mm = 'must be between 1 and 12'
    } else if (values.mm.length < 2) {
        values.mm = `0${values.mm}`
    }


    if (!values.yyyy) {
        errors.yyyy = 'required'
    } else if (values.yyyy < 1900 || values.yyyy > currentYear) {
        errors.yyyy = 'invalid year'
    } else if (parseInt(isAdult, 10) < 18) {
        errors.yyyy = 'must be 18 y.o. or more'
    } else if (!isValideDate) {
        errors.yyyy = 'incorrect date'
    }


    if (!values.gender) {
        errors.gender = 'choose your gender'
    }


    return errors
}


export default validate
