import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'


class Footer extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="footer">
                {children}
            </div>
        )
    }
}


Footer.propTypes = {
    children: PropTypes.node
}


export default Footer
