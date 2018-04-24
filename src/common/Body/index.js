import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'


class Body extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="body animated fadeIn">
                {children}
            </div>
        )
    }
}


Body.propTypes = {
    children: PropTypes.node
}


export default Body
