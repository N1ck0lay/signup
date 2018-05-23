import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Login from '../../common/Login'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

import validate from '../../helpers/validate'

import './index.css'


class FirstPage extends Component {
    render() {

        const { invalid, handleSubmit } = this.props

        return (
            <Box header="Signup">

                <ProgressBar progress={invalid ? 0 : 33} />

                <Body>
                    <div className="first">
                        <form onSubmit={handleSubmit}>
                            <Login />
                        </form>
                    </div>
                </Body>

                <Footer>
                    <div></div>
                    {/* <Link to='/second' className="link animated tada">Next ➡</Link> */}
                    {invalid ? '' : <Link to='/second' className="link animated tada">Next ➡</Link>}
                </Footer>

            </Box>
        )
    }
}


FirstPage.propTypes = {
    invalid: PropTypes.bool,
    handleSubmit: PropTypes.func
}


export default reduxForm({
    form: 'signup',
    destroyOnUnmount: false,
    validate
})(FirstPage)
