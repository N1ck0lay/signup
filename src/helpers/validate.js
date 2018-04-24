import moment from 'moment';


const validate = values => {
    const errors = {}
    const mailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    // first page validation
    if (!values.email) {
        errors.email = 'email is required'
    } else if (!values.email.match(mailRegEx)) {
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
        errors.dd = 'required';
    } else if (values.dd < 1 || values.dd > 31) {
        errors.dd = 'must be between 1 and 31'
    }


    if (!values.mm) {
        errors.mm = 'required';
    } else if (values.mm < 1 || values.mm > 12) {
        errors.mm = 'must be between 1 and 12'
    }


    if (!values.yyyy) {
        errors.yyyy = 'required'
    } else if (values.yyyy < 1900 || values.yyyy > 2018) {
        errors.yyyy = 'invalid year'
    } else {
        const userDateInput = new Date(`${values.yyyy}-${values.mm}-${values.dd}`)
        console.log('Is valid?', moment(userDateInput).isValid())
        const isAdult = moment(userDateInput, "YYYYMMDD").fromNow().split(' ')[0]
        if (parseInt(isAdult, 10) < 18) {
            errors.yyyy = 'must be 18 y.o. or more'
        }
    }


    if (!values.gender) {
        errors.gender = 'choose your gender'
    }

    // console.log('values', { "year": Number(values.yyyy), "month": Number(values.mm) - 1, "day": Number(values.dd) })
    // const userAge = new Date(values.yyyy, values.mm - 1, values.dd)
    // console.log('age', userAge)
    // let d = new Date()
    // let z = d - userAge
    // console.log('z', z)

    // // var time = new Date().getTime();
    // var date = new Date(z);
    // console.log(date.toString());

    return errors
}


export default validate
