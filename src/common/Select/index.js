import React from 'react'
import { Field } from 'redux-form';

import './index.css'


const optionsArray = ['From Google', 'From Facebook', 'From Alians'];

const SelectElement = ({ meta: { touched, error }, input }) => (
    <div className="select">
        <select {...input}>
            <option></option>
            {optionsArray.map(value => <option value={value} key={value}>{value}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
);


const Select = () => {
    return (
        <div className="select">
            <p className="center">WHERE DID U HEAR ABOUT US?</p>
            <Field name="selected_answer" component={SelectElement} />
        </div>
    )
}


// const Select = () => {
//     return (
//         <div className="select">
//             <p className="center">WHERE DID U HEAR ABOUT US?</p>
//             <select name="questions" form="questions">
//                 <option></option>
//                 <option value="boy">From a boy</option>
//                 <option value="girl">From a girl</option>
//                 <option value="alians">From alians :-)</option>
//             </select>
//         </div>
//     )
// }


export default Select