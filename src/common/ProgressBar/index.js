import React, { Component } from 'react'
import './index.css'


class ProgressBar extends Component {
    render() {
        const { progress } = this.props
        return (
            <div className="bar">
               <div className="progress" style={{ width: `${progress}%`}}></div>
               {/* <div className="progress"></div>  */}
            </div>
        )
    }
}

export default ProgressBar
