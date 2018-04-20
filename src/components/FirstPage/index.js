import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Input from '../../common/Input'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

// import './index.css'

class FirstPage extends Component {
    render() {
        return (
            <Box header="Signup">
                <ProgressBar progress={33} />
                <Body>
                    <form>
                        <Input label="email" name="email" />
                        <Input label="password" name="password" />
                        <Input label="confirm password" name="password2" />
                    </form>
                </Body>
                <Footer>
                    <div></div>
                    <Link to='/second'>Next</Link>
                </Footer>
            </Box>
        )
    }
}

export default FirstPage
