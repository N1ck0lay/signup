import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Box from './common/Box'
import ProgressBar from './common/ProgressBar'
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={FirstPage} />
          <Route path='/second' component={SecondPage} />
          <Route path='/third' component={ThirdPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
