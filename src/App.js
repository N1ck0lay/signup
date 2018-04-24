import React, { Component } from 'react';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import Page404 from './components/404'

import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <MemoryRouter>
                    <Switch>
                        <Route exact path='/' component={FirstPage} />
                        <Route path='/second' component={SecondPage} />
                        <Route path='/third' component={ThirdPage} />
                        <Route path='/404' component={Page404} />
                        <Redirect to="/404" />
                    </Switch>
                </MemoryRouter>
            </div>
        )
    }
}

export default connect()(App)
