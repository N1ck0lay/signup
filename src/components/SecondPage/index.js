import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

// import './index.css'


class SecondPage extends Component {
    render() {
        console.log('haha', this.props.zzz)
        return (
            <Box header="Signup">
                <ProgressBar progress={66} />
                <Body>
                    <div>date of birth</div>
                    <div>gender</div>
                    <div>where did you hear about us</div>
                </Body>
                <Footer>
                <Link to='/'>Back</Link>
                <Link to='/third'>Next</Link>
                </Footer>
            </Box>
        )
    }
}

export default connect(
    state => ({
        zzz: state
    })
)(SecondPage)
