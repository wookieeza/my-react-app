import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Foo from './enzyme/foo-example/Foo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Foo one="Bono" two="Edge" />
      </div>
    );
  }
}

export default App;
