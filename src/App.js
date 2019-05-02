import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonExample from './examples/MaterialUI'
import LogIn from './users/Login'
import DashBoard from './users/DashBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <DashBoard />
      </div>
    );
  }
}

export default App;
