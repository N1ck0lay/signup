import React, { Component } from 'react'

import './index.css'

class Input extends Component {
    render() {
        const { label, name } = this.props
        return (
            <div className="input">
                <div>
                    <label htmlFor={name}>{label}</label>
                </div>

                <div>
                    <input type="text" name={name} />
                </div>
            </div>
        )
    }
}

export default Input
