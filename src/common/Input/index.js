import React, { Component } from 'react'

import './index.css'

// class Input extends Component {
//     render() {
//         const { label, name } = this.props
//         return (
//             <div className="input">
//                 <div>
//                     <label htmlFor={name}>{label}</label>
//                 </div>

//                 <div>
//                     <input type="text" name={name} />
//                 </div>
//             </div>
//         )
//     }
// }

const Input = ({ input, meta, label, type, placeholder }) => {
    // console.log('meta', meta)
    return (
        <div className="input">
            <label className={meta.error && meta.touched && !meta.active ? 'error' : ''}>
                {
                    meta.error &&
                    meta.touched &&
                    !meta.active ? meta.error : label
                }
            </label>
            <input {...input} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input
