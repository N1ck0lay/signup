import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Input from '../../common/Input'
import InputDate from '../../common/InputDate'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

import validate from '../../helpers/validate'

import './index.css'


// const toggleClass = (i) => {

//     const menu = document.querySelectorAll('.label-gender');

//     for (let cnt = 0; cnt < menu.length; cnt++) {
//       menu[cnt].classList.remove('active');
//       menu[cnt].classList.remove('active-first');
//       menu[cnt].classList.remove('active-third');
//     }

//     switch (i) {
//       case 0:
//         menu[i].classList.add('active-first');
//         break;
//       case 1:
//         menu[i].classList.add('active');
//         break;
//       case 2:
//         menu[i].classList.add('active-third');
//     }

// }

const toggleClass = (i) => {

    const menu = document.querySelectorAll('.gender');

    for (let cnt = 0; cnt < menu.length; cnt++) {
      menu[cnt].classList.remove('active');
      menu[cnt].classList.remove('active');
      menu[cnt].classList.remove('active');
    }

    switch (i) {
      case 0:
        menu[i].classList.add('active');
        break;
      case 1:
        menu[i].classList.add('active');
        break;
      case 2:
        menu[i].classList.add('active');
    }

}

const genderError = ({ meta: { touched, error } }) => {
    return touched && error ? <p className="error">{error}</p> : <p>GENDER</p>
}
  

class SecondPage extends Component {

    render() {

        const date = new Date();
        const yearNow = date.getFullYear();

        const { handleSubmit, invalid } = this.props

        return (
            <Box header="Signup">
                <ProgressBar progress={66} />
                <Body>
                    <form onSubmit={handleSubmit}>

                        <div className="second">
                            <div className="center">DATE OF BIRTH</div>
                            <div className="flex-container">
                                <Field
                                    name="dd"
                                    type="number"
                                    min="1"
                                    max="31"
                                    placeholder="DD"
                                    component={InputDate}
                                />

                                <Field
                                    name="mm"
                                    type="number"
                                    min="1"
                                    max="12"
                                    placeholder="MM"
                                    component={InputDate}
                                />

                                <Field
                                    name="yyyy"
                                    type="number"
                                    min="1900"
                                    max={yearNow}
                                    placeholder="YYYY"
                                    component={InputDate}
                                />
                            </div>



                            <div>
                                <label className="center">
                                    <Field name="sex" component={genderError}/>
                                </label>

                                <div className="flex-container">
                                    <label className="gender" onClick={() => toggleClass(0)}>
                                        <Field name="sex" component="input" type="radio" value="male" />
                                        {' '}
                                        Male
                                    </label>
                                    <label className="gender label-gender-second" onClick={() => toggleClass(1)}>
                                        <Field name="sex" component="input" type="radio" value="female" />
                                        {' '}
                                        Female
                                    </label>
                                    <label className="gender label-gender-third" onClick={() => toggleClass(2)}>
                                        <Field name="sex" component="input" type="radio" value="unspecified" />
                                        {' '}
                                        Unspecified
                                    </label>
                                </div>
                            </div>

                        </div>

                    </form>
                </Body>
                <Footer>
                    <Link to='/' className="link link-silver">Back</Link>
                    <Link to='/third' className="link">Next &rarr;</Link>
                </Footer>
            </Box>
        )
    }
}

export default reduxForm({
    form: 'form',
    destroyOnUnmount: false,
    validate
})(SecondPage)
