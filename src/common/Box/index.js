import React, { Component } from 'react'
import PropTypes from 'prop-types'

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


Box.propTypes = {
    header: PropTypes.string,
    children: PropTypes.node
}


export default Box
