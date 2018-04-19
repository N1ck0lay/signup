import React, { Component } from 'react';

import Box from './common/Box'
import ProgressBar from './common/ProgressBar'
import FirstPage from './components/FirstPage'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Box header="Signup">
          <ProgressBar />
          <FirstPage />
        </Box>
      </div>
    );
  }
}

export default App;
