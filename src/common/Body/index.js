import React, { Component } from 'react'

import './index.css'


class Body extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="body">
                {children}
            </div>
        )
    }
}

export default Body
