import React, { Component } from 'react'

import Input from '../../common/Input'
import Body from '../../common/Body'
import Footer from '../../common/Footer'

// import './index.css'

class FirstPage extends Component {
    render() {
        return (
            <div>
                <Body>
                    <form>
                        <Input label="email" name="email" />
                        <Input label="password" name="password" />
                        <Input label="confirm password" name="password2" />
                    </form>
                </Body>
                <Footer>
                    <button>Back</button>
                    <button>Next</button>
                </Footer>
            </div>

        )
    }
}

export default FirstPage
