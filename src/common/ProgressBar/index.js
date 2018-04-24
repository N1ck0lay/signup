import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'


class ProgressBar extends Component {
    render() {
        const { progress } = this.props
        return (
            <div className="bar">
               <div className="progress" style={{ width: `${progress}%`}}></div>
            </div>
        )
    }
}


ProgressBar.propTypes = {
    progress: PropTypes.node
}


export default ProgressBar
