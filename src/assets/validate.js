const validate = values => {
    const errors = {}
    const mailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


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
        errors.password2 = `passwords doesn't match`
    }

    return errors
}


export default validate
