import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

// import './index.css'


class ThirdPage extends Component {
    render() {
        return (
            <Box header="Thank you!">
                <ProgressBar progress={100} />
                <Body>
                    <h1>Thanks</h1>
                    <button>Go to Dashboard</button>
                </Body>
                <Footer>
                <Link to='/second'>Back</Link>
                <div></div>
                </Footer>
            </Box>
        )
    }
}

export default ThirdPage
