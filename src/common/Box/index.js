import React, { Component } from 'react'

import './index.css'


class Box extends Component {
    render() {
        const { header, children } = this.props
        return (
            <div className="box">
                <h2>{header}</h2>
                <div>
                {children}
                </div>
            </div>
        )
    }
}

export default Box
